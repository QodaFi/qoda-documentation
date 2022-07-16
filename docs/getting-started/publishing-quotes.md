---
sidebar_position: 2
---

# Publishing Quotes

## Qoda Marketplace

Qoda uses a *Marketplace* model for lending/borrowing. What is a *Marketplace*?

<center>
  <img src="/img/getting-started/publishing-quotes/marketplace.png"></img>
  <p><i>Qoda Marketplace</i></p>
</center>

In short, the Qoda *Marketplace* is like a simplified orderbook exchange for loans, arranged by interest rate (APR) instead of price. Qoda’s *Fixed Rate Loan Marketplace* allows users to place off-chain orders using digital signatures that we call *Quotes* to either lend or borrow a particular token for a user-specified size, APR, and maturity date, along with an order expiration time after which your offer will expire.

Alternatively, users can browse the list of existing Quotes to pick the terms that best suit their needs. Note that before a user is able to borrow on Qoda, they must first deposit collateral (see more on [depositing collateral](/getting-started/depositing-collateral)). For users lending on Qoda, no collateral deposit is required.

## How to Publish a *Quote*

<center>
  <img src="/img/getting-started/publishing-quotes/markets.png"></img>
  <p><i>Qoda Markets Page</i></p>
</center>

When you launch the Qoda app, the first page you’ll be taken to is the *Markets* page, which lists all the instruments that are currently available on the platform for borrowing/lending. In this particular example, there are four GLMR markets: March 2022, June 2022, September 2022, and December 2022, with the token name signifying what currency the loan will be denominated in, and the date signifying when the loan will mature, which is on the last day of the month.

To publish a *Quote*, first select the *Market* which you are interested in and hit the “Create Quote” button. This is where you fill in your desired terms for the loan. There are four fields which you’re able to specify:

<center>
  <img src="/img/getting-started/publishing-quotes/quote-details.png"></img>
  <p><i>Publish Quote Page</i></p>
</center>

1. **Your Side:** Indicates whether you want to be a lender or a borrower
2. **Interest (APR %):** Your desired annual percentage rate on the loan. As a lender, you want the highest APR possible, and as a borrower, you want the lowest APR possible.
3. **Expiry:** How long your Quote offer is valid for. Any other user can accept your Quote terms and execute the loan anytime before the expiry time. After that, the Quote is no longer valid, and you will have to publish a new one if you want to renew the offer.
4. **Notional Amount** OR **Repayment Amount:** You will need to fill one of these fields, and the other will populate automatically. The notional amount represents the size of the loan today, and the repayment amount represents the final amount (i.e. principal plus interest) that needs to be repaid by the maturity date of the loan. If you enter in the notional amount, the app will automatically calculate and indicate what the repayment amount should be based on your notional amount, APR, and maturity date. Vice versa, if you prefer to specify the final repayment amount instead, the app will back out what today’s notional amount would be.

Once you’ve filled in all the terms, hit “Publish Quote” and your Metamask wallet will ask you to sign a digital signature verifying that you agree to publish these loan terms. Once you,ve agreed, your *Quote* is live! *Quotes* that belong to you are highlighted in blue in the main *Marketplace* page. You can also cancel your *Quotes* anytime, even before they expire (though you will have to pay gas fees to do so).
