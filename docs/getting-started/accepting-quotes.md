---
sidebar_position: 3
---

# Accepting Quotes

*Quotes* are Qoda's off-chain orders using digital signatures to either lend or borrow a particular token for a user-specified size, APR, and maturity date. We can see all the available *Quotes* that other users have published on the *Markets* page.

<center>
  <img src="/img/getting-started/accepting-quotes/1.png"></img>
  <p><i>Qoda Marketplace</i></p>
</center>

For example, here we are viewing all the active *Quotes* for the DEV token for the July 2022 *Market*. If you wish to *lend* DEV tokens, you should inspect the active *Quotes* on the left-hand column under "Lend DEV". If you wish to *borrow* DEV tokens, you should inspect the active *Quotes* on the right-hand column under "Borrow DEV". In this case, let's suppose we want to borrow DEV tokens. The best available *Quote* for us is to borrow 0.1 DEV at 4.20% APR. To execute the borrow, we click the "Borrow" button, which we've highlighted in red. 

<center>
  <img src="/img/getting-started/accepting-quotes/2.png"></img>
  <p><i>Loan Details</i></p>
</center>

This takes you to the *Accept Quote* page. You can first inspect the Loan Details to ensure you understand and agree with the terms of the loan.

Some details to note: 

1. The exact *Maturity* time, which is the deadline for borrowers to repay their loans is by convention set to be at 4:00PM UTC on the last weekday of the month. So for example, DEVJUL22 has a *Maturity* time of 29th July, 2022, 4:00PM UTC. If a borrower has not repaid their loan after this time, they are eligible to be liquidated by liquidators and take a penalty against their posted collateral.

2. The *Redemption* time, which is the time after which lenders may redeem their *qTokens* for the underlying token plus interest, is by convention set to be 8 hours after the *Maturity* time. This gives borrowers a grace window for repaying their loans first.

3. The *Notional* is the maximum size of a *Quote*. You can not accept a *Quote* for a larger size than the *Notional*, but you can partially accept a *Quote* for a smaller amount than the full notional size.

<center>
  <img src="/img/getting-started/accepting-quotes/3.png"></img>
  <p><i>Accept Quote</i></p>
</center>

Once you've reviewed the details of the loan, you may choose to accept the *Quote*. Here, you must fill one of two fields. You can either specify:

1. *Notional Amount*, which is the amount that gets borrowed or lent today. If you are borrowing, this is the amount you will receive immediately upon accepting the *Quote*. If you are lending, this is the amount you will be lending immediately upon accepting the *Quote*. In our case, since we want to borrow, we will be receiving 0.01 DEV immediately upon accepting the *Quote*.
2. *Repayment Amount*, which is the amount that will be repaid at *Maturity*. If you are borrowing, this is the amount you will have to pay upon the *Maturity* time. If you are lending, this is the full principal plus interest amount you will receive upon the *Maturity* time. In our case, since we are borrowing, we will have to repay 0.010013726161011310 DEV at *Maturity*.

You will only need to fill out one of *Notional Amount* or *Repayment Amount*. The app will calculate the other for you automatically.

Once you are satisfied with the details, you can proceed to accept the *Quote* to execute the loan. Note that if you are lending for the first time, you may need to approve the smart contract first. If you are borrowing, you will have to [deposit collateral](/getting-started/depositing-collateral) first.

After you have accepted the *Quote*, you will generate a position which you can inspect and manage in the "Portfolio" page.
