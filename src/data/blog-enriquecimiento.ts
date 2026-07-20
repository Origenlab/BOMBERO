/**
 * blog-enriquecimiento.ts — Bloques complementarios por artículo
 *
 * faqExtra:    secciones de Preguntas Frecuentes (markdown) para artículos que carecían de FAQ.
 *              Alimentan también el JSON-LD FAQPage generado en blog-enhance.ts (GEO).
 * tablasExtra: tablas técnicas/comparativas para artículos que carecían de tablas.
 *
 * Los bloques se insertan automáticamente antes de la sección de artículos
 * relacionados (o al final) en src/utils/blog-enhance.ts.
 */

export const faqExtra: Record<string, string> = {
  "casco-estructural-nfpa-1971": `
## Preguntas Frecuentes

### ¿Cada cuánto debe reemplazarse un casco estructural NFPA 1970?

La NFPA 1850 establece una vida útil máxima de 10 años desde la fecha de fabricación, sin importar su apariencia. Debe retirarse antes si presenta deformación del casco exterior, degradación del sistema de suspensión, daño térmico visible o tras un impacto severo, aunque no haya marcas externas.

### ¿Un casco estructural sirve para rescate técnico o incendio forestal?

No es lo recomendable. El casco estructural es más pesado y está optimizado para calor radiante y caída de objetos en combate interior; para rescate técnico la referencia es NFPA 1951 (más ligero, con barboquejo de 3 puntos) y para forestal NFPA 1950 (ventilado y de baja masa). Usar el casco equivocado fatiga al operador y reduce la protección específica.

### ¿Cómo verifico que un casco está certificado de verdad?

Busque la etiqueta interior permanente con la norma y edición (NFPA 1970-2024), el sello del laboratorio certificador (UL, Intertek o SEI) y el modelo exacto. Puede cotejar el modelo en los directorios públicos del laboratorio; si el vendedor no puede mostrar el certificado, no es equipo certificado.
`,

  "casco-forestal-nfpa-1977": `
## Preguntas Frecuentes

### ¿Qué diferencia a un casco forestal NFPA 1950 de un casco industrial común?

El casco forestal está ensayado para resistencia térmica, inflamabilidad y penetración conforme a NFPA 1950, además de integrarse con goggles, protector de nuca y barboquejo para trabajo en pendiente. Un casco industrial (ANSI Z89.1) no está evaluado para exposición a fuego de vegetación y puede deformarse con el calor radiante de un frente de llama.

### ¿Puedo usar el mismo casco para brecha, motosierra y línea de fuego?

Sí, siempre que mantenga los accesorios correctos por tarea: protección auditiva y facial para motosierra, goggles certificados en línea de fuego y protector de nuca ante pavesas. Verifique que los accesorios sean del fabricante del casco para no invalidar la certificación.

### ¿Cuál es el error más común al comprar cascos forestales en México?

Comprar cascos "tipo forestal" sin certificación NFPA 1950 por precio. En temporada alta trabajan jornadas de 12 a 16 horas: un casco no certificado, mal ventilado y pesado se traduce en golpe de calor y menor atención situacional, además de incumplimiento en auditorías de CONAFOR o protección civil.
`,

  "casco-rescate-nfpa-1951": `
## Preguntas Frecuentes

### ¿Por qué el casco de rescate NFPA 1951 no lleva ala como el estructural?

El perfil compacto sin ala evita enganches en espacios confinados, vehículos siniestrados y trabajo con cuerdas, donde el ala del casco estructural estorba y puede transmitir cargas al cuello. El diseño de NFPA 1951 prioriza retención (barboquejo de 3 o 4 puntos), impacto multidireccional y compatibilidad con linterna y comunicaciones.

### ¿Un casco de alpinismo certificado EN 12492 es equivalente?

No para operaciones de bomberos. EN 12492 evalúa impacto y retención para montañismo, pero NFPA 1951 añade requisitos de resistencia a llama, calor, penetración y visibilidad propios del entorno de emergencias urbanas. Para brigadas de rescate técnico profesional, la referencia correcta es NFPA 1951.

### ¿Qué accesorios conviene especificar al cotizar cascos de rescate?

Linterna certificada con soporte integrado, goggles con banda resistente a llama, protectores auditivos abatibles si se usa herramienta hidráulica y kit de personalización reflectante. Cotizarlos junto con el casco asegura compatibilidad mecánica y un solo expediente de certificación para licitación.
`,

  "guantes-estructurales-nfpa-1971": `
## Preguntas Frecuentes

### ¿Cada cuánto se reemplazan los guantes estructurales?

NFPA 1850 marca 10 años como máximo absoluto, pero en la práctica los guantes son el componente que más rápido se degrada del EPP: con uso intensivo, 2 a 4 años es lo habitual. Retírelos ante costuras abiertas, barrera de humedad perforada, rigidez por exposición térmica o pérdida de destreza táctil.

### ¿Cómo debe quedar la talla de un guante estructural?

Ajustado sin comprimir: debe permitir cerrar el puño por completo y manipular una línea de manguera cargada sin pliegues en la palma. Un guante grande reduce destreza y se engancha; uno chico acelera la fatiga y compromete la barrera térmica al tensar las capas.

### ¿Se pueden lavar los guantes estructurales?

Sí, conforme al manual del fabricante y NFPA 1850: lavado suave con detergente neutro, sin blanqueador, secado a la sombra y nunca sobre fuentes de calor directas. El lavado posterior a cada incendio elimina hidrocarburos cancerígenos absorbidos — un punto de higiene ocupacional que cada vez más cuerpos de bomberos en México formalizan en sus protocolos.
`,

  "guantes-rescate-extricacion": `
## Preguntas Frecuentes

### ¿Qué norma aplica a los guantes de extricación vehicular?

La referencia es NFPA 1951 para operaciones de rescate técnico, que evalúa resistencia al corte, abrasión, punción y destreza. Para riesgos con vidrio y lámina, busque también niveles de corte ANSI/ISEA 105 A4 o superiores en la palma.

### ¿Por qué no usar guantes estructurales para extricación?

El guante estructural sacrifica destreza por aislamiento térmico: con él es difícil operar mandos de herramienta hidráulica, retirar cristales o tocar a un paciente. El guante de extricación es delgado, de alta resistencia mecánica y con buen agarre en húmedo, exactamente el balance que la maniobra exige.

### ¿Qué debo revisar antes de cada servicio?

Costuras y refuerzos de palma sin hilos sueltos, cierre de muñeca funcional, ausencia de perforaciones y agarre íntegro. Los guantes de rescate son consumibles de alta rotación: conviene presupuestar reposición anual por operador en brigadas activas.
`,

  "guantes-hazmat-proteccion-quimica": `
## Preguntas Frecuentes

### ¿Un solo guante protege contra todos los químicos?

No existe el guante universal. Cada polímero (butilo, nitrilo, Viton, laminados multicapa) tiene tiempos de permeación distintos por sustancia; la selección se hace contra la tabla de permeación del fabricante para el químico específico y su concentración. En escenarios desconocidos se usan laminados de amplio espectro bajo el principio de máxima protección.

### ¿Qué significa "tiempo de permeación" y por qué importa?

Es el tiempo que tarda el químico en atravesar el material a nivel molecular, aunque el guante se vea intacto. Un guante con permeación de 30 minutos para un solvente exige rotación o descontaminación antes de ese umbral; ignorarlo expone la piel sin que el operador lo perciba.

### ¿Cómo se integran los guantes al nivel de protección A, B o C?

En Nivel A van sellados al traje encapsulado, generalmente en doble capa (guante interior de algodón + barrera química + sobreguante mecánico). En B y C se sellan con cinta química a la manga. La compatibilidad guante-traje debe estar documentada por el fabricante del ensamble.
`,

  "guantes-forestales-nfpa-1977": `
## Preguntas Frecuentes

### ¿Qué exige NFPA 1950 a un guante forestal?

Resistencia a llama e inflamabilidad, aislamiento al calor, resistencia mecánica (abrasión, corte, punción) y destreza suficiente para herramienta manual durante jornadas largas. El cuero tratado o tejidos aramídicos con palma reforzada son las construcciones típicas certificadas.

### ¿Sirven los guantes de carnaza comunes para línea de fuego?

No. La carnaza industrial no está ensayada a llama ni a calor radiante: se contrae, endurece y puede encogerse sobre la mano con exposición prolongada. El sobrecosto del guante certificado es marginal frente al riesgo de quemadura de segundo grado en la herramienta de mayor uso del combatiente.

### ¿Cómo alargo la vida útil de los guantes forestales?

Sacuda ceniza y tierra después de cada jornada, seque a la sombra (nunca junto a la fogata o el motor), aplique acondicionador de cuero cuando el fabricante lo permita y almacénelos ventilados. La rigidez irreversible o costuras abiertas son criterio de baja inmediata.
`,

  "gama-de-mexico-equipos-contra-incendio": `
## Preguntas Frecuentes

### ¿Qué ventaja tiene comprar con un distribuidor autorizado como Gama de México?

Garantiza producto original Elkhart Brass con garantía de fábrica vigente, trazabilidad del certificado UL/FM por número de serie y acceso a soporte técnico del fabricante. Los equipos de origen gris o "equivalentes" carecen de estos respaldos y son observados en auditorías de aseguradoras.

### ¿Qué documentación debo exigir al comprar monitores o válvulas certificadas?

Carta de distribuidor autorizado vigente, ficha técnica con número de aprobación FM o listado UL verificable en los directorios públicos, certificado de garantía y, para proyectos, los datos hidráulicos (curvas de caudal-presión) firmados. Esta carpeta es la que revisan PEMEX, FM Global y los corporativos.

### ¿Cómo se compara Elkhart Brass con otras marcas del mercado?

Elkhart Brass (1902) es referente histórico en monitores, boquillas y válvulas con certificación dual UL/FM, junto a Akron Brass y Task Force Tips. La elección entre ellas suele decidirse por disponibilidad local, tiempos de entrega y soporte del distribuidor más que por diferencias técnicas de fondo en líneas equivalentes.
`,

  "meseci-equipos-contra-incendio-mexico": `
## Preguntas Frecuentes

### ¿Qué debo evaluar antes de contratar a un integrador de sistemas contra incendio?

Tres ejes: respaldo técnico (ingenieros con certificaciones NFPA verificables y memoria de cálculo propia), respaldo documental (carta de distribuidor de las marcas que instala y certificados UL/FM de los equipos) y respaldo de servicio (stock local de refacciones, tiempos de respuesta por contrato y referencias auditables de proyectos similares).

### ¿Conviene separar la compra de equipos de la instalación?

Para proyectos medianos y grandes, frecuentemente sí: comprar el equipo certificado a un distribuidor autorizado y la instalación a un integrador especializado da mejor precio y doble responsabilidad documentada. Para sitios pequeños, el paquete llave en mano simplifica la gestión con un solo responsable.

### ¿Qué normas rigen la instalación de sistemas fijos en México?

La NOM-002-STPS define la obligación general; el diseño técnico se ejecuta conforme a NFPA (13 para rociadores, 15 para agua pulverizada, 11 para espuma, 24 para redes y 25 para mantenimiento), que es el estándar aceptado por aseguradoras y por la mayoría de las autoridades locales.
`,

  "manext-mantenimiento-extintores-cdmx": `
## Preguntas Frecuentes

### ¿Cada cuánto debe recargarse y probarse un extintor en México?

La NOM-154-SCFI exige recarga anual (o inmediata tras cualquier uso) y prueba hidrostática quinquenal para la mayoría de los agentes. Además, la NOM-002-STPS exige inspecciones visuales mensuales documentadas por el propio centro de trabajo.

### ¿Cómo identifico una empresa de recarga confiable en CDMX?

Verifique que cuente con dictamen vigente como prestadora de servicios bajo NOM-154-SCFI, que etiquete cada extintor con folio, fecha y datos rastreables, y que entregue reporte con presiones y pesos. Una recarga "exprés" sin desmontar la válvula ni verificar el agente es señal inequívoca de servicio fraudulento.

### ¿Qué pasa si protección civil encuentra extintores vencidos?

Procede multa, posible clausura parcial y, más grave, la aseguradora puede objetar el siniestro por incumplimiento de mantenimiento. El costo anual de recarga certificada es marginal frente a cualquiera de esos escenarios.
`,

  "manext-venta-extintores-certificados-cdmx": `
## Preguntas Frecuentes

### ¿Qué extintor necesito para cada tipo de fuego?

Clase A (sólidos): agua o polvo ABC. Clase B (líquidos inflamables): polvo ABC, CO2 o espuma. Clase C (eléctrico energizado): CO2 o polvo. Clase D (metales): agente especial por metal. Clase K (aceites de cocina): agente húmedo. En oficinas y comercios el polvo ABC es el estándar; en cocinas profesionales la K es obligatoria.

### ¿Cuántos extintores exige la norma para mi negocio?

La NOM-002-STPS lo determina por grado de riesgo y distancia de recorrido: como regla práctica, ningún punto del área debe quedar a más de 15 metros de un extintor en riesgo ordinario. El cálculo formal considera superficie, carga de fuego y tipo de proceso — un proveedor serio lo hace sin costo.

### ¿Extintor nuevo certificado o reacondicionado?

Siempre nuevo y certificado para protección formal de un inmueble: el reacondicionado no garantiza presión, agente ni cilindro, y no es defendible ante protección civil ni aseguradoras. El precio de un ABC de 4.5 kg nuevo certificado es menor al de una sola comida corporativa.
`,

  "mejores-empresas-equipos-contra-incendio-mexico": `
## Preguntas Frecuentes

### ¿Qué criterios separan a un proveedor serio de un revendedor oportunista?

Certificados verificables de los productos (UL, FM, NFPA con laboratorio), cartas de distribución autorizada de las marcas, ingeniería propia con memorias de cálculo, stock local demostrable, contratos de mantenimiento con tiempos de respuesta y referencias de clientes auditables. Quien no pueda mostrar al menos cuatro de estos seis puntos es intermediario sin respaldo.

### ¿Conviene centralizar todo el equipamiento con un solo proveedor?

Centralizar simplifica administración y suele mejorar precio por volumen, pero solo si el proveedor domina todas las líneas (EPP, sistemas fijos, extintores, rescate). La práctica recomendada es centralizar por familia de producto con el especialista de cada una y mantener un expediente de certificaciones unificado.

### ¿Cómo comparo cotizaciones de equipos certificados?

Compare partida por partida contra la misma norma y edición (no "casco NFPA" sino "casco NFPA 1970-2024 certificado UL"), incluya vida útil esperada y costo de mantenimiento, y pondere tiempos de entrega documentados. La cotización más barata con especificación ambigua suele ser la más cara a 5 años.
`,

  "industria-proteccion-contra-incendio-mexico-analisis": `
## Preguntas Frecuentes

### ¿Qué tamaño tiene el mercado mexicano de protección contra incendio?

México es el segundo mercado de América Latina, impulsado por manufactura de exportación, nearshoring, sector energético y regulación de aseguradoras. El gasto se concentra en sistemas fijos (rociadores, monitores, detección) para industria y en EPP/equipo de intervención para cuerpos de bomberos y brigadas.

### ¿Qué tendencias están transformando el sector?

Cuatro dominantes: transición a espumas libres de flúor por presión regulatoria internacional, detección y supresión automatizada con IA e IoT, profesionalización del mantenimiento conforme a NFPA 25, y endurecimiento de requisitos de aseguradoras tras siniestros mayores. Quien especifica hoy debería considerar las cuatro.

### ¿Dónde hay más oportunidad de mejora en las empresas mexicanas?

En mantenimiento documentado: la mayor brecha detectada en auditorías no es falta de equipos sino sistemas instalados sin inspección, prueba ni registros conforme a NFPA 25, lo que invalida la protección ante un siniestro real y ante la aseguradora.
`,

  "proyecto-red-plataforma-equipos-contra-incendio": `
## Preguntas Frecuentes

### ¿Qué ventaja ofrece una plataforma especializada frente a un marketplace genérico?

Curaduría técnica: en un marketplace genérico conviven equipos certificados con imitaciones sin que el comprador pueda distinguirlos. Una plataforma especializada filtra por norma y certificación, publica fichas técnicas completas y conecta con distribuidores autorizados con respaldo de fábrica.

### ¿Qué debo verificar antes de comprar equipo contra incendio en línea?

Que la ficha indique norma y edición exacta, laboratorio certificador verificable, vendedor identificable con razón social mexicana, factura con descripción técnica completa y política clara de garantía. Ante cualquier ambigüedad, solicite el certificado del lote antes de pagar.

### ¿La compra en línea sirve para licitaciones públicas?

Sirve para investigación de mercado y para integrar catálogos, pero la propuesta formal requiere cartas de fabricante o distribuidor, certificados a nombre del licitante y compromisos de entrega firmados — documentos que solo un canal autorizado puede emitir.
`,

  "proyecto-red-venta-equipos-contra-incendio-mexico": `
## Preguntas Frecuentes

### ¿Qué familias de producto concentran la demanda en México?

EPP estructural certificado NFPA 1970 (trajes, cascos, guantes, botas), equipos de aire SCBA, extintores y recarga, sistemas fijos (detección, rociadores, monitores) y equipo de rescate técnico. Los compradores principales son municipios, brigadas industriales y contratistas de obra.

### ¿Cómo afecta el tipo de cambio a la compra de equipo certificado?

La mayoría del equipo certificado es importado y se cotiza en dólares, por lo que conviene cerrar precios con vigencia firmada y considerar stock nacional del distribuidor para entregas inmediatas sin exposición cambiaria durante el proceso de compra.

### ¿Existe equipo certificado fabricado en México?

Crece la oferta nacional en líneas como extintores, gabinetes e hidrantes con certificación NOM, mientras el EPP estructural y los equipos de sistemas fijos certificados UL/FM siguen siendo mayoritariamente importados. La combinación de ambas fuentes optimiza presupuesto sin sacrificar cumplimiento.
`,

  "lga-contra-incendios-queretaro-equipos-certificados": `
## Preguntas Frecuentes

### ¿Por qué el Bajío concentra tanta demanda de protección contra incendio?

Querétaro, Guanajuato y San Luis Potosí concentran manufactura automotriz, aeroespacial y centros de distribución — ocupaciones de alta carga de fuego auditadas por aseguradoras internacionales. Eso exige proveedores locales con equipos certificados FM/UL y capacidad de respuesta en sitio.

### ¿Qué servicios debe ofrecer un proveedor regional completo?

Suministro de equipos certificados, ingeniería y memoria de cálculo NFPA, instalación con pruebas documentadas, mantenimiento conforme a NFPA 25 con reportes para aseguradora y capacitación de brigadas con constancias DC-3. La cercanía geográfica reduce tiempos y costos de todas las anteriores.

### ¿Cómo valido la experiencia real de un proveedor local?

Solicite tres referencias de proyectos similares con contacto verificable, evidencia fotográfica con fechas, y los certificados del personal (NFPA, técnicos de fábrica). Una visita a un proyecto operando dice más que cualquier presentación comercial.
`,

  "guia-empresas-equipos-contra-incendio-mexico-2026": `
## Preguntas Frecuentes

### ¿Cómo uso esta guía para preseleccionar proveedores?

Defina primero su necesidad por familia (EPP, sistemas fijos, extintores, rescate, mantenimiento), filtre las empresas por especialidad y cobertura geográfica, y solicite a 3 finalistas el mismo paquete: certificados de producto, carta de marca, referencias y tiempos de entrega. Comparar con base homogénea elimina al 80% de los intermediarios.

### ¿Qué señales descalifican a un proveedor de inmediato?

No poder mostrar certificados verificables, cotizar "equivalentes" sin norma ni edición, carecer de domicilio fiscal e instalaciones comprobables, y no ofrecer contrato de garantía ni servicio posventa. El precio anormalmente bajo casi siempre acompaña a estas señales.

### ¿Cada cuánto conviene reevaluar a los proveedores contratados?

Anualmente, contra desempeño medible: cumplimiento de tiempos, calidad documentada de servicios, vigencia de certificaciones y resultado de auditorías internas o de aseguradora. La protección contra incendio es una cadena de suministro crítica y merece la misma disciplina que cualquier insumo de producción.
`,

  "informe-ejecutivo-proveedores-proteccion-incendio-mexico-2026": `
## Preguntas Frecuentes

### ¿A quién está dirigido este informe ejecutivo?

A gerentes de seguridad e higiene, compradores corporativos, directores de operaciones y autoridades municipales que deben decidir adjudicaciones de equipamiento y servicios de protección contra incendio con criterios técnicos y documentales defendibles ante auditorías.

### ¿Cuál es el hallazgo más relevante del análisis de proveedores?

La brecha entre oferta comercial y respaldo documental: una parte sustancial del mercado promociona "cumplimiento NFPA" sin poder exhibir certificados de laboratorio, cartas de distribución ni ingeniería propia. Los compradores que exigen expediente completo reducen drásticamente su riesgo regulatorio y de siniestro.

### ¿Cómo aplico este informe a una licitación pública?

Utilice los criterios de evaluación documental como anexos técnicos de sus bases: certificación por partida con norma y edición, carta de fabricante, stock demostrable y plan de mantenimiento NFPA 25. Esto profesionaliza la licitación y blinda la adjudicación frente a impugnaciones.
`,

  "scba-guia-completa-bomberos-mexico": `
## Preguntas Frecuentes

### ¿Cada cuánto se prueba hidrostáticamente un cilindro SCBA?

Los cilindros de fibra de carbono se prueban cada 5 años y tienen vida útil de 15 años (según fabricante y norma DOT/TC aplicable); los de aluminio cada 5 años sin límite de vida si pasan la prueba. El equipo completo requiere además prueba de flujo anual en banco certificado conforme a NFPA 1850.

### ¿Qué autonomía real tiene un cilindro de 30 minutos?

Entre 15 y 20 minutos en trabajo real: la cifra nominal se calcula a consumo de reposo, y el esfuerzo del combate interior duplica o triplica el consumo. Por eso la gestión de aire (punto de retorno al 50%) y la alarma de baja presión son materia obligada de capacitación.

### ¿Puedo mezclar componentes de diferentes marcas de SCBA?

No: regulador, arnés, máscara y cilindro están certificados como sistema y la mezcla invalida la certificación NIOSH/NFPA y la garantía. La estandarización de flota en una sola plataforma también simplifica refacciones, mantenimiento y entrenamiento.
`,

  "camara-termica-tic-bomberos-nfpa-1801": `
## Preguntas Frecuentes

### ¿Qué aporta la certificación NFPA 1801 frente a una cámara térmica comercial?

NFPA 1801 exige resistencia a impacto, calor e inmersión, interfaz estandarizada (paleta de colores y indicadores uniformes entre marcas) y desempeño mínimo de imagen en condiciones de incendio. Una cámara industrial común puede fallar precisamente cuando más se necesita: dentro del fuego.

### ¿La cámara térmica ve a través del humo y de las paredes?

A través del humo sí —es su función principal—; a través de paredes no: detecta temperatura superficial, por lo que un cuarto caliente se delata por la puerta o el muro calientes. Interpretar correctamente firmas térmicas es parte esencial del entrenamiento con TIC.

### ¿Cuántas cámaras necesita un cuerpo de bomberos?

El estándar operativo moderno es una TIC por equipo de ataque interior como mínimo, más una en el oficial al mando para control de la estructura. Departamentos con presupuesto limitado priorizan la primera unidad para búsqueda y rescate, donde la TIC reduce los tiempos hasta 75%.
`,

  "extricacion-vehicular-jaws-of-life-mexico": `
## Preguntas Frecuentes

### ¿Qué exige NFPA 1936 a las herramientas de extricación?

Define clases de fuerza de corte y separación, pruebas de durabilidad, requisitos de mandos de hombre muerto y marcado. Al cotizar, compare la clase NFPA (no solo "toneladas" de marketing) y verifique compatibilidad con los aceros de alta resistencia (UHSS/boro) de vehículos modernos.

### ¿Hidráulica con motor, eléctrica a batería o manual?

La batería domina las adquisiciones actuales: despliegue en segundos, sin mangueras ni motor, y potencia ya equivalente para la mayoría de escenarios. La hidráulica con unidad de poder sigue siendo válida en operaciones prolongadas; la manual queda como respaldo o para presupuestos mínimos.

### ¿Qué capacitación requiere la brigada antes de operar estos equipos?

Mínimo un curso formal de extricación con práctica sobre vehículos reales: estabilización, gestión de vidrios, técnicas de corte por arquitectura del vehículo y trabajo coordinado con atención prehospitalaria. La herramienta sin doctrina aumenta el riesgo para víctima y rescatista.
`,

  "incendios-forestales-mexico-temporada-2026": `
## Preguntas Frecuentes

### ¿Cuándo es la temporada crítica de incendios forestales en México?

De enero a junio, con pico entre marzo y mayo, cuando coinciden estiaje, vientos y acumulación de combustible. El centro y sur concentran incendios por quemas agrícolas; el norte por sequía y tormentas eléctricas. La preparación de brigadas debe cerrarse en el último trimestre del año anterior.

### ¿Qué equipo mínimo debe portar un combatiente forestal?

EPP NFPA 1950 completo (camisola y pantalón aramídicos, casco, goggles, guantes, botas de piel con suela vulcanizada), refugio contra fuego donde la doctrina lo adopte, hidratación, y herramienta de línea (McLeod, Pulaski, batefuegos). El refugio y la condición física son los dos factores que más vidas salvan.

### ¿Cómo se coordinan brigadas municipales con CONAFOR?

Mediante el sistema de mando de incidentes (SMI): las brigadas municipales y voluntarias se integran a la estructura estatal/CONAFOR con funciones, frecuencias y relevos definidos. Capacitarse en SMI antes de la temporada evita duplicidades y accidentes en el frente de llama.
`,

  "hazmat-niveles-proteccion-bomberos-mexico": `
## Preguntas Frecuentes

### ¿Cómo se elige entre Nivel A, B, C o D en un incidente real?

Por el riesgo respiratorio y dérmico identificado: A cuando hay vapores tóxicos por piel o atmósfera desconocida (encapsulado + SCBA); B cuando el riesgo es respiratorio con salpicadura limitada (SCBA + traje no encapsulado); C con contaminante conocido filtrable (máscara con cartucho); D es ropa de trabajo sin riesgo químico. La identificación previa (placas, hojas SDS, detección) decide el nivel.

### ¿Cuánto tiempo puede trabajar un técnico en Nivel A?

Típicamente 20 a 30 minutos efectivos: el estrés térmico dentro del encapsulado y la autonomía del SCBA limitan la ventana. Toda entrada exige equipo de respaldo vestido, corredor de descontaminación montado y vigilancia médica antes y después.

### ¿Qué errores comete con más frecuencia una brigada sin entrenamiento Hazmat?

Acercarse sin identificar el producto, elegir nivel por disponibilidad y no por riesgo, omitir la descontaminación del personal y del equipo, y no documentar exposiciones. El primer reflejo profesional ante materiales peligrosos es aislar, identificar y pedir recursos — no entrar.
`,

  "botas-para-bomberos-guia-nfpa": `
## Preguntas Frecuentes

### ¿Botas de hule o de cuero para combate estructural?

Ambas pueden certificarse NFPA 1970. El hule ofrece estanqueidad total y menor costo con más peso y menos soporte; el cuero da mejor ergonomía, soporte de tobillo y confort en jornadas largas con mayor precio y mantenimiento. Cuerpos con alta carga operativa tienden a cuero; brigadas con uso esporádico optimizan con hule.

### ¿Qué elementos de protección debe traer una bota certificada?

Puntera y plantilla resistentes a impacto y punción, barrera de humedad y patógenos, aislamiento térmico, suela antiderrapante resistente a calor por contacto y tirantes de colocación rápida. La etiqueta interior debe citar NFPA 1970 con su edición y el laboratorio certificador.

### ¿Cuándo se da de baja una bota estructural?

Ante perforación de la barrera (entra agua), separación de suela, deformación de puntera, grietas profundas del cuero o hule, o cumplidos 10 años de NFPA 1850 — lo que ocurra primero. La bota comprometida es vía directa de quemaduras y de exposición a fluidos contaminados.
`,

  "flashover-backdraft-bomberos-guia-supervision": `
## Preguntas Frecuentes

### ¿Cuáles son las señales inminentes de flashover?

Calor que obliga a agacharse, humo denso que baja del techo en rollos (rollover con lenguas de fuego), pirólisis visible en materiales alejados del foco y aumento súbito de radiación. Ante ellas: enfriar la capa de gases con pulsos cortos y replegarse — el flashover desarrollado no es sobrevivible ni con EPP completo.

### ¿En qué se diferencia el backdraft del flashover?

El flashover es la ignición súbita de todo el contenido por radiación en un incendio ventilado; el backdraft es una explosión de gases por entrada repentina de aire en un incendio confinado y sobrecalentado. Señales de backdraft: humo pulsante por rendijas, ventanas oscurecidas y ausencia de llamas visibles — la respuesta es ventilación vertical controlada antes de abrir.

### ¿Qué papel juega la cámara térmica en la prevención de estos fenómenos?

Permite leer la temperatura de la capa de gases y de superficies antes y durante la entrada, identificar el cuarto de origen y evaluar la efectividad del enfriamiento. Integrar la TIC a la rutina de lectura del fuego es de las inversiones de seguridad con mejor retorno para cualquier cuerpo de bomberos.
`,

  "nfpa-licitaciones-bomberos-municipios-mexico": `
## Preguntas Frecuentes

### ¿Cómo especifico correctamente equipo NFPA en bases de licitación?

Cite norma, edición y certificación por partida ("Traje estructural conforme a NFPA 1970 edición 2025, certificado por UL/Intertek/SEI, con etiqueta permanente"), exija certificados del lote y carta de fabricante o distribuidor autorizado, y defina criterios de evaluación documental con puntaje. La ambigüedad en bases es la puerta de entrada del equipo no certificado.

### ¿Puede un municipio exigir NFPA si no es norma oficial mexicana?

Sí: las normas de referencia internacionales son admisibles como especificación técnica de compra pública cuando se justifican por desempeño y seguridad, práctica avalada por criterios de la SFP y por la propia NOM-017-STPS que reconoce estándares internacionales para EPP.

### ¿Qué errores invalidan o encarecen una licitación de equipo de bomberos?

Copiar fichas de un fabricante (dirige la compra y provoca impugnaciones), pedir certificaciones inexistentes o mezcladas, omitir tallas y logística de entrega, y adjudicar solo por precio sin evaluación documental. Una asesoría técnica previa cuesta una fracción de una licitación desierta o impugnada.
`,

  "capuchas-monjas-bombero-nfpa-guia": `
## Preguntas Frecuentes

### ¿Qué función cumple la capucha si ya llevo casco y chaquetón?

Protege el cuello, orejas y rostro —las zonas de piel más expuestas y sensibles al calor— y sella la interfaz máscara-casco-chaquetón. Sin capucha, el flashover o el calor radiante producen quemaduras faciales aun con el resto del EPP correctamente vestido.

### ¿Qué son las capuchas "barrera" o de protección contra partículas?

La generación actual certificada bajo NFPA 1970 incorpora una barrera que bloquea partículas de humo (hollín con hidrocarburos cancerígenos) hacia la piel del cuello y cara, área de máxima absorción dérmica. Son la respuesta del estándar a la evidencia sobre cáncer ocupacional en bomberos.

### ¿Cuántas capuchas debe tener cada elemento y cómo se lavan?

Mínimo dos por bombero para rotación post-incendio: la capucha contaminada se lava conforme a NFPA 1850 (ciclo suave, detergente neutro, sin suavizante) antes de reutilizarse. Usar capucha sucia de hollín equivale a aplicar el contaminante directamente sobre la piel durante horas.
`,

  "gafas-proteccion-visual-bomberos-nfpa": `
## Preguntas Frecuentes

### ¿Goggles, lentes de seguridad o pantalla del casco: qué exige la norma?

NFPA 1970 acepta protección primaria con goggles certificados ANSI Z87.1+ integrados al sistema del casco; la pantalla abatible del casco es protección secundaria, no sustituto. Para rescate técnico y forestal, los goggles sellados con banda resistente a llama son el estándar operativo.

### ¿Cómo evito el empañamiento en operaciones?

Elija goggles con tratamiento antifog certificado y ventilación indirecta, manténgalos cerrados hasta su uso (el sudor empaña), y reemplace micas rayadas que dispersan la luz de las linternas. En clima frío, la disciplina de colocación tardía es la medida más efectiva.

### ¿Cuándo se reemplazan los goggles o sus micas?

Ante rayaduras que interfieran la visión, banda elástica vencida, sellos endurecidos o cualquier exposición térmica que deforme el marco. Son consumibles de bajo costo y alto impacto: presupueste reposición anual por operador activo.
`,

  "extintores-seleccion-norma-nom-100": `
## Preguntas Frecuentes

### ¿Qué relación hay entre las clases de fuego y el agente del extintor?

Cada agente está certificado para clases específicas: polvo ABC cubre sólidos, líquidos y eléctrico; CO2 es ideal en eléctrico y equipo delicado sin dejar residuo; agente húmedo K es obligatorio en cocinas; agentes D solo para metales combustibles. Colocar el agente equivocado puede agravar el fuego — agua sobre aceite de cocina, por ejemplo, provoca proyección violenta.

### ¿Dónde y a qué altura se instalan los extintores según la norma?

NOM-002-STPS: visibles, señalizados, sin obstrucción, con el soporte a no más de 1.50 m de altura a la parte más alta del extintor y recorridos máximos de 15 m en riesgo ordinario. Cada equipo lleva bitácora de inspección mensual firmada.

### ¿Qué capacitación exige la norma para el uso de extintores?

La NOM-002-STPS exige brigada capacitada y simulacros documentados; la formación práctica con descarga real (técnica PASE: pasador, apuntar a la base, squeeze/presionar, escaneo lateral) es la diferencia entre controlar un conato y perder el inmueble en los primeros dos minutos.
`,

  "ropa-proteccion-calor-industrial-categorias": `
## Preguntas Frecuentes

### ¿Qué diferencia hay entre ropa de aproximación, de bombero estructural y aluminizada de proximidad?

La estructural (NFPA 1970) protege del calor convectivo y radiante del combate interior; la de proximidad aluminizada refleja radiación extrema para acercamiento a grandes fuegos de hidrocarburos o metales fundidos; la de aproximación industrial (resistente a llama, NFPA 2112 en su caso) protege de fogonazos (flash fire) en procesos, no de exposición sostenida. Especificar la categoría equivocada deja al trabajador desprotegido o lo sobrecarga innecesariamente.

### ¿Qué exige NFPA 2112 a la ropa industrial resistente a llama?

Que el tejido no propague llama, no funda sobre la piel y limite la quemadura corporal predicha en el ensayo de maniquí instrumentado a un máximo del 50% en exposición de 3 segundos. Es el estándar de referencia para petroquímica y eléctrico junto con NFPA 70E para arco.

### ¿La ropa FR pierde protección con los lavados?

Los tejidos inherentemente FR (aramidas, modacrílicos) mantienen la propiedad de por vida; los tratados químicamente la conservan por un número de lavados definido por el fabricante si se siguen sus instrucciones (sin cloro ni suavizantes). En ambos casos, la prenda rota, contaminada con hidrocarburos o adelgazada se retira de servicio.
`,

  "sistemas-sprinkler-nfpa-13-guia-instalacion": `
## Preguntas Frecuentes

### ¿Un sistema de rociadores apaga el incendio o solo lo controla?

El diseño base de NFPA 13 es de control: limitar el crecimiento del fuego y proteger la estructura hasta la intervención final. Modos de supresión (ESFR) existen para almacenes de gran altura con criterios hidráulicos mucho más exigentes. Entender esta diferencia evita expectativas erróneas y diseños insuficientes.

### ¿Cuántos rociadores se activan realmente en un incendio?

Solo los expuestos a la temperatura de activación — estadísticamente, la gran mayoría de los incendios controlados por rociadores activan 5 o menos cabezas. El mito de "todos se disparan a la vez" proviene del cine; los sistemas reales activan cabeza por cabeza según el calor.

### ¿Qué mantenimiento exige NFPA 25 a un sistema de rociadores?

Inspecciones visuales periódicas de válvulas, manómetros y cabezas; pruebas trimestrales/anuales de flujo y alarmas; prueba quinquenal de obstrucción interna en tuberías; y reemplazo o ensayo de muestras de rociadores a los 50 años (antes en ambientes severos). Todo con registros — el sistema sin bitácora no es defendible ante la aseguradora.
`,

  "deteccion-temprana-incendio-tipos-detectores": `
## Preguntas Frecuentes

### ¿Detector fotoeléctrico o iónico: cuál conviene?

El fotoeléctrico responde mejor a fuegos latentes con humo visible (los más comunes en ocupaciones reales) y domina el mercado actual; el iónico responde algo más rápido a llamas vivas con partículas finas pero genera más falsas alarmas. Los estándares modernos favorecen fotoeléctrico o tecnología dual.

### ¿Dónde se colocan los detectores conforme a NFPA 72?

En techo, alejados de esquinas, difusores de aire y luminarias que distorsionen la corriente de humo, con espaciamientos de diseño según altura y geometría del local. Cocinas y baños usan tecnologías específicas (calor, no humo) para evitar falsas alarmas que llevan a desconectar el sistema — el peor escenario posible.

### ¿Cada cuánto se prueban y reemplazan los detectores?

Prueba funcional y limpieza al menos anual (NFPA 72), cambio de baterías según fabricante, y reemplazo del detector completo típicamente a los 10 años, cuando la cámara de sensado pierde confiabilidad. Un detector vencido aparenta protección que ya no existe.
`,

  "equipo-rescate-tecnico-componentes-normas": `
## Preguntas Frecuentes

### ¿Qué significa la clasificación T y G en equipo de cuerdas NFPA 1983?

La designación técnica (T) cubre equipo para cargas de un rescatista con factores de seguridad de uso técnico, y la general (G) exige resistencias mayores para cargas de dos personas en sistemas de rescate. Arneses, cuerdas, conectores y descensores deben especificarse por clase según la doctrina del equipo — mezclar clases sin criterio compromete el factor de seguridad del sistema.

### ¿Cada cuánto se retira una cuerda de rescate?

Inmediatamente tras sobrecarga, contacto químico, daño visible de funda o alma, y en cualquier caso conforme a la vida máxima del fabricante (típicamente 10 años desde fabricación con uso moderado). Cada cuerda lleva hoja de vida: fecha de servicio, usos, incidentes e inspecciones.

### ¿Qué capacitación mínima exige operar sistemas de rescate con cuerdas?

Formación formal en sistemas de ventaja mecánica, anclajes, descenso y aseguramiento conforme a NFPA 1006 (calificación profesional del rescatista), con recertificación práctica periódica. El equipo certificado en manos no entrenadas es un riesgo, no una capacidad.
`,
};

export const tablasExtra: Record<string, string> = {
  "proyecto-red-plataforma-equipos-contra-incendio": `
## Tabla Comparativa: Canales de Compra de Equipo Contra Incendio

| Criterio | Plataforma especializada | Distribuidor autorizado | Marketplace genérico |
|----------|--------------------------|-------------------------|----------------------|
| **Verificación de certificados** | Curaduría por norma | Certificado de fábrica por lote | Inexistente |
| **Asesoría técnica** | Fichas y comparativas | Ingenieros de aplicación | Ninguna |
| **Garantía de fábrica** | Según vendedor adherido | Completa y transferible | Dudosa o nula |
| **Documentos para licitación** | Parcial | Cartas y certificados completos | No disponible |
| **Riesgo de imitaciones** | Bajo | Mínimo | Alto |
| **Conveniencia de precio** | Comparación transparente | Precio de canal con respaldo | Aparente, con riesgo oculto |
`,

  "proyecto-red-venta-equipos-contra-incendio-mexico": `
## Tabla Técnica: Familias de Producto y Normas de Referencia

| Familia de producto | Norma de referencia | Certificación esperada | Comprador típico |
|---------------------|---------------------|------------------------|------------------|
| **EPP estructural** | NFPA 1970 | UL / Intertek / SEI | Municipios, brigadas |
| **Equipos SCBA** | NFPA 1970 / 1850 | NIOSH + NFPA | Cuerpos de bomberos |
| **Extintores** | NOM-154-SCFI / NOM-002-STPS | NOM + UL en su caso | Comercios, industria |
| **Detección y alarma** | NFPA 72 | UL / FM | Industria, inmobiliario |
| **Rociadores y redes** | NFPA 13 / 24 / 25 | UL / FM | Industria, logística |
| **Monitores y espuma** | NFPA 15 / 11 | FM Approved | Petroquímica, energía |
| **Rescate técnico** | NFPA 1983 / 1936 / 1006 | UL / fabricante | Bomberos, protección civil |
`,

  "bomberos-puebla-equipo-nfpa": `
## Tabla de Equipamiento Prioritario para el Cuerpo de Bomberos de Puebla

| Función operativa | Equipamiento clave | Norma de referencia | Prioridad |
|-------------------|--------------------|---------------------|-----------|
| **Combate estructural** | Trajes completos, cascos, capuchas, guantes, botas | NFPA 1970 | Crítica |
| **Protección respiratoria** | SCBA con cilindros de respaldo | NFPA 1970 / 1850 | Crítica |
| **Rescate vehicular** | Herramienta hidráulica de corte y separación | NFPA 1936 | Alta |
| **Rescate en estructuras colapsadas** | Apuntalamiento, cámaras de búsqueda, cuerdas | NFPA 1006 / 1983 | Alta (zona sísmica) |
| **Material peligroso** | Detección multigas, trajes de protección química | NFPA 1670 | Media-Alta |
| **Incendio forestal interfaz** | EPP ligero NFPA 1950, herramienta manual | NFPA 1950 | Estacional |
`,

  "equipo-bomberos-municipal-como-cotizar": `
## Tabla Guía: Partidas Típicas de una Cotización Municipal y sus Requisitos

| Partida | Especificación mínima correcta | Documento a exigir |
|---------|--------------------------------|--------------------|
| **Traje estructural** | NFPA 1970 ed. 2025, 3 capas, tallas por elemento | Certificado UL/Intertek/SEI del modelo |
| **Casco estructural** | NFPA 1970, suspensión + barboquejo | Certificado y etiqueta permanente |
| **Guantes y botas** | NFPA 1970, tallas verificadas | Certificado por partida |
| **SCBA** | NFPA 1970, cilindro 30/45 min, máscara incluida | Certificado NIOSH + NFPA |
| **Capacitación** | Curso con constancia DC-3 | Registro STPS del capacitador |
| **Mantenimiento** | Programa NFPA 1850 primer año | Contrato con tiempos de respuesta |
`,

  "sistemas-sprinkler-nfpa-13-guia-instalacion": `
## Tabla Técnica: Clasificación de Riesgos NFPA 13 y Densidades de Diseño

| Clasificación de ocupación | Ejemplos típicos | Densidad de diseño aproximada | Área de operación |
|----------------------------|------------------|-------------------------------|-------------------|
| **Riesgo ligero** | Oficinas, escuelas, hoteles | 0.10 gpm/ft² | 1,500 ft² |
| **Riesgo ordinario I** | Estacionamientos, lavanderías | 0.15 gpm/ft² | 1,500 ft² |
| **Riesgo ordinario II** | Talleres, bodegas ligeras | 0.20 gpm/ft² | 1,500 ft² |
| **Riesgo extra I** | Hangares, carpinterías | 0.30 gpm/ft² | 2,500 ft² |
| **Riesgo extra II** | Procesos con inflamables | 0.40 gpm/ft² | 2,500 ft² |
| **Almacenamiento en altura** | CEDIS, racks > 3.7 m | Según esquema/ESFR | Cálculo específico |

> **Nota técnica:** los valores son orientativos para comprensión del lector; el diseño real exige cálculo hidráulico firmado conforme a la edición vigente de NFPA 13, considerando abastecimiento de agua, commodity real almacenado y geometría del riesgo.
`,
};
