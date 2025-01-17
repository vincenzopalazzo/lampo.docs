{
  description = "Lampo SDK documentation site";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages.${system};
      in {
        packages = {
          default = pkgs.just;
        };
        formatter = pkgs.nixpkgs-fmt;

        devShell = pkgs.mkShell {
          buildInputs = [ pkgs.just pkgs.pnpm pkgs.nodejs ];
          buildPhase = "just";
          shellHook = ''
             export CI="false"
             alias make="just"
             '';
        };
      }
  );
}
