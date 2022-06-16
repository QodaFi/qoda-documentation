---
sidebar_position: 1
---

# QAdmin

## Introduction

The QAdmin contract contains meta-information on all supported `Asset`s and available `FixedRateMarket`s for borrowing and lending for each `Asset`. An ERC20 `Asset` on Qoda is (potentially) enabled for two purposes: 

1. For being supplied as collateral. The value of the collateral is determined by its USD value (as determined by on-chain Chainlink oracle), MULTIPLIED by its `collateralFactor` (a value between [0,1]). Generally, large or liquid tokens will have higher `collateralFactor`s while small or illiquid tokens will have lower `collateralFactor`s. A `collateralFactor` of zero implies that the `Asset` is not supported as a collateral token.

2. For creating `FixedRateMarket`s for borrowing and lending the ERC20. The value of borrows of the ERC20 is determined by its USD value (as determined by the on-chain Chainlink oracle), DIVIDED by its `marketFactor` (a value between [0,1]). Generally, large or liquidt tokens will have higher `marketFactor`s while small or illiquid tokens will have lower `marketFactor`s.

## Assets

```
function assets(address token) external view returns(Asset memory)
```

Returns the `Asset` data for any given ERC20. An `Asset` is a struct with the following fields:

```
struct Asset {
    bool isEnabled;
    bool isYieldBearing;
    address underlying;
    address oracleFeed;
    uint collateralFactor;
    uint marketFactor;
    uint[] maturities;
}
```

* `isEnabled` : True if the ERC20 is enabled on Qoda, false otherwise.
* `isYieldBearing`: Indicates if the `Asset` is a yield-bearing token, for example a Moonwell mToken.
* `underlying`: The address of the underlying ERC20 token.
* `oracleFeed`: The corresponding Chainlink oracle address for determining the value of the `Asset`.
* `collateralFactor`: Used for discounting the value of collateral supplied in the ERC20. Value between [0,1], scaled by 1e8.
* `marketFactor`: Used for applying a premium on the value of borrows of the ERC20. Value between [0,1], scaled by 1e8.
* `maturities`: An iterable array of all the enabled maturities (UNIX timestamp in seconds) for the ERC20. An empty array implies there is no available `FixedRateMarket` for borrowing and lending this ERC20.

## FixedRateMarket

```
function fixedRateMarket(address token, uint maturity) external view returns(address)
```

Returns the address of the `FixedRateMarket`. A `FixedRateMarket` is a self-contained smart contract that handles all borrowing and lending for a particular market. A `FixedRateMarket` is characterized by two fields:

1. `token`: The underlying ERC20 token that can be borrowed or lent.
2. `maturity`: The datetime (UNIX timestamp in seconds) after which borrows should be repaid, and when lendings may redeem their underlying. 

Hence, for a particular ERC20, there may be multiple `FixedRateMarket`s corresponding to different `maturity` dates.
