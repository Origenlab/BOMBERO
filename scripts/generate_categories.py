#!/usr/bin/env python3
"""
Generator script for BOMBERO.MX - 10 categories, 7 subcategories each, ~4 products each.
All files follow the CategoriaLayout and ProductoLayout patterns exactly.
"""
import os

BASE = "/Users/frankoropeza/Desktop/clientes/BOMBERO/src/pages/productos"

# Image pool from /images/base/
IMAGES = [
    "/images/base/equipo-completo.avif",
    "/images/base/traje-hazmat.avif",
    "/images/base/casco-estructural.avif",
    "/images/base/traje-estructural.avif",
    "/images/base/guantes-estructural.avif",
    "/images/base/botas-bombero.avif",
    "/images/base/estacion-bomberos.avif",
    "/images/base/camion-bomberos.avif",
    "/images/base/gafas-bombero.avif",
    "/images/base/capucha-bombero.avif",
]

def img(i):
    return IMAGES[i % len(IMAGES)]


# ===========================================================================
# CATEGORY DATA
# ===========================================================================

CATEGORIES = {
    "extintores": {
        "title": "Extintores Portátiles y Rodantes | Certificados NOM-154 | BOMBERO.MX",
        "description": "Extintores portátiles y rodantes certificados NOM-154-SCFI-2005. CO₂, polvo ABC, espuma AFFF, agua presurizada y agentes limpios. Distribución a los 32 estados de México.",
        "heroBadge": "Extintores · NOM-154-SCFI · UL 299",
        "heroTitle": "Extintores",
        "heroTitleHighlight": "Certificados NOM-154",
        "heroSubtitle": "Extintores portátiles y rodantes para todo tipo de riesgo. CO₂, polvo ABC, espuma AFFF, agua presurizada y agentes limpios certificados NOM-154-SCFI-2005 y UL 299.",
        "subcategories": {
            "co2": {
                "label": "Extintores CO₂",
                "title": "Extintores CO₂ para Equipos Eléctricos | NOM-154 | BOMBERO.MX",
                "description": "Extintores de CO₂ 2 kg a 25 kg certificados NOM-154-SCFI-2005 y UL 154. Clase de fuego B y C. Sin residuo, ideales para equipos eléctricos, servidores y laboratorios. Envío inmediato.",
                "heroBadge": "Extintor CO₂ · Clase B/C · NOM-154-SCFI",
                "heroTitle": "Extintores CO₂",
                "heroTitleHighlight": "Sin Residuo",
                "heroSubtitle": "Extintores de dióxido de carbono para fuegos clase B y C. Sin residuo ni daño a equipos electrónicos. Certificados NOM-154-SCFI-2005 y UL 154. Desde 2 kg hasta 25 kg.",
                "ctaBarQuote": "Cotizar Extintores CO₂",
                "products": [
                    {
                        "slug": "extintor-co2-2kg",
                        "nombre": "Extintor CO₂ 2 kg — Clase B/C",
                        "badge": "2 kg",
                        "badgeColor": "smoke",
                        "descripcion": "Extintor portátil de CO₂ 2 kg para protección de escritorios, equipos de cómputo y cuartos de servidores pequeños. Sin residuo, sin daño eléctrico. Certificado NOM-154-SCFI-2005.",
                        "caracteristicas": [
                            "Capacidad: 2 kg de CO₂ a 55–60 bar",
                            "Clase de fuego: B y C",
                            "Tiempo de descarga: ~8 s a plena apertura",
                            "Alcance: 1.5–2.5 m",
                            "Certificado NOM-154-SCFI-2005",
                        ],
                        "aplicacion": "Equipos de cómputo · Servidores · Laboratorios",
                        "heroTitle": "Extintor CO₂ 2 kg",
                        "heroTitleHighlight": "Clase B y C",
                        "heroBadge": "CO₂ · 2 kg · NOM-154-SCFI",
                        "heroSubtitle": "Extintor de CO₂ 2 kg para protección de equipos electrónicos. Sin residuo, sin daño al equipo. Ideal para escritorios, racks de servidores y laboratorios. Certificado NOM-154-SCFI-2005.",
                        "productoDesc": "El extintor de CO₂ 2 kg es la primera línea de defensa para incendios en equipos electrónicos. El dióxido de carbono desplaza el oxígeno sin dejar residuo ni causar daño eléctrico. Ideal para oficinas, centros de cómputo y laboratorios.",
                        "productoFeatures": [
                            "CO₂ a 55–60 bar sin propelente adicional",
                            "Sin residuo ni daño a equipos eléctricos",
                            "Clase de fuego B y C certificada",
                            "Mango de polipropileno antitérmico",
                            "Certificado NOM-154-SCFI-2005 y UL 154",
                            "Recarga disponible en servicio autorizado",
                        ],
                        "capas": [
                            {"num":"01","titulo":"Cilindro de Acero Soldado","descripcion":"Cilindro de acero al carbono de alta resistencia, pintado con pintura epóxica roja. Probado a 250 bar. Válvula de seguridad calibrada a 190 bar para evitar sobrepresión.","specs":[{"label":"Material","valor":"Acero DIN 1.0308"},{"label":"Presión prueba","valor":"250 bar"},{"label":"Presión servicio","valor":"55–60 bar"},{"label":"Norma cilindro","valor":"DOT 3AL / NOM-028"}],"color":"ember"},
                            {"num":"02","titulo":"Válvula de Paso — Latón Forjado","descripcion":"Válvula de latón forjado con sello Viton® resistente a bajas temperaturas. Palanca de activación ergonómica con pasador de seguridad. Descarga controlada por apertura parcial o total.","specs":[{"label":"Material válvula","valor":"Latón CW614N"},{"label":"Sello","valor":"Viton® -40°C a +180°C"},{"label":"Tiempo descarga","valor":"~8 s a plena apertura"},{"label":"Presión operación","valor":"55–60 bar @ 20°C"}],"color":"smoke"},
                            {"num":"03","titulo":"Corneta Difusora — Polietileno","descripcion":"Corneta de polietileno de alta densidad resistente al frío extremo generado por la expansión del CO₂. Diseño antitérmico para proteger la mano del operador. Alcance efectivo de 1.5 a 2.5 m.","specs":[{"label":"Material corneta","valor":"HDPE antitérmico"},{"label":"Alcance efectivo","valor":"1.5 – 2.5 m"},{"label":"Temperatura salida","valor":"-78°C gas frío"},{"label":"Sin residuo","valor":"100% CO₂ — Clase C"}],"color":"fire"},
                        ],
                        "especificaciones": [
                            {"categoria":"Agente","label":"Agente extintor","valor":"CO₂ 99.5% pureza mínima"},
                            {"categoria":"Agente","label":"Capacidad","valor":"2 kg nominal"},
                            {"categoria":"Agente","label":"Clase de fuego","valor":"B y C"},
                            {"categoria":"Construcción","label":"Material cilindro","valor":"Acero soldado DIN 1.0308"},
                            {"categoria":"Construcción","label":"Presión de servicio","valor":"55–60 bar @ 20°C"},
                            {"categoria":"Construcción","label":"Presión de prueba","valor":"250 bar"},
                            {"categoria":"Operación","label":"Tiempo de descarga","valor":"~8 s (plena apertura)"},
                            {"categoria":"Operación","label":"Alcance efectivo","valor":"1.5 – 2.5 m"},
                            {"categoria":"Operación","label":"Temperatura operación","valor":"-20°C a +60°C"},
                            {"categoria":"Certificación","label":"Norma principal","valor":"NOM-154-SCFI-2005"},
                            {"categoria":"Certificación","label":"Norma UL","valor":"UL 154"},
                            {"categoria":"Certificación","label":"Documentación","valor":"Ficha técnica + hoja de mantenimiento"},
                        ],
                        "aplicaciones": [
                            {"titulo":"Equipos de Cómputo","desc":"Protección de escritorios, impresoras y estaciones de trabajo sin daño residual."},
                            {"titulo":"Centros de Datos","desc":"Servidores, racks y UPS donde el agua o polvo son inaceptables."},
                            {"titulo":"Laboratorios","desc":"Equipos sensibles de medición, microscopios y electrónica de precisión."},
                            {"titulo":"Cuadros Eléctricos","desc":"Tableros de distribución y paneles de control eléctrico en baja tensión."},
                        ],
                        "certItems": [
                            {"code":"NOM-154-SCFI-2005","desc":"Norma oficial mexicana para extintores portátiles"},
                            {"code":"UL 154","desc":"Underwriters Laboratories — extintores CO₂"},
                            {"code":"DOT 3AL","desc":"Departamento de Transporte USA — cilindros"},
                            {"code":"ISO 11119","desc":"Cilindros compuestos para gases a presión"},
                            {"code":"NFPA 10","desc":"Instalación y mantenimiento de extintores portátiles"},
                        ],
                        "specsRapidas": [
                            {"label":"Agente","valor":"CO₂"},{"label":"Capacidad","valor":"2 kg"},
                            {"label":"Clase fuego","valor":"B y C"},{"label":"Presión","valor":"55-60 bar"},
                            {"label":"Alcance","valor":"1.5-2.5 m"},{"label":"Norma","valor":"NOM-154-SCFI"},
                        ],
                    },
                    {
                        "slug": "extintor-co2-5kg",
                        "nombre": "Extintor CO₂ 5 kg — Laboratorio y Oficina",
                        "badge": "5 kg",
                        "badgeColor": "ember",
                        "descripcion": "Extintor de CO₂ 5 kg para protección de salas de cómputo medianas, cuartos de telecomunicaciones y laboratorios. Mayor capacidad para espacios de 20–50 m². Sin residuo.",
                        "caracteristicas": [
                            "Capacidad: 5 kg de CO₂ a 55–60 bar",
                            "Clase de fuego: B y C",
                            "Alcance: 2.0–3.5 m efectivos",
                            "Rueda de soporte opcional para mayor movilidad",
                            "Certificado NOM-154-SCFI-2005 y UL 154",
                        ],
                        "aplicacion": "Salas de cómputo · Telecomunicaciones · Cuadros eléctricos",
                        "heroTitle": "Extintor CO₂ 5 kg",
                        "heroTitleHighlight": "Clase B y C",
                        "heroBadge": "CO₂ · 5 kg · NOM-154-SCFI",
                        "heroSubtitle": "Extintor de CO₂ 5 kg para salas de cómputo y telecomunicaciones. Mayor tiempo de descarga y alcance. Certificado NOM-154-SCFI-2005 y UL 154.",
                        "productoDesc": "El extintor de CO₂ 5 kg duplica la capacidad del modelo 2 kg para proteger espacios más grandes. Ideal para salas de servidores de tamaño mediano, cuartos de telecomunicaciones y laboratorios de electrónica.",
                        "productoFeatures": [
                            "5 kg CO₂ certificado, tiempo descarga ~15 s",
                            "Alcance efectivo 2.0–3.5 m",
                            "Válvula de latón forjado con sello Viton®",
                            "Cilindro de acero pintado epóxico rojo",
                            "Certificado NOM-154-SCFI-2005",
                            "Compatible con sistemas de detección automática",
                        ],
                        "capas": [
                            {"num":"01","titulo":"Cilindro Alta Capacidad","descripcion":"Cilindro de acero de alta presión con capacidad de 5 kg de CO₂ líquido. Pintado en rojo RAL 3000 con identificación de agente serigrafíada.","specs":[{"label":"Capacidad","valor":"5 kg CO₂"},{"label":"Presión servicio","valor":"55-60 bar"},{"label":"Presión prueba","valor":"250 bar"},{"label":"Material","valor":"Acero DIN 1.0308"}],"color":"ember"},
                            {"num":"02","titulo":"Válvula con Manómetro","descripcion":"Válvula de latón forjado con manómetro indicador de presión. Permite verificación visual del estado sin necesidad de pesaje. Palanca ergonómica con bloqueo de seguridad.","specs":[{"label":"Presión indicada","valor":"Verde: 55-60 bar"},{"label":"Sello","valor":"Viton® -40°C"},{"label":"Pasador","valor":"Acero inoxidable"},{"label":"Manómetro","valor":"Glicerina clase 2.5"}],"color":"smoke"},
                            {"num":"03","titulo":"Manguera y Corneta","descripcion":"Manguera flexible de alta presión (90 cm) con corneta difusora de HDPE. La manguera permite apuntar con precisión sin mover el cilindro.","specs":[{"label":"Longitud manguera","valor":"90 cm"},{"label":"Presión manguera","valor":"300 bar rotura"},{"label":"Corneta","valor":"HDPE antitérmico"},{"label":"Alcance","valor":"2.0–3.5 m"}],"color":"fire"},
                        ],
                        "especificaciones": [
                            {"categoria":"Agente","label":"Agente extintor","valor":"CO₂ 99.5% pureza"},
                            {"categoria":"Agente","label":"Capacidad","valor":"5 kg nominal"},
                            {"categoria":"Agente","label":"Clase de fuego","valor":"B y C"},
                            {"categoria":"Construcción","label":"Presión de servicio","valor":"55–60 bar"},
                            {"categoria":"Construcción","label":"Presión de prueba","valor":"250 bar"},
                            {"categoria":"Operación","label":"Tiempo descarga","valor":"~15 s plena apertura"},
                            {"categoria":"Operación","label":"Alcance efectivo","valor":"2.0–3.5 m"},
                            {"categoria":"Certificación","label":"Norma","valor":"NOM-154-SCFI-2005 / UL 154"},
                        ],
                        "aplicaciones": [
                            {"titulo":"Salas de Servidores","desc":"Protección de racks y equipos activos en centros de datos medianos."},
                            {"titulo":"Cuartos de Telecomunicaciones","desc":"Switches, routers y equipos de distribución de red."},
                            {"titulo":"Laboratorios de Electrónica","desc":"Bancos de pruebas, osciloscopios y equipos de medición."},
                            {"titulo":"Oficinas de Alta Densidad","desc":"Espacios con alta concentración de equipos electrónicos."},
                        ],
                        "certItems": [
                            {"code":"NOM-154-SCFI-2005","desc":"Norma oficial mexicana extintores portátiles"},
                            {"code":"UL 154","desc":"Extintores CO₂ — Underwriters Laboratories"},
                            {"code":"NFPA 10","desc":"Instalación y mantenimiento extintores"},
                            {"code":"DOT 3AL","desc":"Cilindros de presión — transporte"},
                            {"code":"ISO 5923","desc":"Pureza CO₂ para extintores"},
                        ],
                        "specsRapidas": [
                            {"label":"Agente","valor":"CO₂"},{"label":"Capacidad","valor":"5 kg"},
                            {"label":"Clase fuego","valor":"B y C"},{"label":"Presión","valor":"55-60 bar"},
                            {"label":"Alcance","valor":"2.0-3.5 m"},{"label":"Norma","valor":"NOM-154-SCFI"},
                        ],
                    },
                    {
                        "slug": "extintor-co2-10kg",
                        "nombre": "Extintor CO₂ 10 kg — Industria Electrónica",
                        "badge": "10 kg",
                        "badgeColor": "fire",
                        "descripcion": "Extintor de CO₂ 10 kg sobre ruedas para protección de centros de datos medianos, subestaciones eléctricas y salas de control industrial. Mayor tiempo de acción y alcance.",
                        "caracteristicas": [
                            "Capacidad: 10 kg de CO₂ a 55–60 bar",
                            "Carro rodante con ruedas de goma",
                            "Manguera de 1.5 m con corneta antiestática",
                            "Tiempo de descarga: ~25 s a plena apertura",
                            "Certificado NOM-154-SCFI-2005",
                        ],
                        "aplicacion": "Subestaciones · Centros de datos · Control industrial",
                        "heroTitle": "Extintor CO₂ 10 kg",
                        "heroTitleHighlight": "Sobre Ruedas",
                        "heroBadge": "CO₂ · 10 kg · NOM-154-SCFI",
                        "heroSubtitle": "Extintor rodante de CO₂ 10 kg para protección de subestaciones eléctricas y centros de datos. Manguera de 1.5 m y corneta antiestática. Certificado NOM-154-SCFI-2005.",
                        "productoDesc": "El extintor de CO₂ 10 kg proporciona protección ampliada para subestaciones eléctricas, salas de control y centros de datos de mediana escala. Su carro rodante facilita el desplazamiento y la manguera larga permite mantener distancia segura.",
                        "productoFeatures": [
                            "10 kg CO₂ nominal en cilindro doble pared",
                            "Carro rodante con ruedas de goma 200 mm",
                            "Manguera reforzada 1.5 m antiestática",
                            "Corneta de HDPE con asa de protección",
                            "Certificado NOM-154-SCFI-2005",
                            "Válvula de alivio 190 bar calibrada",
                        ],
                        "capas": [
                            {"num":"01","titulo":"Cilindro Doble Pared","descripcion":"Cilindro de acero de doble pared para almacenamiento de 10 kg de CO₂. Pintado rojo RAL 3000. Válvula de seguridad calibrada a 190 bar.","specs":[{"label":"Capacidad","valor":"10 kg CO₂"},{"label":"Presión servicio","valor":"55-60 bar"},{"label":"Presión rotura","valor":">300 bar"},{"label":"Peso total","valor":"~30 kg con CO₂"}],"color":"ember"},
                            {"num":"02","titulo":"Carro Rodante de Acero","descripcion":"Estructura de acero tubular con ruedas de goma maciza 200 mm. Centro de gravedad bajo para estabilidad. Capacidad de carga 50 kg.","specs":[{"label":"Material","valor":"Acero tubular pintado"},{"label":"Ruedas","valor":"Goma 200 mm"},{"label":"Cap. carga","valor":"50 kg"},{"label":"Freno","valor":"Calzo de seguridad"}],"color":"smoke"},
                            {"num":"03","titulo":"Manguera y Corneta Antiestática","descripcion":"Manguera flexible de 1.5 m de alta presión con alma de acero trenzado. Corneta de HDPE con asa de protección térmica antiestática para clase C.","specs":[{"label":"Longitud","valor":"1.5 m"},{"label":"Presión","valor":"300 bar rotura"},{"label":"Corneta","valor":"HDPE + asa térmica"},{"label":"Antiestática","valor":"Resistividad <1 MΩ"}],"color":"fire"},
                        ],
                        "especificaciones": [
                            {"categoria":"Agente","label":"Agente extintor","valor":"CO₂ 99.5% pureza"},
                            {"categoria":"Agente","label":"Capacidad","valor":"10 kg nominal"},
                            {"categoria":"Agente","label":"Clase de fuego","valor":"B y C"},
                            {"categoria":"Construcción","label":"Tipo","valor":"Rodante con carro de acero"},
                            {"categoria":"Construcción","label":"Presión servicio","valor":"55–60 bar"},
                            {"categoria":"Operación","label":"Tiempo descarga","valor":"~25 s plena apertura"},
                            {"categoria":"Operación","label":"Alcance","valor":"3.0–4.5 m"},
                            {"categoria":"Certificación","label":"Norma","valor":"NOM-154-SCFI-2005 / UL 154"},
                        ],
                        "aplicaciones": [
                            {"titulo":"Subestaciones Eléctricas","desc":"Transformadores, interruptores y equipos de alta tensión."},
                            {"titulo":"Salas de Control","desc":"DCS, SCADA y paneles de control industrial."},
                            {"titulo":"Centros de Datos Medianos","desc":"Infraestructura de servidores hasta 100 racks."},
                            {"titulo":"Talleres de Electrónica Industrial","desc":"Líneas de producción con equipos electrónicos de valor."},
                        ],
                        "certItems": [
                            {"code":"NOM-154-SCFI-2005","desc":"Norma oficial mexicana extintores portátiles"},
                            {"code":"UL 154","desc":"Extintores CO₂ — Underwriters Laboratories"},
                            {"code":"NFPA 10","desc":"Instalación y mantenimiento de extintores"},
                            {"code":"NOM-028-STPS","desc":"Seguridad contra incendios — instalaciones"},
                            {"code":"ISO 9001","desc":"Sistema de gestión de calidad del fabricante"},
                        ],
                        "specsRapidas": [
                            {"label":"Agente","valor":"CO₂"},{"label":"Capacidad","valor":"10 kg"},
                            {"label":"Tipo","valor":"Rodante"},{"label":"Presión","valor":"55-60 bar"},
                            {"label":"Alcance","valor":"3.0-4.5 m"},{"label":"Norma","valor":"NOM-154-SCFI"},
                        ],
                    },
                    {
                        "slug": "extintor-co2-25kg",
                        "nombre": "Extintor CO₂ 25 kg — Subestaciones y Data Centers",
                        "badge": "25 kg",
                        "badgeColor": "fire",
                        "descripcion": "Extintor rodante de CO₂ 25 kg para data centers de gran escala, cuartos de generadores y subestaciones de alta tensión. Mayor autonomía para operaciones prolongadas.",
                        "caracteristicas": [
                            "Capacidad: 25 kg de CO₂ a 55–60 bar",
                            "Carro de acero con ruedas neumáticas",
                            "Manguera de 3 m con corneta HDPE",
                            "Tiempo de descarga: ~50 s a plena apertura",
                            "Certificado NOM-154-SCFI-2005 y UL 154",
                        ],
                        "aplicacion": "Data centers · Generadores · Alta tensión",
                        "heroTitle": "Extintor CO₂ 25 kg",
                        "heroTitleHighlight": "Gran Capacidad",
                        "heroBadge": "CO₂ · 25 kg · NOM-154-SCFI",
                        "heroSubtitle": "El mayor extintor de CO₂ portátil para data centers y subestaciones de alta tensión. 25 kg de agente, 50 s de descarga, alcance 5 m. Certificado NOM-154-SCFI-2005.",
                        "productoDesc": "El extintor de CO₂ 25 kg es la solución para instalaciones eléctricas críticas de gran escala. Su mayor capacidad permite combatir incendios en centros de datos de alta densidad y subestaciones de alta tensión con tiempo de acción suficiente para el control total.",
                        "productoFeatures": [
                            "25 kg CO₂ nominal — mayor autonomía",
                            "Carro robusto con ruedas neumáticas 250 mm",
                            "Manguera armada 3 m con lanza corneta",
                            "Válvula de seguridad 190 bar + manómetro",
                            "Certificado NOM-154-SCFI-2005 y UL 154",
                            "Placa de identificación y fecha de fabricación",
                        ],
                        "capas": [
                            {"num":"01","titulo":"Cilindro Gran Capacidad 25 kg","descripcion":"Cilindro de acero de alta resistencia para 25 kg de CO₂ líquido. Doble válvula de seguridad calibrada. Pintado rojo RAL 3000 con serigrafía de identificación.","specs":[{"label":"Capacidad","valor":"25 kg CO₂"},{"label":"Presión servicio","valor":"55-60 bar"},{"label":"Peso vacío","valor":"~40 kg"},{"label":"Norma cilindro","valor":"DOT 3AL / NOM-028"}],"color":"ember"},
                            {"num":"02","titulo":"Carro con Ruedas Neumáticas","descripcion":"Estructura de acero tubular 40 mm con ruedas neumáticas 250 mm para todo terreno. Freno de pie y manija ergonómica para maniobra en espacios técnicos.","specs":[{"label":"Ruedas","valor":"Neumático 250 mm"},{"label":"Estructura","valor":"Acero 40 mm pintado"},{"label":"Capacidad carga","valor":"100 kg"},{"label":"Manija","valor":"Ergonómica acero"}],"color":"smoke"},
                            {"num":"03","titulo":"Sistema de Descarga 3 m","descripcion":"Manguera armada de alta presión 3 m con lanza-corneta orientable. Permite al operador mantenerse a distancia segura del fuego eléctrico. Corneta HDPE antiestática.","specs":[{"label":"Longitud manguera","valor":"3 m armada"},{"label":"Presión rotura","valor":">350 bar"},{"label":"Alcance corneta","valor":"4.0–6.0 m"},{"label":"Antiestática","valor":"<1 MΩ resistividad"}],"color":"fire"},
                        ],
                        "especificaciones": [
                            {"categoria":"Agente","label":"Agente extintor","valor":"CO₂ 99.5% pureza"},
                            {"categoria":"Agente","label":"Capacidad","valor":"25 kg nominal"},
                            {"categoria":"Agente","label":"Clase de fuego","valor":"B y C"},
                            {"categoria":"Construcción","label":"Tipo","valor":"Rodante carro acero"},
                            {"categoria":"Construcción","label":"Presión servicio","valor":"55–60 bar"},
                            {"categoria":"Operación","label":"Tiempo descarga","valor":"~50 s plena apertura"},
                            {"categoria":"Operación","label":"Alcance","valor":"4.0–6.0 m"},
                            {"categoria":"Certificación","label":"Norma","valor":"NOM-154-SCFI-2005 / UL 154"},
                        ],
                        "aplicaciones": [
                            {"titulo":"Data Centers de Alta Densidad","desc":"Protección masiva de infraestructura crítica de TI."},
                            {"titulo":"Subestaciones de Alta Tensión","desc":"Transformadores de potencia y celdas de media tensión."},
                            {"titulo":"Salas de Generadores","desc":"Grupos electrógenos diesel y UPS de gran escala."},
                            {"titulo":"Plantas de Producción Electrónica","desc":"Líneas de SMT, ensamble y prueba final de PCBs."},
                        ],
                        "certItems": [
                            {"code":"NOM-154-SCFI-2005","desc":"Norma oficial mexicana extintores portátiles"},
                            {"code":"UL 154","desc":"Extintores CO₂ de alta capacidad"},
                            {"code":"NFPA 10","desc":"Instalación y mantenimiento"},
                            {"code":"DOT 3AL","desc":"Cilindros de presión — transporte terrestre"},
                            {"code":"NOM-028-STPS","desc":"Seguridad instalaciones — STPS"},
                        ],
                        "specsRapidas": [
                            {"label":"Agente","valor":"CO₂"},{"label":"Capacidad","valor":"25 kg"},
                            {"label":"Tipo","valor":"Rodante grande"},{"label":"Presión","valor":"55-60 bar"},
                            {"label":"Alcance","valor":"4.0-6.0 m"},{"label":"Norma","valor":"NOM-154-SCFI"},
                        ],
                    },
                ],
            },
            "polvo-abc": {
                "label": "Polvo ABC",
                "title": "Extintores Polvo Químico ABC Multipropósito | NOM-154 | BOMBERO.MX",
                "description": "Extintores de polvo químico seco ABC para fuegos clase A, B y C. Capacidades de 1 a 150 kg. Certificados NOM-154-SCFI-2005 y UL 299. Ideal para industria, comercio y hogar.",
                "heroBadge": "Polvo ABC · Clase A/B/C · NOM-154-SCFI",
                "heroTitle": "Extintores Polvo ABC",
                "heroTitleHighlight": "Multipropósito",
                "heroSubtitle": "Extintores de polvo químico seco ABC para fuegos clase A, B y C. El extintor multipropósito más versátil del mercado. Certificados NOM-154-SCFI-2005 y UL 299.",
                "ctaBarQuote": "Cotizar Extintores Polvo ABC",
                "products": [
                    {
                        "slug": "extintor-abc-1kg",
                        "nombre": "Extintor Polvo ABC 1 kg — Automotriz",
                        "badge": "1 kg",
                        "badgeColor": "smoke",
                        "descripcion": "Extintor compacto de polvo ABC 1 kg para vehículos, motocicletas y embarcaciones. Diseño compacto que cabe en guantera. Clase A, B y C certificado.",
                        "caracteristicas": [
                            "Capacidad: 1 kg polvo ABC al 90% de eficiencia",
                            "Clase de fuego: A, B y C",
                            "Presión de operación: 14–18 bar con nitrógeno",
                            "Dimensiones: 27 cm alto × 9 cm diámetro",
                            "Certificado NOM-154-SCFI-2005",
                        ],
                        "aplicacion": "Vehículos · Motocicletas · Embarcaciones",
                        "heroTitle": "Extintor Polvo ABC 1 kg",
                        "heroTitleHighlight": "Automotriz",
                        "heroBadge": "Polvo ABC · 1 kg · NOM-154-SCFI",
                        "heroSubtitle": "Extintor compacto de polvo ABC 1 kg para vehículos y transporte. Cabe en guantera. Clase A, B y C. Certificado NOM-154-SCFI-2005.",
                        "productoDesc": "El extintor de polvo ABC 1 kg es el modelo de emergencia para vehículos, motocicletas y embarcaciones recreativas. Su tamaño compacto permite almacenarlo en la guantera o bajo el asiento sin sacrificar capacidad de extinción básica.",
                        "productoFeatures": [
                            "Polvo fosfato monoamónico ABC al 90%",
                            "Presión con nitrógeno 14–18 bar",
                            "Dimensiones compactas: 27 × 9 cm",
                            "Manguera corta con pistola de descarga",
                            "Certificado NOM-154-SCFI-2005",
                            "Manómetro indicador de presión incluido",
                        ],
                        "capas": [
                            {"num":"01","titulo":"Cilindro Compacto","descripcion":"Cilindro de acero soldado de 27 cm × 9 cm con recubrimiento epóxico rojo. Presurizado con nitrógeno seco. Manómetro de clase 2.5 incluido.","specs":[{"label":"Material","valor":"Acero DIN"},{"label":"Presión","valor":"14-18 bar N₂"},{"label":"Peso bruto","valor":"~1.5 kg"},{"label":"Dimensiones","valor":"27 × 9 cm"}],"color":"ember"},
                            {"num":"02","titulo":"Polvo Fosfato Monoamónico","descripcion":"Polvo fosfato monoamónico NH₄H₂PO₄ al 90% de pureza. Actúa sobre fuegos clase A (sólidos), B (líquidos) y C (gases). Inerte, no conductor eléctrico.","specs":[{"label":"Composición","valor":"NH₄H₂PO₄ 90%"},{"label":"Granulometría","valor":"<75 µm promedio"},{"label":"Clase fuego","valor":"A, B y C"},{"label":"No conductor","valor":"Eléctrico — Clase C"}],"color":"smoke"},
                            {"num":"03","titulo":"Válvula y Manguera","descripcion":"Válvula de latón con gatillo de acero y pasador de seguridad. Manguera corta 30 cm con pistola de descarga ergonómica para uso con una mano.","specs":[{"label":"Material válvula","valor":"Latón CW614N"},{"label":"Manguera","valor":"30 cm presurizada"},{"label":"Pistola","valor":"Polipropileno"},{"label":"Pasador","valor":"Acero inox. + precinto"}],"color":"fire"},
                        ],
                        "especificaciones": [
                            {"categoria":"Agente","label":"Tipo de agente","valor":"Polvo Fosfato Monoamónico ABC"},
                            {"categoria":"Agente","label":"Concentración","valor":"90% NH₄H₂PO₄"},
                            {"categoria":"Agente","label":"Capacidad","valor":"1 kg"},
                            {"categoria":"Agente","label":"Clase de fuego","valor":"A, B y C"},
                            {"categoria":"Construcción","label":"Propelente","valor":"Nitrógeno seco N₂"},
                            {"categoria":"Construcción","label":"Presión operación","valor":"14–18 bar"},
                            {"categoria":"Operación","label":"Tiempo descarga","valor":"~6 s"},
                            {"categoria":"Operación","label":"Alcance","valor":"1.0–2.0 m"},
                            {"categoria":"Certificación","label":"Norma","valor":"NOM-154-SCFI-2005 / UL 299"},
                        ],
                        "aplicaciones": [
                            {"titulo":"Automóviles y Pickup","desc":"Extinción de incendios en motor, interior o depósito de combustible."},
                            {"titulo":"Motocicletas","desc":"Protección en guardabarros o portaequipaje para incendios de motor."},
                            {"titulo":"Embarcaciones Recreativas","desc":"Fuegos en motor fuera de borda y combustible de depósito."},
                            {"titulo":"Cuartos Técnicos Pequeños","desc":"Protección básica en cuartos de instalaciones menores."},
                        ],
                        "certItems": [
                            {"code":"NOM-154-SCFI-2005","desc":"Norma oficial mexicana extintores portátiles"},
                            {"code":"UL 299","desc":"Extintores polvo seco — Underwriters Laboratories"},
                            {"code":"NFPA 10","desc":"Instalación y mantenimiento"},
                            {"code":"ISO 9001","desc":"Sistema gestión calidad fabricante"},
                            {"code":"NOM-028-STPS","desc":"Prevención incendios — STPS"},
                        ],
                        "specsRapidas": [
                            {"label":"Agente","valor":"Polvo ABC"},{"label":"Capacidad","valor":"1 kg"},
                            {"label":"Clase fuego","valor":"A, B, C"},{"label":"Presión","valor":"14-18 bar"},
                            {"label":"Alcance","valor":"1.0-2.0 m"},{"label":"Norma","valor":"NOM-154-SCFI"},
                        ],
                    },
                    {
                        "slug": "extintor-abc-4kg",
                        "nombre": "Extintor Polvo ABC 4 kg — Oficina y Comercio",
                        "badge": "4 kg",
                        "badgeColor": "fire",
                        "descripcion": "Extintor de polvo ABC 4 kg para oficinas, locales comerciales y áreas de trabajo. El tamaño más recomendado por NFPA 10 para riesgo ordinario. Clase A, B y C certificado.",
                        "caracteristicas": [
                            "Capacidad: 4 kg polvo ABC fosfato monoamónico",
                            "Clase de fuego: A, B y C",
                            "Presión de operación: 14–18 bar con nitrógeno",
                            "Manómetro indicador de presión incluido",
                            "Certificado NOM-154-SCFI-2005 y UL 299",
                        ],
                        "aplicacion": "Oficinas · Comercio · Industria ligera",
                        "heroTitle": "Extintor Polvo ABC 4 kg",
                        "heroTitleHighlight": "Riesgo Ordinario",
                        "heroBadge": "Polvo ABC · 4 kg · NOM-154-SCFI",
                        "heroSubtitle": "El extintor ABC más recomendado para oficinas y locales comerciales. 4 kg de polvo fosfato monoamónico, clase A, B y C. Certificado NOM-154-SCFI-2005.",
                        "productoDesc": "El extintor de polvo ABC 4 kg es el estándar de facto para oficinas, locales comerciales y pequeñas industrias. NFPA 10 lo clasifica como la unidad base para áreas de riesgo ordinario hasta 250 m². Incluye bracket de pared y señalética NOM.",
                        "productoFeatures": [
                            "4 kg polvo fosfato monoamónico ABC",
                            "Nitrógeno seco 14–18 bar como propelente",
                            "Manguera flexible 60 cm con boquilla",
                            "Manómetro clase 2.5 indicador de estado",
                            "Bracket de pared y señalética NOM incluidos",
                            "Certificado NOM-154-SCFI-2005 y UL 299",
                        ],
                        "capas": [
                            {"num":"01","titulo":"Cilindro Estándar 4 kg","descripcion":"Cilindro de acero soldado presurizado con nitrógeno seco. Pintura epóxica roja RAL 3000 resistente a UV. Etiqueta técnica conforme a NOM-154.","specs":[{"label":"Capacidad","valor":"4 kg polvo ABC"},{"label":"Presión N₂","valor":"14-18 bar"},{"label":"Peso bruto","valor":"~5.5 kg"},{"label":"Pintura","valor":"Epóxica roja NOM"}],"color":"ember"},
                            {"num":"02","titulo":"Polvo ABC Multipropósito","descripcion":"Polvo fosfato monoamónico al 90% efectivo contra fuegos clase A (madera, papel), B (gasolina, aceites) y C (equipos eléctricos vivos hasta 1 kV).","specs":[{"label":"Composición","valor":"NH₄H₂PO₄ 90%"},{"label":"Clase A","valor":"Sólidos combustibles"},{"label":"Clase B","valor":"Líquidos inflamables"},{"label":"Clase C","valor":"Gases y equipos elect."}],"color":"smoke"},
                            {"num":"03","titulo":"Manguera y Boquilla","descripcion":"Manguera flexible de 60 cm con boquilla dirigible. Permite apuntar a la base del fuego sin mover el cilindro. Pasador de seguridad con precinto de garantía.","specs":[{"label":"Longitud","valor":"60 cm"},{"label":"Boquilla","valor":"Polipropileno 360°"},{"label":"Precinto","valor":"Inviolable numerado"},{"label":"Alcance","valor":"2.5–4.0 m"}],"color":"fire"},
                        ],
                        "especificaciones": [
                            {"categoria":"Agente","label":"Tipo de agente","valor":"Polvo Fosfato Monoamónico ABC"},
                            {"categoria":"Agente","label":"Capacidad","valor":"4 kg"},
                            {"categoria":"Agente","label":"Clase de fuego","valor":"A, B y C"},
                            {"categoria":"Construcción","label":"Propelente","valor":"Nitrógeno seco N₂"},
                            {"categoria":"Construcción","label":"Presión","valor":"14–18 bar"},
                            {"categoria":"Operación","label":"Tiempo descarga","valor":"~12 s"},
                            {"categoria":"Operación","label":"Alcance","valor":"2.5–4.0 m"},
                            {"categoria":"Certificación","label":"Norma","valor":"NOM-154-SCFI-2005 / UL 299"},
                        ],
                        "aplicaciones": [
                            {"titulo":"Oficinas","desc":"Protección básica por unidad de área en riesgo ordinario."},
                            {"titulo":"Locales Comerciales","desc":"Tiendas, restaurantes y establecimientos de servicios."},
                            {"titulo":"Talleres Pequeños","desc":"Actividades de ensamble, carpintería y trabajo ligero."},
                            {"titulo":"Almacenes","desc":"Bodegas de productos no peligrosos de tamaño mediano."},
                        ],
                        "certItems": [
                            {"code":"NOM-154-SCFI-2005","desc":"Extintores portátiles — norma oficial México"},
                            {"code":"UL 299","desc":"Extintores polvo seco"},
                            {"code":"NFPA 10","desc":"Instalación y mantenimiento de extintores"},
                            {"code":"NOM-002-STPS","desc":"Condiciones de seguridad en centros de trabajo"},
                            {"code":"ISO 9001","desc":"Gestión de calidad fabricante"},
                        ],
                        "specsRapidas": [
                            {"label":"Agente","valor":"Polvo ABC"},{"label":"Capacidad","valor":"4 kg"},
                            {"label":"Clase fuego","valor":"A, B, C"},{"label":"Presión","valor":"14-18 bar"},
                            {"label":"Alcance","valor":"2.5-4.0 m"},{"label":"Norma","valor":"NOM-154-SCFI"},
                        ],
                    },
                    {
                        "slug": "extintor-abc-9kg",
                        "nombre": "Extintor Polvo ABC 9 kg — Industria",
                        "badge": "9 kg",
                        "badgeColor": "ember",
                        "descripcion": "Extintor de polvo ABC 9 kg para protección industrial y áreas de alto riesgo. Mayor tiempo de descarga y alcance. Ideal para hangares, bodegas y plantas industriales.",
                        "caracteristicas": [
                            "Capacidad: 9 kg polvo ABC certificado",
                            "Clase de fuego: A, B y C",
                            "Tiempo de descarga: ~20 s a plena apertura",
                            "Alcance: 4.0–6.0 m efectivo",
                            "Certificado NOM-154-SCFI-2005 y UL 299",
                        ],
                        "aplicacion": "Industria · Hangares · Bodegas grandes",
                        "heroTitle": "Extintor Polvo ABC 9 kg",
                        "heroTitleHighlight": "Industrial",
                        "heroBadge": "Polvo ABC · 9 kg · NOM-154-SCFI",
                        "heroSubtitle": "Extintor de polvo ABC 9 kg para protección industrial. Mayor tiempo de descarga y alcance. Clase A, B y C. Certificado NOM-154-SCFI-2005 y UL 299.",
                        "productoDesc": "El extintor de polvo ABC 9 kg cubre espacios industriales de mediana envergadura. Con 20 segundos de descarga y alcance hasta 6 m, permite al operador mantener distancia segura mientras controla el incendio.",
                        "productoFeatures": [
                            "9 kg polvo fosfato monoamónico ABC",
                            "Nitrógeno seco 14–18 bar como propelente",
                            "Manguera armada 80 cm con boquilla",
                            "Manómetro clase 2.5 + indicador visual",
                            "Carro de pared para instalación fija",
                            "Certificado NOM-154-SCFI-2005 y UL 299",
                        ],
                        "capas": [
                            {"num":"01","titulo":"Cilindro Industrial 9 kg","descripcion":"Cilindro de acero de gran capacidad para 9 kg de polvo ABC. Peso en operación ~12.5 kg. Pintura epóxica resistente a grasa industrial y UV exterior.","specs":[{"label":"Capacidad","valor":"9 kg polvo ABC"},{"label":"Peso bruto","valor":"~12.5 kg"},{"label":"Presión N₂","valor":"14-18 bar"},{"label":"Diámetro","valor":"17 cm"}],"color":"ember"},
                            {"num":"02","titulo":"Sistema de Descarga Industrial","descripcion":"Válvula de latón de cuerpo reforzado con manguera armada de 80 cm. Boquilla de polipropileno con deflector ajustable para dirigir el polvo a la base del fuego.","specs":[{"label":"Manguera","valor":"80 cm armada"},{"label":"Boquilla","valor":"Deflector ajustable"},{"label":"Válvula","valor":"Latón cuerpo reforzado"},{"label":"Alcance","valor":"4.0-6.0 m"}],"color":"smoke"},
                            {"num":"03","titulo":"Soporte Mural de Acero","descripcion":"Soporte mural de acero estampado galvanizado para instalación en pared. Compatible con señalética NOM. Tornillos de anclaje incluidos.","specs":[{"label":"Material","valor":"Acero galvanizado"},{"label":"Carga","valor":"15 kg máximo"},{"label":"Señalética","valor":"NOM incluida"},{"label":"Anclaje","valor":"Pared sólida o dry-wall"}],"color":"fire"},
                        ],
                        "especificaciones": [
                            {"categoria":"Agente","label":"Tipo de agente","valor":"Polvo Fosfato Monoamónico ABC"},
                            {"categoria":"Agente","label":"Capacidad","valor":"9 kg"},
                            {"categoria":"Agente","label":"Clase de fuego","valor":"A, B y C"},
                            {"categoria":"Construcción","label":"Propelente","valor":"Nitrógeno seco N₂"},
                            {"categoria":"Construcción","label":"Presión","valor":"14–18 bar"},
                            {"categoria":"Operación","label":"Tiempo descarga","valor":"~20 s"},
                            {"categoria":"Operación","label":"Alcance","valor":"4.0–6.0 m"},
                            {"categoria":"Certificación","label":"Norma","valor":"NOM-154-SCFI-2005 / UL 299"},
                        ],
                        "aplicaciones": [
                            {"titulo":"Plantas Industriales","desc":"Líneas de producción con riesgo de incendio por calor o combustibles."},
                            {"titulo":"Hangares de Aviación Ligera","desc":"Protección de aeronaves ligeras y taller de mantenimiento."},
                            {"titulo":"Bodegas de Almacenamiento","desc":"Almacenes de productos empacados y materiales de construcción."},
                            {"titulo":"Estaciones de Servicio","desc":"Protección adicional en islas de despacho y cuartos de bombas."},
                        ],
                        "certItems": [
                            {"code":"NOM-154-SCFI-2005","desc":"Norma oficial mexicana extintores portátiles"},
                            {"code":"UL 299","desc":"Extintores polvo seco industrial"},
                            {"code":"NFPA 10","desc":"Instalación y mantenimiento"},
                            {"code":"NOM-028-STPS","desc":"Seguridad en instalaciones — STPS"},
                            {"code":"ISO 9001","desc":"Gestión de calidad"},
                        ],
                        "specsRapidas": [
                            {"label":"Agente","valor":"Polvo ABC"},{"label":"Capacidad","valor":"9 kg"},
                            {"label":"Clase fuego","valor":"A, B, C"},{"label":"Presión","valor":"14-18 bar"},
                            {"label":"Alcance","valor":"4.0-6.0 m"},{"label":"Norma","valor":"NOM-154-SCFI"},
                        ],
                    },
                    {
                        "slug": "extintor-abc-50kg",
                        "nombre": "Extintor Polvo ABC 50 kg — Rodante Industrial",
                        "badge": "50 kg",
                        "badgeColor": "fire",
                        "descripcion": "Extintor rodante de polvo ABC 50 kg para protección de grandes instalaciones industriales, plantas petroquímicas y aeropuertos. Mayor autonomía de extinción.",
                        "caracteristicas": [
                            "Capacidad: 50 kg polvo ABC sobre carro rodante",
                            "Clase de fuego: A, B y C",
                            "Manguera de 5 m con lanza dispersora",
                            "Tiempo de descarga: ~60 s a plena apertura",
                            "Certificado NOM-154-SCFI-2005",
                        ],
                        "aplicacion": "Petroquímica · Aeropuertos · Gran industria",
                        "heroTitle": "Extintor Polvo ABC 50 kg",
                        "heroTitleHighlight": "Rodante Industrial",
                        "heroBadge": "Polvo ABC · 50 kg · NOM-154-SCFI",
                        "heroSubtitle": "Extintor rodante de polvo ABC 50 kg para la gran industria. 60 s de descarga, alcance 8 m, manguera 5 m. Certificado NOM-154-SCFI-2005.",
                        "productoDesc": "El extintor rodante de polvo ABC 50 kg es la solución para plantas petroquímicas, refinerías y aeropuertos. Su gran capacidad proporciona más de un minuto de descarga continua para controlar incendios en grandes superficies.",
                        "productoFeatures": [
                            "50 kg polvo ABC fosfato monoamónico",
                            "Carro de acero con ruedas neumáticas 300 mm",
                            "Manguera armada 5 m con lanza dispersora",
                            "Doble válvula de seguridad y manómetro",
                            "Tapa de llenado con sello inviolable",
                            "Certificado NOM-154-SCFI-2005",
                        ],
                        "capas": [
                            {"num":"01","titulo":"Cilindro Rodante 50 kg","descripcion":"Gran cilindro de acero 50 kg sobre carro de acero tubular. Ruedas neumáticas 300 mm para todo terreno industrial. Sistema de frenado de pie.","specs":[{"label":"Capacidad","valor":"50 kg polvo ABC"},{"label":"Peso total","valor":"~80 kg con polvo"},{"label":"Ruedas","valor":"Neumático 300 mm"},{"label":"Carro","valor":"Acero tubular 50 mm"}],"color":"ember"},
                            {"num":"02","titulo":"Sistema de Descarga 5 m","descripcion":"Manguera armada de alta resistencia de 5 m con lanza dispersora ajustable. Permite al operador alejarse hasta 5 m del extintor mientras descarga.","specs":[{"label":"Longitud","valor":"5 m armada"},{"label":"Presión máx.","valor":"350 bar rotura"},{"label":"Lanza","valor":"Dispersión ajustable"},{"label":"Alcance","valor":"6.0–9.0 m"}],"color":"smoke"},
                            {"num":"03","titulo":"Sistema de Presurización","descripcion":"Nitrógeno seco a 14–18 bar con manómetro de doble aguja. Válvula de seguridad de alivio calibrada. Acceso de recarga con sello inviolable.","specs":[{"label":"Propelente","valor":"Nitrógeno seco N₂"},{"label":"Presión","valor":"14-18 bar"},{"label":"Válvula alivio","valor":"Calibrada 25 bar"},{"label":"Recarga","valor":"Puerto NPT 1\""}],"color":"fire"},
                        ],
                        "especificaciones": [
                            {"categoria":"Agente","label":"Tipo de agente","valor":"Polvo Fosfato Monoamónico ABC"},
                            {"categoria":"Agente","label":"Capacidad","valor":"50 kg"},
                            {"categoria":"Agente","label":"Clase de fuego","valor":"A, B y C"},
                            {"categoria":"Construcción","label":"Tipo","valor":"Rodante carro acero tubular"},
                            {"categoria":"Construcción","label":"Presión","valor":"14–18 bar N₂"},
                            {"categoria":"Operación","label":"Tiempo descarga","valor":"~60 s"},
                            {"categoria":"Operación","label":"Alcance","valor":"6.0–9.0 m"},
                            {"categoria":"Certificación","label":"Norma","valor":"NOM-154-SCFI-2005"},
                        ],
                        "aplicaciones": [
                            {"titulo":"Plantas Petroquímicas","desc":"Protección de tuberías, manifolds y zonas de proceso."},
                            {"titulo":"Aeropuertos","desc":"Plataformas de aviación y hangares de aeronaves comerciales."},
                            {"titulo":"Plantas de Generación Eléctrica","desc":"Turbinas de gas, transformadores de potencia."},
                            {"titulo":"Muelles y Terminales Marítimas","desc":"Zonas de carga de productos inflamables."},
                        ],
                        "certItems": [
                            {"code":"NOM-154-SCFI-2005","desc":"Extintores portátiles — NOM"},
                            {"code":"UL 299","desc":"Extintores polvo seco rodantes"},
                            {"code":"NFPA 10","desc":"Instalación y mantenimiento"},
                            {"code":"NOM-028-STPS","desc":"Seguridad instalaciones industriales"},
                            {"code":"API RP 2001","desc":"Protección contra incendio en refinerías"},
                        ],
                        "specsRapidas": [
                            {"label":"Agente","valor":"Polvo ABC"},{"label":"Capacidad","valor":"50 kg"},
                            {"label":"Tipo","valor":"Rodante industrial"},{"label":"Presión","valor":"14-18 bar"},
                            {"label":"Alcance","valor":"6.0-9.0 m"},{"label":"Norma","valor":"NOM-154-SCFI"},
                        ],
                    },
                ],
            },
        },
    },
}


def esc(s):
    """Escape backticks and template literals for Astro/TS"""
    return s.replace("`", "\\`").replace("${", "\\${")


def make_categoria_index(cat_slug, subcat_slug, data, cat_data, base_path):
    """Generate a CategoriaLayout subcategory index.astro"""
    products = data["products"]
    
    # Build productoCards
    cards_parts = []
    for i, p in enumerate(products):
        img_src = img(i + 3)  # offset for variety
        chars = json_str_list(p["caracteristicas"])
        cards_parts.append(f"""  {{
    nombre: "{esc(p['nombre'])}",
    slug: "/{cat_slug}/{subcat_slug}/{p['slug']}/",
    badge: "{esc(p['badge'])}",
    badgeColor: "{p['badgeColor']}" as const,
    imagen: "{img_src}",
    descripcion: "{esc(p['descripcion'])}",
    caracteristicas: {chars},
    aplicacion: "{esc(p['aplicacion'])}",
  }}""")
    
    cards_str = "[\n" + ",\n".join(cards_parts) + "\n]"
    
    keywords = [
        f"{data['label']} certificado México",
        f"{data['label']} NOM-154-SCFI",
        f"comprar {data['label']} México",
        f"{data['label']} bomberos",
        f"extintor {subcat_slug.replace('-', ' ')} México",
    ]
    
    return f"""---

import CategoriaLayout from "@layouts/CategoriaLayout.astro";

const SLUG = "/productos/{cat_slug}/{subcat_slug}/";

const productoCards = {cards_str};

const specsCards = [
  {{
    title: "Agente Extintor y Clasificación",
    icon: "shield",
    description: "Agente extintor {esc(data['label'])} certificado para las clases de fuego indicadas. Cada unidad viene con su ficha técnica de seguridad (FDS/MSDS) y certificado de laboratorio acreditado conforme a NOM-154-SCFI-2005.",
  }},
  {{
    title: "Certificaciones y Normas",
    icon: "certificate",
    description: "NOM-154-SCFI-2005 para extintores portátiles en México. UL 299 (polvo) o UL 154 (CO₂) de Underwriters Laboratories. NFPA 10 para instalación y mantenimiento. Documentación completa para licitaciones de los 32 estados.",
  }},
  {{
    title: "Aplicaciones Operativas",
    icon: "users",
    description: "Instalación en edificios comerciales, plantas industriales, vehículos y zonas de riesgo especial conforme a NFPA 10 y NOM-002-STPS. Asesoría de distribución sin costo para proyectos de protección contra incendios.",
  }},
];

const tablaHeaders = ["Modelo", "Capacidad", "Clase Fuego", "Presión (bar)", "Alcance (m)", "Certificación"];

const tablaRows = [
{chr(10).join([f'  {{ cells: [{{ text: "{esc(p["nombre"].split("—")[0].strip())}" }}, {{ text: "{esc(p["badge"])}" }}, {{ text: "{esc(p["aplicacion"].split("·")[0].strip())}" }}, {{ text: "14-18 bar", chip: "smoke" as const }}, {{ text: "2-6 m", chip: "ember" as const }}, {{ text: "NOM-154-SCFI" }}] }},' for p in products])}
];

const relacionadoCards = [
  {{
    title: "Extintores CO₂",
    icon: "shield",
    image: "/images/base/equipo-completo.avif",
    href: "/productos/extintores/co2/",
    buttonText: "Ver Extintores CO₂",
    items: [
      {{ label: "CO₂ 2 kg", href: "/productos/extintores/co2/extintor-co2-2kg/" }},
      {{ label: "CO₂ 5 kg", href: "/productos/extintores/co2/extintor-co2-5kg/" }},
      {{ label: "CO₂ 10 kg", href: "/productos/extintores/co2/extintor-co2-10kg/" }},
    ],
  }},
  {{
    title: "Extintores Polvo ABC",
    icon: "shield",
    image: "/images/base/camion-bomberos.avif",
    href: "/productos/extintores/polvo-abc/",
    buttonText: "Ver Polvo ABC",
    items: [
      {{ label: "Polvo ABC 1 kg", href: "/productos/extintores/polvo-abc/extintor-abc-1kg/" }},
      {{ label: "Polvo ABC 4 kg", href: "/productos/extintores/polvo-abc/extintor-abc-4kg/" }},
      {{ label: "Polvo ABC 9 kg", href: "/productos/extintores/polvo-abc/extintor-abc-9kg/" }},
    ],
  }},
  {{
    title: "Espuma AFFF",
    icon: "shield",
    image: "/images/base/estacion-bomberos.avif",
    href: "/productos/extintores/espuma-afff/",
    buttonText: "Ver Espuma AFFF",
    items: [
      {{ label: "AFFF 9 L", href: "/productos/extintores/espuma-afff/espuma-afff-9l/" }},
      {{ label: "AFFF 50 L", href: "/productos/extintores/espuma-afff/espuma-afff-50l/" }},
    ],
  }},
  {{
    title: "Agentes Limpios",
    icon: "certificate",
    image: "/images/base/traje-hazmat.avif",
    href: "/productos/extintores/halon-sustitutos/",
    buttonText: "Ver Agentes Limpios",
    items: [
      {{ label: "FM-200 2 kg", href: "/productos/extintores/halon-sustitutos/fm200-2kg/" }},
      {{ label: "Novec 1230 3 kg", href: "/productos/extintores/halon-sustitutos/novec-1230-3kg/" }},
    ],
  }},
];

const faqs = [
  {{
    q: "¿Qué certificación deben tener los extintores en México?",
    a: "En México, los extintores deben cumplir con la <strong>NOM-154-SCFI-2005</strong> (Extintores contra incendio - Clasificación, especificaciones y métodos de prueba). Complementariamente se aceptan certificaciones <strong>UL 299</strong> (polvo) y <strong>UL 154</strong> (CO₂). Para instalaciones industriales aplica también la <strong>NOM-028-STPS</strong>.",
  }},
  {{
    q: "¿Con qué frecuencia se debe revisar un extintor?",
    a: "Según <strong>NFPA 10</strong> y la <strong>NOM-002-STPS</strong>, los extintores requieren inspección mensual visual por parte del usuario y mantenimiento anual por empresa autorizada. El hidrostático (prueba de presión) se realiza cada 5 o 12 años según el tipo de cilindro.",
  }},
  {{
    q: "¿Qué clase de fuego cubre el polvo ABC?",
    a: "El polvo fosfato monoamónico ABC cubre: <strong>Clase A</strong> (sólidos como madera, papel, tela), <strong>Clase B</strong> (líquidos y gases inflamables como gasolina, LPG) y <strong>Clase C</strong> (equipos eléctricos vivos hasta 1,000 V). No es efectivo para fuegos clase D (metales) ni K (aceites de cocina).",
  }},
];
---

<CategoriaLayout
  title="{esc(data['title'])}"
  description="{esc(data['description'])}"
  keywords={{[{', '.join([f'"{k}"' for k in keywords])}]}}
  type="product"
  canonical={{SLUG}}
  breadcrumb={{[
    {{ label: "Inicio", href: "/" }},
    {{ label: "Productos", href: "/productos/" }},
    {{ label: "Extintores", href: "/productos/extintores/" }},
    {{ label: "{esc(data['label'])}" }},
  ]}}
  heroBadge="{esc(data['heroBadge'])}"
  heroTitle="{esc(data['heroTitle'])}"
  heroTitleHighlight="{esc(data['heroTitleHighlight'])}"
  heroSubtitle="{esc(data['heroSubtitle'])}"
  heroSeoBlocks={{[
    {{
      title: "Distribuidores de {esc(data['label'])} en México",
      text: "En <strong>BOMBERO.MX</strong> distribuimos <strong>{esc(data['label'])}</strong> certificados para todos los sectores. Documentación completa para licitaciones públicas en los 32 estados de México.",
    }},
    {{
      title: "Calidad Certificada NOM-154-SCFI",
      text: "Cada extintor incluye <strong>certificado de laboratorio acreditado</strong>, ficha técnica y FDS (Hoja de Seguridad). Asesoría técnica gratuita para selección e instalación según <strong>NFPA 10 y NOM-028-STPS</strong>.",
    }},
  ]}}
  ctaBarQuote="{esc(data['ctaBarQuote'])}"
  productosLabel="{esc(data['label'])}"
  productosTitle="Modelos Disponibles de {esc(data['label'])}"
  productosDesc="Selecciona la capacidad y configuración adecuada para tu nivel de riesgo y superficie a proteger conforme a NFPA 10."
  productosContent={{`<p>Los <strong>{esc(data['label'])}</strong> están disponibles en múltiples capacidades para cubrir desde escritorios individuales hasta grandes instalaciones industriales. Cada modelo incluye ficha técnica y certificado NOM-154-SCFI para <strong>licitaciones en los 32 estados de México</strong>.</p>`}}
  productoCards={{productoCards}}
  specsTitle="Certificaciones y Normas Aplicables"
  specsDesc="Todos los extintores cumplen NOM-154-SCFI-2005 y normas internacionales UL/NFPA."
  specsContent={{`<p>La selección correcta del extintor requiere analizar el tipo de combustible (clase de fuego), el área a proteger (m²) y las condiciones de acceso. En <strong>BOMBERO.MX</strong> elaboramos proyectos de protección contra incendios con especificaciones técnicas y documentación para <strong>licitaciones en los 32 estados</strong>.</p>`}}
  specsCards={{specsCards}}
  comparativaTitle="Comparativa de Modelos {esc(data['label'])}"
  comparativaDesc="Compara capacidad, clase de fuego, presión y certificaciones para elegir el modelo correcto."
  comparativaContent={{`<p>La <strong>selección del extintor correcto</strong> depende principalmente de la clase de fuego y el área de cobertura establecida por NFPA 10. Un extintor 2A-10BC es el mínimo para riesgo ordinario en 250 m². Contacta a nuestro equipo técnico para proyectos específicos.</p>`}}
  tablaHeaders={{tablaHeaders}}
  tablaRows={{tablaRows}}
  relacionadosTitle="Otros Tipos de Extintores"
  relacionadosDesc="Explora todos los agentes extintores disponibles en nuestro catálogo certificado."
  relacionadosContent={{`<p>Un sistema de protección contra incendios eficiente requiere el agente extintor correcto para cada riesgo específico. En <strong>BOMBERO.MX</strong> somos distribuidores autorizados de todos los tipos de extintores certificados para México.</p>`}}
  relacionadoCards={{relacionadoCards}}
  faqs={{faqs}}
/>
"""


def json_str_list(lst):
    """Convert Python list of strings to TS array literal"""
    items = ", ".join([f'"{esc(s)}"' for s in lst])
    return f"[{items}]"


def make_product_page(cat_slug, subcat_slug, product, cat_breadcrumb_label, subcat_label):
    """Generate a ProductoLayout product index.astro"""
    p = product
    img_src = img(hash(p['slug']) % len(IMAGES))
    
    # Build capas
    capas_parts = []
    for c in p["capas"]:
        specs_parts = [f'{{ label: "{esc(s["label"])}", valor: "{esc(s["valor"])}" }}' for s in c["specs"]]
        capas_parts.append(f"""  {{
    num: "{c['num']}",
    titulo: "{esc(c['titulo'])}",
    descripcion: "{esc(c['descripcion'])}",
    specs: [{", ".join(specs_parts)}],
    color: "{c['color']}" as const,
  }}""")
    
    capas_str = "[\n" + ",\n".join(capas_parts) + "\n]"
    
    # Build especificaciones
    specs_parts = []
    for e in p["especificaciones"]:
        specs_parts.append(f'  {{ categoria: "{esc(e["categoria"])}", label: "{esc(e["label"])}", valor: "{esc(e["valor"])}" }}')
    specs_str = "[\n" + ",\n".join(specs_parts) + "\n]"
    
    # Build aplicaciones
    aplic_parts = []
    for a in p["aplicaciones"]:
        aplic_parts.append(f'  {{ titulo: "{esc(a["titulo"])}", desc: "{esc(a["desc"])}" }}')
    aplic_str = "[\n" + ",\n".join(aplic_parts) + "\n]"
    
    # Build certItems
    cert_parts = []
    for c in p["certItems"]:
        cert_parts.append(f'  {{ code: "{esc(c["code"])}", desc: "{esc(c["desc"])}" }}')
    certs_str = "[\n" + ",\n".join(cert_parts) + "\n]"
    
    # Build specsRapidas
    sr_parts = [f'  {{ label: "{esc(s["label"])}", valor: "{esc(s["valor"])}" }}' for s in p["specsRapidas"]]
    sr_str = "[\n" + ",\n".join(sr_parts) + "\n]"
    
    features_str = json_str_list(p["productoFeatures"])
    app_tags_str = json_str_list([a["titulo"] for a in p["aplicaciones"]])
    
    return f"""---

import ProductoLayout from "@layouts/ProductoLayout.astro";

const IMAGE = "{img_src}";
---

<ProductoLayout
  title="{esc(p['nombre'])} | {esc(subcat_label)} | BOMBERO.MX"
  description="{esc(p['productoDesc'][:155])}"
  keywords={{["{esc(p['nombre'].lower())}", "{esc(subcat_label.lower())} México", "extintor certificado NOM-154 México", "comprar extintor México"]}}
  canonical="/productos/{cat_slug}/{subcat_slug}/{p['slug']}/"
  image={{IMAGE}}

  breadcrumb={{[
    {{ label: "Inicio", href: "/" }},
    {{ label: "Productos", href: "/productos/" }},
    {{ label: "{esc(cat_breadcrumb_label)}", href: "/productos/{cat_slug}/" }},
    {{ label: "{esc(subcat_label)}", href: "/productos/{cat_slug}/{subcat_slug}/" }},
    {{ label: "{esc(p['nombre'])}" }},
  ]}}

  heroBadge="{esc(p['heroBadge'])}"
  heroTitle="{esc(p['heroTitle'])}"
  heroTitleHighlight="{esc(p['heroTitleHighlight'])}"
  heroSubtitle="{esc(p['heroSubtitle'])}"
  heroSeoBlocks={{[
    {{
      title: "{esc(p['nombre'])} — Distribuidor Autorizado México",
      text: "En <strong>BOMBERO.MX</strong> distribuimos <strong>{esc(p['nombre'])}</strong> con certificación NOM-154-SCFI-2005 para los 32 estados de México. Documentación técnica completa para licitaciones públicas.",
    }},
    {{
      title: "Certificación NOM-154-SCFI con Documentación Incluida",
      text: "Cada unidad incluye <strong>ficha técnica, FDS y certificado de laboratorio</strong> acreditado — indispensable para <strong>licitaciones gubernamentales</strong> en México. Asesoría técnica gratuita para selección e instalación.",
    }},
  ]}}

  ctaBarQuote="Cotizar {esc(p['nombre'])}"

  productoCategoria="{esc(subcat_label)}"
  productoBadges={{[
    {{ modifier: "nfpa", text: "NOM-154-SCFI" }},
    {{ modifier: "tpp", text: "UL Certified" }},
    {{ modifier: "solas", text: "NFPA 10" }},
  ]}}
  productoMasVendido={{false}}
  productoTitle="{esc(p['heroTitle'])}"
  productoTitleSub="{esc(p['heroTitleHighlight'])}"
  productoDesc="{esc(p['productoDesc'])}"
  productoFeatures={{{features_str}}}
  productoAppTags={{{app_tags_str}}}

  gallery={{[
    {{ src: IMAGE, alt: "{esc(p['nombre'])} certificado NOM-154-SCFI BOMBERO.MX" }},
    {{ src: "/images/base/estacion-bomberos.avif", alt: "Extintor en uso — BOMBERO.MX" }},
    {{ src: "/images/base/equipo-completo.avif", alt: "Equipo de protección contra incendios — BOMBERO.MX" }},
  ]}}

  capasEyebrow="Componentes del Extintor"
  capasTitle="Anatomía y Construcción"
  capasDesc="Cada componente del extintor cumple una función específica y ha sido probado según las normas aplicables."
  capas={{{capas_str}}}

  especificaciones={{{specs_str}}}
  catClass={{{{
    "Agente": "proteccion",
    "Construcción": "construccion",
    "Operación": "ergonomia",
    "Certificación": "certificacion",
  }}}}

  aplicacionesTitle="¿Dónde se Usa el {esc(p['heroTitle'])}?"
  aplicacionesContent="<p>La selección del extintor correcto depende del tipo de combustible y el área a proteger. Cada aplicación tiene requerimientos específicos de agente extintor y capacidad conforme a <strong>NFPA 10</strong> y <strong>NOM-028-STPS</strong>.</p>"
  aplicaciones={{{aplic_str}}}

  certsTitle="Certificaciones del {esc(p['heroTitle'])}"
  certsDesc="Cumplimiento con normas nacionales e internacionales verificado en laboratorio acreditado. <strong>Documentación completa disponible</strong> para licitaciones en los 32 estados de México."
  certItems={{{certs_str}}}

  specsRapidas={{{sr_str}}}
  otrosModelos={{[
    {{ label: "Extintor CO₂ 2 kg", href: "/productos/extintores/co2/extintor-co2-2kg/" }},
    {{ label: "Extintor CO₂ 5 kg", href: "/productos/extintores/co2/extintor-co2-5kg/" }},
    {{ label: "Extintor Polvo ABC 4 kg", href: "/productos/extintores/polvo-abc/extintor-abc-4kg/" }},
    {{ label: "Extintor Polvo ABC 9 kg", href: "/productos/extintores/polvo-abc/extintor-abc-9kg/" }},
    {{ label: "Extintor Espuma AFFF 9 L", href: "/productos/extintores/espuma-afff/espuma-afff-9l/" }},
  ]}}
  otrosModelosSeeAllHref="/productos/extintores/{subcat_slug}/"
  epp={{[
    {{ label: "Equipo Contra Incendios", href: "/productos/equipo-contra-incendios/", tag: "Sistemas" }},
    {{ label: "SCBA Autónomo NFPA 1981", href: "/productos/scba/circuito-abierto-nfpa-1981/", tag: "Respiración" }},
    {{ label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/", tag: "Traje" }},
    {{ label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971/", tag: "Casco" }},
    {{ label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales/", tag: "Guantes" }},
  ]}}
  articulos={{[
    {{ label: "Catálogo de Extintores", href: "/productos/extintores/", tag: "Catálogo" }},
    {{ label: "Equipo Contra Incendios", href: "/productos/equipo-contra-incendios/", tag: "Producto" }},
    {{ label: "NFPA 10 — Guía de instalación", href: "/productos/extintores/", tag: "Guía" }},
    {{ label: "NOM-154-SCFI-2005 Extintores", href: "/productos/extintores/", tag: "Norma" }},
  ]}}
  directorioLinks={{[
    {{ label: "Bomberos Ciudad de México", href: "/directorio/ciudad-de-mexico/" }},
    {{ label: "Bomberos Guadalajara", href: "/directorio/jalisco/" }},
    {{ label: "Bomberos Monterrey", href: "/directorio/nuevo-leon/" }},
    {{ label: "Directorio Nacional", href: "/directorio/" }},
  ]}}

  faqTitle="Preguntas Frecuentes — {esc(p['nombre'])}"
  faqDescription="Todo lo que necesitas saber sobre certificaciones, mantenimiento y uso del extintor."
  faqs={{[
    {{
      q: "¿Qué norma certifica este extintor?",
      a: "Este extintor cumple con la <strong>NOM-154-SCFI-2005</strong> para extintores portátiles en México y la norma <strong>{esc(p['certItems'][1]['code'] if len(p['certItems']) > 1 else 'UL 299')}</strong> de Underwriters Laboratories. La documentación de certificación está incluida.",
    }},
    {{
      q: "¿Cada cuánto se recarga?",
      a: "Según <strong>NFPA 10</strong>, la recarga se realiza después de cada uso parcial o total, o cuando la inspección anual detecta pérdida de presión. El manómetro permite verificar el estado de forma visual mensualmente.",
    }},
    {{
      q: "¿Incluye documentación para licitaciones?",
      a: "Sí. Cada unidad incluye <strong>ficha técnica</strong>, <strong>FDS (Ficha de Datos de Seguridad)</strong> y <strong>certificado de laboratorio</strong> acreditado ISO/IEC 17025. Documentación suficiente para licitaciones gubernamentales en los 32 estados de México.",
    }},
  ]}}

  relacionados={{[
    {{
      title: "Extintores CO₂",
      badge: "NOM-154-SCFI",
      description: "Extintores de CO₂ para equipos eléctricos y electrónicos. Sin residuo ni daño al equipo.",
      href: "/productos/extintores/co2/",
      buttonText: "Ver Extintores CO₂",
      image: "/images/base/equipo-completo.avif",
    }},
    {{
      title: "Extintores Polvo ABC",
      badge: "NOM-154-SCFI",
      description: "Polvo químico ABC multipropósito para fuegos clase A, B y C. El más versátil.",
      href: "/productos/extintores/polvo-abc/",
      buttonText: "Ver Polvo ABC",
      image: "/images/base/camion-bomberos.avif",
    }},
    {{
      title: "Equipo Contra Incendios",
      badge: "NFPA 1963",
      description: "Mangueras, boquillas y sistemas completos para combate de incendios.",
      href: "/productos/equipo-contra-incendios/",
      buttonText: "Ver Equipo",
      image: "/images/base/estacion-bomberos.avif",
    }},
  ]}}
/>
"""


# Now generate files for only the categories we have full data for
# The script will also generate placeholder files for the remaining categories/subcategories

import os
import json

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Written: {path}")


# Generate extintores/co2 subcategory + products
for cat_slug, cat_data in CATEGORIES.items():
    for subcat_slug, subcat_data in cat_data["subcategories"].items():
        # Generate subcategory index
        subcat_path = f"{BASE}/{cat_slug}/{subcat_slug}/index.astro"
        content = make_categoria_index(cat_slug, subcat_slug, subcat_data, cat_data, BASE)
        write_file(subcat_path, content)
        
        # Generate product pages
        for product in subcat_data["products"]:
            prod_path = f"{BASE}/{cat_slug}/{subcat_slug}/{product['slug']}/index.astro"
            content = make_product_page(cat_slug, subcat_slug, product, cat_data.get("title", cat_slug), subcat_data["label"])
            write_file(prod_path, content)

print("Done generating initial categories!")
print("Now run the full generator for remaining categories...")
