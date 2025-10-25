#!/bin/bash
set -e

LIBS=("card" "button" "input" "core")
DIST_ROOT="dist"
DIST_PACK="dist-pack"
# Detecta a branch atual
BRANCH=$(git rev-parse --abbrev-ref HEAD)

for LIB in "${LIBS[@]}"; do
  cd "$DIST_ROOT/$LIB"
  TGZ_ORIGINAL=$(npm pack | tail -n 1)

  # Decide o nome do arquivo
  case "$BRANCH" in
    beta|alpha|rc)
      NEW_NAME="${LIB}.${BRANCH}.tgz"
      ;;
    *)
      DIA=$(date +%d)
      MES=$(date +%m)
      ANO=$(date +%Y)
      NEW_NAME="${LIB}.dev.${DIA}.${MES}.${ANO}.tgz"
      ;;
  esac

  mv "$TGZ_ORIGINAL" "../../${DIST_PACK}/$NEW_NAME"
  cd - > /dev/null
done