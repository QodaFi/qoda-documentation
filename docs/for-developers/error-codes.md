---
sidebar_position: 4
---

# Error Codes
| Error Code | Meaning|
|---|---|
|QPO_AssetNotSupported| QPriceOracle: Asset not supported |
|QPO_ExchangeRateOutOfBound| QPriceOracle: currentExchangeRate out of bounds |
|QM_OnlyAdmin| QollateralManager: Only admin role authorized |
|QM_OnlyMarket| QollateralManager: Only market role authorized |
|QM_InsufficientCollateralBalance| QollateralManager: Borrower not enough collateral balance |
|QM_WithdrawMoreThanCollateral| QollateralManager: Withdraw amount must be less than collateral balance |
|QM_MTokenUnsupported| QollateralManager: MToken wrapping not supported for this asset |
|QM_ZeroWithdrawAmount| QollateralManager: Withdraw amount must be positive |
|QM_InvalidWithdrawal| QollateralManager: Withdraw amount will cause undercollateralized account |
|QM_AssetNotSupported| QollateralManager: Asset is not supported as collateral |
|QM_NotEnoughCollateral| QollateralManager: Not enough collateral |
|QM_ZeroDepositAmount| QollateralManager: Deposit amount must be positive |
|QM_ZeroTransferAmount| QollateralManager: Transfer amount must be positive |
|QM_UnsuccessfulEthTransfer| QollateralManager: Transfer native token to designated account has failed |
|QM_OperationPaused| QollateralManager: Specified contract operation has been suspended |
|QM_ReentrancyDetected| QollateralManager: Repeated invocation of same function detected |
|FRM_OnlyAdmin| FixedRateMarket: Market expired |
|FRM_AmountZero| FixedRateMarket: Amount must be greater than zero |
|FRM_InsufficientAllowance| FixedRateMarket: Not enough allowance |
|FRM_InsufficientBalance| FixedRateMarket: Not enough balance |
|FRM_CannotRedeemEarly| FixedRateMarket: May not redeem early |
|FRM_NotLiquidatable| FixedRateMarket: Liquidatee is not eligible for liquidation |
|FRM_NotEnoughCollateral| FixedRateMarket: Liquidatee's collateral balance is too low to pay liquidator |
|FRM_BorrowsMoreThanLends| FixedRateMarket: Lends must be greater than borrows |
|FRM_AmountLessThanProtocolFee| FixedRateMarket: PV Amount must cover at least protocol fee costs |
|FRM_MarketExpired| FixedRateMarket: Market has reached maturity |
|FRM_InvalidSide| FixedRateMarket: Invalid quote - invalid side |
|FRM_InvalidAPR| FixedRateMarket: Invalid quote - Invalid APR |
|FRM_InvalidCounterparty| FixedRateMarket: Invalid quote - Invalid counterparty |
|FRM_InvalidMaturity| FixedRateMarket: Invalid maturity |
|FRM_AmountExceedsRedeemable| FixedRateMarket: Amount exceeds redeemable tokens |
|FRM_AmountExceedsBorrows| FixedRateMarket: Transferred qTokens plus current borrows exceeds qToken balance |
|FRM_MaxBorrowExceeded| FixedRateMarket: Borrower amount exceeds permitted max borrow |
|FRM_ZeroRedeemAmount| FixedRateMarket: Redeem amount must be greater than zero |
|FRM_EthOperationNotPermitted| FixedRateMarket: Native token operation can only be done in native token market |
|FRM_UnsuccessfulEthTransfer| FixedRateMarket: Transfer native token to designated account has failed |
|FRM_OperationPaused| FixedRateMarket: Specified contract operation has been suspended |
|FRM_ReentrancyDetected| FixedRateMarket: Repeated invocation of same function detected |
|QUM_OnlyMarket| QuoteManager: Only market role authorized |
|QUM_InsufficientAllowance| QuoteManager: Not enough allowance |
|QUM_InsufficientBalance| QuoteManager: Not enough balance |
|QUM_QuoteNotFound| QuoteManager: Quote ID was not found |
|QUM_QuoteSizeTooSmall| QuoteManager: Invalid quote - Quote size too small |
|QUM_Unauthorized| QuoteManager: User not authorized for this action |
|QUM_InvalidQuoteType| QuoteManager: Invalid quote - invalid quoteType |
|QUM_InvalidSide| QuoteManager: Invalid quote - invalid side |
|QUM_InvalidCashflowSize| QuoteManager: Invalid quote - invalid cashflow |
|QUM_InvalidFillAmount| QuoteManager: Invalid fill amount |
|QUM_MaxBorrowExceeded| QuoteManager: Borrower amount exceeds permitted max borrow |
|QUM_OperationPaused| QuoteManager: Specified contract operation has been suspended |
|INT_InvalidTimeInterval| Interest: Invalid time interval specified |
|QE_OnlyMinter| QodaERC20: Only minter role authorized |
|VQ_ZeroStakeAmount| veQoda: User must stake positive amount |
|VQ_ZeroUnstakeAmount| veQoda: User must unstake positive amount |
|VQ_InsufficientBalance| veQoda: Not enough balance |
|VQ_TransferDisabled| veQoda: Token cannot be transferred to another account |
|VQ_OperationPaused| veQoda: Specified contract operation has been suspended |
|SEQ_OnlyVeToken| StakingEmissionsQontroller: Only veToken role authorized |
|SEQ_OnlyAdmin| StakingEmissionsQontroller: Only admin role authorized |
|SEQ_InvokeMoreThanOnce| StakingEmissionsQontroller: startStaking can only be called once |
|SEQ_ZeroDepositAmount| StakingEmissionsQontroller: Deposit amount must be positive |
|SEQ_LengthMismatch| StakingEmissionsQontroller: Misaligned emission detail specified during contract initialization |
|SEQ_AmountZero| StakingEmissionsQontroller: Amount must be greater than zero |
|SEQ_OperationPaused| StakingEmissionsQontroller: Specified contract operation has been suspended |
|TEQ_OnlyMarket| TradingEmissionsQontroller: Only market role authorized |
|TEQ_LengthMismatch| TradingEmissionsQontroller: Misaligned emission detail specified during contract initialization |
|TEQ_ZeroRewardAmount| TradingEmissionsQontroller: Reward claiming amount must be greater than zero |
|TEQ_OperationPaused| TradingEmissionsQontroller: Specified contract operation has been suspended |
|FEQ_Unauthorized| DevFeeQontroller: User not authorized for this action |