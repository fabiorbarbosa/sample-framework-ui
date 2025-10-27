#!/usr/bin/env bash

set -euo pipefail

REPO_BASE_URL="${SAMPLE_LIBS_BASE_URL:-https://raw.githubusercontent.com/fabiorbarbosa/sample-framework-ui}"
REF="${SAMPLE_LIBS_REF:-main}"
TAG_SUFFIX="${SAMPLE_LIBS_TAG:-dev.26.10.2025}"
TARGET_DIR="${1:-.}"
SLEEP_SECONDS="${SAMPLE_LIBS_SLEEP:-10}"

LIBS=(core card button input)

log() {
  printf '[install-from-github] %s\n' "$1"
}

retry_install() {
  local lib="$1"
  local attempt=1
  local tarball="${REPO_BASE_URL}/${REF}/dist-pack/${lib}.${TAG_SUFFIX}.tgz"
  local spec="@sample-framework-ui/${lib}@${tarball}"

  while true; do
    log "instalando ${lib} (tentativa ${attempt})"
    if npm install --prefix "${TARGET_DIR}" "${spec}"; then
      log "${lib} instalado com sucesso"
      break
    fi

    log "falha ao instalar ${lib}. Aguardando ${SLEEP_SECONDS}s antes de tentar novamente..."
    sleep "${SLEEP_SECONDS}"
    attempt=$((attempt + 1))
  done
}

for lib in "${LIBS[@]}"; do
  retry_install "${lib}"
done

log 'instalação concluída.'
