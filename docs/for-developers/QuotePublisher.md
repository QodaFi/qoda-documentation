---
sidebar_position: 1
---

# QuotePublisher

## Introduction

A Quote is a live order created by a user which specifies the terms under which they will enter into a fixed rate loan. The Quote can be thought of as analogous to a "limit order" in an orderbook, or an "offer" in a NFT marketplace.

Quotes are implemented via Ethereum signed messages. This technically allows users to create Quotes off-chain without having to pay transaction fees. However, for a Quote to be visibly published on the Qoda frontend, it will still need to be sent to the Qoda QuotePublisher smart contract where it will be recorded on-chain as an Event.

The basic structure of a Quote looks like this:

| Type | Field | Description |
| -----| ----- | ----------- |
| address | fixedRateMarketAddress | Address of the FixedRateMarket contract |

```
Quote {
  address fixedRateMarketAddress,
  address quoter,
  uint8 quoteType,
  uint8 side,
  uint64 quoteExpiryTime,
  uint64 APR,
  uint256 cashflow,
  uint256 nonce,
  bytes signature
}
```

fixedRateMarketAddress - The address of the FixedRateMarket contract <br/>
quoter - the address of the creator of the Quote <br/>
quoteType -
side - 