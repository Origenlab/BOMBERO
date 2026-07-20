#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
fix-normativa-2026 — BOMBERO
Aplica las sustituciones de REGLAS-FIX-NORMATIVA-2026.md sobre src/ y public/.
NO toca slugs, rutas, href, src ni ids (las formas hifenadas `nfpa-1971` no se tocan).
"""
import os, re, sys, collections

ROOTS = ["src", "public"]
SKIP_DIRS = {"node_modules", "dist", ".git", ".astro"}
EXT_OK = {".astro", ".ts", ".tsx", ".js", ".mjs", ".json", ".md", ".mdx", ".txt", ".css", ".html", ".xml"}

stats = collections.Counter()
files_touched = collections.Counter()
warnings = []

# ─────────────────────────────────────────────────────────────
# 0) Tokens de preservación (menciones legacy que se CONSERVAN)
# ─────────────────────────────────────────────────────────────
KEEP = {}          # token -> texto final
_kc = [0]
def keep(text):
    _kc[0] += 1
    tok = "\x01K%d\x01" % _kc[0]
    KEEP[tok] = text
    return tok

# Certificación real de producto por edición + referencias históricas.
# Se conservan (excepción comercial de la hoja de reglas) pero contextualizadas.
PRESERVE = [
    ("NFPA 1971 Edición 2018", "NFPA 1971 Edición 2018 (hoy NFPA 1970)"),
    ("NFPA 1971 Ed. 2018",     "NFPA 1971 Ed. 2018 (hoy NFPA 1970)"),
    ("NFPA 1971 ed. 2007",     "NFPA 1971 ed. 2007 (hoy NFPA 1970)"),
    ("NFPA 1971 edición 2000", "NFPA 1971 edición 2000 (hoy NFPA 1970)"),
]

# ─────────────────────────────────────────────────────────────
# 1) Edits con criterio (Errores 1, 6, 7 + Error 5 de ediciones)
#    Cada regla DEBE hacer match al menos una vez.
# ─────────────────────────────────────────────────────────────
K1971 = "\x02K1971\x02"   # marcador de "NFPA 1971" que se conserva dentro de un edit

BESPOKE = [
# --- E7: NFPA presentada como obligación legal mexicana (layouts, alcance sitio) ---
(
 'answer: "México no tiene una norma oficial equivalente a NFPA para EPP de bomberos — pero la NFPA es el estándar de facto reconocido por Protección Civil federal y estatal. Para brigadas industriales, la NOM-017-STPS-2024 exige EPP certificado para zonas de riesgo; el equipo certificado NFPA 1971/1981 cumple y supera ese requisito.',
 'answer: "México no tiene una norma oficial equivalente a NFPA para EPP de bomberos. NFPA es una referencia técnica voluntaria: se vuelve contractualmente exigible cuando un pliego de licitación la incorpora, que es lo que hacen habitualmente las compras de gobierno. Lo que sí obliga en México es la NOM-017-STPS-2024 — analizar los riesgos por puesto, proporcionar sin costo el EPP adecuado, capacitar en su uso y supervisarlo — y, para brigadas contra incendio, la NOM-002-STPS-2010 en su cláusula 5.9.',
),
(
 'answer: "México no tiene norma oficial equivalente a NFPA para EPP de bomberos, pero la NFPA es el estándar de facto reconocido por Protección Civil federal y estatal. Para brigadas industriales, la NOM-017-STPS-2024 exige EPP certificado en zonas de riesgo — el equipo NFPA cumple y supera ese requisito. En licitaciones públicas, especificar la norma NFPA por edición vigente (ej: NFPA 1971 edición 2018) es la forma de garantizar que el equipo adquirido sea el correcto.",',
 'answer: "México no tiene norma oficial equivalente a NFPA para EPP de bomberos. NFPA es una referencia técnica voluntaria: se vuelve contractualmente exigible cuando un pliego de licitación la incorpora, que es lo que hacen habitualmente las compras de gobierno. Lo que sí obliga es la NOM-017-STPS-2024 — analizar los riesgos por puesto, proporcionar sin costo el EPP adecuado, capacitar y supervisar — y, para brigadas contra incendio, la NOM-002-STPS-2010 en su cláusula 5.9. Las licitaciones mexicanas todavía suelen redactar «' + K1971 + ' Edición 2018»: podemos documentar la correspondencia con NFPA 1970, capítulos 5 a 9.",',
),
# --- E3/E5: lista de "ediciones vigentes" desactualizada ---
(
 'La NFPA publica revisiones de sus normas cada 3–5 años. Las ediciones vigentes más relevantes: NFPA 1971 edición 2018 (trajes estructurales), NFPA 1977 edición 2022 (forestales), NFPA 1981 edición 2018 (SCBA), NFPA 1983 edición 2017 (cuerdas de rescate).',
 'La NFPA publica revisiones de sus normas cada 3–5 años y en 2025 consolidó varias en normas madre. Las ediciones vigentes más relevantes: NFPA 1970 edición 2025 — que absorbió ' + K1971 + ' (traje estructural, cap. 5–9), NFPA 1975, NFPA 1981 (SCBA, cap. 15–19) y NFPA 1982 —, NFPA 1950 edición 2025 (forestal y rescate técnico, absorbió NFPA 1977) y NFPA 1983 edición 2017 (cuerdas de rescate).',
),
# --- E2/E7: atribución falsa a la NOM-017 ---
(
 'La NOM-017-STPS-2008 reconoce normativas internacionales como aceptables para EPP.',
 'La NOM-017-STPS-2024 obliga al patrón a analizar los riesgos por puesto, proporcionar sin costo el EPP adecuado, capacitar en su uso y supervisarlo; no menciona NFPA ni ninguna norma extranjera.',
),
# --- E7: "la SCT exige certificación NFPA" ---
(
 '> **Importante:** En México, aunque no existe una norma oficial obligatoria, los departamentos de bomberos profesionales y la SCT exigen certificación NFPA 1971 para operaciones estructurales.',
 '> **Importante:** En México ninguna ley obliga a certificar el casco bajo NFPA. NFPA es una referencia técnica voluntaria que se vuelve contractualmente exigible cuando un pliego de licitación la incorpora. Aun así, los departamentos profesionales suelen especificar NFPA 1970 (cap. 5–9) para operaciones estructurales.',
),
# --- Vida útil mal atribuida a NFPA 1977 (no está en los 7 errores) ---
(
 'NFPA 1977 establece **5 años de vida útil máxima desde fabricación** para el casco forestal (más corta que los 10 años del NFPA 1971 estructural, por la mayor exposición UV y abrasión del entorno wildland).',
 'NFPA 1950 (que absorbió a NFPA 1977) no fija una vida útil máxima para el casco forestal: ese límite lo establece el fabricante en su manual. Para el conjunto estructural, en cambio, NFPA 1850 sí marca el retiro a los **10 años desde la fecha de fabricación**.',
),
# --- E5: ediciones inexistentes / colisiones en la misma frase ---
(
 '4. **Año de edición de la norma:** el guante debe certificarse contra la edición vigente (NFPA 1971 edición 2018 o 2023)',
 '4. **Año de edición de la norma:** el guante debe certificarse contra la edición vigente (NFPA 1970, edición 2025)',
),
(
 '2. **Edición de la norma** — Debe ser la **vigente** (NFPA 1971 ed. 2024, NFPA 1981 ed. 2024, etc.).',
 '2. **Edición de la norma** — Debe ser la **vigente**: NFPA 1970 ed. 2025, que consolidó ' + K1971 + ' (cap. 5–9) y NFPA 1981 (cap. 15–19).',
),
# --- E7: FAQ "¿Es obligatorio usar equipo NFPA en México?" ---
(
 'No existe una ley federal que lo exija explícitamente, pero **la NOM-002-STPS y los protocolos de protección civil recomiendan equipo certificado internacionalmente**. La mayoría de los cuerpos de bomberos profesionales y brigadas industriales exigen NFPA como **estándar mínimo operativo** y como **requisito en licitaciones**.',
 'No. NFPA es una referencia técnica voluntaria en México; se vuelve contractualmente exigible solo cuando un pliego de licitación la incorpora. Lo que sí obliga es la **NOM-017-STPS-2024** (analizar riesgos por puesto, proporcionar sin costo el EPP adecuado, capacitar y supervisar) y, para brigadas contra incendio, la **NOM-002-STPS-2010** en su cláusula 5.9. La mayoría de los cuerpos profesionales y brigadas industriales adoptan NFPA como **estándar mínimo operativo** y como **requisito en licitaciones**.',
),
(
 'La NFPA 1971 (edición 2018; actualización 2023 en proceso de adopción) exige que el conjunto sea certificado por laboratorio acreditado',
 'La NFPA 1970 (edición 2025, que consolidó a ' + K1971 + ' en sus capítulos 5 a 9) exige que el conjunto sea certificado por laboratorio acreditado',
),
(
 'La NFPA 1971 edición 2018 añadió requisitos de',
 'La edición 2018 de ' + K1971 + ' — hoy NFPA 1970 — añadió requisitos de',
),
# --- E6: NOM-003-SEGOB-2011 usada como respaldo de equipo (no de señalización) ---
(
 'Sistemas combinados de rociadores NFPA 13 y gabinetes NFPA 14 clase III para cumplir con la NOM-003-SEGOB-2011 y los lineamientos de la Secretaría de Salud para edificaciones de ocupación especial.',
 'Sistemas combinados de rociadores NFPA 13 y gabinetes NFPA 14 clase III para edificaciones de ocupación especial, conforme al reglamento de construcciones aplicable y a los lineamientos de la Secretaría de Salud.',
),
]

# ─────────────────────────────────────────────────────────────
# 2) Ediciones explícitas (Error 5) — orden largo→corto
# ─────────────────────────────────────────────────────────────
EDITIONS = [
    ("NFPA 1971 (edición 2018+)", "NFPA 1970 (edición 2025)"),
    ("NFPA 1977 (edición 2016+)", "NFPA 1950 (edición 2025)"),
    ("NFPA 1971 (edición 2024)",  "NFPA 1970 (edición 2025)"),
    ("NFPA 1977 (edición 2022)",  "NFPA 1950 (edición 2025)"),
    ("NFPA 1971 edición 2024",    "NFPA 1970 edición 2025"),
    ("NFPA 1971 edición 2018",    "NFPA 1970 edición 2025"),
    ("NFPA 1981 edición 2018",    "NFPA 1970 edición 2025"),
    ("NFPA 1977 edición 2022",    "NFPA 1950 edición 2025"),
    ("NFPA 1971 ed. 2024",        "NFPA 1970 ed. 2025"),
]

# ─────────────────────────────────────────────────────────────
# 3) Formas compuestas con comas / "y" (enumeradas del escaneo)
# ─────────────────────────────────────────────────────────────
COMPOUND = [
    ("NFPA 1851, 1852, 1971, 1977, 1981", "NFPA 1850, NFPA 1970 (cap. 5–9 y 15–19) y NFPA 1950"),
    ("NFPA 1971, 1976, 1977, 1981, 1991", "NFPA 1970 (cap. 5–9 y 15–19), 1976, NFPA 1950 y 1991"),
    ("NFPA 1971, 1977, 1981, 1983",       "NFPA 1970 (cap. 5–9 y 15–19), NFPA 1950 y 1983"),
    ("NFPA 1971, 1981, 1991/1992",        "NFPA 1970 (cap. 5–9 y 15–19), 1991/1992"),
    ("NFPA 1981, 1982 y 1852",            "NFPA 1970 (cap. 15–24) y NFPA 1850"),
    ("NFPA 1971, 1981 y 1852",            "NFPA 1970 (cap. 5–9 y 15–19) y NFPA 1850"),
    ("NFPA 1971, 1977 y 1951",            "NFPA 1970, NFPA 1950 y 1951"),
    ("NFPA 1971, 1977 y 1981",            "NFPA 1970 (cap. 5–9 y 15–19) y NFPA 1950"),
    ("NFPA 1977, 1951 y 1994",            "NFPA 1950, 1951 y 1994"),
    ("NFPA 1851 y 1852",                  "NFPA 1850"),
    ("NFPA 1971 y 1977",                  "NFPA 1970 y 1950"),
    ("NFPA 1971 y 1951",                  "NFPA 1970 y 1951"),
    ("NFPA 1971 + 1977",                  "NFPA 1970 + 1950"),
    ("NFPA 1971 + 1951",                  "NFPA 1970 + 1951"),
]

# ─────────────────────────────────────────────────────────────
# 4) Secuencias separadas por "/" — resueltas por regex
# ─────────────────────────────────────────────────────────────
NUMMAP = {"1971": "1970", "1975": "1970", "1981": "1970", "1982": "1970",
          "1977": "1950", "1851": "1850", "1852": "1850"}
CHAP = {"1971": "cap. 5–9", "1975": "cap. 10–14", "1981": "cap. 15–19", "1982": "cap. 20–24"}
SLASH = re.compile(r"NFPA (\d{4})((?:\s*/\s*\d{4})+)")

def slash_fix(m):
    sep = " / " if " / " in m.group(2) else "/"
    nums = [m.group(1)] + re.findall(r"\d{4}", m.group(2))
    if not any(n in NUMMAP for n in nums):
        return m.group(0)
    mapped, srcs = [], []
    for n in nums:
        t = NUMMAP.get(n, n)
        if mapped and mapped[-1] == t:
            if n in CHAP and n not in srcs[-1]:
                srcs[-1].append(n)
            continue
        mapped.append(t)
        srcs.append([n] if n in CHAP else [])
    out = []
    for t, s in zip(mapped, srcs):
        if t == "1970" and len(s) >= 2:
            rangos = " y ".join(CHAP[x].replace("cap. ", "") for x in s)
            out.append("1970 (cap. %s)" % rangos)
        else:
            out.append(t)
    return "NFPA " + sep.join(out)

# ─────────────────────────────────────────────────────────────
# 5) Colisión a nivel de línea (dos o más de 1971/1975/1981/1982)
# ─────────────────────────────────────────────────────────────
COLL = re.compile(r"NFPA 19(71|75|81|82)")
META_FIELD = re.compile(r'("?(title|description|metaTitle|metaDescription|ogTitle|ogDescription|seoTitle|excerpt|heroTitle|faqDescription)"?\s*[:=])', re.I)

def collision_fix(line):
    found = set(m.group(1) for m in COLL.finditer(line))
    if len(found) < 2:
        return line, 0
    if META_FIELD.search(line):
        warnings.append("COLISION en campo meta (se usó forma corta): " + line.strip()[:160])
        return line, 0
    n = 0
    for num, chap in CHAP.items():
        src = "NFPA " + num
        if src in line:
            n += line.count(src)
            line = line.replace(src, "NFPA 1970 (%s)" % chap)
    return line, n

# ─────────────────────────────────────────────────────────────
# 6) Genéricas
# ─────────────────────────────────────────────────────────────
GENERIC = [
    ("NFPA 1971", "NFPA 1970"),
    ("NFPA 1975", "NFPA 1970"),
    ("NFPA 1981", "NFPA 1970"),
    ("NFPA 1982", "NFPA 1970"),
    ("NFPA 1977", "NFPA 1950"),
    ("NFPA 1851", "NFPA 1850"),
    ("NFPA 1852", "NFPA 1850"),
    ("NOM-017-STPS-2008", "NOM-017-STPS-2024"),
]

# 7) Normas europeas
EURO = [
    (re.compile(r"\bEN 469\b(?!\s*:)"), "EN 469:2020"),
    (re.compile(r"\bEN 443\b(?!\s*:)"), "EN 443:2008"),
    (re.compile(r"\bEN 659\b(?!\s*:)"), "EN 659:2003+A1:2008"),
    (re.compile(r"\bEN 15614\b"),       "EN ISO 15384:2020+A1:2021"),
    (re.compile(r"\bEN 15090\b(?!\s*:)"), "EN 15090:2012"),
]

# 8) Red de seguridad: colapsar duplicados "NFPA 1970 y NFPA 1970"
DEDUPE = re.compile(r"\bNFPA (1970|1950|1850)\b(\s*(?:,|y|/|\+|&|—|-|\.)?\s*)NFPA \1\b")

# ─────────────────────────────────────────────────────────────

def process(txt, path):
    orig = txt
    # 0) preservar
    for src, final in PRESERVE:
        if src in txt:
            stats["preserve|" + src] += txt.count(src)
            txt = txt.replace(src, keep(final))
    # 1) bespoke
    for old, new in BESPOKE:
        if old in txt:
            stats["bespoke|" + old[:58]] += txt.count(old)
            txt = txt.replace(old, new)
    # 2) ediciones
    for old, new in EDITIONS:
        if old in txt:
            stats["edicion|" + old] += txt.count(old)
            txt = txt.replace(old, new)
    # 3) compuestas con coma / y
    for old, new in COMPOUND:
        if old in txt:
            stats["compuesta|" + old] += txt.count(old)
            txt = txt.replace(old, new)
    # 4) secuencias con /
    txt, n = SLASH.subn(slash_fix, txt)
    if n:
        stats["slash-seq"] += n
    # 5) colisión por línea
    lines = txt.split("\n")
    for i, ln in enumerate(lines):
        lines[i], c = collision_fix(ln)
        if c:
            stats["colision-linea"] += c
    txt = "\n".join(lines)
    # 6) genéricas
    for old, new in GENERIC:
        if old in txt:
            stats["generica|" + old] += txt.count(old)
            txt = txt.replace(old, new)
    # 7) europeas
    for rx, new in EURO:
        txt, n = rx.subn(new, txt)
        if n:
            stats["europea|" + new] += n
    # 8) colapsar duplicados generados por el mapeo
    while True:
        txt, n = DEDUPE.subn(lambda m: "NFPA " + m.group(1), txt)
        if not n:
            break
        stats["dedupe-duplicado"] += n
    # restaurar tokens
    txt = txt.replace(K1971, "NFPA 1971")
    for tok, final in KEEP.items():
        txt = txt.replace(tok, final)
    return txt, txt != orig


changed_files = []
for root in ROOTS:
    for dp, dn, fn in os.walk(root):
        dn[:] = [d for d in dn if d not in SKIP_DIRS]
        for f in sorted(fn):
            if os.path.splitext(f)[1] not in EXT_OK:
                continue
            p = os.path.join(dp, f)
            try:
                txt = open(p, encoding="utf-8").read()
            except Exception:
                continue
            new, ch = process(txt, p)
            if ch:
                open(p, "w", encoding="utf-8").write(new)
                changed_files.append(p)

print("ARCHIVOS MODIFICADOS: %d" % len(changed_files))
print()
print("=== CONTEO POR REGLA ===")
for k, v in sorted(stats.items(), key=lambda x: -x[1]):
    print("%6d  %s" % (v, k))
print()
if warnings:
    print("=== AVISOS (%d) ===" % len(warnings))
    for w in warnings[:40]:
        print(" ! " + w)
print()
print("=== ARCHIVOS ===")
for p in changed_files:
    print("  " + p)
