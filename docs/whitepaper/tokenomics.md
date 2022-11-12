---
sidebar_position: 3
title: Tokenomics & Token Utility
---

# Qoda Whitepaper

---

## 3.0 Tokenomics & Token Utility

QODA is the native token of the protocol. There is a fixed, fully-diluted, non-inflationary supply of 1,000,000,000 QODA tokens. The native QODA token confers no additional utility or rights, but can be staked for veQODA, inspired by the tokenomics design of Platypus Finance.

By default, each 1 QODA token that is staked will generate 0.00004 veQODA per block, until it reaches a cap of 100x the initial staked amount, i.e. a max of 100 veQODA tokens for every staked QODA. It will take roughly 1 year for the staked token to reach the veQODA cap. veQODA tokens will be neither transferrable nor tradable, i.e. locked in the staker’s wallet, and users may unstake their QODA tokens at any point. However, any accumulated veQODA tokens immediately drops to 0 as soon as the user unstakes any amount. This incentivizes users to remain long-term aligned with the goals of the protocol, while at the same time providing the flexibility for liquid staking and unstaking without any minimum staking period.

The veQODA tokens confer three primary benefits:

1. A share of all protocol fees as a percentage of the full current supply of veQODA.
2. Token emissions of QODA, distributed as a percentage of the full current supply of veQODA.
3. Governance DAO rights

All veQODA parameters are subject to modification via governance, and more features may be added in the future.

## 3.1 Protocol Fees

The protocol takes an annualized fee on all executed loans and charges on pro-rated basis depending on the maturity of the loan. For example, if the annual fee for a market is 1.5% and a user takes a loan expiring in 3 months, the fee charged will be approximately 1.5% / 4 = 0.375%. The fee is applied to both sides – both to the lender and the borrower – and  is pro-rated linearly as a function of the maturity of the loan.

The most natural way to take fees is in the currency of the denomination of the loan. However, rather than requiring staked tokenholders (see section 3.0) to claim the protocol fees in various different currencies, the protocol will automatically convert all accrued fees on any given Market (once it has reached a meaningful amount) to a common base currency (e.g. GLMR) and distribute rewards to stakers in this common currency.
