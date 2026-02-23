#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# REOPTIMIZACIÓN DE IMÁGENES — BOMBERO.MX
# Redimensiona cada imagen a las dimensiones exactas de su placeholder en UI
# Fuente: backup_originales/ (JPEG originales)
# Destino: public/images/directorio/ (AVIF optimizados por tamaño)
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

BACKUP_DIR="/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/public/images/directorio/backup_originales"
OUT_DIR="/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/public/images/directorio"
CSV_FILE="/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/public/images/directorio/MAPEO_SEO_IMAGENES.csv"
TMP="/tmp/bombero_img_tmp.png"
LOG="$OUT_DIR/reoptimizacion_log.txt"

QUALITY=65
SPEED=8

echo "=== REOPTIMIZACIÓN BOMBERO.MX ===" | tee "$LOG"
echo "Inicio: $(date)" | tee -a "$LOG"
echo "" | tee -a "$LOG"

# ─── Dimensiones óptimas por imagen (analizadas y probadas) ──────────────────
# Estrategia:
#   - Imágenes en uso en UI: dimensión máxima de sus placeholders
#   - estacion-bomberos-veracruz: mantener original (resize lo hace más pesado)
#   - Resto de 108 imágenes: 800x450 estándar para uso futuro
# ─────────────────────────────────────────────────────────────────────────────
get_dims() {
  local seo="$1"
  case "$seo" in
    # Galería index - imagen grande
    "estacion-bomberos-mexico-fachada-01.avif")        echo "800x450" ;;
    # Galería index - items normales
    "camion-bomberos-autobomba-urbana-01.avif")        echo "400x280" ;;
    "rescate-acuatico-bomberos-01.avif")               echo "400x280" ;;
    "bomberos-emergencia-incendio-estructural-01.avif") echo "400x280" ;;
    # Imágenes en cards Y gallery normal — máximo uso = 500x280
    "equipo-hazmat-materiales-peligrosos-01.avif")     echo "500x280" ;;
    "capacitacion-bomberos-profesional-01.avif")       echo "500x280" ;;
    # Gallery normal VER/SLP — max = 500x200
    "estacion-bomberos-maritimo-01.avif")              echo "500x200" ;;
    "estacion-bomberos-refineria-01.avif")             echo "500x200" ;;
    "estacion-bomberos-huracanes-01.avif")             echo "500x200" ;;
    "rescate-espeleologico-cuevas-01.avif")            echo "500x200" ;;
    "rescate-swift-water-rios-01.avif")                echo "500x200" ;;
    # Tall gallery: estacion-veracruz es más pequeña como 1408x768 (skip = usar original)
    "estacion-bomberos-veracruz-01.avif")              echo "SKIP" ;;
    # Tall gallery SLP: 400x500 portrait sí reduce peso
    "estacion-bomberos-profesional-01.avif")           echo "400x500" ;;
    # Resto: tamaño estándar 800x450
    *)                                                  echo "800x450" ;;
  esac
}

# ─── Función: convertir imagen ────────────────────────────────────────────────
procesar_imagen() {
  local original="$1"
  local seo="$2"
  local dims
  dims=$(get_dims "$seo")

  local input="$BACKUP_DIR/$original"
  local output="$OUT_DIR/$seo"

  if [ ! -f "$input" ]; then
    echo "  ⚠️  No encontrado: $original" | tee -a "$LOG"
    return 0
  fi

  # SKIP: mantener imagen tal cual (no redimensionar)
  if [ "$dims" = "SKIP" ]; then
    local size
    size=$(du -k "$output" | cut -f1)
    printf "  ⏭  %-55s → SKIP (mantenida, %sKB)\n" "$seo" "$size" | tee -a "$LOG"
    return 0
  fi

  local W H
  W=$(echo "$dims" | cut -dx -f1)
  H=$(echo "$dims" | cut -dx -f2)

  # Resize con crop centrado → AVIF
  magick "$input" -resize "${W}x${H}^" -gravity Center -extent "${W}x${H}" "$TMP" 2>/dev/null
  avifenc -q $QUALITY -s $SPEED "$TMP" "$output" > /dev/null 2>&1

  local size
  size=$(du -k "$output" | cut -f1)
  printf "  ✓  %-55s → %s (%sKB)\n" "$seo" "${dims}px" "$size" | tee -a "$LOG"
}

# ─── Procesar todas las imágenes del CSV ─────────────────────────────────────
echo "Procesando 121 imágenes..." | tee -a "$LOG"
echo "" | tee -a "$LOG"

COUNT=0

while IFS=',' read -r NUMERO ORIGINAL SEO KEYWORD USO CATEGORIA; do
  [ "$NUMERO" = "NUMERO" ] && continue
  ORIGINAL="${ORIGINAL//\"/}"
  SEO="${SEO//\"/}"
  procesar_imagen "$ORIGINAL" "$SEO"
  COUNT=$((COUNT + 1))
done < "$CSV_FILE"

# Limpieza
rm -f "$TMP"

# ─── Estadísticas finales ─────────────────────────────────────────────────────
echo "" | tee -a "$LOG"
echo "=== COMPLETADO: $COUNT imágenes ===" | tee -a "$LOG"
echo "Fin: $(date)" | tee -a "$LOG"
echo "" | tee -a "$LOG"

TOTAL_SIZE=$(find "$OUT_DIR" -maxdepth 1 -name "*.avif" -exec du -k {} + | awk '{sum += $1} END {print sum}')
TOTAL_MB=$(echo "scale=2; ${TOTAL_SIZE}/1024" | bc)

echo "Antes (FASE1):  52.66 MB (JPEG originales)" | tee -a "$LOG"
echo "Tras FASE2:      4.26 MB (AVIF 1408x768)" | tee -a "$LOG"
echo "Tras FASE3:     ${TOTAL_MB} MB (AVIF dimensiones placeholder)" | tee -a "$LOG"
REDUCCION=$(python3 -c "print(f'Reducción total vs originales: {(1 - ${TOTAL_SIZE}/1024/52.66)*100:.1f}%')")
echo "$REDUCCION" | tee -a "$LOG"
