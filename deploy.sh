#!/usr/bin/env bash
# Builds the static site (out/) and rsyncs it to the server.
# Usage: ./deploy.sh            deploy
#        ./deploy.sh --dry-run  show what would change, upload nothing
set -euo pipefail
cd "$(dirname "$0")"

SERVER="${DEPLOY_HOST:-bs.gymkeeper.fi}"
REMOTE_DIR="${DEPLOY_DIR:-sites/boulderlakeus/}"   # same layout as sites/boulderporvoo/

npm run build

# Trailing slashes matter: copy the contents of out/ into REMOTE_DIR.
# --delete removes files on the server that no longer exist in the build.
rsync -avzh --delete "$@" out/ "$SERVER:$REMOTE_DIR"
