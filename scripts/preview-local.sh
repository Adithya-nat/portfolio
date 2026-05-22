#!/usr/bin/env bash
set -euo pipefail

repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

rm -rf "$repo_dir/dist"
mkdir -p "$repo_dir/dist"
cp "$repo_dir/site/index.html" "$repo_dir/dist/index.html"

echo "Serving portfolio from $repo_dir/dist"
echo "Open http://localhost:4173/"
python3 -m http.server 4173 --directory "$repo_dir/dist"
