---
sidebar_position: 1
title: Introduction
---

# Qoda Whitepaper

---

## 1.0 Introduction

The most popular collateralized lending/borrowing protocols today generally offer floating interest rates via pools which users can supply or borrow from. While these protocols create a lot of value for users looking to deploy their capital, there is increasingly more demand both from lenders and borrowers for more predictable, fixed interest rates. Furthermore, with fixed rate deals recorded on-chain across a variety of maturity dates, one can start to construct a new DeFi primitive, the crypto Yield Curve. As in traditional financial markets, the yield curve is the fundamental building block upon which more complex and customized fixed income products can be built.

Shoehorning support for fixed interest rates using AMM-style liquidity pools has proven to be a difficult task so far. One reason is that it can be difficult to correctly model what price impact / slippage should look like for rates. Another is that with the sheer number of markets for a single token (e.g. Quarterly, monthly, weekly maturity dates) – it will quickly get very capital intensive for liquidity providers who need to put up massive sums of capital to keep such a large number of markets liquid. In tradfi, orderbooks or auction-based marketplaces avoided these issues because 1) the limit order system properly reflects the non-linear, time-dependent nature of real supply and demand and 2) capital doesn’t need to put up front when placing orders, only when trades are executed. Orderbooks are infeasible for fast-moving cryptocurrency markets due to transaction fees and minimum block times, but the marketplace model has shown to be effective for slower, more illiquid products such as NFTs (e.g. Opensea). Similarly, a marketplace model can be effective for a slower moving product such as fixed income.

Furthermore, while there are protocols that offer variable yield staking for tokens, and numerous protocols that offer loans denominated in stablecoin, there are perhaps no protocols today that offer fixed interest rate borrowing/lending of altcoins. This is important because the ability to borrow altcoins enables users to short the token (i.e. borrow and sell the token today for stablecoin, and buy back the token in the future at a lower rate). This type of market needs to be at fixed rates because a floating cost of borrow presents too much risk to traders, especially if there is a short squeeze. The option to short a security is vital to the overall health of the market, and there are perhaps no protocols available today that enable this function.

With these three issues in mind, we introduce the Qoda protocol, a collateralized lending/borrowing protocol differentiating itself with three features: fixed interest rates over fixed maturity dates, implementing a marketplace model instead of AMM, and a focus on altcoin-denominated loans. The long-term mission of the protocol is to grow the crypto interest rates market to become as popular and mature as the crypto currency markets are today by building a complete fixed income solution for the DeFi world.
