---
sidebar_position: 4
---

# Redemptions & Repayments

The "Portfolio" page is where users may go to repay their borrows, or to redeem their lends for the full principal plus interest amount.

<center>
  <img src="/img/getting-started/redemptions-repayments/1.png"></img>
  <p><i>Portfolio Page</i></p>
</center>

# Redemptions

If you have lent tokens in a *Market*, you can claim your full principal plus interest payment once the *Market* has matured and the redemption period has opened. You may do so by selecting "Redeem" (highlighted in red) under "Actions" in the "Open Positions" table. Note that the "Redeem" button will be greyed out until after the redemption period has opened.

The amount you can redeem is determined by the amount of [*qTokens*](/glossary-of-terms#qtoken) your wallet holds. Upon redemption, your *qTokens* will be burned at a 1:1 ratio in exchange for the actual underlying token.

By convention, the redemption period is set to be 8 hours after the maturity time to allow a grace period for borrowers to repay their loans. Once the repayment period is open, it will remain open forever so you can redeem at any time.

# Repayment

If you have borrowed tokens in a *Market*, you may repay your loans anytime by selecting "Repay" (highlighted in blue) under "Actions" in the "Open Positions" table. This means you can repay your loans early before they actually expire (Alternatively, since Qoda treats borrowing and lending in the same *Market* as inverse actions you can also effectively exit your loans by lending the equivalent amount in the same *Market*).

However, you must pay back your loan by the maturity date indicated in the table. In general, the maturity date will be on the last business day of the month at 4:00pm UTC. If you do not repay your loan by the maturity date, your account is eligible to be liquidated and your collateral will be seized to repay the loan and incur a liquidation penalty.

# Open Quotes

The "Portfolio" page also lists the status of your live, open *Quotes*, if you have published any. You may cancel your *Quotes* anytime on this page by selecting "Cancel" under "Actions" in the "Open Quotes" table.
