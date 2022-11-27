---
sidebar_position: 2
title: Qoda Protocol Mechanics
---

# Qoda Whitepaper

---

## 2.0 Qoda Protocol Mechanics

At its heart, Qoda uses an on-chain orderbook mechanism of orders expressing desire to borrow or lend crypto assets at fixed interest rates for fixed periods. It is implemented similar to a futures exchange with a set maturity date and the quoted figure is the APR of the loan.

## 2.1 Quotes

The `Quote` is Qoda’s analogue to the limit order in an orderbook. Users can publish `Quotes` into the platform, indicating whether they are a borrower or lender, what rate they wish to deal at, for what size, and at which maturity date. Alternatively, they can lend or borrow against existing `Quotes` in the orderbook.

The basic structure of a `Quote` looks like this:

```
Quote {
  address quoter;  // Wallet address of the quoter
  uint8 quoteType;  // 0 for PV+APR, 1 for FV+APR
  uint64 APR; // Equivalent yearly simple interest on PV
  uint cashflow;  // Total Quote size in PV if quoteType=0, FV if quoteType=1
  uint filled; // Amount filled in PV in PV if quoteType=0, FV if quoteType=1
}
```

Given two of the following fields, one can always calculate the third: `Present Value` (PV), `Future Value` (FV), and `Annual Percentage Rate` (APR). In a `Quote`, the user is required to input the `APR` and a `cashflow` value, which can either represent the PV or the FV. This is determined by the `quoteType` field. This way, the `Quoter` is always able to input his desired size conveniently either in terms of the present value or the future value. `APR` is a required field so that the equivalent rate always stays constant over time.

## 2.2 Assets

Each ERC20 token supported by Qoda is mapped one-to-one to an `Asset`. The `Asset` struct has the following fields:

```
Asset {
  bool isEnabled; // Must be true for the Asset to be enabled
  bool isYieldBearing; // True if token bears interest (e.g. aToken, cToken, mToken, etc)
  address underlying; // Address of the underlying token
  address oracleFeed, // Address of the associated Chainlink oracle price feed
  uint collateralFactor, // Value between 0 – 1, used to discount the value of the
                         // collateral provided by a borrower
  uint marketFactor, // Value between 0 - 1, used to apply a premium on the value of
                     // assets borrowed
  uint[] maturities // A list of all the enabled maturity dates for this Asset
}
```

An `Asset` must be enabled before it can be used as collateral or enabled as a lending/borrowing `market`. By default, Qoda can support both underlying ERC20 tokens as well as yield-bearing tokens used by `Money Market v1.0 Protocols` (typically used for collateral to generate passive interest on deposits). For more information on collateral, see `Collateral Management` (section 2.5).

## 2.3 Maturities

Maturities are UNIX timestamps that represent the settlement date of loans. Maturity dates must be explicitly enabled on the platform before it becomes a valid date. Qoda uses a futures style expiry with discrete monthly maturity dates (e.g. MAR22, JUN22, SEP22, DEC22, etc). The exact maturity by convention is defined to be on the *last weekday of the month at 4:00pm GMT*.

## 2.4 Markets

Every lending/borrowing market on Qoda is represented by a `FixedRateMarket` smart contract. Each `FixedRateMarket` contract consists of two unique parameters: 1) `underlyingToken`, the underlying ERC20 token which the loans will be denominated in, and 2) `maturity`, the UNIX timestamp representing the expiry and settlement date of the loan.

Each `FixedRateMarket` is itself an instance of ERC20 where the token represents claims on future cash flow. The symbol for the `FixedRateMarket` token takes the form `q[SYM][MMM][YY]`, (e.g. qUSDCSEP22, qBTCDEC22, etc). In general, we will refer to them as `qTokens`. For example:

> *A user lends 100 GLMR at all-in fixed rate of 10%, expiring on 31 March, 2022. When the transaction is executed, the system will mint 110 `qGLMRMAR22` tokens to the user. Upon the expiry of the contract on 31st March 4:00pm GMT, the 110 `qGLMRMAR22` tokens will be redeemable for the underlying 110 GLMR tokens at a 1:1 rate.*

The advantage of `qTokens` is that it allows for greater capital allocation efficiency. While the user can simply hold onto them, the `qTokens` themselves hold value and can potentially be traded in secondary markets, staked in yield farms, used as collateral itself in other protocols, etc.

Note that a user may not have an outstanding debt and hold `qTokens` at the same time. Every `FixedRateMarket` also maintains a mapping of `accountBorrows` in storage for how much each user has borrowed in total. If a user with an outstanding loan is given `qTokens`, the balance of the loan will be deducted first – the user will only receive `qTokens` that are in excess of their current borrows. Similarly, if a user with outstanding borrows in a `FixedRateMarket` subsequently lends into the `FixedRateMarket`, the balance of the loan will be deducted first and they will only be minted new `qTokens` in excess of their current borrows.

## 2.5 Collateral Management

By default, borrowers must fund their account with collateral denominated in Qoda-enabled `Assets` (section 2.3) before they may take on a loan. An account in danger of undercollateralization is subject to liquidations as described in section 2.7. An important exception to this is undercollateralized borrowers granted a `Credit  Facility` (section 2.6). 

The overall `accountHealth` of an account depends on two components:

1. `virtualCollateralValue` The sum of all the collateral deposited by an account across all `Assets`. Its value is expressed in USD terms using Chainlink price feeds, calculated as:


<center>
  <img src="/img/whitepaper/qoda-protocol/eq1_alt.png"></img>
</center>


where `collateralFactor` is a parametrized value from 0.0 to 1.0 based on the `Asset` and is used to discount the value of the collateral. The value will be higher for safer `Assets`, and lower for riskier `Assets`. Note this means that the `virtualCollateralValue` of an account will always be lower than the actual market value (or `realCollateralValue`) of the underlying tokens.

2. `virtualBorrowValue` The sum of all the net borrows of an account across all `FixedRateMarkets`. This is calculated as:


<center>
  <img src="/img/whitepaper/qoda-protocol/eq2_alt.png"></img>
</center>


The amount a user has borrowed and lent in a single `FixedRateMarket` are allowed to be netted against one another, up to the size of `lendAmt`. This mechanism allows users to exit out of borrow/lend positions early, rather than having to hold onto it until maturity. This also means if a user has lent into a `FixedRateMarket`, they can also borrow up to the same amount without having to put up any extra collateral, as long as they are borrowing within the same `FixedRateMarket`. In practice, the `lendAmt` in a particular `FixedRateMarket` by a user is indicated by the amount of `qTokens` corresponding to the `FixedRateMarket` that the account owns. Note that the `borrowAmt` and `lendAmt` refers to the full principal plus interest amounts (i.e. Future Value, FV), not just the principal amount upon inception of the loan (i.e. Present Value, PV).

Similar to the `collateralFactor`, the `marketFactor` is a parametrized value from 0.0 to 1.0 based on the Asset, which is used to give a premium on the value of the user’s loans. The value will be higher for safer `FixedRateMarkets`, and lower for more volatile `FixedRateMarkets`. Therefore, the `virtualCollateralValue` of an account will always be valued at a premium compared to the actual market value (or `realBorrowValue`) of its underlying token.

NOTE: In practice, Qoda implements the isolation of `Collateral-Tier Assets` (`Assets` which can be used as collateral), and `Market-Tier Assets` (`Assets` which can be used in a lending/borrowing market) via `collateralFactor` and `marketFactor`. A `Collateral-Tier Asset` has non-zero `collateralFactor`, while a `Market-Tier Asset` which may not be used as collateral has a non-zero `marketFactor` but has `collateralFactor` of zero.

Finally, the `accountHealth` of an account is calculated as:


<center>
  <img src="/img/whitepaper/qoda-protocol/eq3.png"></img>
</center>


The account is considered properly collateralized as long as the `accountHealth` ratio remains above 1. By default, any account that falls below this ratio will be subject to liquidation. The exception to this are accounts that have been granted a `Credit Facility`, where the minimum `accountHealth` ratio before the account can be liquidated is custom-defined by the facility (see section 2.6).

## 2.6 Credit Facility

Qoda supports both overcollateralized and undercollateralized borrowers. By default, all borrowers must be overcollateralized. However, verified institutional borrowers can apply to be risk assessed and granted a `Credit Facility` on a case-by-case basis to borrow undercollateralized. A `Credit Facility` is a struct with the following components:

```
CreditFacility {
  uint initCollateralRatio; // The initial collateral ratio the account must maintain when   
                            // opening a new loan
  uint minCollateralRatio; // The minimum collateral ratio before the account is 
                           // subject to liquidation
  uint creditLimit; // The maximum value in USD of the credit facility 
}
```

Any `Credit Facility` granted account may continue to take loans beyond the `creditLimit`. However, beyond that point it will be treated as a regular account subject to the default overcollateralization rules.

## 2.7 Liquidations

When an account’s `collateralRatio` falls below the minimum requirement or if it is late in its repayments, it is subject to liquidations. In this scenario, a third-party, called the `liquidator`, can repay a portion of the loan amount on behalf of the borrower. The equivalent USD value of the borrower’s collateral plus a parameterized percentage of the value, called the `liquidationIncentive` will be released to the `liquidator` as an economic incentive for maintaining the collateral health of the system as a whole. The onus will be on the `liquidator` to swap the received collateral back to the currency of the loan if they wish to crystallize their profits. 

## 2.8 Settlement of Loans

Borrowers may repay their borrows for any `FixedRateMarket` at any time before its maturity date. In order to encourage timely repayment of borrows, any account that has not paid after the maturity date is subject to the same liquidation procedures, along with its associated liquidation penalties, as described in section 2.7, even if the account is properly collateralized. The repayments are held in escrow inside the `FixedRateMarket` contract until after the maturity date to be redeemed by lenders.

After the maturity date has passed, there is a `maturityGracePeriod` where no more actions can be taken in the `FixedRateMarket`, which is a grace period (currently set to 8 hours as of Oct 14, 2022) to be used by borrowers to repay their loans or liquidators to liquidate the loans.

After the `maturityGracePeriod` has passed, lenders may redeem their `qTokens` for the underlying token at a 1:1 ratio.

## 2.9 Repayment Redemption Ratio (RRR)

Since Qoda has both overcollateralized and undercollateralized borrowers via the `Credit Facility`, there is a conceivable risk that borrowers default and there are not enough tokens to repay all lenders. 

How will redemptions for lenders work in the case of bad debt? In traditional finance, this situation typically triggers a bank run, where lenders all try to redeem at the same time. The first few lucky lenders to redeem can receive 100% of funds, while the late redeemers receive 0%.

Qoda implements a `Repayment Redemption Ratio` (`RRR`) mechanism. The repayment ratio, which is the real-time ratio of total amount that borrowers have repaid divided by the total amount that lenders are owed, is displayed transparently by the protocol at all times. In the event of a borrower default, losses are socialized among lenders to ensure fairness to all users.

> *The `USDCSEP22` market has just expired. Lenders have lent 1,000,000 USDC in total, while borrowers have only repaid 600,000 USDC. According to the `RRR` mechanism, the `Repayment Ratio` is 60% (600,000 / 1,000,000), so all lenders can redeem only 60% of their `qUSDCSEP22` qTokens. If a lender has 100 `qUSDCSEP22` qTokens, they will only be able to redeem for 60 USDC. The remaining 40 `qUSDCSEP22` qTokens will still remain in their wallet. In the event that borrowers are later able to make payment, they will be able to redeem the remaining 40 `qUSDCSEP22` for the underlying USDC.*

The `RRR` mechanism represents a fairer system where losses due to borrower defaults are socialized across all lenders. This is in stark contrast to historical CeFi defaults (e.g. Celsius, 3AC), where the first-come, first-serve nature of redemptions causes widespread panic and bank runs in the market.

Note that unredeemed `qTokens` will still remain in perpetuity in the lender’s wallet even after a `FixedRateMarket` has expired. If a borrower has defaulted but repays the loan either partially or fully at a later date (for example, after several months after legal proceedings), the remaining `qTokens` can still be claimed for underlying in the expired `FixedRateMarket`.
