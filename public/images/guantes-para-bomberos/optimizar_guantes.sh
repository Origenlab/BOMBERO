#!/bin/zsh
# ═══════════════════════════════════════════════════════════════
# Optimización de 36 imágenes Whisk → AVIF 400×300 (guantes)
# Temp files (avifenc no soporta stdin en v1.3.0)
# ═══════════════════════════════════════════════════════════════

DIR="/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/public/images/guantes-para-bomberos"
TMP="/tmp/guante_tmp_$$.png"
OK=0
FAIL=0
SKIP=0

typeset -A MAP

# ─── Producto estudio fondo negro: par apilado/cruzado ───
MAP[Whisk_027ea5beea8ff1da06b49bd7c409d486dr]="guante-bombero-producto-estructural-nomex-01"
MAP[Whisk_3dd90cd3dd9ac6cbf2748c96986d32bcdr]="guante-bombero-producto-estructural-nomex-02"
MAP[Whisk_8e40793838c5e0d92b8489b935cae9d9dr]="guante-bombero-producto-estructural-nomex-03"
MAP[Whisk_9510a31823947d6b73f472721741c5f4dr]="guante-bombero-producto-estructural-nomex-04"
MAP[Whisk_c74d4dca8e9f05dac3b4861e69aa1039dr]="guante-bombero-producto-estructural-nomex-05"

# ─── Producto estudio fondo negro: par simétrico abierto ───
MAP[Whisk_3d444f2e1b5439e97644aee74f36b250dr]="guante-bombero-producto-par-cuero-kevlar-01"
MAP[Whisk_bb255e2863d6e6ba57a4e33063742b1cdr]="guante-bombero-producto-par-cuero-kevlar-02"
MAP[Whisk_f5d167cb533d6818bc748130265f1757dr]="guante-bombero-producto-par-cuero-kevlar-03"
MAP[Whisk_ca970468030bc34a94e422e035da0d89dr]="guante-bombero-producto-par-cuero-kevlar-04"

# ─── Producto estudio: guante individual lateral ───
MAP[Whisk_7a2d59323c8d661ab054892933f06b7adr]="guante-bombero-producto-individual-lateral-01"
MAP[Whisk_7c6c8bcb5d06d01a52e489fa796c0d53dr]="guante-bombero-producto-individual-lateral-02"
MAP[Whisk_e9502008d05b814af074c2567e8d9665dr]="guante-bombero-producto-individual-lateral-03"

# ─── Detalle palma cuero vaqueta (fondo blanco) ───
MAP[Whisk_4e42a934cf915cfa2da4c84916ccf012dr]="guante-bombero-detalle-palma-cuero-vaqueta-01"
MAP[Whisk_8a41cddc383945bb7184e17f59358a8bdr]="guante-bombero-detalle-palma-cuero-vaqueta-02"
MAP[Whisk_dea8b993eb6259aa844497845d3f2450dr]="guante-bombero-detalle-palma-cuero-vaqueta-03"
MAP[Whisk_f766b7602f76002bc7045735fb0463b0dr]="guante-bombero-detalle-palma-cuero-vaqueta-04"

# ─── Bombero poniéndose guantes en estación ───
MAP[Whisk_034d7e793ef7b498cbf48f576d3f57a4dr]="guante-bombero-estacion-colocacion-cuero-01"
MAP[Whisk_103be92da461ba5bdee458d7c92c3fd2dr]="guante-bombero-estacion-colocacion-cuero-02"
MAP[Whisk_186698488448adf9735407524b51ecbedr]="guante-bombero-estacion-colocacion-cuero-03"
MAP[Whisk_21a312e4244a049aebb46909f990373fdr]="guante-bombero-estacion-colocacion-cuero-04"
MAP[Whisk_6c6b7babcaa2a0f8f504f6c18317ca71dr]="guante-bombero-estacion-colocacion-cuero-05"
MAP[Whisk_ab46a270f99405d923a4ed69baf57c1bdr]="guante-bombero-estacion-colocacion-cuero-06"
MAP[Whisk_b2fa19a26d3babf9af3436e64d2f07afdr]="guante-bombero-estacion-colocacion-cuero-07"
MAP[Whisk_b313d93ab42bdd6a3ed4d1cfc2db0e8adr]="guante-bombero-estacion-colocacion-cuero-08"
MAP[Whisk_de0a24cc2667ba2a72f49fe7e4245e0bdr]="guante-bombero-estacion-colocacion-cuero-09"

# ─── Guantes en acción: combate incendio con manguera ───
MAP[Whisk_0ee33ba378b9bf1825148e8f6c330b76dr]="guante-bombero-combate-incendio-manguera-01"
MAP[Whisk_3d28ba002f2d700b3d140969369f9971dr]="guante-bombero-combate-incendio-manguera-02"
MAP[Whisk_6550e7372b1350db73048b3e12c7c536dr]="guante-bombero-combate-incendio-manguera-03"
MAP[Whisk_ae2c7864807c05483f44813fc94e722edr]="guante-bombero-combate-incendio-manguera-04"
MAP[Whisk_b0f7f5d8669313f8c594aaa8da12a04ddr]="guante-bombero-combate-incendio-manguera-05"
MAP[Whisk_d3198f5f134cd04946643e71e9b9b52cdr]="guante-bombero-combate-incendio-manguera-06"
MAP[Whisk_eedbb949ef8670ab2fc4fea6c7e3a1c9dr]="guante-bombero-combate-incendio-manguera-07"

# ─── Guantes en acción: manguera estación/entrenamiento ───
MAP[Whisk_4bcaec48a2a9ae6950c43de8e93eb550dr]="guante-bombero-operacion-manguera-estacion-01"
MAP[Whisk_6f50aa3f58f32f18ab94c6835bdf3593dr]="guante-bombero-operacion-manguera-estacion-02"
MAP[Whisk_f4d9bde83059afdb4a44ce84c1904e99dr]="guante-bombero-operacion-manguera-estacion-03"

echo "═══════════════════════════════════════════════════════"
echo "  OPTIMIZACIÓN GUANTES: 36 JPEG → AVIF 400×300"
echo "═══════════════════════════════════════════════════════"

for SRC in "$DIR"/Whisk_*.jpeg; do
  BASE="${${SRC:t}%.jpeg}"
  SEO="${MAP[$BASE]}"

  if [[ -z "$SEO" ]]; then
    echo "⚠️  SIN MAPEO: $BASE"
    FAIL=$((FAIL+1))
    continue
  fi

  OUT="$DIR/${SEO}.avif"

  if [[ -f "$OUT" ]]; then
    echo "⏭️  YA EXISTE: $SEO.avif"
    SKIP=$((SKIP+1))
    continue
  fi

  magick "$SRC" -resize 400x300^ -gravity North -extent 400x300 "$TMP"
  if [[ $? -ne 0 ]]; then
    echo "❌ MAGICK FAIL: $BASE"
    FAIL=$((FAIL+1))
    continue
  fi

  avifenc -q 37 -s 6 -j 11 --depth 8 -y 420 "$TMP" "$OUT" 2>/dev/null
  if [[ $? -ne 0 ]]; then
    echo "❌ AVIFENC FAIL: $BASE"
    FAIL=$((FAIL+1))
    rm -f "$TMP"
    continue
  fi

  SIZE=$(stat -f%z "$OUT")
  echo "✅ ${SEO}.avif (${SIZE} bytes)"
  OK=$((OK+1))
  rm -f "$TMP"
done

rm -f "$TMP"

echo ""
echo "═══════════════════════════════════════════════════════"
echo "  RESULTADO: ✅ $OK ok | ❌ $FAIL fail | ⏭️ $SKIP skip"
echo "═══════════════════════════════════════════════════════"
