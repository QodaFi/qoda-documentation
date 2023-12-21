---
sidebar_position: 1
---

# Lending

Qoda uses a *Marketplace* model for lending/borrowing. What is a *Marketplace*?

In short, the Qoda Marketplace is like a simplified orderbook exchange for loans, arranged by interest rate (APR) instead of price. Qoda’s *Fixed Rate Loan Marketplace* allows users to place on-chain orders that we call *Quotes* to either lend or borrow a particular token for a user-specified size, APR, and maturity date.

Users can browse the list of existing Quotes to pick the terms that best suit their needs. For users lending on Qoda, no collateral deposit is required.

## Quick Lend

When you launch the Qoda app, the first page you’ll be taken to is the Markets page, which lists all the *Markets* that are currently available on the platform for borrowing/lending. In this particular example, there are four markets: USDCDEC23, USDCMAR24, ETHDEC23, WETHMAR24, with the token name signifying what currency the loan will be denominated in, and the date signifying when the loan will mature. You can learn more about *Markets* from the [Glossary Of Terms](https://docs.qoda.fi/glossary-of-terms#market).

<center>
  <img src="/img/getting-started/lending/lend1.PNG"></img>
  <p><i>Qoda Markets</i></p>
</center>

Click on the name of the market in which you want to lend. If you want to lend immediately, you can use the Quick Lend function. You will see the amount of tokens in your wallet available for lending. 

<center>
  <img src="/img/getting-started/lending/lend2.png"></img>
</center>

Enter your desired amount to lend. You may either specify: 

1. *Notional Amount*, which is the amount that gets borrowed or lent today. If you are lending, this is the amount you will be lending immediately upon accepting the *Quote*.
2. *Repayment Amount*, which is the amount that will be repaid at *Maturity*. If you are lending, this is the full principal plus interest amount you will receive upon the *Maturity* time.

The interest rate will be calculated automatically based on the orderbook’s existing *Quotes*. It is calculated based on the weighted average of the *Quotes* ( the sum of (APR * amount) / total amount ).

> *Example:* If the orderbook has two quotes: (1%, 1,000 notional) and (10%, 10,000 notional) the estimate APR for a total 11,000 size would be ~9.18%.

Once you've confirmed and executed the transaction, you will have lent your tokens and you will be minted [qTokens](https://docs.qoda.fi/glossary-of-terms#qtoken) as a receipt.

## Open a Quote

If there are currently no open *Quotes* for this *Market*, then the quick lend form will not be available. In this case, you can create your own *Quote* and wait until other users fill it. It is useful, if you don’t find any current *Quotes* that suit you, so you may create your own by clicking on the *+New Quote* Button.

<center>
  <img src="/img/getting-started/lending/lend3.png"></img>
  <p><i>New Quote</i></p>
</center>

Create a Quote — you may specify your desired interest rate, notional, or repayment amount.

<center>
  <img src="/img/getting-started/lending/lend4.png"></img>
  <p><i>New Quote Page</i></p>
</center>

Once you’ve filled in all the terms, hit “Publish Quote”. Once you've executed the transaction, your *Quote* is now live! *Quotes* that belong to you are marked with “Me” text in blue in the main *Marketplace* Page. You can also cancel your *Quotes* anytime, even before they are filled or expire (though you will have to pay some small gas fees to do so).

After you have published the *Quote*, may also inspect it anytime in your [Portfolio](https://moonriver.qoda.fi/portfolio) page.
