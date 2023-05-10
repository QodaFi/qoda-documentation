"use strict";(self.webpackChunkqoda_documentation=self.webpackChunkqoda_documentation||[]).push([[449],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4279:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},u="Lending",s={unversionedId:"getting-started/lending",id:"getting-started/lending",title:"Lending",description:"Qoda uses a Marketplace model for lending/borrowing. What is a Marketplace?",source:"@site/docs/getting-started/lending.md",sourceDirName:"getting-started",slug:"/getting-started/lending",permalink:"/getting-started/lending",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Bridging",permalink:"/getting-started/network"},next:{title:"qTokens and Early Exit",permalink:"/getting-started/qtokens"}},p=[{value:"Quick Lend",id:"quick-lend",children:[],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lending"},"Lending"),(0,o.kt)("p",null,"Qoda uses a ",(0,o.kt)("em",{parentName:"p"},"Marketplace")," model for lending/borrowing. What is a ",(0,o.kt)("em",{parentName:"p"},"Marketplace"),"?"),(0,o.kt)("p",null,"In short, the Qoda Marketplace is like a simplified orderbook exchange for loans, arranged by interest rate (APR) instead of price. Qoda\u2019s ",(0,o.kt)("em",{parentName:"p"},"Fixed Rate Loan Marketplace")," allows users to place on-chain orders that we call ",(0,o.kt)("em",{parentName:"p"},"Quotes")," to either lend or borrow a particular token for a user-specified size, APR, and maturity date."),(0,o.kt)("center",null,(0,o.kt)("img",{src:"/img/getting-started/lending/1.png"}),(0,o.kt)("p",null,(0,o.kt)("i",null,"Qoda Quotes"))),(0,o.kt)("p",null,"Users can browse the list of existing Quotes to pick the terms that best suit their needs. For users lending on Qoda, no collateral deposit is required."),(0,o.kt)("h2",{id:"quick-lend"},"Quick Lend"),(0,o.kt)("p",null,"When you launch the Qoda app, the first page you\u2019ll be taken to is the Markets page, which lists all the ",(0,o.kt)("em",{parentName:"p"},"Markets")," that are currently available on the platform for borrowing/lending. In this particular example, there are four markets: USDCFEB23, USDCMAR23, USDTFEB23, USDTMAR23, with the token name signifying what currency the loan will be denominated in, and the date signifying when the loan will mature, which by convention is at 4PM UTC on the last day of the month. You can learn more about ",(0,o.kt)("em",{parentName:"p"},"Markets")," from the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.qoda.fi/glossary-of-terms#market"},"Glossary Of Terms"),"."),(0,o.kt)("center",null,(0,o.kt)("img",{src:"/img/getting-started/lending/2.png"}),(0,o.kt)("p",null,(0,o.kt)("i",null,"Qoda Markets"))),(0,o.kt)("p",null,"Click on the name of the market in which you want to lend. If you want to lend immediately, you can use the Quick Lend function. You will see the amount of tokens in your wallet available for lending. "),(0,o.kt)("center",null,(0,o.kt)("img",{src:"/img/getting-started/lending/3.png"})),(0,o.kt)("p",null,"Enter your desired amount to lend. You may either specify: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Notional Amount"),", which is the amount that gets borrowed or lent today. If you are lending, this is the amount you will be lending immediately upon accepting the ",(0,o.kt)("em",{parentName:"li"},"Quote"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Repayment Amount"),", which is the amount that will be repaid at ",(0,o.kt)("em",{parentName:"li"},"Maturity"),". If you are lending, this is the full principal plus interest amount you will receive upon the ",(0,o.kt)("em",{parentName:"li"},"Maturity")," time.")),(0,o.kt)("p",null,"The interest rate will be calculated automatically based on the orderbook\u2019s existing ",(0,o.kt)("em",{parentName:"p"},"Quotes"),". It is calculated based on the weighted average of the ",(0,o.kt)("em",{parentName:"p"},"Quotes")," ( the sum of (APR * amount) / total amount )."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Example:")," If the orderbook has two quotes: (1%, 1,000 notional) and (10%, 10,000 notional) the estimate APR for a total 11,000 size would be ~9.18%.")),(0,o.kt)("center",null,(0,o.kt)("img",{src:"/img/getting-started/lending/4.png"}),(0,o.kt)("p",null,(0,o.kt)("i",null,"Quick Lending"))),(0,o.kt)("p",null,"Once you've confirmed and executed the transaction, you will have lent your tokens and you will be minted ",(0,o.kt)("a",{parentName:"p",href:"https://docs.qoda.fi/glossary-of-terms#qtoken"},"qTokens")," as a receipt."),(0,o.kt)("p",null,"If there are currently no open ",(0,o.kt)("em",{parentName:"p"},"Quotes")," for this ",(0,o.kt)("em",{parentName:"p"},"Market"),", then the quick lend form will not be available. In this case, you can create your own ",(0,o.kt)("em",{parentName:"p"},"Quote")," and wait until other users fill it. If you don\u2019t find any current ",(0,o.kt)("em",{parentName:"p"},"Quotes")," that suit you, you may create your own by clicking on the ",(0,o.kt)("em",{parentName:"p"},"+Publish Lend Quote")," Button."),(0,o.kt)("center",null,(0,o.kt)("img",{src:"/img/getting-started/lending/5.png"}),(0,o.kt)("p",null,(0,o.kt)("i",null,"Publish Quote"))),(0,o.kt)("p",null,"Create a Quote \u2014 you may specify your desired interest rate, notional, or repayment amount."),(0,o.kt)("center",null,(0,o.kt)("img",{src:"/img/getting-started/lending/6.png"}),(0,o.kt)("p",null,(0,o.kt)("i",null,"New Quote Page"))),(0,o.kt)("p",null,"Once you\u2019ve filled in all the terms, hit \u201cPublish Quote\u201d. Once you've executed the transaction, your ",(0,o.kt)("em",{parentName:"p"},"Quote")," is now live! ",(0,o.kt)("em",{parentName:"p"},"Quotes")," that belong to you are marked with \u201cMe\u201d text in blue in the main ",(0,o.kt)("em",{parentName:"p"},"Marketplace")," Page. You can also cancel your ",(0,o.kt)("em",{parentName:"p"},"Quotes")," anytime, even before they are filled or expire (though you will have to pay some small gas fees to do so)."),(0,o.kt)("p",null,"After you have published the ",(0,o.kt)("em",{parentName:"p"},"Quote"),", may also inspect it anytime in your ",(0,o.kt)("a",{parentName:"p",href:"https://moonriver.qoda.fi/portfolio"},"Portfolio")," page."))}m.isMDXComponent=!0}}]);