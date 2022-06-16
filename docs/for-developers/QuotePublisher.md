---
sidebar_position: 2
---

# QuotePublisher

## Introduction

A Quote is a live order created by a user which specifies the terms under which they will enter into a fixed rate loan. The Quote can be thought of as analogous to a "limit order" in an orderbook, or an "offer" in a NFT marketplace.

Quotes are implemented via Ethereum signed messages. This technically allows users to create Quotes off-chain without having to pay transaction fees. Currently, though, for a Quote to be visibly published on the Qoda frontend, it will still need to be sent to the Qoda QuotePublisher smart contract where it will be recorded on-chain as an Event.

The basic structure of a Quote looks like this:

| Type | Field | Description |
| -----| ----- | ----------- |
| address | fixedRateMarketAddress | Address of the FixedRateMarket contract |
| address | quoter | Address of the creator of the Quote |
| uint8 | quoteType | Valid inputs = {0, 1}. A quoteType of 0 indicates that the `cashflow` value will equal the present-day principal loan amount. A quoteType of 1 indicates that the `cashflow` value will equal the future-day principal plus interest amount. This allows users to conveniently move their entire balance between present and future value. |
| uint8 | side | Valid inputs = {0, 1}. A side of 0 indicates that the Quoter is a borrower. A side of 1 indicates that the Quoter is a lender. |
| uint64 | quoteExpiryTime | Unix timestamp (in seconds) after which the Quote will be expired and no longer valid. Note that quoteExpiryTime=0 is a valid input representing a non-expiring Quote. |
| uint64 | APR | The annual percentage rate of the loan desired by the Quoter, as an integer scaled by 1e4 (e.g. 10.52% = 1052) |
| uint256 | cashflow | Can be either the present-day principal loan amount or future-day principal plus interest amount (see quoteType). Note that either one of these two values can be mathematicaly determined by the either (when APR and maturity date are also specified). |
| uint256 | nonce | To guarantee the uniqueness of the Quote and prevent signature replay attacks. Recommended value is to use current UNIX timestamp in seconds |
| bytes | signature | The ECDSA digital signature of the hash of the above fields. Used for verifying that a Quote is genuine. |

## Generating An Off-Chain Digital Signature

When you publish a Quote using the Qoda app, it will ask you to sign the message, generate the digital signature automatically, and publish it for you. However, if you are an API user or prefer to generate the digital signature yourself, here is an example using Javascript and the web3.js library.

First, create the raw message object:

```
var obj = [
  {'type': 'address', 'value': '0xABC...'}, // fixedRateMarketAddress
  {'type': 'address', 'value': '0xDEF...'}, // quoter
  {'type': 'uint8', 'value': 0}, // quoteType
  {'type': 'uint8', 'value': 0}, // side
  {'type': 'uint64', 'value': 1645464989}, // quoteExpiryTime
  {'type': 'uint64', 'value': 1052}, // APR
  {'type': 'uint256', 'value': new web3.utils.BN("1000000000000000000")}, // cashflow
  {'type': 'uint256', 'value': 1645444993} // nonce
  ];
```

Next create the message hash:

```
var messageHash = web3.utils.soliditySha3(...obj);
```

Generate the digital signature:

```
// `privateKey` is value of the private key of the wallet you wish to sign with.
// Take care not to expose this anywhere!
// We recommend storing it as an environment variable.

var signature = web3.eth.accounts.sign(messageHash, privateKey).signature;
```

## Publishing the Quote On-Chain

After generating the off-chain digital signature, the next step is to publish the Quote fields and signature on-chain as an event so that it can be read by the Qoda app. The Qoda app requires Quotes to be published on-chain for 1) transparency to the public, and 2) to prevent the Qoda marketplace page from being spammed (Strictly speaking, however, a Quote that stays entirely off-chain can be interacted with by a user via a direct smart contract call so long as they enter all the fields and signature properly).

To do this, you can call the `createQuote(...)` function in the Qoda `QuotePublisher` smart contract. Click [here](/contract-addresses) for a list of Qoda smart contract addresses.

```
QuotePublisher quotePublisher = QuotePublisher(0xDEF...)

await quotePublisher.methods.createQuote(
  fixedRateMarketAddress,
  quoter,
  quoteType,
  side,
  quoteExpiryTime,
  APR,
  cashflow,
  nonce,
  signature
  );
```

The only purpose of `createQuote(...)` is to emit an `createQuote` Event on-chain to serve as a record of the Quote being listed, and is the source which Qoda uses to populate its list of available Quotes on the web app.
