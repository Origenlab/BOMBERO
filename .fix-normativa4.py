#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Pasada 4: Error 7 residual — NFPA presentada como obligación legal mexicana."""

FIXES = [
 ("src/pages/productos/scba/index.astro", [
  ('answer: "México no tiene una norma oficial equivalente a la NFPA 1970 para equipos SCBA. Sin embargo, la Protección Civil federal y estatal exige SCBA certificado NFPA 1970 como estándar mínimo para cuerpos de bomberos profesionales. Para brigadas industriales, la STPS (NOM-017-STPS-2024) exige protección respiratoria certificada para espacios inmediatamente peligrosos para la vida (IDLH) — un SCBA NFPA 1970 cumple y supera este requisito.',
   'answer: "No. México no tiene una norma oficial equivalente a la NFPA 1970 para equipos SCBA, y NFPA no es legislación mexicana: es una referencia técnica voluntaria que se vuelve contractualmente exigible cuando un pliego de licitación la incorpora, que es lo que hacen habitualmente las compras de gobierno. Lo que sí obliga es la NOM-017-STPS-2024, que exige al patrón analizar los riesgos por puesto, proporcionar sin costo el EPP adecuado —protección respiratoria incluida cuando el riesgo lo determina—, capacitar en su uso y supervisarlo; para brigadas contra incendio, la NOM-002-STPS-2010 lo refuerza en su cláusula 5.9.'),
 ]),
 ("src/pages/index.astro", [
  ('answer: "México no tiene una norma oficial equivalente a la NFPA para EPP de bomberos. Sin embargo, la NFPA 1970 (cap. 5–9) (trajes estructurales), NFPA 1970 (cap. 15–19) (SCBA) y NFPA 1950 (forestales) son el estándar de facto exigido por Protección Civil federal y estatal, y por la mayoría de cuerpos de bomberos profesionales del país. Para brigadas industriales, la NOM-017-STPS-2024 exige EPP certificado para zonas de riesgo — un equipo NFPA 1970 (cap. 5–9 y 15–19) cumple y supera ese requisito.',
   'answer: "No. México no tiene una norma oficial equivalente a la NFPA para EPP de bomberos, y NFPA no es legislación mexicana: es una referencia técnica voluntaria que se vuelve contractualmente exigible cuando un pliego de licitación la incorpora, que es lo que hacen habitualmente las compras de gobierno. En la práctica, NFPA 1970 (traje estructural, cap. 5–9; SCBA, cap. 15–19) y NFPA 1950 (forestal) son el estándar que adopta la mayoría de los cuerpos de bomberos profesionales del país. Lo que sí obliga es la NOM-017-STPS-2024 —analizar los riesgos por puesto, proporcionar sin costo el EPP adecuado, capacitar y supervisar— y, para brigadas contra incendio, la NOM-002-STPS-2010 en su cláusula 5.9.'),
 ]),
]

for path, rules in FIXES:
    txt = open(path, encoding="utf-8").read()
    orig = txt
    for old, new in rules:
        if old not in txt:
            print("!! NO MATCH en %s" % path)
            continue
        txt = txt.replace(old, new)
        print("OK %s (%d)" % (path, orig.count(old)))
    if txt != orig:
        open(path, "w", encoding="utf-8").write(txt)
