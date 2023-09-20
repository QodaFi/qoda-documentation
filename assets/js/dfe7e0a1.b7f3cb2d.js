"use strict";(self.webpackChunkqoda_documentation=self.webpackChunkqoda_documentation||[]).push([[341],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return s}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),u=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),k=u(a),s=r,N=k["".concat(d,".").concat(s)]||k[s]||m[s]||l;return a?n.createElement(N,o(o({ref:e},p),{},{components:a})):n.createElement(N,o({ref:e},p))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7198:function(t,e,a){a.r(e),a.d(e,{contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={sidebar_position:4},d="Error Codes",u={unversionedId:"for-developers/error-codes",id:"for-developers/error-codes",title:"Error Codes",description:"| Error Code | Meaning|",source:"@site/docs/for-developers/error-codes.md",sourceDirName:"for-developers",slug:"/for-developers/error-codes",permalink:"/for-developers/error-codes",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"QAdmin",permalink:"/for-developers/QAdmin"},next:{title:"Contract Addresses",permalink:"/for-developers/contract-addresses"}},p=[],m={toc:p};function k(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"error-codes"},"Error Codes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Error Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QPO_AssetNotSupported"),(0,l.kt)("td",{parentName:"tr",align:null},"QPriceOracle: Asset not supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QPO_ExchangeRateOutOfBound"),(0,l.kt)("td",{parentName:"tr",align:null},"QPriceOracle: currentExchangeRate out of bounds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM_OnlyAdmin"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Only admin role authorized")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM_OnlyMarket"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Only market role authorized")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM_InsufficientCollateralBalance"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Borrower not enough collateral balance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM_WithdrawMoreThanCollateral"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Withdraw amount must be less than collateral balance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM_MTokenUnsupported"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: MToken wrapping not supported for this asset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM_ZeroWithdrawAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Withdraw amount must be positive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM_InvalidWithdrawal"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Withdraw amount will cause undercollateralized account")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM_AssetNotSupported"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Asset is not supported as collateral")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM_NotEnoughCollateral"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Not enough collateral")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM_ZeroDepositAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Deposit amount must be positive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM_ZeroTransferAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Transfer amount must be positive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM_UnsuccessfulEthTransfer"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Transfer native token to designated account has failed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM_OperationPaused"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Specified contract operation has been suspended")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM_ReentrancyDetected"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Repeated invocation of same function detected")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_OnlyAdmin"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Market expired")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_AmountZero"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Amount must be greater than zero")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_InsufficientAllowance"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Not enough allowance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_InsufficientBalance"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Not enough balance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_CannotRedeemEarly"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: May not redeem early")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_NotLiquidatable"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Liquidatee is not eligible for liquidation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_NotEnoughCollateral"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Liquidatee's collateral balance is too low to pay liquidator")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_BorrowsMoreThanLends"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Lends must be greater than borrows")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_AmountLessThanProtocolFee"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: PV Amount must cover at least protocol fee costs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_MarketExpired"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Market has reached maturity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_InvalidSide"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Invalid quote - invalid side")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_InvalidAPR"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Invalid quote - Invalid APR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_InvalidCounterparty"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Invalid quote - Invalid counterparty")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_InvalidMaturity"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Invalid maturity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_AmountExceedsRedeemable"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Amount exceeds redeemable tokens")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_AmountExceedsBorrows"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Transferred qTokens plus current borrows exceeds qToken balance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_MaxBorrowExceeded"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Borrower amount exceeds permitted max borrow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_ZeroRedeemAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Redeem amount must be greater than zero")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_EthOperationNotPermitted"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Native token operation can only be done in native token market")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_UnsuccessfulEthTransfer"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Transfer native token to designated account has failed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_OperationPaused"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Specified contract operation has been suspended")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM_ReentrancyDetected"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Repeated invocation of same function detected")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QUM_OnlyMarket"),(0,l.kt)("td",{parentName:"tr",align:null},"QuoteManager: Only market role authorized")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QUM_InsufficientAllowance"),(0,l.kt)("td",{parentName:"tr",align:null},"QuoteManager: Not enough allowance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QUM_InsufficientBalance"),(0,l.kt)("td",{parentName:"tr",align:null},"QuoteManager: Not enough balance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QUM_QuoteNotFound"),(0,l.kt)("td",{parentName:"tr",align:null},"QuoteManager: Quote ID was not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QUM_QuoteSizeTooSmall"),(0,l.kt)("td",{parentName:"tr",align:null},"QuoteManager: Invalid quote - Quote size too small")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QUM_Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null},"QuoteManager: User not authorized for this action")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QUM_InvalidQuoteType"),(0,l.kt)("td",{parentName:"tr",align:null},"QuoteManager: Invalid quote - invalid quoteType")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QUM_InvalidSide"),(0,l.kt)("td",{parentName:"tr",align:null},"QuoteManager: Invalid quote - invalid side")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QUM_InvalidCashflowSize"),(0,l.kt)("td",{parentName:"tr",align:null},"QuoteManager: Invalid quote - invalid cashflow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QUM_InvalidFillAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"QuoteManager: Invalid fill amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QUM_MaxBorrowExceeded"),(0,l.kt)("td",{parentName:"tr",align:null},"QuoteManager: Borrower amount exceeds permitted max borrow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QUM_OperationPaused"),(0,l.kt)("td",{parentName:"tr",align:null},"QuoteManager: Specified contract operation has been suspended")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT_InvalidTimeInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"Interest: Invalid time interval specified")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QE_OnlyMinter"),(0,l.kt)("td",{parentName:"tr",align:null},"QodaERC20: Only minter role authorized")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VQ_ZeroStakeAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"veQoda: User must stake positive amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VQ_ZeroUnstakeAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"veQoda: User must unstake positive amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VQ_InsufficientBalance"),(0,l.kt)("td",{parentName:"tr",align:null},"veQoda: Not enough balance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VQ_TransferDisabled"),(0,l.kt)("td",{parentName:"tr",align:null},"veQoda: Token cannot be transferred to another account")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VQ_OperationPaused"),(0,l.kt)("td",{parentName:"tr",align:null},"veQoda: Specified contract operation has been suspended")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEQ_OnlyVeToken"),(0,l.kt)("td",{parentName:"tr",align:null},"StakingEmissionsQontroller: Only veToken role authorized")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEQ_OnlyAdmin"),(0,l.kt)("td",{parentName:"tr",align:null},"StakingEmissionsQontroller: Only admin role authorized")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEQ_InvokeMoreThanOnce"),(0,l.kt)("td",{parentName:"tr",align:null},"StakingEmissionsQontroller: startStaking can only be called once")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEQ_ZeroDepositAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"StakingEmissionsQontroller: Deposit amount must be positive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEQ_LengthMismatch"),(0,l.kt)("td",{parentName:"tr",align:null},"StakingEmissionsQontroller: Misaligned emission detail specified during contract initialization")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEQ_AmountZero"),(0,l.kt)("td",{parentName:"tr",align:null},"StakingEmissionsQontroller: Amount must be greater than zero")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SEQ_OperationPaused"),(0,l.kt)("td",{parentName:"tr",align:null},"StakingEmissionsQontroller: Specified contract operation has been suspended")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TEQ_OnlyMarket"),(0,l.kt)("td",{parentName:"tr",align:null},"TradingEmissionsQontroller: Only market role authorized")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TEQ_LengthMismatch"),(0,l.kt)("td",{parentName:"tr",align:null},"TradingEmissionsQontroller: Misaligned emission detail specified during contract initialization")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TEQ_ZeroRewardAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"TradingEmissionsQontroller: Reward claiming amount must be greater than zero")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TEQ_OperationPaused"),(0,l.kt)("td",{parentName:"tr",align:null},"TradingEmissionsQontroller: Specified contract operation has been suspended")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FEQ_Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null},"DevFeeQontroller: User not authorized for this action")))))}k.isMDXComponent=!0}}]);