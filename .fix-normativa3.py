#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Pasada 3: ediciones residuales y duplicados con texto intercalado."""
import os, collections

FIXES = [
 ("src/data/blog-articulos-normas.ts", [
   ("—como **NFPA 1970**, hoy consolidada en **NFPA 1970 (2024)**— exigen",
    "—como **NFPA 1970** (ed. 2025, que consolidó a NFPA 1971)— exigen"),
 ]),
 ("src/data/blog-articulos-conceptos.ts", [
   (" * Precisión (2026): NFPA consolidó 1971/1975/1981/1982 → NFPA 1970 (2024);",
    " * Precisión (2026): NFPA consolidó 1971/1975/1981/1982 → NFPA 1970 (ed. 2025);"),
   ("Su referencia es **NFPA 1970** —hoy consolidada en **NFPA 1970 (2024)**— y equivalentes",
    "Su referencia es **NFPA 1970** (ed. 2025, que consolidó a NFPA 1971) y equivalentes"),
 ]),
 ("src/data/blog-articulos.ts", [
   ("- **Shelby 5292:** Versión NFPA 1970:2018, Crosstech Direct Grip",
    "- **Shelby 5292:** Versión NFPA 1971:2018 (hoy NFPA 1970), Crosstech Direct Grip"),
   ("- Certificación NFPA 1970:2018",
    "- Certificación NFPA 1971:2018 (hoy NFPA 1970)"),
   ("- Norma y edición (NFPA 1970:2018)",
    "- Norma y edición (NFPA 1970:2025)"),
 ]),
 ("src/content/productos/cascos-para-bomberos/casco-arff-aeroportuario/certificaciones.json", [
   ('"valor": "NFPA 1970:2018 o edición vigente"',
    '"valor": "NFPA 1970:2025 o edición vigente"'),
 ]),
]

stats = collections.Counter()
for path, rules in FIXES:
    txt = open(path, encoding="utf-8").read()
    orig = txt
    for old, new in rules:
        n = txt.count(old)
        if n == 0:
            print("!! NO MATCH en %s: %r" % (path, old[:70]))
        stats[old[:60]] += n
        txt = txt.replace(old, new)
    if txt != orig:
        open(path, "w", encoding="utf-8").write(txt)
        print("OK %s" % path)

print()
for k, v in stats.items():
    print("%4d  %s" % (v, k))
