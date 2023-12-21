---
sidebar_position: 3
---

# qTokens and Early Exit

## qTokens

After you've lent your tokens, you may redeem for your full principal plus interest once the *Market* expires. It is important to understand how [qTokens](https://docs.qoda.fi/glossary-of-terms#qtoken) work, which are the units for redemption.

Each *Market* has an associated *qToken*, which is minted to a user when they lend to the *Market*. *qTokens* represent the full principal plus interest amount that the user will earn when the *Market* matures. You may think of *qTokens* as a receipt that you have deposited funds and indicates how much you can receive at the end of the loan.

The advantage of *qTokens* is that they allow for greater capital allocation efficiency. Without them, the user would have to wait for the return of their funds and interest. However, *qTokens* help track the value of the future cash flow. More importantly, they are also the mechanism that allows users to *Exit Early* from their loans.

To see the qTokens associated with a specific market, click on the *+Add to Metamask* button on the right.

<center>
  <img src="/img/getting-started/qtokens/qtokens1.png"></img>
  <p><i>Add qToken to Metamask</i></p>
</center>

After you've successfully lent to the *Market*, the protocol will automatically mint *qTokens* to your wallet. In Metamask, it will look something like this:

<center>
  <img src="/img/getting-started/qtokens/2.png"></img>
  <p><i>qTokens in Metamask</i></p>
</center>

## Early Exit

One exciting feature of Qoda is that it allows you to *Exit Early* from loans. So just because you have entered into a 1-year loan, it does not necessarily mean you have to wait one year to get back your principal plus interest.

Qoda fundamentally treats *Lending* and *Borrowing* as inverse functions. Therefore, if you've **lent** to a *Market*, you can reverse it anytime by **borrowing** the equivalent amount (and vice versa).

Example. Suppose on 1 January 2023, a user has 0.1 BTC.

> Date: 01/01/2023

> BTC Balance: 0.1

> qBTCDEC23 Balance: 0

They want to lend 0.1 BTC at 10% APR for 1 year via the BTCDEC23 *Market*. They will immediately receive 0.11 qBTCDEC23 qTokens (initial amount + interest).

> Date: 0/01/2023

> BTC Balance: 0

> qBTCDEC23 Balance: 0.11

Six months later, on 30 June 2023, the user wants to cash out half of their BTC. They can do this by borrowing 0.05 BTC from BTCDEC23 market. Lets say the APR is 10% again. Note that a user will to pay 10% APR on this for the remaining 6 months (so roughly 5% in total):

> Date: 30/06/2023

> BTC Balance: 0.05

> qBTCDEC23 Balance: 0.11 - 0.05*(1 + 10% / 2) = 0.0575

The most important thing here is that the amount of this debt will be deducted from the existing *qTokens* balance, and the user's *qTokens* are instantly converted back into the underlying BTC. Suppose they hold on the remaining qBTCDEC23 qTokens until the *Market* expires. The final balance will be:

> Date: 12/31/2023

> BTC Balance: 0.1075

> qBTCDEC22 Balance: 0

Through *qTokens*, users have the flexibility to exit open positions early even when the *Market* has not expired yet!
