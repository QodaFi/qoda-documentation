---
sidebar_position: 4
---

# Error Codes
| Error Code | Meaning|
|---|---|
|QPO0| QPriceOracle: Asset not supported |
|QPO1| QPriceOracle: currentExchangeRate out of bounds |
|QM0| QollateralManager: Only admin authorized |
|QM1| QollateralManager: Only market role authorized |
|QM2| QollateralManager: Borrower not enough collateral balance |
|QM3| QollateralManager: Withdraw amount must be less than collateral balance |
|QM4| QollateralManager: MToken wrapping not supported for this asset |
|QM5| QollateralManager: Withdraw amount must be positive |
|QM6| QollateralManager: Withdraw amount will cause undercollateralized account |
|QM7| QollateralManager: Asset is not supported as collateral |
|QM8| QollateralManager: Not enough collateral |
|FRM0| FixedRateMarket: Market expired |
|FRM1| FixedRateMarket: Amount must be greater than zero |
|FRM2| FixedRateMarket: Not enough allowance |
|FRM3| FixedRateMarket: Not enough balance |
|FRM4| FixedRateMarket: May not redeem early |
|FRM5| FixedRateMarket: Liquidatee is not eligible for liquidation |
|FRM6| FixedRateMarket: Quote ID was not found |
|FRM7| FixedRateMarket: Liquidatee's collateral balance is too low to pay liquidator |
|FRM8| FixedRateMarket: Lends must be greater than borrows |
|FRM9| FixedRateMarket: PV Amount must cover at least protocol fee costs |
|FRM10| FixedRateMarket: Invalid quote - Quote size too small |
|FRM11| FixedRateMarket: //Currently Unused |
|FRM12| FixedRateMarket: User not authorized for this action |
|FRM13| FixedRateMarket: Invalid quote - invalid quoteType |
|FRM14| FixedRateMarket: Invalid quote - invalid side |
|FRM15| FixedRateMarket: Invalid quote - invalid cashflow |
|FRM16| FixedRateMarket: Invalid quote - Invalid APR |
|FRM17| FixedRateMarket: Invalid quote - Invalid counterparty |
|FRM18| FixedRateMarket: Invalid maturity |
|FRM19| FixedRateMarket: QToken amount exceeds balance |
|FRM20| FixedRateMarket: Amount exceeds redeemable tokens |
|FRM21| FixedRateMarket: Transferred qTokens plus current borrows exceeds qToken balance |
|FRM22| FixedRateMarket: Borrower amount exceeds permitted max borrow |
|FRM23| FixedRateMarket: Redeem amount must be greater than zero |
