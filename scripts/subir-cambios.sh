#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# subir-cambios.sh
# Workflow "sube los cambios" — BOMBERO (Origenlab)
#
# Genera UN commit general con TODOS los cambios del working tree y los sube
# a origin/main. Diseñado para correrse con:
#
#     bash ~/Documents/Claude/Projects/BOMBERO/scripts/subir-cambios.sh
#
# Verifica antes:
#   • repo correcto (origin = Origenlab/BOMBERO)
#   • rama main
#   • elimina .git/index.lock huérfano si existe
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

REPO_DIR="$HOME/Documents/Claude/Projects/BOMBERO"
EXPECTED_REMOTE="https://github.com/Origenlab/BOMBERO.git"
BRANCH="main"

cd "$REPO_DIR"

# ── 0) Sanity checks ─────────────────────────────────────────────────────────
echo "▶ Verificando repo en $REPO_DIR"

if [ ! -d .git ]; then
  echo "✖ No es un repo git. Aborto."
  exit 1
fi

CURRENT_REMOTE="$(git remote get-url origin 2>/dev/null || echo '')"
if [ "$CURRENT_REMOTE" != "$EXPECTED_REMOTE" ]; then
  echo "⚠  origin actual: $CURRENT_REMOTE"
  echo "⚠  esperado:      $EXPECTED_REMOTE"
  read -r -p "¿Continuar de todos modos? [y/N] " yn
  [[ "$yn" =~ ^[Yy]$ ]] || { echo "Aborto."; exit 1; }
fi

# Limpiar index.lock huérfano si existe (residuo de proceso anterior)
if [ -f .git/index.lock ]; then
  echo "⚠ Eliminando .git/index.lock huérfano…"
  rm -f .git/index.lock
fi

# Asegurar rama main
CUR_BRANCH="$(git branch --show-current)"
if [ "$CUR_BRANCH" != "$BRANCH" ]; then
  echo "⚠ Rama actual: $CUR_BRANCH (esperaba $BRANCH)"
  read -r -p "¿Cambiar a $BRANCH? [Y/n] " yn
  if [[ "$yn" =~ ^[Nn]$ ]]; then
    echo "Continuando en $CUR_BRANCH"
    BRANCH="$CUR_BRANCH"
  else
    git checkout "$BRANCH"
  fi
fi

# ── 1) Mostrar resumen ───────────────────────────────────────────────────────
echo
echo "▶ Cambios pendientes:"
git status --short
TOTAL="$(git status --short | wc -l | tr -d ' ')"
echo
echo "   Total: $TOTAL archivos"
echo

read -r -p "¿Confirmar commit + push? [Y/n] " yn
[[ "$yn" =~ ^[Nn]$ ]] && { echo "Cancelado."; exit 0; }

# ── 2) Stage + commit ────────────────────────────────────────────────────────
git add -A

# Mensaje de commit auto-generado con resumen + fecha
DATE_TAG="$(date +%Y-%m-%d)"
COMMIT_MSG="seo+geo+ui: directorio (FAQ schema, búsqueda Pagefind, tabla municipios, llms.txt, AI bots, conteos reales, EstacionLayout extendido) + cambios previos blog/productos/layouts — ${DATE_TAG}"

git commit -m "$COMMIT_MSG"
HASH="$(git log -1 --oneline)"
echo
echo "▶ Commit: $HASH"

# ── 3) Push ──────────────────────────────────────────────────────────────────
echo
echo "▶ Push a origin/$BRANCH …"
git push origin "$BRANCH"

echo
echo "✔ Listo. Verifica en:"
echo "   https://github.com/Origenlab/BOMBERO/commits/$BRANCH"
echo
echo "✔ Si tienes deploy automático conectado, revisa:"
echo "   https://bombero.mx/directorio/  (tras el build)"
