---
slug: testing
title: Vertical Integration Testing vs Self-Integration Testing
authors: [vincenzopalazzo]
tags: [lampo, lightning-network]
---

Hi,

In this post, we describe how we are testing our lightning node implementation and how we are integrating the [Lightning Network Interoperability Initiative](https://lnspec-tools.github.io/ln-interoperability-initiative/CHARTER.html#lightning-network-interoperability-initiative-charter) into our development.

Different kinds of integration testing
Before start describe how we implement our integration testing, we need to introduce the definition of Vertical Integration Testing and Self Integration Testing.

From Lightning Network Interoperability Initiative we find the definition:

- Vertical Integration Testing: An implementation must be tested alongside other implementations.
- Self-Integration Testing: An implementation must be tested for compliance with its own standards (note: most major implementations are currently doing this).

So in this post, we describe how we choose to develop our integration testing and what kind of results there are to bring to us.

Lampo Node Integration testing
Lampo is built with LDK which mean that we already have a tested library with a self-integration test, but this do not make us safe from bug.

In fact, an LDK node is required to implement a sequence of workflows to manage events and interact with external systems while an event is received or generated. This can introduce bugs and can lead us to strange bugs that are not happening on LDK integration testing. Another important source of bugs is the integration with other implementations.

To solve this problem and deploy a safer lightning node implementation, we are going to write a sequence of integration tests with the tool provided by the Lightning Network Interoperability Initiative and write a basic integration test between lampo and a core lightning node.

What we have found
While writing this test required a big amount of work, we also had some security checks when we were migrating lampo to a new version of ldk or when we needed to reproduce a bug that happened with some specific version of core lightning.

Recently we were upgrading Lampo to a new version of LDK, and we noted that our payments from lampo to Core Lightning were failing. We found that something was wrong between LDK and core lightning and we are investigating this issue.

To read more about this issue or to help us please join our [zulip dev channel](https://lampo-dev.zulipchat.com/join/fk3kd7btbyoiqrfmveblz2kr)

Cheers,

Vincent.
