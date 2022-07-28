---
sidebar_position: 6
---

# Error Codes
| Error Code | Meaning|
|---|---|
|QP0| QuotePublisher: Signature mismatch |
|QP1| QuotePublisher: Invalid cashflow size |
|QP2| QuotePublisher: Invalid Quote Type |
|QP3| QuotePublisher: Invalid side |
|QP4| QuotePublisher: Invalid expiry time |
|QP5| QuotePublisher: Quote size too small |
|QP6| QuotePublisher: Not enough balance |
|QP7| QuotePublisher: Not enough allowance |
|QP8| QuotePublisher: Not enough collateral |
|QPO0| QPriceOracle: Asset not supported |
|QPO1| QPriceOracle: currentExchangeRate out of bounds |
|QM0| QollateralManager: Only admin authorized |
|QM1| QollateralManager: Only market role authorized |
|QM2| QollateralManager: Not enough collateral balance |
|QM3| QollateralManager: Withdraw amount must be less than collateral balance |
|QM4| QollateralManager: MToken wrapping not supported for this asset |
|QM5| QollateralManager: Withdraw amount must be positive |
|QM6| QollateralManager: Withdraw amount will cause undercollateralized account |
|QM7| QollateralManager: Asset is not supported as collateral |
|QM8| QollateralManager: Not enough collateral |
|FRM0| FixedRateMarket: Market expired |
|FRM1| FixedRateMarket: Repayment amount must be greater than zero |
|FRM2| FixedRateMarket: Not enough allowance |
|FRM3| FixedRateMarket: Not enough balance |
|FRM4| FixedRateMarket: May not redeem early |
|FRM5| FixedRateMarket: Target user is not eligible for liquidation |
|FRM6| FixedRateMarket: Liquidation amount must be positive |
|FRM7| FixedRateMarket: Target user balance is too low |
|FRM8| FixedRateMarket: Invalid signature |
|FRM9| FixedRateMarket: Quote expired |
|FRM10| FixedRateMarket: Invalid quote - Quote size too small |
|FRM11| FixedRateMarket: Invalid nonce |
|FRM12| FixedRateMarket: Requested size exceeds Quote remaining amount |
|FRM13| FixedRateMarket: Invalid quote type |
|FRM14| FixedRateMarket: Invalid quote side |
|FRM15| FixedRateMarket: Loan amount must be positive |
|FRM16| FixedRateMarket: Invalid APR |
|FRM17| FixedRateMarket: Invalid counterparty |
|FRM18| FixedRateMarket: Invalid maturity |
|FRM19| FixedRateMarket: Lender has insufficient allowance |
|FRM20| FixedRateMarket: Lender has insufficient balance |
|FRM21| FixedRateMarket: Borrower has insufficient collateral |
|FRM22| FixedRateMarket: Amount exceeds QToken balance |
|FRM23| FixedRateMarket: Account borrows exceeds balance |
|FRM24| FixedRateMarket: Amount must be in excess of borrows |
