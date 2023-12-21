---
sidebar_position: 4
---

# Depositing Collateral

Before you are able to borrow on Qoda, you must first deposit collateral. To deposit collateral on Qoda, first navigate to the Collateral page:

<center>
  <img src="/img/getting-started/depositing-collateral/coll1.png"></img>
  <p><i>Collateral Page</i></p>
</center>

This page lists all the *Assets* that are accepted as collateral. The first time you deposit collateral, you’ll have to enable the tokens first to be transferred. Each collateral *Asset* has its own associated *Collateral Factor*, which is a number from 0–100% that represents a weighting of how much lesser the Qoda collateral system will value your collateral from its current market price due to the perceived market risk of the token. For example, if the price of USDC is $1.00, the *Collateral Factor* of USDC is 81%, and you deposited 1,000 USDC into Qoda, then the collateral system will calculate it as worth $810 for collateral purposes.

Generally, large, liquid, safer Assets have high *Collateral Factors*, while small, illiquid, riskier Assets have low *Collateral Factors*. If an Asset has a 0% *Collateral Factor*, it can’t be used as collateral, though it can still be lent or borrowed in Qoda *Markets*.

<center>
  <img src="/img/getting-started/depositing-collateral/coll2.PNG"></img>
  <p><i>Deposited Collateral</i></p>
</center>

To deposit collateral, select the asset and enter the amount you wish to deposit. 

To withdraw your collateral, click *Withdraw*, enter the desired amount and click *Withdraw* again. If you are withdrawing *mTokens*, you are given the option to automatically unwrap the *mTokens* back into the underlying token by checking the box.

<center>
  <img src="/img/getting-started/depositing-collateral/coll3.png"></img>
  <p><i>Withdrawing Collateral</i></p>
</center>

Once you’ve successfully deposited collateral, you can see that the page refreshes with:

1. the amount of tokens you have deposited
2. the USD value of the tokens you have deposited
3. the Collateral Factor
4. the Collateral-Factor-adjusted value of your collateral.

You can withdraw your collateral as long as it does not put your *Account Health* below 1.1, and you can also deposit more collateral anytime.

At the top of your screen, the app will also display:

1. *Account Health*, which measures how close your account is to being liquidated. Any account with Account Health < 1.0 can be liquidated.
2. *Collateral Value*, which is the current combined market value of all your collateral in USD
3. *Borrow Value*, which is the current combined market value of all your borrows in USD

# Collateral Mechanics

For a deeper technical understanding of how collateral works and how values like Account Health are calculated, you can check the Collateral Management section of the [Qoda Whitepaper](/whitepaper/qoda-protocol#25-collateral-management).
