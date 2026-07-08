import type { ArticuloData } from "./blog-articulos";

/**
 * Artículos de concepto y comparativa — contenido único de decisión técnica.
 * Cubren comparaciones (X vs Y), materiales, técnicas de mantenimiento y EPP por
 * disciplina que se citaban en fichas de producto sin artículo propio. No duplican
 * las guías amplias existentes; los near-duplicados se redirigen al canónico
 * (ver astro.config.mjs).
 *
 * Precisión (2026): NFPA consolidó 1971/1975/1981/1982 → NFPA 1970 (2024);
 * 1991/1992/1994 → NFPA 1990; 1670/1983 → NFPA 2500. Se conserva el número
 * histórico como término de búsqueda y se aclara la consolidación.
 * Regla: sin superlativos sin proof. NO usar comillas dobles dentro de strings.
 */
const AUTOR = "Equipo BOMBERO.MX";
const ROL = "Equipo Técnico — Selección de EPP";

export const articulosConceptosData: Record<string, ArticuloData> = {

  // ─────────────────── COMPARATIVAS (X vs Y) ───────────────────
  "brigada-industrial-vs-bombero-nfpa": {
    titulo: "Brigada Industrial vs. Bombero Profesional: EPP",
    excerpt: "Un bombero profesional y un brigadista industrial enfrentan riesgos distintos y, por tanto, EPP distinto. El bombero municipal se rige por NFPA 1971/1970 para fuego estructural; la brigada industrial combina NOM-002-STPS, NOM-017-STPS y ropa FR ISO 11612/NFPA 2112 según el proceso.",
    imagen: "/images/blog/blog-normativa-nfpa-bomberos-mexico.avif",
    categoria: "Industrial",
    tags: ["Brigada Industrial", "Bombero Profesional", "NFPA 1971", "NOM-002-STPS", "EPP"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "brigada industrial vs bombero profesional EPP",
    contenido: `
## Dos figuras, dos marcos de riesgo

Confundir al **bombero profesional** con el **brigadista industrial** lleva a comprar el EPP equivocado. Ambos combaten fuego, pero su exposición, su marco normativo y su equipo son distintos.

- El **bombero profesional** (municipal, estatal, ARFF) entra a estructuras en llamas, con exposición sostenida a calor, humo y colapso. Su referencia es **NFPA 1971** —hoy consolidada en **NFPA 1970 (2024)**— y equivalentes (EN 469, ISO 11999).
- El **brigadista industrial** es un trabajador capacitado para la **respuesta inicial** dentro de una planta. Su marco es la mexicana **NOM-002-STPS** (prevención y protección contra incendios en centros de trabajo), la **NOM-017-STPS** (selección de EPP) y ropa FR industrial (**ISO 11612**, **NFPA 2112**).

## Qué cambia en el EPP

El bombero estructural necesita el **conjunto completo de 3 capas** (barrera exterior, de humedad y térmica), SCBA, casco NFPA 1971/1970, capucha, guantes y botas certificadas. Está diseñado para *inmersión* en el incendio.

La brigada industrial suele necesitar **ropa FR** apropiada al proceso (petroquímica, eléctrica, metal fundido) y equipo de **respuesta inicial** (extintores, mangueras, a veces SCBA), no necesariamente el conjunto estructural completo —salvo que la brigada tenga rol de ataque interior, en cuyo caso sube al estándar de bombero.

## La trampa común

Equipar a una brigada industrial con trajes estructurales NFPA porque suenan más protectores puede ser **contraproducente**: el traje estructural es pesado y genera estrés térmico, y no está optimizado para arco eléctrico ni salpicadura de metal fundido (donde ISO 11612 códigos D/E o ATPV son lo relevante). Y al revés: enviar a un ataque estructural a alguien con solo ropa FR industrial es exponerlo sin la barrera necesaria.

## Cómo decidir en México

Parte del **análisis de riesgo del rol**, no del catálogo:

- ¿Ataque interior a fuego estructural? → estándar de bombero (**NFPA 1971/1970**).
- ¿Respuesta inicial en planta con riesgo de proceso? → ropa FR por sector (**ISO 11612 / NFPA 2112**) bajo **NOM-002/017-STPS**.
- ¿Rol mixto? → el EPP debe cubrir el escenario más severo.

[Solicita asesoría](/cotizar/) para mapear el rol de tu personal con el EPP y la norma correctos.
`,
  },

  "diferencia-traje-estructural-forestal": {
    titulo: "Traje Estructural vs. Forestal: Diferencias Clave",
    excerpt: "El traje estructural (NFPA 1971/1970) protege contra calor extremo e inmersión en fuego con un sistema pesado de 3 capas; el forestal (NFPA 1977) prioriza ligereza y transpirabilidad para jornadas largas. Usar uno en el escenario del otro es un error de selección peligroso.",
    imagen: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
    categoria: "Forestales",
    tags: ["Traje Estructural", "Traje Forestal", "NFPA 1971", "NFPA 1977", "Selección"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "diferencia traje estructural forestal bombero",
    contenido: `
## No es el mismo fuego

El **traje estructural** y el **traje forestal** responden a incendios opuestos en su física, y por eso son equipos opuestos en su diseño.

- El incendio **estructural** es corto, intensísimo y confinado: calor radiante y convectivo extremo, riesgo de flashover, humo tóxico. Exige una **barrera térmica gruesa**.
- El incendio **forestal** es prolongado, al aire libre, con calor menos intenso pero **jornadas de horas o días**, terreno agreste y esfuerzo físico. El enemigo no es solo la llama: es el **estrés térmico** del propio cuerpo.

## Qué exige cada norma

**NFPA 1971** (estructural, hoy **NFPA 1970**) obliga a un **sistema de 3 capas** —barrera exterior FR, barrera de humedad y barrera térmica— que aísla del calor extremo pero pesa y retiene calor corporal.

**NFPA 1977** (forestal) prioriza lo contrario: **una sola capa ligera y transpirable** de material inherentemente FR (Nomex®), que permite disipar el calor del cuerpo y moverse en pendiente durante horas.

## El error de usar el equivocado

- **Forestal con traje estructural:** el bombero colapsa por **golpe de calor** mucho antes de que el fuego lo alcance. El traje pensado para 10 minutos de infierno se vuelve una trampa térmica en una jornada de 8 horas.
- **Estructural con traje forestal:** la única capa ligera **no aísla** del calor radiante/convectivo de un incendio interior. Es exposición directa.

## Cómo decidir en México

Selecciona por **escenario dominante**, no por versatilidad aparente:

- Cuerpos urbanos/municipales con ataque estructural → **NFPA 1971/1970**.
- Brigadas **CONAFOR**, forestales y de interfaz → **NFPA 1977**, con casco ligero y protección de nuca.
- Cuerpos mixtos → dos conjuntos, no uno intermedio: no existe un traje que haga bien ambas cosas.

[Cotiza trajes](/cotizar/) por disciplina y te ayudamos a definir el conjunto correcto para cada escenario.
`,
  },

  "diferencia-casco-forestal-estructural": {
    titulo: "Casco Forestal vs. Estructural: Cuándo Usar Cada Uno",
    excerpt: "El casco estructural (NFPA 1971/1970) resiste calor extremo e impacto con visor y protección de nuca robusta; el forestal (NFPA 1977) es ligero, ventilado y de ala corta para jornadas largas en terreno agreste. La elección se hace por escenario, no por preferencia.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-01.avif",
    categoria: "Forestales",
    tags: ["Casco Estructural", "Casco Forestal", "NFPA 1971", "NFPA 1977", "Selección"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "casco forestal vs estructural bombero cuándo usar",
    contenido: `
## El peso importa tanto como la protección

El casco estructural y el forestal comparten propósito —proteger cráneo, cara y nuca— pero optimizan variables opuestas: **resistencia térmica** uno, **ligereza y ventilación** el otro.

## Casco estructural (NFPA 1971 / NFPA 1970)

Diseñado para el **fuego interior**:

- Carcasa termoplástica o de material compuesto con alta **resistencia térmica y a la llama**.
- **Visor/protección facial** integrada y protector de nuca amplio.
- Compatibilidad con **máscara de SCBA** y capucha.
- Mayor peso —tolerable en intervenciones cortas e intensas.

## Casco forestal (NFPA 1977)

Diseñado para la **jornada larga** al aire libre:

- **Ligero y ventilado** —reduce el estrés térmico y la fatiga de cuello en operaciones de horas.
- **Ala corta o tipo gorra** que no engancha en ramas ni estorba mirando hacia arriba en pendiente.
- **Protector de nuca** contra pavesas y sol.
- Menor exigencia térmica que el estructural, porque el riesgo no es la inmersión en llama.

## Por qué no son intercambiables

Un **casco estructural en operación forestal** añade peso y calor que aceleran la fatiga y el golpe de calor. Un **casco forestal en fuego interior** no ofrece la resistencia térmica ni la integración con SCBA que el escenario exige. En ambos casos, usar el equivocado degrada la seguridad.

## Rescate técnico: un tercer caso

Para **rescate vertical, acuático y en cuerda**, ninguno es ideal: ahí se usa un casco de perfil bajo tipo **EN 12492 / NFPA 1951**, con retención reforzada. Es otro escenario, otro casco.

## Cómo decidir en México

- Ataque estructural → **NFPA 1971/1970**.
- Brigada forestal / CONAFOR → **NFPA 1977**, ligero y ventilado.
- Rescate técnico → casco de perfil bajo (**EN 12492**).

[Cotiza cascos](/cotizar/) por disciplina con certificación por lote.
`,
  },

  "guantes-forestal-vs-estructural-bombero": {
    titulo: "Guante Forestal vs. Estructural de Bombero",
    excerpt: "El guante estructural (NFPA 1971/1970) prioriza barrera térmica y de humedad para el fuego interior; el forestal (NFPA 1977) prioriza destreza, transpirabilidad y agarre para manejar herramienta manual durante horas. Elegir mal cuesta destreza o protección.",
    imagen: "/images/guantes-para-bomberos/guante-bombero-combate-incendio-manguera-01.avif",
    categoria: "Forestales",
    tags: ["Guante Estructural", "Guante Forestal", "NFPA 1971", "NFPA 1977", "Destreza"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "guante forestal vs estructural bombero",
    contenido: `
## La mano hace el trabajo

En ambos incendios la mano es la herramienta principal, pero el guante que la protege es distinto porque el riesgo y la tarea son distintos.

## Guante estructural (NFPA 1971 / NFPA 1970)

- **Barrera térmica** multicapa (Nomex®, Kevlar®, forro aislante) contra calor extremo.
- **Barrera de humedad** que impide entrada de agua y vapor.
- Destreza validada con **ASTM F2703** —suficiente para operar, aunque el guante es más voluminoso.
- Pensado para **intervenciones cortas e intensas**.

## Guante forestal (NFPA 1977)

- **Ligero y transpirable** —la jornada dura horas y la mano suda.
- **Palma de cuero** para agarre y resistencia a la abrasión al manejar **Pulaski, McLeod, azadón y motosierra**.
- **Destreza alta** para manipular herramienta fina y equipo de radio.
- Menor barrera térmica que el estructural, porque el riesgo dominante es la abrasión y el calor moderado sostenido, no la inmersión en llama.

## El error de intercambiarlos

- **Guante estructural en forestal:** demasiado caluroso y voluminoso para una jornada larga; el brigadista pierde destreza y suda en exceso.
- **Guante forestal en fuego interior:** no aísla del calor extremo ni tiene barrera de humedad —exposición directa de la mano.

## Rescate y HAZMAT: otros guantes

Para **extricación** manda la resistencia al corte (**EN 388 / ASTM F1790**, **NFPA 1951**); para **HAZMAT**, la permeación química (**ASTM F739 / EN 374**, **NFPA 1991/1990**). Ningún guante cubre bien todos los escenarios.

## Cómo decidir en México

Selecciona por tarea dominante: térmica (estructural), destreza y jornada (forestal), corte (rescate), química (HAZMAT). [Cotiza guantes](/cotizar/) por disciplina.
`,
  },

  "cuero-vaqueta-vs-kevlar-guantes": {
    titulo: "Cuero Vaqueta vs. Kevlar® en Guantes de Bombero",
    excerpt: "El cuero vaqueta aporta agarre, resistencia a la abrasión y economía; el Kevlar® aporta resistencia al corte y estabilidad térmica. En el guante de bombero no compiten: se combinan según la zona y la tarea. Guía para leer la construcción del guante antes de comprar.",
    imagen: "/images/guantes-para-bomberos/guante-bombero-combate-incendio-manguera-02.avif",
    categoria: "Equipo",
    tags: ["Cuero Vaqueta", "Kevlar", "Guantes Bombero", "Abrasión", "Corte"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "cuero vaqueta vs Kevlar guantes bombero",
    contenido: `
## No es cuero contra Kevlar®: es dónde va cada uno

Una pregunta frecuente al comprar guantes es si conviene el **cuero** o el **Kevlar®**. La respuesta profesional es que **no compiten**: un buen guante de bombero usa ambos, cada uno donde aporta más.

## Cuero vaqueta: agarre y abrasión

El **cuero vaqueta** (de res, curtido para resistir calor) es el material tradicional de la **palma y los dedos**:

- **Agarre** superior en seco y húmedo —clave para manejar manguera, herramienta y víctimas.
- **Resistencia a la abrasión** al arrastrarse y trabajar sobre superficies rugosas.
- **Economía** y durabilidad con mantenimiento adecuado.
- Su límite: absorbe agua si no está tratado, y frente al corte no iguala a las aramidas.

## Kevlar®: corte y estabilidad térmica

El **Kevlar®** (para-aramida de DuPont™) aporta lo que el cuero no:

- **Resistencia al corte** muy alta —ideal para **costuras, refuerzos y forros** donde el borde filoso amenaza.
- **Estabilidad térmica**: no se funde ni gotea; se carboniza a temperaturas muy altas.
- **Resistencia mecánica** (tracción) que refuerza la estructura del guante.

## Cómo se combinan

En un guante estructural NFPA bien construido es común ver:

- **Palma de cuero vaqueta** (agarre y abrasión).
- **Costuras e hilo de Kevlar®** (que no fallan por calor ni corte).
- **Forro de Nomex®/Kevlar®** y barrera de humedad (aislamiento).

Kevlar® y **Nomex®** tampoco compiten: Nomex® manda en resistencia a la llama; Kevlar®, en resistencia mecánica.

## Cómo leer un guante antes de comprar

Pide la **construcción por zonas**: material de palma, de dorso, de costuras y de forro. Un guante que dice solo Kevlar sin cuero puede tener mal agarre; uno solo de cuero, mala resistencia al corte en costuras. La certificación **NFPA 1971/1970** valida el sistema; la construcción explica el desempeño.

[Cotiza guantes](/cotizar/) y te compartimos la construcción por zonas de cada modelo.
`,
  },

  "butilo-vs-neopreno-vs-viton-hazmat": {
    titulo: "Butilo vs. Neopreno vs. Viton® en Guantes HAZMAT",
    excerpt: "En guantes HAZMAT no hay material universal: el butilo domina gases y cetonas, el Viton® los hidrocarburos y solventes aromáticos, el neopreno ofrece amplio espectro económico. La selección se hace con la tabla de permeación ASTM F739/EN 374 para el químico real.",
    imagen: "/images/guantes-para-bomberos/guante-bombero-combate-incendio-manguera-03.avif",
    categoria: "Industrial",
    tags: ["Butilo", "Neopreno", "Viton", "HAZMAT", "Permeación", "ASTM F739"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "butilo vs neopreno vs Viton guantes HAZMAT",
    contenido: `
## No existe el guante HAZMAT universal

El error más caro en respuesta a materiales peligrosos es creer que un guante protege contra todo. La realidad química es la contraria: **cada elastómero resiste bien unos agentes y falla ante otros**. La selección se hace cruzando el químico con la **tabla de permeación (ASTM F739 / EN 374)**, no con la etiqueta.

## Butilo

El **butilo** (caucho sintético) destaca en:

- **Gases y vapores** —tiene una permeabilidad a gases muy baja.
- **Cetonas** (acetona, MEK) y **ésteres**, donde otros materiales fallan rápido.
- Ácidos y bases fuertes.

Su límite: los **hidrocarburos y solventes aromáticos** lo degradan. Es el material de referencia para **encapsulados NFPA 1991** (vapor).

## Viton® (fluoroelastómero)

El **Viton®** brilla justo donde el butilo falla:

- **Hidrocarburos, solventes clorados y aromáticos**, combustibles.
- Excelente resistencia química general y estabilidad.

Suele combinarse **Viton®/butilo** en un mismo guante para cubrir ambos frentes. Su límite: costo elevado y menor desempeño ante algunas cetonas.

## Neopreno

El **neopreno** es el **generalista económico**:

- Amplio espectro frente a ácidos, bases, alcoholes y muchos solventes.
- Buena resistencia mecánica y flexibilidad.
- Ideal cuando el riesgo es variado y de menor severidad.

Su límite: no iguala al butilo en gases ni al Viton® en aromáticos.

## Cómo seleccionar en México

1. Identifica el **químico específico** (no la familia genérica).
2. Consulta su **tiempo de ruptura (breakthrough)** en la tabla del fabricante (**ASTM F739 / EN 374**).
3. Elige el material —o la combinación multicapa— que dé el margen de tiempo que tu operación requiere.
4. Verifica también el **traje y la bota**: un guante correcto con un traje incompatible no protege el sistema.

[Cotiza guantes HAZMAT](/cotizar/) y cruzamos tu inventario de riesgo con el material y el tiempo de protección correctos.
`,
  },

  "nfpa-1951-vs-1971-diferencias": {
    titulo: "NFPA 1951 vs. NFPA 1971: Rescate vs. Estructural",
    excerpt: "NFPA 1971 (hoy NFPA 1970) rige el conjunto de fuego estructural: barrera térmica pesada contra calor extremo. NFPA 1951 rige el EPP de rescate técnico: prioriza destreza, resistencia al corte y bajo perfil. Son escenarios distintos con EPP distinto; mezclarlos deja huecos.",
    imagen: "/images/accion/bomberos-rescate-vehicular.avif",
    categoria: "Normativas",
    tags: ["NFPA 1951", "NFPA 1971", "Rescate Técnico", "Estructural", "Selección"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "NFPA 1951 vs NFPA 1971 diferencias rescate estructural",
    contenido: `
## Dos normas, dos misiones

**NFPA 1971** y **NFPA 1951** se confunden porque ambas visten al bombero, pero protegen contra riesgos opuestos.

- **NFPA 1971** (Structural Firefighting, hoy consolidada en **NFPA 1970, 2024**): protege del **calor extremo y la inmersión en fuego**. Su conjunto de 3 capas es grueso y aislante.
- **NFPA 1951** (Technical Rescue Incidents): protege en **rescate técnico** —vehicular, cuerda, USAR, acuático— donde el riesgo no es el fuego, sino el **corte, la abrasión, el impacto y la necesidad de moverse con destreza**.

## En qué difieren en la práctica

**Traje/conjunto:**
- 1971/1970: pesado, máxima barrera térmica.
- 1951: **ligero, resistente al corte y a la abrasión**, con mayor libertad de movimiento; no requiere la barrera térmica extrema del fuego interior.

**Guantes:**
- 1971/1970: barrera térmica y de humedad.
- 1951: **destreza y resistencia al corte** (EN 388 / ASTM F1790) para manejar metal desgarrado en extricación.

**Casco:**
- 1971/1970: robusto, resistente a calor, con visor y SCBA.
- 1951: compatible con **perfil bajo tipo EN 12492** para trabajo en cuerda y espacios confinados.

## El error de usar uno por el otro

- **Rescate con equipo estructural:** demasiado pesado y caluroso; estorba la destreza fina que exige la extricación, y genera estrés térmico innecesario.
- **Fuego estructural con equipo de rescate:** **no aísla** del calor extremo. Es exposición directa.

## Cómo decidir en México

- ¿Vas a entrar a un incendio de estructura? → **NFPA 1971/1970**.
- ¿Extricación vehicular, rescate en cuerda, USAR, acuático? → **NFPA 1951** (y equipo de cuerda **NFPA 1983/2500**).
- Cuerpos que hacen ambas → **dos conjuntos**, seleccionados por incidente.

[Cotiza EPP](/cotizar/) por disciplina —estructural y rescate— con su certificación.
`,
  },

  "nivel-a-vs-nivel-b-hazmat": {
    titulo: "HAZMAT Nivel A vs. Nivel B: Diferencias Clave",
    excerpt: "El Nivel A HAZMAT es el traje totalmente encapsulado y hermético a vapor (NFPA 1991/1990) con SCBA interior: máxima protección respiratoria y cutánea. El Nivel B protege contra salpicadura líquida (NFPA 1992) con SCBA, pero no es hermético a vapor. La diferencia define quién puede entrar y a dónde.",
    imagen: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
    categoria: "Industrial",
    tags: ["HAZMAT", "Nivel A", "Nivel B", "NFPA 1991", "NFPA 1992", "Encapsulado"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "HAZMAT nivel A vs nivel B diferencias EPP",
    contenido: `
## La clasificación que define quién entra a la zona caliente

Los niveles de protección HAZMAT (A, B, C, D) provienen del marco EPA/OSHA y determinan **qué tan protegido está el respondedor** según el riesgo respiratorio y cutáneo. Los dos de mayor protección —**A y B**— se confunden a menudo, con consecuencias graves.

## Nivel A: máxima protección, hermético a vapor

El **Nivel A** es el traje **totalmente encapsulado y hermético a vapor**:

- **SCBA en el interior** del traje —el aire respirable va dentro del encapsulado.
- Protección cutánea y respiratoria **máxima**, incluso contra **vapores y gases** que la piel podría absorber.
- Norma de referencia: **NFPA 1991** (vapor-protective), hoy dentro de **NFPA 1990**.
- Se usa cuando se desconoce el agente o hay **riesgo de vapor tóxico/corrosivo** a la piel.

## Nivel B: protección respiratoria máxima, salpicadura líquida

El **Nivel B** ofrece la **misma protección respiratoria** (SCBA), pero su traje protege contra **salpicadura líquida**, no contra vapor:

- Traje **no encapsulado herméticamente** (splash-proof), con SCBA que puede ir por fuera o dentro según el diseño.
- Norma de referencia: **NFPA 1992** (liquid splash), dentro de **NFPA 1990**.
- Se usa cuando el agente se conoce, **no representa riesgo de vapor a la piel**, y el peligro es el contacto con líquido.

## La diferencia crítica

Ambos dan protección respiratoria de alto nivel (SCBA). La diferencia está en la **piel frente al vapor**: el Nivel A la protege herméticamente; el Nivel B no. Entrar con Nivel B a una atmósfera con vapor cutáneo peligroso es un error potencialmente letal.

## Niveles C y D

- **Nivel C:** respirador purificador de aire (APR/PAPR) en lugar de SCBA —solo si la atmósfera lo permite y el agente se conoce.
- **Nivel D:** uniforme de trabajo, sin protección química —nunca en zona caliente.

## Cómo decidir en México

La selección del nivel es una **decisión de mando basada en identificación del agente y monitoreo atmosférico** (detector multigas), no una preferencia de equipo. [Solicita asesoría HAZMAT](/cotizar/) para dimensionar tu inventario por nivel y agente.
`,
  },

  "termoplastico-vs-material-compuesto": {
    titulo: "Casco Termoplástico vs. Material Compuesto",
    excerpt: "La carcasa del casco de bombero se fabrica en termoplástico (economía y buen desempeño) o en material compuesto/fibra (mayor resistencia térmica y menor peso, mayor costo). Ambos cumplen NFPA 1971/1970; la elección depende de presupuesto, exposición térmica y vida útil esperada.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-02.avif",
    categoria: "Equipo",
    tags: ["Casco", "Termoplástico", "Material Compuesto", "NFPA 1971", "Carcasa"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "casco termoplástico vs material compuesto bombero",
    contenido: `
## La carcasa define costo, peso y tolerancia al calor

Dos cascos igualmente certificados **NFPA 1971** (hoy **NFPA 1970**) pueden sentirse y comportarse distinto según el material de su carcasa. Las dos familias principales son el **termoplástico** y el **material compuesto**.

## Termoplástico

Los cascos de **termoplástico** (policarbonato, nylon con carga, etc.) son la opción más extendida:

- **Costo eficiente** —el mejor punto de entrada para equipar un cuerpo completo.
- Buen desempeño de impacto y resistencia térmica dentro del rango normado.
- Su límite: ante **exposición térmica muy alta y sostenida** pueden deformarse o degradarse antes que un compuesto, y suelen ser algo más pesados.

## Material compuesto (fibra)

Los cascos de **material compuesto** (fibra de vidrio, aramida, mezclas termoestables) apuntan a la gama alta:

- **Mayor resistencia térmica** —conservan la forma bajo calor extremo prolongado.
- **Menor peso** a igual protección, lo que reduce fatiga de cuello.
- **Mayor vida útil** en exposición severa.
- Su límite: **costo más alto**.

## Cómo decidir en México

No hay una respuesta única; hay un análisis de uso:

- Cuerpo municipal con presupuesto ajustado y exposición moderada → **termoplástico** certificado es una decisión sólida.
- Estación con **exposición térmica severa y frecuente** (industrial, ARFF, alto volumen de intervenciones) → el **compuesto** amortiza su costo en durabilidad y confort.

En ambos casos, lo no negociable es la **certificación NFPA 1971/1970 por lote** y el estado del **sistema de suspensión**, que envejece antes que la carcasa.

[Cotiza cascos](/cotizar/) y te ayudamos a equilibrar presupuesto, peso y exposición térmica.
`,
  },

  "traje-proximidad-vs-entrada": {
    titulo: "Traje de Proximidad vs. Entrada al Fuego",
    excerpt: "El traje de proximidad (aluminizado, NFPA 1971 proximidad / NFPA 1976) refleja calor radiante extremo para aproximarse a incendios de combustible sin entrar en la llama. El traje de entrada/estructural es para inmersión breve en fuego. Son equipos distintos para riesgos térmicos distintos.",
    imagen: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
    categoria: "Equipo",
    tags: ["Traje de Proximidad", "Aluminizado", "NFPA 1976", "Calor Radiante", "ARFF"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "traje de proximidad vs entrada al fuego diferencias",
    contenido: `
## Aproximarse no es entrar

En el mundo del calor extremo hay tres distancias operativas, y confundirlas lleva a comprar el traje equivocado:

- **Aproximación (proximity):** trabajar **cerca** de un fuego intenso —radiación fuerte— sin tocar la llama.
- **Entrada (entry):** ingresar **brevemente en la llama** (raro, muy especializado).
- **Estructural:** operar dentro de un edificio en llamas.

Este artículo compara los dos primeros con el estructural, porque son los que suelen mezclarse.

## Traje de proximidad (aluminizado)

Diseñado contra el **calor radiante extremo** de incendios de combustible, gas y metal:

- Superficie **aluminizada reflectiva** que devuelve gran parte de la energía radiante (ver **ASTM F1891/F1939**, RPP).
- Normas: **NFPA 1971 en su variante de proximidad** (hoy **NFPA 1970**) y la histórica **NFPA 1976**; en Europa, **EN 1486**.
- Uso típico: **ARFF aeroportuario**, siderurgia, petroquímica.

## Traje de entrada al fuego

El **traje de entrada** (fire entry) es un equipo extremo y poco común, diseñado para **contacto directo y breve con la llama** en tareas muy específicas (por ejemplo, cierre de válvulas en un chorro encendido). Ofrece la máxima reflectividad y aislamiento, con **tiempo de exposición muy limitado**. No es un traje de uso general.

## Traje estructural (referencia)

El **estructural (NFPA 1971/1970)** protege contra el calor de un incendio de edificio —convectivo y radiante— para **inmersión breve en el ambiente** del fuego, no en la llama directa ni en radiación de combustible sostenida.

## El error de selección

Usar un **estructural donde se necesita proximidad** deja al bombero sin la reflectividad que exige el calor radiante de combustible; usar un **proximidad en interior estructural** no ofrece la barrera térmica del conjunto de 3 capas. Cada uno resuelve un problema térmico diferente.

## Cómo decidir en México

- Incendio de edificio → **estructural (NFPA 1971/1970)**.
- Aproximación a combustible/gas/metal, ARFF → **proximidad aluminizado (NFPA 1976 / EN 1486)**.
- Entrada al fuego → equipo especializado, uso excepcional.

[Solicita asesoría](/cotizar/) para seleccionar el conjunto correcto según tu exposición térmica.
`,
  },

  "suspension-casco-bombero-4-vs-6-puntos": {
    titulo: "Suspensión del Casco: 4 vs. 6 Puntos",
    excerpt: "El sistema de suspensión reparte el impacto y sostiene el casco sobre la cabeza. Los de 4 puntos son ligeros y económicos; los de 6 puntos distribuyen mejor la energía y el peso, con más estabilidad y confort en jornadas largas. Ambos deben cumplir NFPA 1971/1970.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-03.avif",
    categoria: "Equipo",
    tags: ["Casco", "Suspensión", "4 puntos", "6 puntos", "NFPA 1971"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "suspensión casco bombero 4 vs 6 puntos",
    contenido: `
## El componente que más se ignora (y antes falla)

Al comprar un casco, la atención va a la carcasa y al visor. Pero el componente que determina **cómo se siente y cómo protege** en un impacto —y el que **envejece primero**— es el **sistema de suspensión**: la estructura interna de bandas que sostiene el casco separado del cráneo y absorbe energía.

## Suspensión de 4 puntos

- **Cuatro anclajes** de la banda de cabeza a la carcasa.
- **Ligera y económica**; suficiente para muchos escenarios.
- Reparte el impacto en cuatro zonas; en golpes fuertes, la distribución es menos uniforme que con 6 puntos.
- Buena opción de entrada para cuerpos con presupuesto ajustado, siempre con **certificación NFPA 1971/1970**.

## Suspensión de 6 puntos

- **Seis anclajes**, que **distribuyen mejor** la energía del impacto y el peso del casco.
- Mayor **estabilidad** (el casco se mueve menos) y **confort** en jornadas largas —relevante en operaciones prolongadas o ARFF.
- Suele acompañar a cascos de gama alta (compuesto).
- Costo algo mayor.

## Qué mirar además de los puntos

- **Ajuste (ratchet o trinquete):** permite calibrar la talla con guante puesto.
- **Barbuquejo:** que sostenga el casco sin ahogar; en rescate se busca **retención** (EN 12492), en industria a veces **liberación** (EN 397).
- **Banda antisudor** reemplazable e higiénica.

## Mantenimiento: donde se juega la seguridad

La suspensión es **plástico y textil**: se degrada con sudor, calor y UV **antes que la carcasa**. Inspecciónala en cada revisión y **reemplázala** ante grietas, rigidez o deformación, aunque el casco se vea bien por fuera. Un casco con suspensión vencida no protege como su certificación indica.

## Cómo decidir en México

- Uso general con presupuesto ajustado → **4 puntos** certificado.
- Jornadas largas, alto volumen, confort/estabilidad → **6 puntos**.

[Cotiza cascos](/cotizar/) y consulta la disponibilidad de refacciones de suspensión por modelo.
`,
  },

  "nfpa-1971-vs-en-1486-arff": {
    titulo: "NFPA 1971 vs. EN 1486 para Bomberos ARFF",
    excerpt: "Para ARFF aeroportuario conviven dos marcos: NFPA 1971 (proximidad, hoy NFPA 1970) del sistema norteamericano y EN 1486 del europeo, ambos para trajes reflectantes ante calor radiante de jet fuel. La elección suele venir del marco regulatorio del aeropuerto (AFAC/ICAO) y del fabricante.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-01.avif",
    categoria: "Normativas",
    tags: ["NFPA 1971", "EN 1486", "ARFF", "Proximidad", "ICAO"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "NFPA 1971 vs EN 1486 ARFF aeroportuario",
    contenido: `
## Dos caminos hacia el mismo objetivo: el fuego de aviación

El rescate y extinción de incendios de aeronaves (**ARFF**) enfrenta un riesgo particular: el **calor radiante extremo del combustible de aviación (jet fuel)**. Dos marcos normativos regulan la ropa reflectante que lo enfrenta, y en México pueden verse ambos.

## NFPA 1971 (proximidad) / NFPA 1970

En el sistema **norteamericano**, la protección de proximidad para ARFF se cubre con la variante de proximidad de **NFPA 1971** —consolidada desde 2024 en **NFPA 1970**— apoyada en la histórica **NFPA 1976** y en ensayos de material aluminizado (**ASTM F1891/F1939**, RPP).

- Enfoque en **reflectividad** de la superficie aluminizada y desempeño ante calor radiante.
- Muy extendido por la cercanía de México con la industria estadounidense.

## EN 1486 (Europa)

En el sistema **europeo**, la ropa reflectante para lucha especializada contra el fuego se rige por **EN 1486**, con requisitos análogos de reflectividad, resistencia a la llama e integridad de costuras.

- Común en equipo de origen europeo.
- Se combina con cascos ARFF (visor dorado con filtro IR) y con la categorización del aeropuerto según **ICAO Anexo 14**.

## Qué los diferencia en la práctica

Ambos marcos persiguen lo mismo con métodos de ensayo distintos. La decisión rara vez es puramente técnica; suele depender de:

- El **marco regulatorio** que exige la autoridad aeronáutica (en México, **AFAC**, alineada a **ICAO**).
- El **fabricante y su certificación** (muchos certifican NFPA y EN a la vez).
- La **compatibilidad del sistema** completo (traje, casco, guantes, botas aluminizadas).

## Lo que no cambia

Sea NFPA o EN, el equipo ARFF debe **dimensionarse según la categoría del aeropuerto (ICAO Anexo 14)** y entregarse con **documentación de laboratorio por lote**. La reflectividad de la capa aluminizada debe verificarse en cada inspección: un traje que la perdió deja de proteger.

[Solicita asesoría ARFF](/cotizar/) para alinear el traje de proximidad con tu marco regulatorio y la categoría del aeródromo.
`,
  },

  // ─────────────────── CONCEPTOS / MATERIALES ───────────────────
  "aluminizado-reflectividad-bombero": {
    titulo: "Capa Aluminizada: Cómo Funciona y Por Qué",
    excerpt: "El acabado aluminizado de los trajes de proximidad refleja hasta más del 90% del calor radiante en lugar de absorberlo, permitiendo aproximarse a incendios de combustible. Su desempeño se mide con el RPP (ASTM F1939) y se especifica con ASTM F1891; pierde eficacia si la capa se daña.",
    imagen: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
    categoria: "Equipo",
    tags: ["Aluminizado", "Reflectividad", "Calor Radiante", "Proximidad", "RPP"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "capa aluminizada reflectividad traje bombero cómo funciona",
    contenido: `
## Por qué un traje brilla

El acabado **aluminizado** de los trajes de proximidad no es estético: es física aplicada. Frente al **calor radiante** —la energía que viaja como radiación desde un incendio de combustible o metal fundido— un material puede **absorberla** (y calentarse) o **reflejarla** (y proteger). El aluminio, aplicado sobre un soporte textil resistente, **refleja una fracción muy alta de esa radiación**.

## El número que importa: reflectividad y RPP

Un buen material aluminizado refleja **una proporción muy alta del calor radiante** incidente. Ese desempeño se traduce en el **RPP (Radiant Protective Performance)**, medido con **ASTM F1939**: cuánta energía acumula el conjunto antes de alcanzar el umbral de quemadura. La especificación del material aluminizado la da **ASTM F1891**.

A mayor reflectividad, más **segundos de operación** cerca del fuego —los segundos que permiten cerrar una válvula, enfriar un tanque o rescatar a una tripulación.

## Dónde se usa

- **ARFF aeroportuario** (incendios de jet fuel).
- **Siderurgia y fundición** (radiación de metal fundido).
- **Petroquímica** (incendios de tanque y proceso).

Se rige por **NFPA 1971 proximidad / NFPA 1976** y, en Europa, **EN 1486**.

## Su punto débil: el mantenimiento

La capa aluminizada es una **superficie funcional** que se degrada con abrasión, calor extremo, dobleces y mal almacenamiento. Un traje aluminizado **agrietado, opaco o desprendido pierde reflectividad** y, con ella, su razón de ser —aunque a simple vista parezca útil.

Por eso el traje de proximidad exige:

- **Inspección de la capa reflectiva** en cada uso.
- **Almacenamiento** que evite dobleces marcados y abrasión.
- **Retiro de servicio** cuando la reflectividad se compromete.

## Cómo comprar bien en México

No compres un traje aluminizado por su apariencia: pide la referencia a **ASTM F1891/F1939** (o EN 1486) y el **valor de desempeño**, y capacita a la cuadrilla en su inspección. [Solicita asesoría](/cotizar/) para seleccionar el conjunto de proximidad y su plan de inspección.
`,
  },

  "gore-tex-bombero-barrera-humedad": {
    titulo: "Gore-Tex® en el Traje de Bombero: la Barrera de Humedad",
    excerpt: "La barrera de humedad (a menudo con membrana tipo Gore-Tex®) es la capa intermedia del traje estructural que impide el paso de agua, químicos y patógenos hacia el bombero mientras deja salir el vapor. Es la capa que evita quemaduras por vapor y mantiene el aislamiento térmico.",
    imagen: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
    categoria: "Equipo",
    tags: ["Gore-Tex", "Barrera de Humedad", "Sistema 3 capas", "NFPA 1971", "Vapor"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "Gore-Tex barrera de humedad traje bombero",
    contenido: `
## La capa invisible que evita quemaduras por vapor

En el **sistema de 3 capas** del traje estructural, la del medio —la **barrera de humedad**— es la menos visible y una de las más críticas. A menudo emplea una **membrana tipo Gore-Tex®** laminada sobre un soporte de aramida.

## Qué hace la barrera de humedad

Cumple una función doble y aparentemente contradictoria:

- **Impide el paso de líquidos hacia adentro:** agua de manguera, químicos, sangre y otros fluidos —una barrera contra **patógenos** (bloodborne pathogens) además de contra el agua.
- **Deja salir el vapor de sudor hacia afuera** (transpirabilidad): la membrana microporosa permite que el vapor del cuerpo escape, reduciendo el estrés térmico.

## Por qué evita quemaduras por vapor

Si el agua atravesara el traje y quedara atrapada entre las capas, el calor del incendio la convertiría en **vapor a presión** contra la piel —una de las causas de **quemaduras por escaldadura** en bomberos. La barrera de humedad **impide que ese agua entre**, protegiendo tanto del líquido como del vapor que generaría.

Además, una capa térmica **mojada pierde aislamiento**: el agua conduce el calor. Mantener seca la barrera térmica es parte de conservar la protección.

## Su lugar en el sistema

- **Capa exterior (outer shell):** Nomex®/PBI®/Kevlar® —flama y abrasión.
- **Barrera de humedad (Gore-Tex® u otra):** líquidos y patógenos afuera, vapor de sudor hacia afuera.
- **Barrera térmica (thermal liner):** aislamiento (TPP/THL).

Las tres se ensayan como conjunto en la certificación **NFPA 1971/1970**.

## Mantenimiento: la barrera se puede dañar

La membrana se degrada con **calor excesivo en secado, lavado inadecuado y contaminación**. Por eso el mantenimiento **NFPA 1851** exige lavado y secado controlados y **pruebas de integridad de la barrera de humedad**. Una barrera perforada o delaminada deja de proteger contra líquidos y patógenos.

## Cómo comprar y cuidar en México

Verifica el **tipo de barrera de humedad** del traje y su compatibilidad con el resto del sistema, y sigue el protocolo de lavado del fabricante. [Cotiza trajes estructurales](/cotizar/) y te detallamos la construcción de cada capa.
`,
  },

  "sistema-3-capas-bombero": {
    titulo: "El Sistema de 3 Capas del Traje de Bombero",
    excerpt: "El traje estructural NFPA 1971/1970 no es una tela: es un sistema de 3 capas —barrera exterior (flama y abrasión), barrera de humedad (líquidos y patógenos) y barrera térmica (aislamiento)— que se ensaya en conjunto con TPP y THL. Entender las 3 capas es entender por qué protege.",
    imagen: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
    categoria: "Equipo",
    tags: ["Sistema 3 capas", "Traje Estructural", "NFPA 1971", "TPP", "THL"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "sistema 3 capas traje bombero cómo funciona",
    contenido: `
## Un traje no es una tela: es un sistema

El error más común al evaluar un traje estructural es mirar solo la **capa exterior** —la que se ve. Pero la protección real la da un **sistema de tres capas** que trabajan juntas, y que la norma **NFPA 1971** (hoy **NFPA 1970**) ensaya **como conjunto**, no por separado.

## Capa 1: barrera exterior (outer shell)

Es la cara visible del traje. Su trabajo:

- Resistir **flama directa y calor** (materiales inherentes: **Nomex®, PBI®, Kevlar®** o sus mezclas).
- Aguantar **abrasión y desgarro** en el trabajo rudo.
- Portar las **bandas retrorreflectantes** de visibilidad.

Se valida con ensayos como **ASTM D6413** (flama vertical).

## Capa 2: barrera de humedad (moisture barrier)

La capa intermedia, a menudo con **membrana tipo Gore-Tex®**:

- Impide el paso de **agua, químicos y patógenos** hacia el interior.
- Deja salir el **vapor del sudor** (transpirabilidad).
- Evita **quemaduras por vapor** y mantiene seca —y aislante— la capa térmica.

## Capa 3: barrera térmica (thermal liner)

El acolchado interior de aramida que aporta el **aislamiento**:

- Es la principal responsable del **TPP (Thermal Protective Performance)**: cuánto protege contra transferencia de calor.
- Contribuye al **THL (Total Heat Loss)**: cuánto calor corporal deja escapar (confort/estrés térmico).

## El equilibrio TPP–THL

Aquí está la tensión de diseño del traje: **más TPP** (aislamiento) tiende a bajar el **THL** (disipación de calor corporal), aumentando el estrés térmico. Un buen traje **equilibra** ambos para el uso previsto —no busca el TPP más alto a costa de agotar al bombero.

## Por qué las 3 capas se compran juntas

Cambiar una capa por otra incompatible **rompe el sistema**: una barrera de humedad inadecuada, una térmica mojada o una exterior degradada comprometen el conjunto. Por eso se certifica y se mantiene (**NFPA 1851**) como sistema.

## Cómo evaluar en México

Pide la **composición de las 3 capas** y sus valores **TPP/THL**, no solo el material exterior. [Cotiza trajes estructurales](/cotizar/) y te compartimos la ficha completa del sistema.
`,
  },

  "tpp-calor-bombero-explicacion": {
    titulo: "TPP y THL: Qué Significan en el Traje de Bombero",
    excerpt: "El TPP (Thermal Protective Performance) mide cuánto protege el traje contra transferencia de calor; el THL (Total Heat Loss) mide cuánto calor corporal deja escapar. NFPA 1971/1970 exige mínimos de ambos porque el estrés térmico también es un riesgo mortal, no solo la llama.",
    imagen: "/images/blog/bombero-equipo-estructural-nfpa-1971.avif",
    categoria: "Normativas",
    tags: ["TPP", "THL", "Estrés Térmico", "NFPA 1971", "Traje Estructural"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "TPP THL traje bombero qué significa",
    contenido: `
## Dos números que definen si un traje protege y deja trabajar

En la ficha de un traje estructural aparecen dos siglas decisivas: **TPP** y **THL**. Entenderlas evita comprar un traje que protege del fuego pero **colapsa al bombero por calor propio**.

## TPP: protección contra el calor externo

El **TPP (Thermal Protective Performance)** mide **cuánto aísla el traje frente a la transferencia de calor** de un incendio (combinación de convección y radiación). En términos operativos, un TPP más alto significa **más segundos** antes de que la piel alcance el umbral de quemadura de segundo grado.

**NFPA 1971** (hoy **NFPA 1970**) exige un **TPP mínimo** para el conjunto. Es la métrica que la gente asocia intuitivamente con protección.

## THL: disipación del calor propio

El **THL (Total Heat Loss)** mide lo opuesto y menos intuitivo: **cuánto calor corporal deja escapar el traje**. Importa porque el **estrés térmico** —el calor que el propio cuerpo genera al trabajar dentro de un traje aislante— es una **causa real de colapso, lesión y muerte** en bomberos, a veces más que la llama.

Un THL más alto significa un traje que **respira mejor** y reduce la fatiga térmica.

## La tensión entre ambos

Aquí está el arte del diseño: **subir el TPP** (más aislamiento) tiende a **bajar el THL** (menos disipación), y viceversa. Un traje con TPP altísimo y THL bajo protege de la llama pero **agota** al bombero; uno con THL alto y TPP insuficiente es fresco pero **desprotege**.

Por eso NFPA exige **mínimos de ambos**: obliga a equilibrar, no a maximizar uno solo.

## Cómo usarlos al comprar en México

- No pidas solo el **TPP más alto**: pide **ambos valores** y evalúa el equilibrio para tu clima y tipo de operación.
- En climas **cálidos y húmedos** (gran parte de México), el **THL** cobra especial peso: un traje que no respira multiplica el riesgo de golpe de calor.
- Verifica que ambos cumplen o superan el mínimo **NFPA 1971/1970**.

[Cotiza trajes estructurales](/cotizar/) y te comparamos modelos por TPP y THL para tu operación.
`,
  },

  "tiempo-permeacion-guantes-hazmat": {
    titulo: "Permeación Química: Cómo Leer el Tiempo de Ruptura",
    excerpt: "El tiempo de permeación (breakthrough time) de ASTM F739/EN 374 indica cuántos minutos tarda un químico en atravesar el guante o traje HAZMAT a nivel molecular, aunque el material parezca intacto. Es el dato que define el tiempo real de protección y cuándo salir de la zona caliente.",
    imagen: "/images/guantes-para-bomberos/guante-bombero-combate-incendio-manguera-01.avif",
    categoria: "Industrial",
    tags: ["Permeación", "Breakthrough", "HAZMAT", "ASTM F739", "EN 374"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "tiempo de permeación química guantes HAZMAT breakthrough",
    contenido: `
## El peligro que no se ve

En HAZMAT, el material de protección puede engañar: un guante o un traje pueden **verse intactos mientras el químico ya los atraviesa**. Ese paso invisible, molécula a molécula, se llama **permeación**, y se mide con **ASTM F739** (Norteamérica) o **EN 374** (Europa).

## Qué es el tiempo de ruptura (breakthrough)

El **tiempo de ruptura (breakthrough time)** es el dato operativo clave: **cuántos minutos tardan las primeras moléculas del químico en detectarse del otro lado del material**. No mide agujeros ni desgaste: mide difusión química.

- Un breakthrough de **>480 min** ante un agente = protección de jornada.
- Un breakthrough de **20 min** ante otro agente = tienes 20 minutos, y con margen de seguridad, mucho menos.

El mismo guante da tiempos radicalmente distintos según el químico: por eso **no hay guante universal**.

## Tasa de permeación

Junto al breakthrough se reporta la **tasa de permeación**: con qué velocidad pasa el químico una vez iniciada la ruptura. Un breakthrough corto con tasa alta es doblemente peligroso.

## Cómo interpretarlo para operar

1. Identifica el **químico específico** (no la familia).
2. Busca su **breakthrough** en la tabla del fabricante para ese material.
3. Aplica un **margen de seguridad**: nunca planees estar en contacto el tiempo total del breakthrough; sal mucho antes.
4. Recuerda que **temperatura y concentración** reducen el tiempo real respecto al de laboratorio.

## Por qué importa la tabla, no la etiqueta

Un guante Tipo A (EN 374) o certificado NFPA 1991/1990 protege contra **los químicos para los que fue ensayado**. Si tu agente no está en la lista, no asumas protección: exige el dato o selecciona otro material (butilo, Viton®, neopreno según el caso).

## Cómo comprar bien en México

Nunca adquieras equipo HAZMAT sin la **tabla de permeación (ASTM F739/EN 374)** para tus agentes reales. [Cotiza guantes y trajes HAZMAT](/cotizar/) y cruzamos tu inventario de riesgo con tiempos de ruptura documentados.
`,
  },

  "resistencia-quimica-casco-materiales": {
    titulo: "Materiales del Casco HAZMAT: Compatibilidad Química",
    excerpt: "El casco para entornos HAZMAT debe resistir químicamente los agentes de la zona: materiales como HDPE, PVC y ciertos termoplásticos ofrecen inercia distinta según el químico. La selección se apoya en compatibilidad (ASTM D543) y en la integración con visor sellado y respirador.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-02.avif",
    categoria: "Industrial",
    tags: ["Casco HAZMAT", "Resistencia Química", "HDPE", "ASTM D543", "Compatibilidad"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "materiales casco HAZMAT resistencia química compatibilidad",
    contenido: `
## Un casco también se degrada químicamente

En materiales peligrosos, la atención va al traje y al guante, pero el **casco** también está expuesto: salpicaduras, vapores y descontaminación repetida atacan su carcasa. Un casco cuyo material **no es compatible** con el agente puede **fragilizarse, agrietarse o degradarse**, perdiendo su protección de impacto.

## Qué se busca en un casco de entorno HAZMAT

- **Inercia química** de la carcasa frente a los agentes esperados.
- **Superficie lisa y no porosa**, para **descontaminar** con facilidad y sin que el químico quede retenido.
- **Compatibilidad con visor sellado y respirador** (SCBA/APR), porque en HAZMAT la protección facial y respiratoria es continua.

## Materiales típicos

- **HDPE (polietileno de alta densidad)** y ciertos termoplásticos: buena inercia ante muchos ácidos y bases, superficie fácil de descontaminar.
- **PVC y recubrimientos específicos** según el agente.
- La **compatibilidad química** de un plástico frente a un reactivo se evalúa con métodos como **ASTM D543** (resistencia de plásticos a reactivos químicos).

Ningún material es inerte a todo: como en guantes, la selección se hace **por familia de agente**.

## La descontaminación importa tanto como el material

Un casco HAZMAT vive ciclos de **descontaminación**. Un material y un acabado adecuados permiten limpiarlo sin que el químico penetre ni lo degrade. Un casco poroso o incompatible **acumula contaminante** y se convierte en un riesgo para quien lo porta después.

## Cómo seleccionar en México

1. Define los **agentes químicos** de tu operación.
2. Verifica la **compatibilidad química** del material del casco frente a ellos.
3. Confirma **integración con visor sellado y respirador** y facilidad de **descontaminación**.
4. Mantén el casco HAZMAT **separado** del casco estructural: son escenarios y exposiciones distintos.

[Solicita asesoría](/cotizar/) para seleccionar el casco compatible con tu perfil de riesgo químico.
`,
  },

  "visor-dorado-casco-arff-por-que": {
    titulo: "Visor Dorado del Casco ARFF: Por Qué Filtra el IR",
    excerpt: "El visor dorado de los cascos ARFF lleva un recubrimiento metálico que refleja la radiación infrarroja del incendio de combustible, reduciendo el calor radiante que llega a la cara y ojos. No es estético: es protección contra el calor radiante extremo del jet fuel.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-03.avif",
    categoria: "Equipo",
    tags: ["Visor Dorado", "ARFF", "Infrarrojo", "Calor Radiante", "Casco"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "visor dorado casco ARFF por qué filtra infrarrojo",
    contenido: `
## No es lujo: es un espejo para el infrarrojo

El característico **visor dorado** de los cascos **ARFF** aeroportuarios sorprende a quien lo ve por primera vez. No es un detalle estético ni de imagen: es un **recubrimiento metálico funcional** que resuelve un problema físico concreto del incendio de aviación.

## El problema: calor radiante en la cara

El incendio de **combustible de aviación (jet fuel)** genera un **calor radiante intensísimo**. Gran parte de esa energía viaja como **radiación infrarroja (IR)**. Un visor transparente común deja pasar ese IR hacia la **cara y los ojos** del bombero, que son de lo más vulnerable al calor radiante.

## La solución: un recubrimiento que refleja el IR

El visor lleva una **fina capa metálica (oro u otros metales)** que actúa como espejo selectivo: **refleja una porción alta de la radiación infrarroja** mientras deja pasar suficiente luz visible para ver. El resultado:

- **Menos calor radiante** llega a cara y ojos.
- Se **reduce el riesgo de quemadura facial** y de deslumbramiento por el resplandor del fuego.
- Complementa la protección **aluminizada del traje de proximidad** (misma lógica: reflejar, no absorber).

Es el mismo principio del acabado aluminizado del traje ARFF, aplicado a la protección facial.

## Dónde encaja en el sistema ARFF

El casco ARFF con visor dorado forma parte de un **conjunto de proximidad** (**NFPA 1971 proximidad / NFPA 1976 / EN 1486**), dimensionado según la **categoría del aeropuerto (ICAO Anexo 14)**. El visor trabaja junto con el protector facial, la capucha y la máscara del SCBA.

## Mantenimiento

El recubrimiento es una **superficie funcional**: se raya y degrada. Un visor dorado **rayado, opaco o descascarado pierde su capacidad de reflejar IR**. Debe inspeccionarse y reemplazarse cuando su recubrimiento se compromete.

## Cómo comprar en México

Para cuerpos ARFF, especifica el **casco de proximidad con visor dorado (filtro IR)** compatible con tu traje y respirador, y su plan de reemplazo de visor. [Solicita asesoría ARFF](/cotizar/).
`,
  },

  "protector-nuca-bombero-forestal": {
    titulo: "Protector de Nuca: Por Qué es Esencial en Forestal",
    excerpt: "El protector de nuca del casco forestal (NFPA 1977) cubre cuello y nuca contra pavesas, radiación solar y calor de la línea de fuego durante jornadas prolongadas al aire libre. Es una pieza pequeña que previene quemaduras y golpe de calor en operaciones de horas.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-01.avif",
    categoria: "Forestales",
    tags: ["Protector de Nuca", "Casco Forestal", "NFPA 1977", "Pavesas", "CONAFOR"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "protector de nuca bombero forestal por qué es esencial",
    contenido: `
## La zona que el casco no cubre

En el combate de **incendios forestales**, la nuca y el cuello quedan expuestos de una forma que no ocurre en el fuego estructural: el brigadista trabaja **horas al aire libre**, agachado sobre la línea de fuego, con el sol y las **pavesas** cayendo desde arriba y atrás. El **protector de nuca** —una extensión textil que cuelga del casco— cubre esa zona vulnerable.

## Contra qué protege

- **Pavesas y brasas** transportadas por el viento, que caen sobre cuello y nuca y pueden causar **quemaduras** o encender el equipo.
- **Radiación solar** sostenida en jornadas de campo, factor de **golpe de calor** y quemadura solar.
- **Calor radiante** de la línea de fuego cuando el brigadista trabaja de espaldas o de costado.

Suele fabricarse en **material inherentemente FR (Nomex®)** ligero y transpirable, coherente con la filosofía del EPP forestal: proteger sin sofocar.

## Por qué en forestal sí y en estructural de otra forma

En el **fuego estructural**, el casco (NFPA 1971/1970) ya integra un protector de nuca robusto y la exposición es breve. En **forestal (NFPA 1977)**, la exposición es **prolongada y ambiental** (sol, pavesas, viento), por lo que el protector de nuca cumple un papel **sostenido** de prevención de quemaduras y estrés térmico, no de resistencia a inmersión en llama.

## Parte de un sistema forestal coherente

El protector de nuca acompaña al resto del EPP forestal ligero: **casco ventilado**, gafas **ANSI Z87.1** contra humo y ceniza, guantes forestales, traje **NFPA 1977** monocapa y bota forestal. Todo optimizado para la **jornada larga**.

## Cómo comprar en México

Para brigadas **CONAFOR**, forestales y de interfaz, especifica el casco forestal **con protector de nuca de material FR**, y verifica su compatibilidad y reemplazo. [Cotiza EPP forestal](/cotizar/) por disciplina.
`,
  },

  "sistema-colores-casco-brigada-industrial": {
    titulo: "Colores de Casco: Sistema de Roles en Brigadas",
    excerpt: "El color del casco en una brigada o en el Sistema de Comando de Incidentes (ICS/SCI) identifica el rol de un vistazo: jefe, jefe de sector, rescate, primeros auxilios, brigadista. No es normativo único, pero un código de colores claro acelera la coordinación y reduce errores en emergencia.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-02.avif",
    categoria: "Industrial",
    tags: ["Sistema de Colores", "Casco", "Brigada Industrial", "ICS", "Roles"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "sistema de colores cascos brigada industrial roles",
    contenido: `
## Un vistazo debe bastar para saber quién es quién

En una emergencia, el tiempo que se pierde identificando **quién manda, quién rescata y quién da primeros auxilios** es tiempo crítico. Por eso las brigadas industriales y los sistemas de comando de incidentes usan un **código de colores de casco**: comunica el rol **a distancia y sin palabras**.

## Por qué el color acelera la coordinación

En el humo, el ruido y la urgencia, leer un gafete es imposible; identificar un **color de casco** es inmediato. Un sistema de colores bien implementado permite al **comandante de incidente** ubicar a sus líderes de sector y a los especialistas de un vistazo, y a cualquier trabajador saber a quién acudir.

## Un esquema típico (referencial)

No existe un único estándar universal obligatorio; cada organización adopta el suyo, a menudo alineado con su plan de emergencia y el **SCI/ICS**. Un esquema frecuente en la industria mexicana:

- **Rojo:** jefe de brigada / comandante de incidente.
- **Blanco:** jefe de sector o supervisor.
- **Amarillo:** brigadista contra incendio.
- **Verde:** primeros auxilios / atención médica.
- **Azul:** rescate / operaciones especiales.
- **Naranja:** comunicaciones o evacuación (según la organización).

Lo esencial no es el esquema exacto, sino que sea **consistente, documentado y capacitado** en toda la planta.

## Cómo implementarlo bien

1. **Definir roles** del plan de emergencia (bajo **NOM-002-STPS**).
2. **Asignar un color por rol** y documentarlo.
3. **Capacitar** a todo el personal para que reconozca el código.
4. Mantener el **casco base certificado** (**NOM-115-STPS / ANSI Z89.1 / EN 397**): el color identifica, pero la protección la da la norma.

## Cómo equipar en México

Podemos surtir cascos de brigada **por color y rol** con la certificación correspondiente. [Cotiza cascos de brigada](/cotizar/) y define tu código de colores con nuestro equipo.
`,
  },

  // ─────────────────── TÉCNICAS / MANTENIMIENTO ───────────────────
  "como-lavar-guantes-nfpa-1971": {
    titulo: "Cómo Lavar Guantes NFPA 1971 Correctamente",
    excerpt: "Los guantes estructurales acumulan carcinógenos del humo que se absorben por la piel. El lavado adecuado bajo NFPA 1851 —agua tibia, detergente neutro, sin blanqueador ni calor excesivo, secado a la sombra— preserva la barrera térmica y de humedad y reduce la exposición a contaminantes.",
    imagen: "/images/guantes-para-bomberos/guante-bombero-combate-incendio-manguera-01.avif",
    categoria: "Mantenimiento",
    tags: ["Guantes", "NFPA 1851", "Lavado", "Carcinógenos", "Mantenimiento"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "cómo lavar guantes NFPA 1971 mantenimiento",
    contenido: `
## Un guante sucio es un riesgo de salud, no solo de higiene

Los guantes estructurales absorben **hollín y productos de combustión** —muchos de ellos **carcinógenos**— que quedan en el material y se transfieren a la piel de las manos, una de las vías de absorción más eficientes del cuerpo. Lavarlos bien no es estética: es **prevención de cáncer ocupacional** y conservación de la protección. La referencia es **NFPA 1851** (cuidado y mantenimiento del EPP estructural).

## Qué NO hacer

- **No** usar **blanqueador (cloro)** ni detergentes agresivos: dañan las aramidas y la barrera de humedad.
- **No** lavar con **agua caliente** ni secar con **calor alto** (secadora, sol directo intenso, radiador): el calor degrada la membrana y la resistencia del material.
- **No** mezclar el lavado del EPP con ropa común ni hacerlo en casa: contamina y no controla el proceso.

## Cómo lavarlos bien

1. **Retira el exceso** de suciedad con cepillo suave y agua.
2. Lava con **agua tibia y detergente neutro** (pH cercano al neutro), a mano o en máquina dedicada a EPP en ciclo suave.
3. **Enjuaga a fondo**: los residuos de detergente también degradan.
4. **Seca a la sombra**, en ambiente ventilado, **sin calor directo**. La humedad atrapada favorece hongos y degrada; el calor daña la barrera.
5. **Inspecciona** al secar: costuras, rigidez, grietas, pérdida de destreza.

## Cuándo retirar de servicio

Un guante se retira si presenta **quemaduras, cortes, rigidez que impide operar, pérdida de la barrera o contaminación no removible**. La destreza (ver **ASTM F2703**) es parte de la seguridad: un guante endurecido obliga a quitárselo.

## Documenta el mantenimiento

Bajo **NFPA 1851**, el cuidado del EPP se **documenta**: fechas de lavado, inspección avanzada y retiro. En licitaciones y auditorías, ese registro es evidencia de un programa serio.

## Cómo apoyarte en México

Podemos orientar tu **programa de cuidado NFPA 1851** y surtir refacciones. [Cotiza guantes y EPP](/cotizar/) y te compartimos las guías de lavado por material.
`,
  },

  "descontaminacion-casco-hazmat": {
    titulo: "Descontaminación del Casco HAZMAT: Protocolo",
    excerpt: "Tras una intervención HAZMAT, el casco debe descontaminarse siguiendo el proceso de reducción de contaminación en zonas (caliente, tibia, fría). Un casco de material compatible y superficie no porosa se limpia sin retener el agente; documentar el proceso evita exposición secundaria del personal.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-02.avif",
    categoria: "Mantenimiento",
    tags: ["Descontaminación", "Casco HAZMAT", "Zonas", "NFPA 1990", "Protocolo"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "descontaminación casco HAZMAT protocolo",
    contenido: `
## La emergencia no termina cuando se controla el derrame

En materiales peligrosos, una de las fases más críticas ocurre **después** de la intervención: la **descontaminación**. Un casco (y todo el EPP) que sale de la zona caliente lleva el agente adherido. Si no se descontamina bien, **expone al propio portador, al personal de apoyo y a quien manipule el equipo después**.

## Las zonas de la descontaminación

El proceso se organiza en **corredores y zonas**:

- **Zona caliente (hot):** donde está el riesgo; se opera con el nivel de EPP correspondiente (A/B/C).
- **Zona tibia (warm):** el **corredor de descontaminación**, donde se realiza la reducción de contaminación de manera ordenada.
- **Zona fría (cold):** área limpia y segura.

El casco se descontamina en la zona tibia, siguiendo un **orden de retiro (doffing)** que evita tocar la superficie contaminada con la piel.

## Pasos generales de descontaminación del casco

1. **Enjuague/aspersión** inicial para remover el grueso del agente.
2. **Lavado** con la solución descontaminante adecuada al químico (agua, detergente, o neutralizante específico según el agente y la guía técnica).
3. **Enjuague** y verificación.
4. **Retiro controlado** y disposición o cuarentena según el resultado.

El **material y acabado** del casco importan: una **superficie lisa y no porosa** (HDPE y termoplásticos compatibles) se limpia bien; una porosa **retiene** el contaminante.

## Cuándo un casco no se recupera

Si el casco es **incompatible** con el agente, muestra **degradación** (grietas, fragilidad, decoloración) o retuvo contaminante no removible, se **retira de servicio y se dispone** conforme a normativa. Reutilizar un casco comprometido es exposición crónica.

## Documentar es proteger

Bajo el marco de EPP HAZMAT (**NFPA 1990** y guías de respuesta), el proceso de descontaminación y la decisión de reutilizar o desechar **se documentan**. Es seguridad del personal y trazabilidad ante auditoría.

## Cómo apoyarte en México

Podemos asesorar la **selección de casco compatible** y el plan de descontaminación por tipo de agente. [Solicita asesoría HAZMAT](/cotizar/).
`,
  },

  "golpe-de-calor-bombero-forestal": {
    titulo: "Golpe de Calor en Bombero Forestal: Prevención",
    excerpt: "En incendios forestales el estrés térmico puede ser tan letal como el fuego: jornadas largas, EPP, esfuerzo y calor ambiental elevan la temperatura corporal. La prevención combina EPP forestal transpirable (NFPA 1977), hidratación, rotación, aclimatación y vigilancia de signos tempranos.",
    imagen: "/images/accion/bomberos-capacitacion-torre-entrenamiento.avif",
    categoria: "Forestales",
    tags: ["Golpe de Calor", "Estrés Térmico", "Forestal", "NFPA 1977", "Prevención"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "golpe de calor bombero forestal prevención",
    contenido: `
## El fuego que viene de adentro

En el combate de **incendios forestales**, uno de los mayores riesgos no es la llama: es el **estrés térmico** del propio cuerpo. La combinación de **jornadas de horas**, esfuerzo físico intenso, **calor ambiental** y el EPP puede elevar la temperatura corporal hasta el **golpe de calor**, una emergencia médica que puede ser **mortal**.

## Por qué el forestal es especialmente vulnerable

- **Duración:** operaciones de muchas horas o días, no minutos.
- **Esfuerzo:** caminar en pendiente, cavar líneas, manejar herramienta y motosierra.
- **Ambiente:** temporada de incendios = calor y baja humedad.
- **EPP:** aun el ligero (NFPA 1977) añade carga térmica.

Por eso el traje forestal prioriza **transpirabilidad** (a diferencia del estructural): reducir la carga térmica del equipo es parte de la prevención.

## Señales tempranas (no ignorar)

- Calambres por calor, sudoración excesiva o **cese repentino de sudoración**.
- Mareo, náusea, cefalea, debilidad.
- **Confusión, irritabilidad o comportamiento anormal** (signo de alarma).
- Piel caliente y seca, pulso rápido.

La **confusión** es una bandera roja: puede indicar **golpe de calor**, que requiere **enfriamiento inmediato y atención médica**.

## Estrategias de prevención

1. **Aclimatación** progresiva al calor antes de la temporada.
2. **Hidratación** planificada (antes, durante y después), con electrolitos.
3. **Rotación y descansos** en sombra; el trabajo/descanso se ajusta al índice de calor.
4. **EPP forestal transpirable (NFPA 1977)** —no usar traje estructural en forestal.
5. **Vigilancia mutua (buddy system):** cada quien observa signos en su compañero.
6. **Nutrición y sueño** adecuados: la fatiga acumulada aumenta el riesgo.

## El EPP correcto es parte de la prevención

Un EPP forestal ligero, ventilado y bien ajustado **reduce la carga térmica**; uno inadecuado la multiplica. Casco forestal ventilado, protector de nuca contra el sol, y traje monocapa transpirable trabajan a favor del cuerpo.

## Cómo equipar en México

[Cotiza EPP forestal (NFPA 1977)](/cotizar/) diseñado para jornadas largas, y capacita a tu brigada en prevención de estrés térmico.
`,
  },

  "vida-util-casco-bombero-nfpa-1971": {
    titulo: "Vida Útil y Retiro del Casco de Bombero",
    excerpt: "El casco de bombero tiene vida útil limitada aunque se vea bien: NFPA fija un retiro obligatorio (típicamente 10 años desde fabricación para el EPP estructural) y retiro inmediato tras impacto o exposición térmica severa. La suspensión y el visor se degradan antes que la carcasa.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-03.avif",
    categoria: "Mantenimiento",
    tags: ["Vida Útil", "Casco", "NFPA 1851", "Retiro", "Mantenimiento"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "vida útil casco bombero retiro NFPA",
    contenido: `
## Un casco no dura para siempre, aunque lo parezca

Un error costoso —y peligroso— es asumir que un casco de bombero sirve **mientras no se rompa**. Los materiales del casco **envejecen** por calor, UV, sudor y uso, perdiendo capacidad de protección **antes de mostrar daño visible**. Por eso el marco NFPA establece **límites de vida útil y criterios de retiro**.

## Retiro por antigüedad

Para el **EPP estructural**, el marco NFPA (**NFPA 1851**, dentro del ecosistema de **NFPA 1971/1970**) establece un **retiro obligatorio por antigüedad** —típicamente **10 años desde la fecha de fabricación**— independientemente de su apariencia. La lógica: aunque el casco se vea bien, sus polímeros y su suspensión han envejecido.

*(Verifica siempre la edición vigente de la norma y las indicaciones del fabricante, que pueden fijar criterios específicos.)*

## Retiro inmediato (sin importar la edad)

Un casco se retira **de inmediato** si:

- Sufrió un **impacto significativo** (aunque no se vea grieta: el daño puede ser interno).
- Estuvo expuesto a **calor o llama severa** (deformación, burbujas, decoloración, olor a quemado).
- Presenta **grietas, delaminación o fragilidad** en la carcasa.
- Su **suspensión** está degradada, rígida o rota.
- Estuvo en **contacto con químicos** que pueden haberlo degradado.

## La suspensión y el visor fallan primero

La **carcasa** suele ser lo más duradero. Lo que se degrada antes es:

- El **sistema de suspensión** (plástico y textil): sudor, calor y UV lo endurecen y agrietan. Muchos fabricantes ofrecen **refacción**.
- El **visor**: rayado, opacidad, pérdida de recubrimiento (crítico en el visor dorado ARFF).

Inspeccionar y **reemplazar estos componentes** extiende la vida útil segura **dentro** del límite normado.

## Documenta la vida del casco

Registra **fecha de fabricación, puesta en servicio, inspecciones, impactos y retiro**. Bajo **NFPA 1851** es parte del programa; en auditoría y licitación, es evidencia de gestión seria.

## Cómo apoyarte en México

Podemos ayudarte a **auditar la antigüedad de tu flota de cascos** y planear reemplazos. [Cotiza cascos](/cotizar/) y consulta refacciones de suspensión y visor.
`,
  },

  "respuesta-emergencias-hazmat": {
    titulo: "Respuesta a Emergencias HAZMAT: Protocolo y EPP",
    excerpt: "La respuesta a materiales peligrosos sigue una secuencia: identificar el agente, aislar y negar el acceso, establecer zonas (caliente/tibia/fría), seleccionar el nivel de EPP (A/B/C/D) según monitoreo, intervenir y descontaminar. El EPP se elige tras identificar el riesgo, nunca antes.",
    imagen: "/images/directorio/unidad-hazmat-emergencias-01.avif",
    categoria: "Industrial",
    tags: ["HAZMAT", "Protocolo", "Zonas", "Niveles EPP", "Respuesta"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "respuesta emergencias HAZMAT protocolo EPP",
    contenido: `
## En HAZMAT, el orden salva vidas

A diferencia de un incendio, en una emergencia de **materiales peligrosos** la prisa mata. El principio rector es: **identificar antes de intervenir**. El EPP se selecciona **después** de conocer el riesgo, no antes —lo contrario es entrar a ciegas.

## La secuencia de respuesta

**1. Reconocer e identificar.** Placas **DOT/ONU**, rombo **NFPA 704**, hojas de datos de seguridad (SDS), guías de respuesta (GRE/ERG). Saber **qué es** el agente define todo lo demás.

**2. Aislar y negar el acceso.** Establecer perímetro, alejar personas, controlar ignición si aplica. Nadie entra sin necesidad y sin protección.

**3. Establecer zonas.**
- **Caliente:** el riesgo.
- **Tibia:** corredor de descontaminación.
- **Fría:** área limpia y de mando.

**4. Monitorear la atmósfera.** **Detector multigas** (O₂, LEL, CO, H₂S) y, según el caso, PID/colorimetría. El monitoreo define el **nivel de EPP**.

**5. Seleccionar el nivel de EPP.**
- **Nivel A:** encapsulado hermético a vapor con SCBA interior (**NFPA 1991/1990**) —vapor cutáneo o agente desconocido.
- **Nivel B:** salpicadura líquida con SCBA (**NFPA 1992**).
- **Nivel C:** respirador purificador (APR/PAPR) —solo si la atmósfera lo permite.
- **Nivel D:** uniforme de trabajo, nunca en zona caliente.

**6. Intervenir** con el objetivo definido (contención, control de fuga, rescate).

**7. Descontaminar** en la zona tibia, con retiro controlado del EPP.

**8. Documentar** agente, EPP, tiempos, monitoreo y disposición.

## El EPP como sistema

En HAZMAT nada funciona aislado: **traje, guantes, botas y respirador** deben ser **compatibles con el agente** (permeación **ASTM F739/EN 374**) y entre sí. Un guante correcto con un traje incompatible **rompe el sistema**.

## Selección por agente, no por catálogo

El error caro es comprar un traje HAZMAT genérico y suponer que sirve para todo. La selección se hace **por familia de agente** con datos de permeación. [Solicita asesoría HAZMAT](/cotizar/) para dimensionar tu inventario por nivel y por agente.
`,
  },

  // ─────────────────── EPP POR DISCIPLINA ───────────────────
  "epp-completo-bombero-arff": {
    titulo: "EPP Completo para Bombero ARFF en México",
    excerpt: "El bombero ARFF aeroportuario requiere un conjunto de proximidad completo: traje aluminizado (NFPA 1971 proximidad / NFPA 1976 / EN 1486), casco ARFF con visor dorado, guantes y botas resistentes a hidrocarburos, SCBA y protección respiratoria. El nivel se dimensiona por la categoría ICAO del aeropuerto.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-01.avif",
    categoria: "Equipo",
    tags: ["ARFF", "EPP Completo", "Proximidad", "ICAO", "Aeropuerto"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "EPP completo bombero ARFF aeropuerto México",
    contenido: `
## Un incendio de aviación exige un sistema, no piezas sueltas

El bombero de **rescate y extinción de incendios de aeronaves (ARFF)** enfrenta el **calor radiante extremo del jet fuel** en un tiempo de respuesta brevísimo. Su EPP no es un traje estructural más: es un **conjunto de proximidad** completo, coherente y dimensionado por la **categoría del aeropuerto (ICAO Anexo 14)**.

## Los componentes del conjunto ARFF

**Traje de proximidad aluminizado.** Refleja el calor radiante (ver **capa aluminizada** y **RPP / ASTM F1939**). Normas: **NFPA 1971 proximidad / NFPA 1976** o, en marco europeo, **EN 1486**.

**Casco ARFF con visor dorado.** El recubrimiento **filtra el infrarrojo** que ataca cara y ojos; compatible con capucha y máscara.

**Protección respiratoria (SCBA).** El humo de un incendio de aeronave es denso y tóxico; el aire autónomo es indispensable.

**Guantes y botas resistentes a hidrocarburos** y calor, aluminizados o de proximidad según el rol.

**Capucha y protección de interfaces:** cuello, muñecas y tobillos —los puntos donde falla un sistema improvisado.

## Dimensionar por categoría ICAO

El **Anexo 14 de ICAO** clasifica cada aeropuerto en **categorías (1–10)** según el avión de diseño. Esa categoría determina agentes, vehículos, personal y —clave aquí— el **nivel de equipamiento del cuerpo ARFF**. Especificar por debajo de la categoría es incumplimiento; por encima, sobrecosto. En México, la autoridad es **AFAC**, alineada a ICAO.

## Compatibilidad e inspección

Un conjunto ARFF vive o muere por sus **interfaces y su mantenimiento**:

- **Reflectividad** de traje, casco y visor: se degrada; inspección en cada uso.
- **Compatibilidad** traje–casco–máscara–guante–bota.
- **Documentación por lote** y programa de cuidado.

## Cómo equipar en México

Podemos **dimensionar el conjunto ARFF** según la categoría de tu aeródromo y surtirlo con su documentación. [Solicita asesoría ARFF](/cotizar/) y armamos el sistema completo, no piezas sueltas.
`,
  },

  "epp-brigada-forestal-conafor": {
    titulo: "EPP para Brigada Forestal CONAFOR: Qué se Requiere",
    excerpt: "La brigada forestal (CONAFOR, estatal, municipal, voluntaria) requiere EPP NFPA 1977 optimizado para jornadas largas: traje monocapa transpirable, casco ligero con protector de nuca, gafas ANSI Z87.1, guantes forestales, bota forestal y herramienta manual. Prioriza ligereza y prevención de golpe de calor.",
    imagen: "/images/accion/bomberos-capacitacion-torre-entrenamiento.avif",
    categoria: "Forestales",
    tags: ["CONAFOR", "Brigada Forestal", "NFPA 1977", "EPP", "Incendios Forestales"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "EPP brigada forestal CONAFOR qué se requiere",
    contenido: `
## Equipar para la jornada, no para el minuto

La brigada forestal —de **CONAFOR**, estatal, municipal o voluntaria— combate incendios de **vegetación** en operaciones de **horas o días**, en terreno agreste y bajo calor ambiental. Su EPP se rige por la lógica opuesta al estructural: **ligereza, transpirabilidad y resistencia a la abrasión**, para proteger sin provocar **golpe de calor**. La referencia es **NFPA 1977**.

## El conjunto forestal

**Traje forestal (NFPA 1977).** Monocapa de material **inherentemente FR** (Nomex®), ligero y transpirable. No es un traje estructural: aquí el enemigo principal es el **estrés térmico** propio, no la inmersión en llama.

**Casco forestal ligero y ventilado**, con **protector de nuca** contra pavesas y sol.

**Gafas ANSI Z87.1** contra humo, ceniza, polvo y ramas.

**Guantes forestales** con **palma de cuero** para agarre y abrasión al manejar **Pulaski, McLeod, azadón y motosierra**, y destreza para herramienta fina.

**Bota forestal** de caña alta, suela con buen agarre en pendiente y resistente al calor del suelo.

**Herramienta y apoyo:** mochila bomba, línea, y en algunos marcos, **refugio de emergencia (fire shelter)**.

## Por qué NO usar equipo estructural

Enviar a un brigadista forestal con **traje estructural** es un error grave: el peso y la retención de calor **aceleran el golpe de calor** mucho antes de que el fuego lo alcance. El EPP forestal está diseñado para **disipar** el calor del cuerpo, no atraparlo.

## Prevención del estrés térmico como parte del EPP

El EPP forestal correcto es parte de la estrategia contra el golpe de calor, junto con **hidratación, rotación, aclimatación y vigilancia mutua**. Un equipo ligero y ventilado reduce la carga; uno inadecuado la multiplica.

## Cómo equipar en México

Podemos armar el **conjunto forestal NFPA 1977** para tu brigada —municipal, estatal o de apoyo a CONAFOR— priorizando ligereza y certificación. [Cotiza EPP forestal](/cotizar/) por disciplina.
`,
  },

  "guantes-cbrn-nfpa-1994-mexico": {
    titulo: "Guantes CBRN NFPA 1994 para Respuesta en México",
    excerpt: "Los guantes CBRN protegen contra agentes químicos, biológicos, radiológicos y nucleares en respuesta a incidentes de terrorismo o industriales severos. Bajo NFPA 1994 (hoy NFPA 1990) combinan permeación química (ASTM F739) y barrera biológica, con destreza suficiente para operar bajo amenaza.",
    imagen: "/images/guantes-para-bomberos/guante-bombero-combate-incendio-manguera-03.avif",
    categoria: "Industrial",
    tags: ["Guantes CBRN", "NFPA 1994", "NFPA 1990", "HAZMAT", "Terrorismo"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "guantes CBRN NFPA 1994 respuesta México",
    contenido: `
## Cuando el agente puede ser un arma

La respuesta a incidentes **CBRN** —**Químicos, Biológicos, Radiológicos y Nucleares**— añade una capa de exigencia sobre el HAZMAT convencional: los agentes pueden ser **armas deliberadas** (terrorismo) o liberaciones industriales severas, con toxicidad extrema a dosis mínimas. El guante CBRN es una barrera crítica, regida por **NFPA 1994** —consolidada desde 2022 en **NFPA 1990**.

## Qué exige un guante CBRN

- **Permeación química** validada (**ASTM F739**) frente a agentes de guerra química y tóxicos industriales, con **tiempos de ruptura** apropiados.
- **Barrera biológica**: protección frente a patógenos y agentes biológicos.
- **Integridad del sistema**: sellado con el traje y la manga, sin puntos de fuga.
- **Destreza suficiente** para operar equipo, comunicaciones y tareas de rescate bajo amenaza —la funcionalidad es parte de la protección.

## Clases dentro de NFPA 1994

**NFPA 1994** define **clases de conjunto** según el nivel de amenaza y la duración de exposición esperada, desde escenarios de vapor de alta concentración hasta zonas de menor riesgo tras la dispersión. La clase determina qué tan robusta debe ser la barrera —y, en consecuencia, el guante que la acompaña.

## CBRN frente a HAZMAT industrial

Aunque comparten principios (permeación, niveles A/B/C), la respuesta CBRN suele exigir:

- Márgenes de seguridad mayores por la **toxicidad extrema** de los agentes.
- Consideración de la **amenaza deliberada** (múltiples víctimas, dispositivos secundarios).
- Coordinación con autoridades (**SEDENA, protección civil**) en México.

## Selección para México

Para unidades con misión CBRN (aeropuertos, eventos masivos, industria estratégica, apoyo militar/protección civil), los guantes deben:

1. Cumplir **NFPA 1994/1990** con clase apropiada a la amenaza.
2. Tener **datos de permeación** frente a los agentes del escenario.
3. Ser **compatibles** con el traje y el respirador del conjunto.

[Solicita asesoría CBRN/HAZMAT](/cotizar/) para dimensionar guantes y conjunto según tu escenario de amenaza.
`,
  },

  "casco-rescate-acuatico-swiftwater": {
    titulo: "Casco para Rescate Acuático y Swiftwater",
    excerpt: "El rescate en aguas rápidas (swiftwater) exige un casco específico: perfil bajo, flotante, con drenaje, retención reforzada y protección de impacto lateral, distinto del casco de bombero. Suele apoyarse en EN 12492 y en la certificación de rescate acuático, combinado con chaleco PFD.",
    imagen: "/images/accion/bomberos-rescate-vehicular.avif",
    categoria: "Equipo",
    tags: ["Rescate Acuático", "Swiftwater", "Casco", "EN 12492", "PFD"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "casco rescate acuático swiftwater especificación",
    contenido: `
## El agua rápida es otro mundo (y otro casco)

El **rescate en aguas rápidas (swiftwater)** —crecidas, ríos, inundaciones— es una de las disciplinas más peligrosas del rescate técnico. El casco estructural de bombero **no sirve** aquí: es pesado, no flota, retiene agua y su ala amplia crea resistencia peligrosa en corriente. El swiftwater exige un **casco específico**.

## Qué debe tener un casco de swiftwater

- **Perfil bajo y compacto:** no engancha con ramas, cuerdas ni estructuras sumergidas, y ofrece poca resistencia a la corriente.
- **Flotabilidad / materiales que no se saturan:** el casco no debe convertirse en un lastre.
- **Drenaje:** orificios que dejan salir el agua rápidamente para no aumentar peso ni arrastre.
- **Retención reforzada (barbuquejo):** debe **permanecer en la cabeza** ante el golpe de la corriente y las volteretas —igual lógica que el casco de montañismo **EN 12492**.
- **Protección de impacto multidireccional:** frontal, lateral, trasera y superior, contra rocas y escombros.

## Normas de referencia

No hay una sola norma universal; los cascos de swiftwater suelen apoyarse en:

- **EN 12492** (cascos de montañismo/altura) por su perfil bajo y retención.
- Certificaciones específicas de **rescate acuático/watersport**.
- El marco de **rescate técnico NFPA 1951 / NFPA 2500** para el conjunto operativo.

## Parte de un sistema acuático

El casco es una pieza de un sistema mayor: **chaleco de flotación (PFD) de rescate**, traje **de neopreno o seco** según la temperatura del agua, calzado, cuchillo de rescate, silbato y **throw bag**. Ninguna pieza protege sola.

## Cuándo NO usar el casco de bombero

Nunca en agua rápida: su peso, saturación y ala amplia son un **riesgo de ahogamiento y enganche**. El swiftwater exige el casco de su disciplina.

## Cómo equipar en México

Para cuerpos que atienden **inundaciones y rescate en corriente** (temporada de lluvias, huracanes), podemos armar el **conjunto de swiftwater** completo. [Cotiza equipo de rescate acuático](/cotizar/) por disciplina.
`,
  },

};
