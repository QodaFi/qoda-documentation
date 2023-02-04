---
sidebar_position: 6
---

# Borrowing

Qoda uses a *Marketplace* model for lending/borrowing. What is a *Marketplace*?

In short, the Qoda Marketplace is like a simplified orderbook exchange for loans, arranged by interest rate (APR) instead of price. Qoda’s *Fixed Rate Loan Marketplace* allows users to place on-chain orders that we call *Quotes* to either lend or borrow a particular token for a user-specified size, APR, and maturity date.

<center>
  <img src="/img/getting-started/borrowing/1.png"></img>
  <p><i>Qoda Quotes</i></p>
</center>

Users can browse the list of existing Quotes to pick the terms that best suit their needs. 

**Important:** Before you are able to borrow on Qoda, you must first deposit collateral. You can learn more about depositing collateral [here](/getting-started/depositing-collateral).

## Quick Borrow

When you launch the Qoda app, the first page you’ll be taken to is the Markets page, which lists all the *Markets* that are currently available on the platform for borrowing/lending. In this particular example, there are four markets: USDCFEB23, USDCMAR23, USDTFEB23, USDTMAR23, with the token name signifying what currency the loan will be denominated in, and the date signifying when the loan will mature, which by convention is at 4PM UTC on the last day of the month. You can learn more about *Markets* from the [Glossary Of Terms](https://docs.qoda.fi/glossary-of-terms#market).

<center>
  <img src="/img/getting-started/borrowing/2.png"></img>
  <p><i>Qoda Markets</i></p>
</center>

Click on the name of the market in which you want to lend. If you want to borrow immediately, you can use the Quick Borrow function.

Enter your desired amount to borrow. You may either specify: 

1. *Notional Amount*, which is the amount that gets borrowed or lent today. If you are borrowing, this is the amount you will receive immediately upon accepting the *Quote*.
2. *Repayment Amount*, which is the amount that will be repaid at *Maturity*. If you are borrowing, this is the amount you will have to pay upon the *Maturity* time.

The interest rate will be calculated automatically based on the orderbook’s existing *Quotes*. It is calculated based on the weighted average of the *Quotes* ( the sum of (APR * amount) / total amount ).

> *Example:* If the orderbook has two quotes: (1%, 1,000 notional) and (10%, 10,000 notional) the estimate APR for a total 11,000 size would be ~9.18%.

 If you don’t find any current *Quotes* that suit you, you may create your own by clicking on the *+Publish Borrow Quote* Button.

<center>
  <img src="/img/getting-started/borrowing/3.png"></img>
  <p><i>Publish Quote</i></p>
</center>

Create a Quote — you may specify your desired interest rate, notional, or repayment amount.

<center>
  <img src="/img/getting-started/borrowing/4.png"></img>
  <p><i>Publish Quote</i></p>
</center>

Once you’ve filled in all the terms, hit “Publish Quote”. Once you've executed the transaction, your *Quote* is now live! *Quotes* that belong to you are marked with “Me” text in blue in the main *Marketplace* Page. You can also cancel your *Quotes* anytime, even before they are filled or expire (though you will have to pay some small gas fees to do so).

After you have published the *Quote*, may also inspect it anytime in your [Portfolio](https://moonriver.qoda.fi/portfolio) page.

**Important:** After you've taken out a loan, it is important that you repay your loan in a timely manner. Otherwise, you may be subject to liquidation and incur a penalty on your deposited collateral. Learn more about repaying your loans [here](/getting-started/repayments).
