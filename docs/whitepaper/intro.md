---
sidebar_position: 1
title: Introduction
slug: /
---

# Qoda Whitepaper

---

<p style={{ color: "red" }}>*****NOTE: The documentation page is under constant development. Please check back frequently for updates.*****</p>

## 1.0 Intro To Qoda: Summary Of Features

The Qoda Protocol is a DeFi lending/borrowing protocol built on Moonbeam Network with several key features: 

1. On-Chain Orderbook For Lending/Borrowing
2. Isolated Collateral-Tier vs Market-Tier Assets
3. Hybrid Overcollateralized/Undercollateralized Borrowing
4. Fixed Interest Rate, Fixed Maturity Loans
5. Repayment Redemption Ratio (RRR)

Over the course of the whitepaper, we’ll go over each of these key features in closer detail. First, let’s take a survey of today’s incumbent money market protocols (e.g., Compound, Aave, etc). Current money market protocols (Henceforth, *Money Market v1.0 Protocols*) have been one of the most promising sectors of DeFi with real product-market fit. However, *Money Market V1.0 Protocols* typically have several key deficiencies.

## 1.1 The Global Collateral Problem

*Money Market v1.0 Protocols* have a global collateral system. This severely limits the number of markets the protocol can support. Any single asset that is supported poses a systemic risk to the entire system if it collapses. Hence, these protocols work excellently for blue-chip assets, but will never be able to support long-tail assets.

## 1.2 The Price Discovery Problem

*Money Market v1.0 Protocols* use a so-called static *Interest Rate Curve* that adjusts the floating interest rate based on the utilization ratio of borrowers to lenders in a particular market. However, the *Interest Rate Curve* itself is set a priori, and there are no guarantees that the curve has been configured appropriately to reflect real supply/demand and price discovery. 

## 1.3 The Overcollateralization Problem

*Money Market v1.0 Protocols* only support overcollateralized borrowing. This is a necessity in a trustless DeFi ecosystem. However, this type of system has very limited real-world use cases where demand for overcollateralized borrowing is generally correlated with bull markets. Specifically, users only borrow overcollateralized for the purpose of facilitating leveraged trading. However, in sideways or bear markets, demand for overcollateralized borrowing dries up. In contrast, uncollateralized borrowing is equally in demand in both bull or bear markets because it suits a wider variety of business needs for the capital.

## 1.4 Qoda Protocol Features

To address the *Global Collateral Problem*, Qoda has the concept of two tiers of assets, `Collateral-Tier Assets` and `Market-Tier Assets`. Assets that are enabled for collateral are distinctly segregated from assets that are enabled for lending/borrowing markets. The list of assets enabled for collateral is highly restrictive. Typically only low-risk, high caliber assets (e.g. stablecoin, BTC, ETH, etc) are supported as collateral assets. Meanwhile, the list of assets for which a lending/borrowing market can be spun up can be much more permissively (perhaps in future iterations, even 100% permissionlessly).

To address the *Price Discovery Problem*, Qoda implements an on-chain orderbook of fixed interest rate, fixed maturity borrow/lend orders. The current market rate for the `APR` on loans is determined by supply and demand of market participants themselves. This is the purest mechanism for price discovery of current interest rates.

To address the *Overcollateralization Problem*, Qoda uses a hybrid under/over-collateralized borrowing model. Unpermissioned anonymous users must deposit collateral before they can borrow. However, Qoda also allows verified, credit assessed institutional borrowers to borrow with reduced or zero collateral. A side benefit of this is that uncollateralized borrowers can generally pay higher APRs, an attractive bonus for lenders seeking yield.
