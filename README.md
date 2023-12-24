# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

This build process require `nix`, so please install it and run the following command

``` nix
nix develop
```

### Installation

```
$ make dep
```

### Local Development

```
$ make
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ make build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
