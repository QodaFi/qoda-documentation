---
sidebar_position: 3
---

# FixedRateMarket

## Introduction

Each FixedRateMarket contract instance is an ERC20 token ("qToken") characterized by 2 fields: 1) the underlying token address, and 2) the maturity date (as a UNIX timestamp). For example, qGLMRJUN22, qUSDCSEP22, and qDOTDEC22 are also examples of FixedRateMarket qTokens which indicate the currency of the underlying loan, and when the loan matures (last day of the given month). Upon expiry, the qTokens may be redeemed for the underlying token at a 1:1 rate.

## Lend

The lend function is called by the user to accept an existing live borrow Quote. The function caller will be transferring tokens to the Quoter, and will be minted qTokens representing the full principal plus interest redeemable at maturity. Note that a valid existing live borrow Quote must exist for the user to successfully call this function.


The function caller must enter in the full details of the existing borrow Quote and its accompanying digital signature in order to make a valid transaction. They do not need to lend the full amount, a partial fill is also acceptable as long as it is less than or equal to the remaining amount of the Quote. See [here](/for-developers/QuotePublisher) for more details on each field of a Quote.

**Web3**
```
var contract = new FixedRateMarket.at("0x...");
contract.methods.lend(
  amount, 
  borrower,
  quoteType,
  quoteExpiryTime,
  APR,
  cashflow,
  nonce,
  signature
  ).send({from: ...});
```

* `amount`: Amount the user wishes to lend
* `borrower`: Address of the Quoter (i.e. the borrower)
* `quoteType`: The Quote type indicated in the Quote
* `quoteExpiryTime`: The Quote expiry time stated in the Quote
* `APR`: The APR stated in the Quote
* `cashflow`: The cashflow stated in the Quote
* `nonce`: The nonce stated in the Quote
* `signature`: The digital signature verifying the authenticity of the Quote

## Borrow

The borrow function is called by the user to accept an existing live lend Quote. The function caller will be borrowing tokens from the Quoter, and must pay back the full principal plus interest at maturity. Note that the borrower must have enough collateral deposited, and a valid existing live lend Quote must exist, in order for the user to successfully call this function.


The function caller must enter in the full details of the existing lend Quote and its accompanying digital signature in order to make a valid transaction. They do not need to borrow the full amount, a partial fill is also acceptable as long as it is less than or equal to the remaining amount of the Quote. See [here](/for-developers/QuotePublisher) for more details on each field of a Quote.

**Web3**
```
var contract = new FixedRateMarket.at("0x...");
contract.methods.borrow(
  amount, 
  lender,
  quoteType,
  quoteExpiryTime,
  APR,
  cashflow,
  nonce,
  signature
  ).send({from: ...});
```

* `amount`: Amount the user wishes to lend
* `lender`: Address of the Quoter (i.e. the lender)
* `quoteType`: The Quote type indicated in the Quote
* `quoteExpiryTime`: The Quote expiry time stated in the Quote
* `APR`: The APR stated in the Quote
* `cashflow`: The cashflow stated in the Quote
* `nonce`: The nonce stated in the Quote
* `signature`: The digital signature verifying the authenticity of the Quote
