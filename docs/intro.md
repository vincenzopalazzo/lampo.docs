---
sidebar_position: 1
title: Lampo Deamon
description: 'Lampo Daemon: A robust and efficient Rust-based lightning node deamon.'
---

# Table of Contents

- Why another lightning node?
- Architecture
- Features
- Compatibility with the protocol 
- Compatibility with other lightning implementations
- How to Contribute

## Why another lightning node?

While there are already well-known lightning implementations like [core lightning](https://github.com/ElementsProject/lightning), 
[lnd](https://github.com/lightningnetwork/lnd), and [eclair](https://github.com/ACINQ/eclair), none are open-source implementations 
of a lightning node using [ldk](https://github.com/lightningdevkit/rust-lightning).

Moreover, there currently exists no true Bitcoin Core equivalent in the lightning domain. This is because all 
existing implementations are company-driven, often shaped by specific business requirements.

## Features

The "Lampo" lightning node implementation strives to be an open-source solution that addresses several distinct use cases:

- **Swappable API**: Many existing solutions are locked into their initial design decisions. With "Lampo", we 
recognize that early choices might not always be the most optimal in the long run. With our architecture, an API 
is merely a handler capable of executing a method with a given name and returning a JSON response compliant with 
the [JSON RPC 2.0 specification](https://www.jsonrpc.org/specification).
  
- **Swappable Wallet**: The Lampo daemon will come bundled with a hot wallet (including hardware wallet support). However, 
thanks to the Lampo SDK, we offer a straightforward interface for wallets. This design encourages seamless integration with 
existing on-chain wallets (e.g., incorporating a lightning node into an on-chain mobile wallet).
  
- **Swappable On-Chain Data Source**: Acquiring Bitcoin data can be done in various ways. The Lampo daemon currently supports 
bitcoind and nakamoto (BIP 157), but it's also designed to allow the integration of custom on-chain data sources.
  
- **Plugin System (similar to core lightning)**: Great software often borrows from its predecessors. Lampo's goal (still in development)
 is to introduce a plugin system akin to what's found in core lightning. This approach will enable Lampo's functionality to be expanded 
 by leveraging the same principles as the Swappable API.

- **Protocol Extension**: Allow extend the lightning protocol throughs plugins by sending and handing 
lightning network messaggin. However, this is really hard to do if the protocol extension required 
change in ldk, but these problem will be analyzed and solved when they came up.

## How to Use

The Lampo node is built using the Lampo SDK, which comprises the following main components:

- **Lightning Node**: Represented by the `LampoD` struct.
- **Backend**: A source of Bitcoin Blocks.
- **WalletManager**: A wrapper around a standard wallet that facilitates interactions with the lightning wallet.

From a user's perspective, there are two primary components: `lampod-cli` (a command line tool for configuring the node) 
and `lampo-cli` (a command line tool for interacting with the node).

The `lampod-cli` employs the Lampo SDK to construct a lightning node equipped with both a Wallet and a Blockchain Data Source. It accepts
 a runtime flag `--config <path-of-the-datadir-root>`, instructing the daemon where to look for a configuration file. As the product is still in
  its early stages, the Lampo daemon currently expects a configuration file named `lampod.conf` at the root of the specified directory.

Here's an example of a basic configuration file:
```
backend=core
core-url=http://127.0.0.1:38332
core-user=vincent
core-pass=vincent

network=signet
port=39736
```

To run the Lampo daemon with the configuration file located at `~/.lampo/signet/lampo.conf`, use the following command:

> **Note**: Before running `lampod`, ensure that Bitcoin Core is already running. Additionally, `lampod` utilizes Bitcoin Core as its wallet.

```bash
lampod-cli --config ~/.lampo/signet
```

Upon starting the node, it will display the BIP 39 seed phrase on the terminal for wallet restoration purposes. If you 
wish to restore the wallet later, use the following command:


```bash
lampod-cli --config ~/.lampo/signet --restore-wallet "<seed words>"
```

Once the node is up and running, you can open a separate terminal and use `lampo-cli` to interact 
with the daemon. To retrieve information using the `getinfo` function, execute the following command:


```bash
lampo-cli --socket ~/.lampo/signet/lampod.socket getinfo
```

## Compatibility with the Protocol

Lampo is fully compatible with the current lightning protocol. This compatibility is 
not only due to LDK's full compliance but also our thorough integration testing 
using [lnprototest](https://github.com/rustyrussell/lnprototest). This ensures that every time we make
 an update or upgrade an LDK version, we aren't introducing regressions.

## Compatibility with Other Lightning Implementations

Being protocol-compliant doesn't necessarily mean that we're compatible with all other Lightning Network 
implementations. Currently, our integration testing focuses on interactions between Lampo and core lightning.
We aim to support more implementations in the future, but this requires additional interoperability support.

By focusing on this integration, we can confidently state that core lightning and LDK maintain compatibility 
at the implementation level, ensuring smooth operations.

## Future Features

We are in the process of constructing a robust architecture that caters to the diverse 
needs of the contemporary Lightning Network community. Some potential additions we're evaluating include:

- **Fedimint Support**: Given Fedimint's architecture and minimal lightning prerequisites, 
incorporating this feature should be straightforward.
  
- **LSP Support**: Our design philosophy views an LSP as just another API. With the LDK 
LSP library, supporting this becomes even simpler. More details can be found [here](https://github.com/lightningdevkit/ldk-lsp-client).
  
- **VLS Support**: This is a dynamic area of research for us, as we explore 
possibilities for a Swappable Signer.
  
- **Comprehensive Integration**: Our goal is to serve as a reliable alternative for anyone 
looking to integrate lightning, ranging from exchanges to individual wallets.
