---
sidebar_position: 4
---

# Glossary Of Terms

## Account Health

The *Account Health* is a measure of how close your account is to being liquidated. An *Account Health* below 1.0 may be liquidated at any time. The *Account Health* is a ratio of the account's *Collateral Factor*-adjusted collateral value (in USD) divided by the *Market Factor*-adjusted net borrow value (in USD). Click [here](/whitepaper/qoda-protocol#25-collateral-management) for a deeper, more technical explanation on *Account Health*. 

## APR

The Annual Percentage Rate, which is the simple interest rate paid from the borrower to the lender normalized over one year. This lets lenders/borrowers easily compare the interest rate of one loan versus another even if they might have different *Maturity* times.

Example: Suppose the APR is 10%, and that the lender lends 100 USDC to the borrower. 

- After 30 days, the lender will accrue 100 \* (10% \* 30 / 365) = 0.82 USDC of interest.
- After 180 days, the lender will accrue 100 \* (10% \* 180 / 365) = 4.93 USDC of interest. 
- After 365 days, the lender will accrue 100 \* (10% \* 365 / 365) = 10 USDC of interest.

Learn more about [APR](https://en.wikipedia.org/wiki/Annual_percentage_rate).

## Borrow Value

The *Borrow Value* is the aggregated value of all borrows across all *Markets* of an account in USD as determined by the latest Chainlink oracle price.

## Collateral Factor

The *Collateral Factor* is a number from 0-100% assigned to every *Asset* that represents a weighting of how much lesser the Qoda collateral system will value collateral posted in that *Asset* from its current market price due, to the perceived market risk of the collateral.

Generally, large, liquid, safer *Assets* have high *Collateral Factors*, while small, illiquid, riskier *Assets* have low *Collateral Factors*. If an Asset has a 0% *Collateral Factor*, it can’t be used as collateral, though it can still be lent or borrowed in Qoda *Markets*.

## Collateral Value (Real Collateral Value)

The *Collateral Value* (or *Real Collateral Value*) is the aggregated value of all collateral an account has deposited in USD as determined by the latest Chainlink oracle price.

## Lend Value

The *Lend Value* is the aggregated value of all lends across all *Markets* of an account in USD as determined by the latest Chainlink oracle price.

## Market

A *Market* is the place where users can borrow or lend. A *Market* is made up of two components:

1. *Underlying ERC20 Token*, which is the token which is being borrowed or lent.
2. *Maturity*, which is when borrowers must repay their loans, and when lenders may redeem their *qTokens* for the underlying token.

The naming convention of *Market*s is [TOKEN SYMBOL][MONTH][YEAR]. For example, the USDCJUL22 *Market* is where users may borrow or lend USDC tokens, maturing on 29th July 2022, 4:00 PM UTC.

## Market Factor

The *Market Factor* is a number from 0-100% assigned to every *Market* that represents a weighting of how much more the Qoda collateral system will value the amount a user has borrowed in that *Market* from its current market price, due to the perceived market risk of the underlying token.

Generally, large, liquid, safer *Markets* have high *Market Factors*, while small, illiquid, risker *Markets* have low *Market Factors*.

## Maturity

The *Maturity* time is the time after which a *Market* closes. No *Quotes* may be published or accepted after the *Maturity* time. This is also the time when borrowers need to repay their loans. By convention, the *Maturity* time is set to be the last business day of the month at 4:00 PM UTC.

## qToken

Each *Market* has an associated *qToken*, which is minted to a user when they lend to the *Market*. *qTokens* represent the full principal plus interest amount that the user may redeem when the *Market* matures. For example: 

> *A user lends 100 GLMR at all-in fixed rate of 10%, expiring on 31 March, 2022. When the transaction is executed, the system will mint 110 qGLMRMAR22 tokens to the user. Upon the expiry of the contract on 31st March 4:00pm UTC, the 110 qGLMRMAR22 tokens will be redeemable for the underlying 110 GLMR tokens at a 1:1 rate.*

The advantage of *qTokens* is that it allows for greater capital allocation efficiency. While the user can simply hold onto them, the *qTokens* themselves hold value and can potentially be traded in secondary markets, staked in yield farms, used as collateral itself in other protocols, etc.

Note that a user may not have an outstanding debt and hold *qTokens* at the same time. If a user holding *qTokens* borrows in the same *Market*, the balance of the loan will be deducted from the *qTokens*. If *qTokens* are transferred to a user with an outstanding loan, the balance of the loan will be deducted first and the user will only receive *qTokens* that are in excess of their current borrows.

## Quote

*Quotes* are Qoda's off-chain orders using digital signatures to either lend or borrow a particular token for a user-specified size, APR, and maturity date. You can think of *Quotes* as an analogue to limit orders in an orderbook. Users can either publish *Quotes* into the platform and wait for others to execute against it, or they can browse the list of existing *Quotes* and pick the terms that suit their needs.

## Virtual Borrow Value

The *Virtual Borrow Value* is the *Market Factor-*adjusted aggregated value in USD (as determined by the current Chainlink oracle price) of all net borrows (i.e. borrows minus lends) across all markets, where each borrowed *Market* is adjusted by its corresponding *Market Factor*. Important to note is that for any particular *Market*, a net positive lend position does not reduce the aggregate *Virtual Borrow Value* - that is, lending in a *Market* is not equivalent to depositing collateral. Lending in a *Market* cannot substitute as collateral, it can only net against a positive borrow position in that particular *Market*.

Note that the *Virtual Borrow Value* is always greater than or equal to the *Real Borrow Value*.

## Virtual Collateral Value

The *Virtual Collateral Value* is the *Collateral Factor-*adjusted aggregated value in USD (as determined by the current Chainlink oracle price) of all collateral an account has deposited, where each collateral *Asset* is adjusted by its corresponding *Collateral Factor*. Note that the *Virtual Collateral Value* is always less than or equal to the *Real Collateral Value*.
