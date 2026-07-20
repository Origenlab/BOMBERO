#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Pasada 2: limpia duplicados generados por anotaciones previas del repo
   ("NFPA 1971 (hoy NFPA 1970)") y corrige ediciones que quedaron obsoletas."""
import os, re, collections

ROOTS = ["src", "public"]
SKIP_DIRS = {"node_modules", "dist", ".git", ".astro"}
EXT_OK = {".astro", ".ts", ".tsx", ".js", ".mjs", ".json", ".md", ".mdx", ".txt", ".css", ".html", ".xml"}

stats = collections.Counter()

LITERAL = [
    # duplicados por anotación previa "(hoy NFPA 1970)"
    ("**NFPA 1970** (hoy **NFPA 1970**, 2024)", "**NFPA 1970** (ed. 2025)"),
    ("NFPA 1970 (hoy **NFPA 1970**, 2024)",     "NFPA 1970 (ed. 2025)"),
    ("**NFPA 1970** (hoy **NFPA 1970**)",       "**NFPA 1970**"),
    ("NFPA 1970 (proximidad, hoy NFPA 1970)",   "NFPA 1970 (proximidad)"),
    ("## NFPA 1970 (proximidad) / NFPA 1970",   "## NFPA 1970 (proximidad)"),
    ("NFPA 1970 (hoy NFPA 1970)",               "NFPA 1970"),
    ("NFPA 1850 (hoy NFPA 1850)",               "NFPA 1850"),
    ("NFPA 1950 (hoy NFPA 1950)",               "NFPA 1950"),
    # "NFPA 1971 (NFPA 1970) edición vigente" -> quedó "NFPA 1970 (NFPA 1970)"
    ("NFPA 1970 (NFPA 1970)",                   "NFPA 1970"),
    ("NFPA 1950 (NFPA 1950)",                   "NFPA 1950"),
    ("NFPA 1850 (NFPA 1850)",                   "NFPA 1850"),
    # tags duplicados
    ('"NFPA 1970", "NFPA 1970"',                '"NFPA 1970"'),
    ('"NFPA 1950", "NFPA 1950"',                '"NFPA 1950"'),
    # ediciones de la norma anterior presentadas como vigentes (Error 5)
    ("### NFPA 1970 — Ediciones\n\n- **NFPA 1970:2018** — Edición actual más exigente\n- **NFPA 1970:2013** — Aún válida, fase de transición",
     "### NFPA 1970 — Ediciones\n\n- **NFPA 1970:2025** — Edición vigente; consolidó NFPA 1971, 1975, 1981 y 1982\n- **NFPA 1971:2018** — Última edición de la norma anterior, ya sustituida"),
    ("### NFPA 1970 Ediciones\n\n- **NFPA 1970:2018** — Edición actual, requisitos más estrictos\n- **NFPA 1970:2013** — Aún aceptable, en transición",
     "### NFPA 1970 Ediciones\n\n- **NFPA 1970:2025** — Edición vigente; consolidó NFPA 1971, 1975, 1981 y 1982\n- **NFPA 1971:2018** — Última edición de la norma anterior, ya sustituida"),
    # capítulos de la norma antigua
    ("| **Norma** | NFPA 1970 Chapter 1-6 | NFPA 1970 Chapter 7-8 |",
     "| **Norma** | NFPA 1970 (cap. 5–9, conjunto estructural) | NFPA 1970 (cap. 5–9, conjunto de proximidad) |"),
]

# duplicados adyacentes residuales
DUP = re.compile(r"(\*{0,2}NFPA (1970|1950|1850)\*{0,2})(\s*(?:,|y|/|\+|&|—|-|\()?\s*)\*{0,2}NFPA \2\*{0,2}(\)?)")

changed = []
for root in ROOTS:
    for dp, dn, fn in os.walk(root):
        dn[:] = [d for d in dn if d not in SKIP_DIRS]
        for f in sorted(fn):
            if os.path.splitext(f)[1] not in EXT_OK or f.startswith(".fuse_hidden"):
                continue
            p = os.path.join(dp, f)
            try:
                txt = open(p, encoding="utf-8").read()
            except Exception:
                continue
            orig = txt
            for old, new in LITERAL:
                if old in txt:
                    stats[old.split("\n")[0][:60]] += txt.count(old)
                    txt = txt.replace(old, new)
            if txt != orig:
                open(p, "w", encoding="utf-8").write(txt)
                changed.append(p)

print("Pasada 2 — archivos: %d" % len(changed))
for k, v in sorted(stats.items(), key=lambda x: -x[1]):
    print("%5d  %s" % (v, k))
print()
print("=== duplicados adyacentes que QUEDAN (misma línea) ===")
n = 0
for root in ROOTS:
    for dp, dn, fn in os.walk(root):
        dn[:] = [d for d in dn if d not in SKIP_DIRS]
        for f in sorted(fn):
            if os.path.splitext(f)[1] not in EXT_OK or f.startswith(".fuse_hidden"):
                continue
            p = os.path.join(dp, f)
            try:
                txt = open(p, encoding="utf-8").read()
            except Exception:
                continue
            for i, ln in enumerate(txt.split("\n"), 1):
                for m in DUP.finditer(ln):
                    n += 1
                    a = max(0, m.start() - 60)
                    print("%s:%d  ...%s..." % (p, i, ln[a:m.end() + 40]))
print("TOTAL:", n)
