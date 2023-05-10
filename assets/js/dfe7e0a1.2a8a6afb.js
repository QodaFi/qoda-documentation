"use strict";(self.webpackChunkqoda_documentation=self.webpackChunkqoda_documentation||[]).push([[341],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return c}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),u=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=u(t.components);return r.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),k=u(a),c=n,s=k["".concat(d,".").concat(c)]||k[c]||m[c]||l;return a?r.createElement(s,o(o({ref:e},p),{},{components:a})):r.createElement(s,o({ref:e},p))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7198:function(t,e,a){a.r(e),a.d(e,{contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],i={sidebar_position:4},d="Error Codes",u={unversionedId:"for-developers/error-codes",id:"for-developers/error-codes",title:"Error Codes",description:"| Error Code | Meaning|",source:"@site/docs/for-developers/error-codes.md",sourceDirName:"for-developers",slug:"/for-developers/error-codes",permalink:"/for-developers/error-codes",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"QAdmin",permalink:"/for-developers/QAdmin"},next:{title:"Contract Addresses",permalink:"/for-developers/contract-addresses"}},p=[],m={toc:p};function k(t){var e=t.components,a=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"error-codes"},"Error Codes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Error Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QPO0"),(0,l.kt)("td",{parentName:"tr",align:null},"QPriceOracle: Asset not supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QPO1"),(0,l.kt)("td",{parentName:"tr",align:null},"QPriceOracle: currentExchangeRate out of bounds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM0"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Only admin authorized")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM1"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Only market role authorized")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM2"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Borrower not enough collateral balance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM3"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Withdraw amount must be less than collateral balance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM4"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: MToken wrapping not supported for this asset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM5"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Withdraw amount must be positive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM6"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Withdraw amount will cause undercollateralized account")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM7"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Asset is not supported as collateral")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QM8"),(0,l.kt)("td",{parentName:"tr",align:null},"QollateralManager: Not enough collateral")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM0"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Market expired")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM1"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Amount must be greater than zero")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM2"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Not enough allowance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM3"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Not enough balance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM4"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: May not redeem early")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM5"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Liquidatee is not eligible for liquidation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM6"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Quote ID was not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM7"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Liquidatee's collateral balance is too low to pay liquidator")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM8"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Lends must be greater than borrows")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM9"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: PV Amount must cover at least protocol fee costs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM10"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Invalid quote - Quote size too small")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM11"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: //Currently Unused")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM12"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: User not authorized for this action")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM13"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Invalid quote - invalid quoteType")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM14"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Invalid quote - invalid side")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM15"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Invalid quote - invalid cashflow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM16"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Invalid quote - Invalid APR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM17"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Invalid quote - Invalid counterparty")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM18"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Invalid maturity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM19"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: QToken amount exceeds balance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM20"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Amount exceeds redeemable tokens")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM21"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Transferred qTokens plus current borrows exceeds qToken balance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM22"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Borrower amount exceeds permitted max borrow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FRM23"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedRateMarket: Redeem amount must be greater than zero")))))}k.isMDXComponent=!0}}]);