import type { ArticuloData } from "./blog-articulos";

/**
 * Glosario de normas y métodos de ensayo — referencias técnicas únicas.
 * Objetivo: cubrir las normas de componente/ensayo (ASTM, EN, ISO, ANSI, ICAO,
 * NOM) que se citan en las fichas de producto pero que NO tienen artículo
 * comprensivo propio. Las normas de conjunto amplias (NFPA 1970/1950/1951/1991…)
 * ya tienen su guía completa: esas se enlazan, no se duplican aquí.
 *
 * Precisión (2026): NFPA consolidó sus normas — 1971/1975/1981/1982 → NFPA 1970
 * (2024); 1991/1992/1994 → NFPA 1990; 1670/1983 → NFPA 2500. Se conserva el número
 * histórico como término de búsqueda y se aclara la consolidación.
 * Regla: sin superlativos sin proof. NO usar comillas dobles dentro de strings.
 */
const AUTOR = "Equipo BOMBERO.MX";
const ROL = "Equipo Técnico — Normativa NFPA/ASTM/EN";

export const articulosNormasData: Record<string, ArticuloData> = {

  // ─────────────────────────── ASTM ───────────────────────────
  "astm-d6413": {
    titulo: "ASTM D6413: Prueba de Flama Vertical del Textil FR",
    excerpt: "ASTM D6413 es el ensayo de flama vertical que mide la resistencia inherente a la llama de los textiles ignífugos usados en trajes de bombero: longitud de carbonización, tiempo de flama residual y de incandescencia. Es la base de la certificación NFPA 1970 y de la barrera exterior Nomex/PBI.",
    imagen: "/images/blog/blog-normativa-nfpa-bomberos-mexico.avif",
    categoria: "Normativas",
    tags: ["ASTM D6413", "Flama Vertical", "Textil FR", "Nomex", "PBI", "NFPA 1970"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "ASTM D6413 prueba de flama vertical textil bombero",
    contenido: `
## Qué es ASTM D6413

**ASTM D6413** (Standard Test Method for Flame Resistance of Textiles — Vertical Test) es el método de ensayo que mide **cómo reacciona un tejido a una llama directa**. No es una norma de producto: es el ensayo que las normas de producto —como **NFPA 1970** (ed. 2025, que consolidó a NFPA 1971)— exigen para validar que la capa exterior del traje de bombero es realmente ignífuga.

En la práctica mexicana, cuando un fabricante afirma que su chaquetón es de material *inherentemente resistente a la flama* (Nomex®, PBI®, Kevlar®), la prueba que respalda esa afirmación es ASTM D6413. Sin ese reporte, la afirmación no es verificable.

## Cómo funciona el ensayo

Una probeta del tejido se monta en posición **vertical** y se expone a una llama controlada de gas durante **12 segundos**. Al retirar la llama se miden tres parámetros:

- **Longitud de carbonización (char length):** cuánto se daña el tejido. Cuanto menor, mejor.
- **Tiempo de flama residual (afterflame):** cuántos segundos sigue ardiendo el material tras retirar la fuente.
- **Tiempo de incandescencia (afterglow):** cuánto brilla el borde carbonizado.

Un textil **inherentemente FR** apenas se carboniza y **no mantiene la llama** por sí solo: la fibra se autoextingue. Un textil de algodón tratado con químico puede pasar el ensayo cuando es nuevo, pero perder la protección con los lavados —de ahí la importancia de que la resistencia sea *inherente a la fibra* y no un tratamiento superficial.

## Por qué le importa a una estación en México

La capa exterior del traje es la primera barrera contra flama directa y calor. Comprar un traje sin el reporte ASTM D6413 (o su equivalente en la certificación NFPA 1970) significa **confiar en la palabra del vendedor**, no en un laboratorio acreditado. En licitaciones públicas, exigir el reporte por número de lote es la forma más simple de filtrar equipo de origen dudoso.

## Relación con otras normas

ASTM D6413 se complementa con otros ensayos del conjunto: **THL** y **TPP** (aislamiento térmico total y protección contra transferencia de calor), y con la evaluación de costuras e interfaces. Ninguno sustituye al otro: la flama vertical valida el material; TPP/THL validan el sistema completo de 3 capas.

En BOMBERO.MX, cada traje estructural se entrega con la documentación de laboratorio que respalda su certificación. Si necesitas verificar la ficha técnica de un modelo específico, [cotiza con nuestro equipo](/cotizar/) y te compartimos el reporte por lote.
`,
  },

  "astm-f1939": {
    titulo: "ASTM F1939: Resistencia al Calor Radiante (RPP)",
    excerpt: "ASTM F1939 mide la resistencia al calor radiante de los materiales de EPP mediante el índice RPP (Radiant Protective Performance). Es clave para trajes de proximidad y aproximación aluminizados (NFPA 1970 proximidad / NFPA 1976) expuestos a calor radiante extremo sin contacto directo con la llama.",
    imagen: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
    categoria: "Normativas",
    tags: ["ASTM F1939", "Calor Radiante", "RPP", "Traje de Proximidad", "Aluminizado"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "ASTM F1939 calor radiante RPP traje proximidad",
    contenido: `
## Qué es ASTM F1939

**ASTM F1939** es el método de ensayo que mide la **resistencia de un material al calor radiante** —el calor que viaja por radiación, sin contacto directo con la llama. Su resultado se expresa como **RPP (Radiant Protective Performance)**: cuanto mayor el índice, más tiempo protege el material antes de que la piel alcance el umbral de quemadura de segundo grado.

A diferencia del calor por convección (aire caliente) o conducción (contacto), el **calor radiante** es el riesgo dominante en incendios de combustibles líquidos, siderúrgicas y aeropuertos, donde el bombero trabaja *cerca* del fuego pero no dentro de él.

## Dónde aplica

ASTM F1939 es determinante para el **traje de aproximación y de proximidad** —los conjuntos aluminizados que reflejan la radiación. Aparece en los requisitos de:

- **NFPA 1970** en su opción de proximidad (hoy dentro de **NFPA 1970**, 2024).
- **NFPA 1976**, la norma histórica de proximidad para incendios de combustible.
- Equipos **ARFF** aeroportuarios expuestos a incendios de jet fuel.

El acabado **aluminizado** de estos trajes existe precisamente para maximizar el RPP: la capa reflectiva devuelve gran parte de la energía radiante en lugar de absorberla.

## Cómo leer el resultado

El RPP se mide exponiendo la muestra a una fuente de calor radiante calibrada y registrando la energía acumulada hasta el umbral de quemadura. Un valor RPP alto significa que el conjunto **compra segundos de operación** en un entorno de radiación intensa —segundos que definen si una cuadrilla puede aproximarse a cerrar una válvula o enfriar un tanque.

## Contexto para México

En operaciones de **PEMEX, refinerías y fundiciones**, el traje estructural NFPA estándar no basta: el calor radiante sostenido exige conjuntos de proximidad validados con ASTM F1939. Especificar el índice RPP en la requisición evita adquirir un traje aluminizado *decorativo* sin desempeño real.

¿Equipas una brigada expuesta a calor radiante extremo? [Solicita asesoría técnica](/cotizar/) para seleccionar el conjunto de proximidad correcto y su documentación de ensayo.
`,
  },

  "astm-f739": {
    titulo: "ASTM F739: Permeación Química de Materiales EPP",
    excerpt: "ASTM F739 mide la permeación de sustancias químicas a través de guantes y trajes HAZMAT: tiempo de ruptura (breakthrough) y tasa de permeación. Es la base para seleccionar el material correcto (butilo, Viton, neopreno) según el agente químico en respuesta a materiales peligrosos.",
    imagen: "/images/guantes-para-bomberos/guante-bombero-combate-incendio-manguera-01.avif",
    categoria: "Normativas",
    tags: ["ASTM F739", "Permeación Química", "HAZMAT", "Butilo", "Viton", "NFPA 1991"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "ASTM F739 permeación química guantes trajes HAZMAT",
    contenido: `
## Qué es ASTM F739

**ASTM F739** es el método de ensayo que mide la **permeación química** —el paso de una sustancia a través de un material de protección a nivel molecular, aunque el material parezca intacto. Es la prueba central para seleccionar guantes y trajes de respuesta a **materiales peligrosos (HAZMAT)**.

La permeación es traicionera: un guante puede no mostrar daño visible mientras el químico ya lo está atravesando. Por eso el ensayo no mide agujeros, sino **moléculas que cruzan la barrera**.

## Los dos números que importan

- **Tiempo de ruptura (breakthrough time):** cuántos minutos tarda el químico en detectarse del otro lado del material. Es el dato operativo: define cuánto tiempo real de protección ofrece el guante frente a ese agente.
- **Tasa de permeación (permeation rate):** con qué velocidad pasa el químico una vez iniciada la ruptura.

Un mismo guante da resultados **muy distintos según el químico**: el butilo resiste excelentemente cetonas y gases, pero puede fallar ante hidrocarburos donde el Viton® destaca. No existe un material universal —de ahí que la selección deba basarse en la tabla de permeación del fabricante para el agente específico.

## Relación con las normas de conjunto

ASTM F739 es el ensayo que exigen las normas de producto HAZMAT: **NFPA 1991** (vapor, encapsulado), **NFPA 1992** (salpicadura líquida) y **NFPA 1994** (CBRN), todas consolidadas desde 2022 en **NFPA 1990**. En Europa, el equivalente para guantes es **EN 374**.

## Cómo usarlo en México

Antes de comprar guantes o trajes HAZMAT, exige la **tabla de permeación ASTM F739** para los químicos que tu brigada realmente enfrenta (ácido sulfúrico, amoníaco, hidrocarburos, cloro). Un traje HAZMAT sin datos de permeación es una caja negra: no sabes cuántos minutos protege.

En BOMBERO.MX asesoramos la selección por familia de agente químico. [Cotiza tu equipo HAZMAT](/cotizar/) y te ayudamos a cruzar el riesgo con el material correcto.
`,
  },

  "astm-f1790": {
    titulo: "ASTM F1790: Resistencia al Corte de Guantes y EPP",
    excerpt: "ASTM F1790 mide la resistencia al corte por deslizamiento de guantes y materiales de protección, expresada en gramos de carga hasta el corte. Es clave para guantes de rescate técnico y extricación vehicular (NFPA 1951), donde el bordes cortantes del metal son el riesgo dominante.",
    imagen: "/images/guantes-para-bomberos/guante-bombero-combate-incendio-manguera-02.avif",
    categoria: "Normativas",
    tags: ["ASTM F1790", "Resistencia al Corte", "Rescate", "Extricación", "NFPA 1951"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "ASTM F1790 resistencia al corte guantes rescate",
    contenido: `
## Qué es ASTM F1790

**ASTM F1790** es el método de ensayo que mide la **resistencia al corte por deslizamiento** de un material de protección. El resultado se expresa como la **carga (en gramos) necesaria para que una hoja normalizada corte el material** a una distancia de desplazamiento definida. Cuanta más carga soporta, mejor protege contra bordes filosos.

Es el ensayo de referencia en Norteamérica para guantes donde el corte —no el fuego— es el peligro principal.

## Dónde aplica

El corte es el riesgo dominante en **rescate técnico y extricación vehicular**: al abrir un auto accidentado con herramienta hidráulica, el metal desgarrado y el vidrio laminado son cuchillas. La norma de conjunto **NFPA 1951** (Protective Ensembles for Technical Rescue Incidents) apoya sus guantes en ensayos de corte como ASTM F1790.

También es relevante en guantes de **rescate con cuerda, USAR y manejo de escombros**, donde la destreza debe convivir con la protección anticorte.

## ASTM F1790 frente a EN 388 e ISO 13997

Existen tres marcos que miden corte y conviene no confundirlos:

- **ASTM F1790** (Norteamérica): carga en gramos por deslizamiento.
- **EN 388** con el método Coup Test (índice 1–5) y el método **ISO 13997** / **EN 388:2016** que reporta niveles **A–F** (TDM-100), más fiable con materiales muy resistentes como el HPPE.

Un guante moderno de rescate suele reportar **ambos** sistemas. Al comparar modelos, verifica que citan el mismo método: un índice EN 388 antiguo no equivale directamente a un nivel A–F.

## Para compras en México

Para brigadas de rescate vehicular, especifica el **nivel de corte** con su método (ASTM F1790 en gramos o EN 388 nivel A–F) en la requisición. Un guante estructural NFPA 1970 no está optimizado para corte: mezclar aplicaciones deja huecos de protección.

[Cotiza guantes de rescate](/cotizar/) y te orientamos según la disciplina (extricación, cuerda, USAR).
`,
  },

  "astm-f1891": {
    titulo: "ASTM F1891: Trajes Aluminizados de Proximidad",
    excerpt: "ASTM F1891 es la especificación de trajes y materiales aluminizados de proximidad al fuego: reflectividad de la superficie, resistencia al calor radiante y desempeño de la capa aluminizada. Aplica a conjuntos de aproximación para incendios de combustible, siderurgia y ARFF.",
    imagen: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
    categoria: "Normativas",
    tags: ["ASTM F1891", "Aluminizado", "Proximidad", "Calor Radiante", "ARFF"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "ASTM F1891 traje aluminizado proximidad",
    contenido: `
## Qué es ASTM F1891

**ASTM F1891** (Standard Specification for Aluminized Materials for Protective Clothing) es la especificación que define los **materiales aluminizados** usados en trajes de proximidad al fuego. Regula la calidad de la capa reflectiva y su desempeño frente al **calor radiante**, el peligro característico de los incendios de combustible.

Mientras ASTM F1939 *mide* el calor radiante (RPP), ASTM F1891 *especifica* cómo debe ser el material aluminizado que lo enfrenta —incluida su reflectividad y su resistencia a agrietarse o desprenderse con el uso.

## Por qué el aluminio

El acabado aluminizado **refleja gran parte de la energía radiante** en lugar de absorberla. En un incendio de tanque de combustible o en una colada siderúrgica, esa reflexión es la diferencia entre poder aproximarse o no. Un traje aluminizado que ha perdido su capa reflectiva (por abrasión, calor o mal almacenamiento) pierde su razón de ser.

## Dónde se exige

- **Trajes de proximidad** para incendios de combustible y gas.
- **ARFF aeroportuario** (rescate y extinción en aeronaves), donde se combina con **ICAO Anexo 14**.
- **Industria pesada:** siderúrgicas, fundiciones, petroquímica (PEMEX).

Estos conjuntos se rigen por normas de producto como **NFPA 1970** en su variante de proximidad (hoy **NFPA 1970**) y la histórica **NFPA 1976**, que apoyan sus requisitos de material en ASTM F1891 y F1939.

## Selección para México

Un traje aluminizado no es un traje estructural con recubrimiento brillante: es un sistema distinto para un riesgo distinto (radiación, no inmersión en fuego). Al especificar, pide la referencia a **ASTM F1891/F1939** y verifica el estado de la capa aluminizada en cada inspección.

[Solicita asesoría](/cotizar/) para seleccionar el conjunto de proximidad y su documentación técnica.
`,
  },

  "astm-f2703": {
    titulo: "ASTM F2703: Destreza y Función en Guantes de Bombero",
    excerpt: "ASTM F2703 evalúa la destreza y funcionalidad de los guantes estructurales de bombero: la capacidad de manipular objetos y operar equipo con el guante puesto. Complementa la protección térmica de NFPA 1970 con un requisito de desempeño operativo real.",
    imagen: "/images/guantes-para-bomberos/guante-bombero-combate-incendio-manguera-03.avif",
    categoria: "Normativas",
    tags: ["ASTM F2703", "Destreza", "Guantes Estructurales", "NFPA 1970"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "ASTM F2703 destreza guantes bombero",
    contenido: `
## Qué es ASTM F2703

**ASTM F2703** es el método de ensayo que mide la **destreza funcional** de un guante de bombero: qué tan bien puede el usuario **manipular objetos, sujetar herramientas y operar equipo** con el guante puesto. Nació de un problema real: guantes muy protegidos pero tan rígidos que el bombero se los quitaba para trabajar —anulando su protección.

## Por qué la destreza es seguridad, no comodidad

Un guante que impide operar una válvula, cargar un cilindro o manejar una manguera **obliga a quitárselo**, y un bombero sin guante es un bombero expuesto. Por eso NFPA 1970 (ed. 2025) incorporó ensayos de destreza como ASTM F2703: la protección térmica solo sirve si el guante se puede usar de verdad.

El ensayo evalúa tareas de manipulación con el guante y las compara con la mano desnuda, obteniendo un índice de desempeño. Un buen guante estructural equilibra **barrera térmica** (Nomex, Kevlar, barrera de humedad) con **destreza suficiente** para operar.

## El equilibrio de diseño

Los tres pilares de un guante estructural están en tensión permanente:

- **Protección térmica** (más capas = más aislamiento).
- **Barrera de humedad** (impide entrada de agua/vapor).
- **Destreza** (menos volumen = más función).

ASTM F2703 pone un piso al tercer pilar para que la carrera por más aislamiento no produzca un guante inútil. Es la razón por la que dos guantes igualmente certificados NFPA pueden *sentirse* muy distintos en la mano.

## Para compras en México

Al evaluar guantes estructurales, no te quedes solo con la etiqueta NFPA: pregunta por el **desempeño de destreza (ASTM F2703)** y, si es posible, prueba una talla real antes de comprar por lote. Un guante que la cuadrilla se quita es dinero perdido y riesgo agregado.

[Cotiza guantes estructurales](/cotizar/) y te enviamos muestras de tallaje para validar ajuste y destreza.
`,
  },

  // ─────────────────────────── EN (Europa) ───────────────────────────
  "en-388": {
    titulo: "EN 388: Guantes contra Riesgos Mecánicos",
    excerpt: "EN 388 es la norma europea que clasifica los guantes de protección contra riesgos mecánicos: abrasión, corte, desgarro y perforación, más el corte TDM (niveles A–F) e impacto. Es la referencia para guantes de rescate y extricación junto a ASTM F1790.",
    imagen: "/images/guantes-para-bomberos/guante-bombero-combate-incendio-manguera-01.avif",
    categoria: "Normativas",
    tags: ["EN 388", "Riesgos Mecánicos", "Corte", "HPPE", "Kevlar", "Rescate"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "EN 388 guantes riesgos mecánicos corte niveles",
    contenido: `
## Qué es EN 388

**EN 388** es la norma europea que clasifica los **guantes de protección contra riesgos mecánicos**. Es el estándar más citado del mundo para guantes técnicos y aparece en la mayoría de los guantes de rescate que se venden en México, junto a la referencia norteamericana ASTM F1790.

Su marca característica es un **pictograma de yunque** seguido de una serie de dígitos y letras que resumen el desempeño.

## Cómo leer el código EN 388

La versión vigente (**EN 388:2016**) reporta hasta seis caracteres, en este orden:

- **Abrasión (0–4):** resistencia al desgaste.
- **Corte por hoja circular / Coup Test (0–5):** método clásico; pierde fiabilidad con materiales muy resistentes.
- **Desgarro (0–4):** resistencia a rasgado.
- **Perforación (0–4):** resistencia a punción con punta normalizada.
- **Corte TDM — ISO 13997 (A–F):** método moderno con carga real; **es el dato fiable** para HPPE y aramidas.
- **Impacto (P o nada):** protección de nudillos si aplica.

La clave práctica: para materiales anticorte de alto desempeño (HPPE, Kevlar®), **mira la letra A–F**, no el dígito 0–5. Un guante puede reportar 5 en el método viejo y su nivel real ser D o E en el método TDM.

## EN 388 en rescate y extricación

En **extricación vehicular** el riesgo es el corte con metal y vidrio. Un guante con nivel **D, E o F** de corte protege donde un guante estructural NFPA 1970 no está diseñado para hacerlo. Muchos guantes de rescate combinan **EN 388 + NFPA 1951** para cubrir corte y desempeño de rescate técnico.

## Para compras en México

Especifica el **nivel de corte con su método** (letra A–F). Pide guantes que reporten EN 388:2016 completo, no versiones antiguas. Y recuerda: un solo guante rara vez es óptimo para fuego *y* corte —selecciona por tarea.

[Cotiza guantes de rescate](/cotizar/) y te orientamos por nivel de corte y disciplina.
`,
  },

  "en-374": {
    titulo: "EN 374: Guantes contra Riesgos Químicos",
    excerpt: "EN 374 es la norma europea de guantes de protección contra productos químicos y microorganismos: define los tipos A, B y C según permeación y los pictogramas de riesgo. Es el equivalente europeo de ASTM F739 para selección de guantes HAZMAT.",
    imagen: "/images/guantes-para-bomberos/guante-bombero-combate-incendio-manguera-02.avif",
    categoria: "Normativas",
    tags: ["EN 374", "Riesgo Químico", "HAZMAT", "Permeación", "Tipo A B C"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "EN 374 guantes protección química tipo A B C",
    contenido: `
## Qué es EN 374

**EN 374** es la norma europea que clasifica los **guantes de protección contra productos químicos y microorganismos**. Es la contraparte europea del método ASTM F739 y, como este, se basa en la idea de que un guante químico se define por **cuánto tarda el agente en atravesarlo**, no por su apariencia.

## Tipos A, B y C

La versión vigente clasifica los guantes según cuántos químicos de una lista normalizada resisten con un **tiempo de ruptura de al menos 30 minutos**:

- **Tipo A:** resiste al menos **6** químicos de la lista.
- **Tipo B:** resiste al menos **3** químicos.
- **Tipo C:** resiste al menos **1** químico.

Cada químico tiene una **letra clave** (por ejemplo, metanol, acetona, ácido sulfúrico). Un guante Tipo A que resiste los agentes equivocados no sirve para tu riesgo: **hay que cruzar las letras con la sustancia real** que enfrenta la brigada.

## Pictogramas

EN 374 usa pictogramas para comunicar el nivel: el **matraz Erlenmeyer** (protección química, con las letras de los químicos resistidos) y el de **riesgo biológico** (protección frente a bacterias, hongos y, en su caso, virus).

## EN 374 frente a NFPA 1991/1990

Para HAZMAT de alto riesgo (vapor, encapsulado), las normas norteamericanas **NFPA 1991/1992/1994** —consolidadas en **NFPA 1990**— exigen ensayos de permeación más severos (ASTM F739) sobre una lista de químicos industriales y agentes CBRN. EN 374 y NFPA se complementan; en licitaciones mexicanas es común ver ambos.

## Para compras en México

No compres un guante químico por su Tipo (A/B/C) aislado: pide la **tabla de químicos con sus tiempos de ruptura** y compárala con los agentes que tu brigada realmente maneja. [Cotiza guantes HAZMAT](/cotizar/) y te ayudamos a cruzar riesgo con material (butilo, neopreno, Viton®).
`,
  },

  "en-443": {
    titulo: "EN 443: Norma Europea de Cascos de Bombero",
    excerpt: "EN 443:2008 es la norma europea para cascos de bombero en la lucha contra incendios en edificios y estructuras. Define zonas de protección, resistencia térmica y mecánica, y compatibilidad con visor y equipo respiratorio. Es el equivalente europeo del casco estructural NFPA 1970.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-01.avif",
    categoria: "Normativas",
    tags: ["EN 443:2008", "Cascos Bombero", "Europa", "Estructural", "NFPA 1970"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "EN 443:2008 casco bombero norma europea",
    contenido: `
## Qué es EN 443:2008

**EN 443:2008** es la norma europea que especifica los **cascos para la lucha contra incendios en edificios y estructuras**. Es la referencia europea equivalente al casco estructural bajo **NFPA 1970** (hoy consolidada en **NFPA 1970**, 2024). Muchos cascos que se comercializan en México certifican **ambos marcos**, EN 443:2008 y NFPA, porque los fabricantes venden globalmente.

## Qué exige

EN 443:2008 evalúa el casco como sistema:

- **Zonas de protección (área 1a/1b/2/3):** define qué superficie de la cabeza cubre el casco, distinguiendo modelos de cobertura amplia (tipo *jet/gallet*) de los de línea de sombrero.
- **Resistencia mecánica:** absorción de impacto y resistencia a la penetración.
- **Resistencia térmica y a la llama:** comportamiento ante calor radiante y contacto con flama.
- **Aislamiento eléctrico** y resistencia de la carcasa.
- **Compatibilidad** con visor ocular/facial, protector de nuca y máscara de equipo de respiración.

## EN 443:2008 frente a NFPA 1970

Ambas normas persiguen lo mismo (proteger cráneo, cara y nuca del bombero estructural) con ensayos distintos. Diferencias típicas:

- Los cascos **EN 443:2008** suelen ofrecer geometrías de **cobertura integral** (estilo europeo) muy popularizadas.
- Los cascos **NFPA** incluyen tradicionalmente el estilo americano de ala completa además de los cascos tipo *jet*.
- La certificación cruzada (EN + NFPA) da flexibilidad operativa y de licitación.

## Para compras en México

Un casco certificado EN 443:2008 es válido y de alto nivel; lo importante es **verificar la certificación por lote** y la compatibilidad con el resto del EPP (capucha, máscara, visor). Evita mezclar componentes no compatibles: la interfaz casco–máscara–capucha es donde más fallan los sistemas improvisados.

[Cotiza cascos certificados](/cotizar/) (EN 443:2008 y/o NFPA) con su documentación de laboratorio.
`,
  },

  "en-1486": {
    titulo: "EN 1486: Trajes Reflectantes de Bombero (Europa)",
    excerpt: "EN 1486 es la norma europea de ropa de protección reflectante para bomberos en operaciones especializadas de lucha contra el fuego con calor radiante intenso (proximidad). Es el equivalente europeo del traje aluminizado de proximidad frente a NFPA 1970/1976.",
    imagen: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
    categoria: "Normativas",
    tags: ["EN 1486", "Proximidad", "Aluminizado", "Calor Radiante", "ARFF"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "EN 1486 traje reflectante proximidad bombero",
    contenido: `
## Qué es EN 1486

**EN 1486** es la norma europea de **ropa de protección reflectante para bomberos** en operaciones especializadas con **calor radiante intenso** —lo que en el marco NFPA se llama *proximidad*. Regula los trajes aluminizados usados para aproximarse a incendios de combustible, gas y metal fundido.

Es, en esencia, el análogo europeo de los conjuntos de proximidad **NFPA 1970 (variante proximidad, hoy NFPA 1970)** y de la histórica **NFPA 1976**.

## Qué protege

El traje EN 1486 está diseñado para reflejar la **radiación térmica**, no para inmersión en llama ni para incendios estructurales interiores. Sus requisitos incluyen:

- **Reflectividad** de la superficie aluminizada frente al calor radiante.
- **Resistencia a la llama** del conjunto.
- **Integridad de costuras e interfaces** (capucha, guantes, botas aluminizadas).

Se apoya en ensayos de material como los que en Norteamérica cubren **ASTM F1891/F1939** (especificación de aluminizados y RPP).

## EN 1486 frente a NFPA para ARFF

En **rescate y extinción de incendios de aeronaves (ARFF)** conviven ambos marcos. Un aeropuerto en México puede especificar el traje según:

- **NFPA 1970/1976** (marco norteamericano), y/o
- **EN 1486** (marco europeo), junto con **ICAO Anexo 14** que define la categoría ARFF del aeródromo.

## Para compras en México

El traje de proximidad EN 1486 es un equipo especializado —no reemplaza al traje estructural ni al revés. Al especificar para ARFF, siderurgia o petroquímica, cita el marco (EN 1486 o NFPA) y exige documentación del material aluminizado.

[Solicita asesoría](/cotizar/) para seleccionar el conjunto de proximidad correcto según tu operación.
`,
  },

  "en-12492": {
    titulo: "EN 12492: Cascos de Montañismo y Rescate Vertical",
    excerpt: "EN 12492 es la norma europea de cascos de montañismo, adoptada en rescate técnico y vertical por su bajo perfil, retención de barbuquejo reforzado y protección lateral. Complementa a NFPA 1951 en operaciones de cuerda, altura y espacios confinados.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-02.avif",
    categoria: "Normativas",
    tags: ["EN 12492", "Rescate Vertical", "Montañismo", "Cuerda", "NFPA 1951"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "EN 12492 casco rescate vertical montañismo",
    contenido: `
## Qué es EN 12492

**EN 12492** es la norma europea de **cascos para montañismo y alpinismo**. Aunque nació para escalada, se ha convertido en el estándar de facto del **rescate técnico y vertical** —rescate con cuerda, en altura, en espacios confinados y acuático— por características que el casco estructural de bombero no ofrece.

## Por qué el rescate técnico usa cascos de montañismo

Un casco estructural NFPA 1970 está optimizado para calor y caída de objetos, pero es **voluminoso y de ala amplia**, lo que estorba en una cuerda o en un espacio confinado. El casco EN 12492 aporta:

- **Perfil bajo y compacto:** no engancha en cuerdas ni estructuras.
- **Retención reforzada (barbuquejo):** diseñado para **no salirse** ante un impacto o una caída invertida —requisito crítico cuando trabajas suspendido.
- **Protección de impacto frontal, lateral, trasera y superior**, no solo superior.

## Relación con NFPA 1951 y NFPA 2500

La norma de conjunto **NFPA 1951** (EPP para incidentes de rescate técnico) y el marco de **NFPA 2500** (que consolidó cuerda y equipo de rescate NFPA 1983/1670) contemplan cascos con estas características. En la práctica, muchos equipos de rescate en México usan cascos que certifican **EN 12492** por su desempeño en cuerda, combinados con protección ocular ANSI Z87.1.

## Cuándo NO usarlo

El casco EN 12492 **no sustituye** al casco estructural en combate de incendios: su resistencia térmica y a llama es menor. Es un casco para *rescate*, no para *fuego interior*. Usar el equivocado deja huecos de protección.

## Para compras en México

Para brigadas USAR, rescate vertical y acuático, especifica un casco **EN 12492** de perfil bajo con retención reforzada, y manténlo separado del casco estructural. [Cotiza cascos de rescate](/cotizar/) según la disciplina.
`,
  },

  "en-397": {
    titulo: "EN 397: Cascos de Protección Industrial (Europa)",
    excerpt: "EN 397 es la norma europea de cascos de protección industrial: absorción de impacto, resistencia a penetración y opciones de aislamiento eléctrico, deformación lateral y muy baja temperatura. Es la referencia para cascos de brigada industrial junto a la mexicana NOM-115-STPS y ANSI Z89.1.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-03.avif",
    categoria: "Normativas",
    tags: ["EN 397", "Casco Industrial", "Brigada", "NOM-115-STPS", "ANSI Z89.1"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "EN 397 casco protección industrial norma europea",
    contenido: `
## Qué es EN 397

**EN 397** es la norma europea de **cascos de protección industrial** —el casco de obra y planta. Es la referencia para las **brigadas industriales contra incendio** que operan en entornos donde el riesgo principal no es el fuego estructural, sino la caída de objetos, el impacto y, según el sector, el riesgo eléctrico o químico.

En México convive con la norma oficial **NOM-115-STPS-2009** (cascos de protección) y con la norteamericana **ANSI Z89.1**.

## Qué exige

EN 397 evalúa como requisitos obligatorios:

- **Absorción de impacto** (caída de objetos sobre la corona).
- **Resistencia a la penetración**.
- **Resistencia a la llama** (el casco no debe arder de forma sostenida).
- **Puntos de anclaje del barbuquejo**.

Y define **requisitos opcionales** que el fabricante puede certificar y marcar:

- **Muy baja temperatura** (−20 °C o −30 °C).
- **Aislamiento eléctrico** (440 V c.a.).
- **Deformación lateral**.
- **Salpicadura de metal fundido** (relevante en siderurgia y fundición).

## EN 397 frente a EN 12492 y NFPA

- **EN 397** (industrial): pensado para que el barbuquejo **se libere** ante un enganche, evitando estrangulamiento —lo contrario del casco de rescate.
- **EN 12492** (rescate/altura): el barbuquejo **retiene** con fuerza para no perder el casco en una caída.

Elegir entre uno y otro **no es preferencia, es análisis de riesgo**: liberación en industria, retención en altura.

## Para brigadas en México

Para una brigada industrial, especifica el casco según el riesgo del sector (eléctrico, metal fundido, baja temperatura) citando **EN 397** con sus opciones y su cumplimiento **NOM-115-STPS**. [Cotiza cascos de brigada industrial](/cotizar/) con certificación por lote.
`,
  },

  // ─────────────────────────── ISO ───────────────────────────
  "iso-11612": {
    titulo: "ISO 11612: Ropa de Protección contra Calor y Flama",
    excerpt: "ISO 11612 es la norma internacional de ropa de protección contra calor y llama para uso industrial: define códigos de desempeño A–F (propagación de llama, calor convectivo, radiante, salpicadura de metal). Es clave para EPP de brigada industrial y ropa FR bajo NOM-STPS.",
    imagen: "/images/blog/blog-normativa-nfpa-bomberos-mexico.avif",
    categoria: "Normativas",
    tags: ["ISO 11612", "Ropa FR", "Calor", "Brigada Industrial", "ATPV"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "ISO 11612 ropa protección calor llama industrial",
    contenido: `
## Qué es ISO 11612

**ISO 11612** es la norma internacional de **ropa de protección contra el calor y la llama** para uso industrial. No es una norma de bombero estructural, sino de **ropa ignífuga (FR)** para trabajadores expuestos a calor y fuego breve: petroquímica, siderurgia, electricidad, brigadas industriales.

Es una de las normas más importantes para el EPP industrial en México, donde se aplica junto a la **NOM-017-STPS** (selección de EPP) y complementa a **NFPA 2112** (ropa FR industrial norteamericana).

## Los códigos de desempeño

ISO 11612 marca la prenda con **letras y niveles** que indican contra qué protege:

- **A:** propagación limitada de la llama (A1/A2 según método).
- **B:** calor convectivo (llama).
- **C:** calor radiante.
- **D:** salpicadura de aluminio fundido.
- **E:** salpicadura de hierro fundido.
- **F:** calor por contacto.

Una prenda no tiene que cubrir todas: se especifica según el riesgo. Un electricista necesita comportamiento ante arco; un fundidor, D/E; un operador de petroquímica, B/C.

## ISO 11612 frente a NFPA 2112 y HRC/ATPV

En arco eléctrico y fuego repentino se usan además métricas de **energía incidente**: el **ATPV** (Arc Thermal Performance Value) y las categorías **HRC/CAT**. ISO 11612 valida la resistencia a calor/llama del textil; ATPV cuantifica cuánta energía de arco resiste. Ambos datos suelen pedirse juntos en licitaciones industriales.

## Para brigadas industriales en México

Al equipar una brigada industrial, no basta pedir ropa FR: especifica los **códigos ISO 11612 (A–F)** que correspondan al riesgo real del sitio y, si hay arco eléctrico, el **ATPV/HRC**. [Cotiza EPP para brigada industrial](/cotizar/) y te ayudamos a mapear riesgo–código.
`,
  },

  "iso-11999": {
    titulo: "ISO 11999: EPP de Bombero (Serie Internacional)",
    excerpt: "ISO 11999 es la serie internacional de EPP para bomberos que atienden estructuras: cubre conjunto, guantes, cascos, botas y capuchas con requisitos de desempeño térmico y mecánico. Es el marco ISO paralelo a NFPA 1970 y EN 469:2020 para el traje estructural.",
    imagen: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
    categoria: "Normativas",
    tags: ["ISO 11999", "EPP Bombero", "Estructural", "Internacional", "NFPA 1970"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "ISO 11999 EPP bombero norma internacional",
    contenido: `
## Qué es ISO 11999

**ISO 11999** es la **serie internacional de normas de EPP para bomberos** que combaten incendios en estructuras. A diferencia de una norma nacional, la serie ISO busca un lenguaje común entre países, con partes dedicadas al **conjunto, guantes, cascos, calzado, capuchas y equipo de respiración**.

Es el marco ISO paralelo a los dos sistemas más usados en la práctica: **NFPA 1970** (Norteamérica, hoy **NFPA 1970**) y **EN 469:2020** (traje estructural europeo).

## Qué cubre la serie

La serie ISO 11999 aborda el EPP como sistema integral:

- Requisitos de **desempeño térmico** (transferencia de calor, exposición a llama).
- Requisitos **mecánicos** (resistencia, integridad de costuras).
- Interfaces entre componentes (casco–capucha–chaquetón–guante–bota).
- Métodos de ensayo armonizados internacionalmente.

## Por qué existe un tercer marco

NFPA y EN evolucionaron por separado con ensayos distintos. ISO 11999 pretende que un fabricante o comprador de cualquier país tenga una referencia común. En México, donde domina el marco **NFPA** por cercanía con EE. UU., ISO 11999 aparece sobre todo en equipo de origen europeo o asiático que busca certificación internacional.

## Qué significa para una compra

Para la mayoría de las estaciones mexicanas, la certificación de referencia sigue siendo **NFPA 1970**. ISO 11999 es válida y de alto nivel, pero conviene:

- Verificar **qué parte de la serie** certifica cada componente.
- No mezclar certificaciones sin confirmar compatibilidad del sistema.
- Exigir siempre **documentación por lote**, sea NFPA, EN o ISO.

¿Evalúas equipo con certificación ISO 11999? [Cotiza con nuestro equipo técnico](/cotizar/) y verificamos la ficha de cada componente.
`,
  },

  "iso-45001": {
    titulo: "ISO 45001: Gestión de SST y EPP en la Industria",
    excerpt: "ISO 45001 es la norma internacional de sistemas de gestión de seguridad y salud en el trabajo (SST). No especifica EPP, pero obliga a identificar riesgos y proveer protección adecuada: es el paraguas que ordena la selección de EPP de brigada industrial junto a NOM-017-STPS.",
    imagen: "/images/blog/blog-normativa-nfpa-bomberos-mexico.avif",
    categoria: "Normativas",
    tags: ["ISO 45001", "SST", "Gestión", "Brigada Industrial", "NOM-017-STPS"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "ISO 45001 gestión seguridad salud EPP industria",
    contenido: `
## Qué es ISO 45001

**ISO 45001** es la norma internacional de **sistemas de gestión de la seguridad y salud en el trabajo (SST)**. No es una norma de producto ni especifica un traje o un casco: es el **marco de gestión** que obliga a una organización a identificar peligros, evaluar riesgos y controlarlos —y el EPP es uno de esos controles.

Reemplazó a la antigua OHSAS 18001 y es hoy la referencia global de gestión de SST.

## Cómo se conecta con el EPP

ISO 45001 sigue la **jerarquía de controles**: primero eliminar el riesgo, luego sustituirlo, controles de ingeniería, controles administrativos y —al final— el **EPP** como última barrera. Esto tiene una implicación práctica: bajo ISO 45001, dotar de EPP no es un trámite, sino la conclusión de un análisis de riesgo documentado.

Para una **brigada industrial contra incendio**, esto significa que la selección de trajes FR, cascos, guantes y equipo de respiración debe **derivarse de la matriz de riesgos** del sitio, no comprarse por catálogo. Es donde ISO 45001 se cruza con las normas de producto (ISO 11612, NFPA 2112, EN 397) y con la mexicana **NOM-017-STPS**.

## Por qué le importa a la industria mexicana

Muchas plantas en México (petroquímica, automotriz, manufactura) operan con certificación ISO 45001 por exigencia de sus clientes o corporativo. Un proveedor de EPP que entiende ISO 45001 puede **ayudar a documentar** por qué cada equipo responde a un riesgo identificado —justo lo que audita el sistema.

## Para responsables de SST

Si tu planta trabaja bajo ISO 45001, la compra de EPP debe cerrar el ciclo: riesgo identificado → EPP especificado (con su norma de producto) → entrega documentada → capacitación. [Solicita asesoría](/cotizar/) para alinear tu EPP de brigada con tu sistema de gestión.
`,
  },

  // ─────────────────────────── ANSI ───────────────────────────
  "ansi-z87": {
    titulo: "ANSI Z87.1: Protección Ocular y Facial de Seguridad",
    excerpt: "ANSI Z87.1 es la norma norteamericana de protección ocular y facial: define resistencia al impacto (marcas Z87 y Z87+), protección contra salpicaduras, polvo y radiación óptica. Es la referencia para goggles y gafas de bombero y brigada, complementando NFPA 1970.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-01.avif",
    categoria: "Normativas",
    tags: ["ANSI Z87.1", "Protección Ocular", "Goggles", "Impacto", "Z87+"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "ANSI Z87.1 protección ocular facial impacto",
    contenido: `
## Qué es ANSI Z87.1

**ANSI/ISEA Z87.1** es la norma norteamericana de **protección ocular y facial de seguridad**. Define cómo deben desempeñarse gafas, goggles y pantallas faciales frente a impacto, salpicadura, polvo y radiación óptica. Es la referencia detrás de casi todos los **goggles y gafas de bombero y de brigada** que se venden en México.

## Las marcas que debes buscar

El dato clave está **marcado en el armazón o mica**:

- **Z87:** cumple el nivel básico de impacto.
- **Z87+:** cumple el nivel de **alto impacto** (proyectiles a alta velocidad) —el que interesa en rescate y extricación.
- Letras adicionales indican protección específica: **D3** (salpicadura de líquidos), **D4** (polvo), **D5** (polvo fino), **W** (soldadura, con número de tono), **U** (UV), **R** (infrarrojo).

Un goggle sin marca Z87+ no debe usarse donde hay riesgo de proyectil.

## Ocular en el EPP del bombero

La protección ocular del bombero tiene dos capas:

- El **visor del casco** (protección primaria facial, integrada al casco NFPA 1970).
- El **goggle o gafa ANSI Z87.1** como protección ocular *sellada*, indispensable en **extricación vehicular** (esquirlas de vidrio y metal), rescate técnico e incendio forestal (humo, ceniza, ramas).

NFPA 1970 exige protección primaria facial, pero el goggle sellado ANSI Z87.1 cubre el ojo donde el visor no llega.

## Para compras en México

Especifica **ANSI Z87.1 con marca Z87+** para tareas de impacto, y añade las letras del riesgo (D3 salpicadura, antivaho permanente). Un goggle antivaho de calidad evita que el bombero se lo quite —el mismo principio de destreza que en guantes. [Cotiza protección ocular](/cotizar/) por aplicación.
`,
  },

  "ansi-z891": {
    titulo: "ANSI Z89.1: Cascos de Protección Industrial",
    excerpt: "ANSI Z89.1 es la norma norteamericana de cascos de protección industrial: Tipo I (impacto superior) y Tipo II (impacto superior y lateral), con Clases G, E y C de protección eléctrica. Es la referencia para cascos de brigada industrial junto a la mexicana NOM-115-STPS y la europea EN 397.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-02.avif",
    categoria: "Normativas",
    tags: ["ANSI Z89.1", "Casco Industrial", "Tipo I II", "Clase E", "NOM-115-STPS"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "ANSI Z89.1 casco industrial tipo clase eléctrica",
    contenido: `
## Qué es ANSI Z89.1

**ANSI/ISEA Z89.1** es la norma norteamericana de **cascos de protección industrial**. Clasifica los cascos por su capacidad de absorber impactos y por su nivel de aislamiento eléctrico. Es la referencia usada en la industria mexicana junto a la norma oficial **NOM-115-STPS-2009** y la europea **EN 397**.

## Tipos y Clases

La norma usa dos ejes:

**Tipo (dirección del impacto):**
- **Tipo I:** protege contra impacto en la **corona** (caída de objetos desde arriba).
- **Tipo II:** protege contra impacto **superior y lateral** —relevante donde hay riesgo de golpes de costado.

**Clase (protección eléctrica):**
- **Clase G (General):** hasta **2,200 V**.
- **Clase E (Eléctrica):** hasta **20,000 V** —para trabajo cerca de energía.
- **Clase C (Conductiva):** **sin** protección eléctrica (por ejemplo, cascos con ventilación o componentes metálicos).

Un casco de brigada en una subestación necesita **Tipo I/II Clase E**; en una bodega logística, Clase G puede bastar.

## ANSI Z89.1 frente a NOM-115-STPS y EN 397

Los tres marcos cubren el casco industrial con ensayos análogos. En México, el requisito legal es la **NOM-115-STPS**; ANSI Z89.1 y EN 397 son referencias internacionales que muchos cascos certifican en paralelo. Lo importante en una licitación es exigir **la certificación aplicable con su marca visible** en el casco.

## Cuándo NO es suficiente

El casco industrial ANSI Z89.1 **no es un casco de bombero estructural**: su resistencia a calor y llama es limitada. Para combate de incendio estructural se requiere **NFPA 1970** o **EN 443:2008**. Usar un casco industrial en fuego interior es un error de selección peligroso.

## Para brigadas en México

Especifica **Tipo (I/II) y Clase (G/E/C)** según el riesgo, con cumplimiento **NOM-115-STPS**. [Cotiza cascos de brigada industrial](/cotizar/) con certificación por lote.
`,
  },

  "ansi-z359": {
    titulo: "ANSI Z359: Sistemas de Protección contra Caídas",
    excerpt: "ANSI Z359 es la familia de normas norteamericanas de protección contra caídas de altura: arneses de cuerpo completo, conectores, líneas de vida, anclajes y desaceleradores. Es la referencia para trabajo en altura y rescate vertical, complementando NFPA 1983/2500 y NOM-009-STPS.",
    imagen: "/images/accion/bomberos-rescate-vehicular.avif",
    categoria: "Normativas",
    tags: ["ANSI Z359", "Protección contra Caídas", "Altura", "Arnés", "Rescate Vertical"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "ANSI Z359 protección contra caídas altura arnés",
    contenido: `
## Qué es ANSI Z359

**ANSI/ASSP Z359** es la **familia de normas norteamericanas de protección contra caídas de altura** (Fall Protection Code). No es una sola norma: es un conjunto de documentos que cubren cada componente y práctica del sistema personal de detención de caídas.

Aplica en **trabajo en altura, rescate vertical, espacios confinados** y toda operación donde el riesgo de caída existe. En México se cruza con la norma oficial **NOM-009-STPS** (trabajos en altura) y, en rescate técnico, con **NFPA 1983** (hoy dentro de **NFPA 2500**).

## Qué componentes cubre

La familia Z359 aborda el sistema completo:

- **Arneses de cuerpo completo** (Z359.11).
- **Conectores, mosquetones y ganchos** de bloqueo doble.
- **Líneas de vida y eslingas con absorbedor de energía**.
- **Anclajes** y su resistencia mínima.
- **Desaceleradores y dispositivos autorretráctiles (SRL)**.
- Cálculo de **distancia de caída libre y espacio de caída** para evitar impacto contra el suelo.

## ANSI Z359 en rescate vs. protección personal

Conviene distinguir dos mundos que comparten equipo:

- **Protección personal contra caídas (Z359):** evita que el trabajador caiga. Factores de seguridad orientados a **una persona**.
- **Rescate con cuerda (NFPA 1983/2500):** cargas y factores de seguridad mayores porque se manejan **dos personas** (rescatista + víctima) y cargas dinámicas.

Un arnés de posicionamiento industrial no equivale a un sistema de rescate técnico. Selecciona según la operación.

## Para compras en México

Para trabajo en altura, especifica componentes **ANSI Z359** con cumplimiento **NOM-009-STPS**; para rescate vertical, sube a equipo con calificación de rescate (**NFPA 1983/2500**). [Cotiza equipo vertical](/cotizar/) según la disciplina.
`,
  },

  // ─────────────────────── ICAO / NOM / Material ───────────────────────
  "icao-annex-14": {
    titulo: "ICAO Anexo 14: Categorías ARFF de Aeropuertos",
    excerpt: "El Anexo 14 de la OACI (ICAO) define la categoría de salvamento y extinción de incendios (SEI/ARFF) de cada aeropuerto según la longitud del avión de diseño, determinando agentes extintores, vehículos y tiempo de respuesta. Es el marco que dimensiona el EPP y el equipo ARFF aeroportuario.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-03.avif",
    categoria: "Normativas",
    tags: ["ICAO Anexo 14", "ARFF", "SEI", "Aeropuerto", "DGAC"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "ICAO Anexo 14 categorías ARFF aeropuerto SEI",
    contenido: `
## Qué es el Anexo 14 de la OACI

El **Anexo 14 al Convenio de Aviación Civil Internacional (ICAO/OACI)** establece los requisitos de **aeródromos**, e incluye el marco del **Salvamento y Extinción de Incendios (SEI)** —lo que en inglés se conoce como **ARFF (Aircraft Rescue and Fire Fighting)**. Es el documento que define **qué nivel de respuesta contra incendios debe tener cada aeropuerto**.

En México, la autoridad aeronáutica (hoy **AFAC**, antes DGAC) adopta estos requisitos para los aeródromos nacionales.

## Las categorías ARFF (1 a 10)

El Anexo 14 clasifica cada aeropuerto en una **categoría del 1 al 10** según la **longitud del avión de diseño** que opera y el ancho de su fuselaje. La categoría determina:

- La **cantidad de agente extintor** (agua para espuma y agente complementario) que debe estar disponible.
- El **número y capacidad de vehículos ARFF**.
- El **tiempo de respuesta** objetivo (típicamente llegar al extremo de pista en un tiempo muy corto).

Un aeropuerto que recibe aviones grandes exige categoría alta —más agente, más vehículos, más personal equipado.

## Cómo dimensiona el EPP

La categoría ARFF no solo define camiones y espuma: **determina el equipamiento del personal**. Un cuerpo ARFF requiere:

- **Traje de aproximación/proximidad** (aluminizado) para incendios de **jet fuel** —validado con marcos como **NFPA 1970 proximidad / NFPA 1976** o **EN 1486**.
- **Cascos ARFF** con visor dorado (filtro IR) y compatibilidad con equipo de respiración.
- Guantes y botas resistentes a hidrocarburos.

## Para aeropuertos en México

Al equipar un cuerpo SEI/ARFF, parte de la **categoría del aeródromo (Anexo 14 / AFAC)**: define el nivel de agente, vehículos y EPP. Especificar por debajo de la categoría es un incumplimiento; por encima, un sobrecosto. [Solicita asesoría ARFF](/cotizar/) para alinear el EPP con la categoría del aeropuerto.
`,
  },

  "nom-115-stps": {
    titulo: "NOM-115-STPS: Cascos de Protección en México",
    excerpt: "La NOM-115-STPS-2009 es la norma oficial mexicana que regula los cascos de protección: clasificación, especificaciones y métodos de prueba obligatorios para cascos que se fabrican, importan o comercializan en México. Es el requisito legal para cascos de brigada industrial junto a ANSI Z89.1 y EN 397.",
    imagen: "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-01.avif",
    categoria: "Normativas",
    tags: ["NOM-115-STPS", "Cascos", "México", "STPS", "Brigada Industrial"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "NOM-115-STPS cascos de protección México",
    contenido: `
## Qué es la NOM-115-STPS

La **NOM-115-STPS-2009** (Seguridad — Equipo de protección personal — Cascos de protección — Clasificación, especificaciones y métodos de prueba) es la **norma oficial mexicana** que regula los **cascos de protección** que se fabrican, importan, distribuyen o comercializan en el país. A diferencia de una norma voluntaria, es un **requisito legal** exigible.

Define cómo deben fabricarse y probarse los cascos, establece su clasificación, regula el etiquetado y obliga a la **certificación antes de la comercialización**.

## Qué clasifica

La norma clasifica los cascos según el tipo de protección que ofrecen frente a **impacto** y **tensión eléctrica**, con métodos de prueba para:

- **Absorción de impacto** (caída de objetos).
- **Resistencia a la penetración**.
- **Resistencia dieléctrica** (aislamiento eléctrico), según la clase.
- **Inflamabilidad** y requisitos del sistema de suspensión y barbuquejo.

Su lógica es análoga a la norteamericana **ANSI Z89.1** (Tipos I/II, Clases G/E/C) y a la europea **EN 397**. Muchos cascos industriales certifican los tres marcos a la vez.

## Dónde aplica en el mundo del bombero

La NOM-115-STPS es la referencia para **cascos de brigada industrial** y de protección civil en centros de trabajo. **No sustituye** a las normas de casco de bombero estructural (**NFPA 1970**, **EN 443:2008**), que exigen resistencia térmica muy superior para el fuego interior.

En una planta, la brigada usa casco NOM-115-STPS; en combate de incendio estructural, se requiere casco certificado NFPA/EN.

## Cómo cumplir en México

Para brigadas industriales, exige cascos con **cumplimiento NOM-115-STPS demostrable** (certificado y etiquetado), y define Tipo y Clase según el riesgo (impacto lateral, tensión eléctrica). [Cotiza cascos de brigada](/cotizar/) con la certificación mexicana correspondiente.
`,
  },

  "nomex-nfpa": {
    titulo: "Nomex®: Fibra Ignífuga Inherente para Bomberos",
    excerpt: "Nomex® es una fibra de aramida meta con resistencia a la llama inherente (no se pierde con el lavado), base de trajes, capuchas y guantes de bombero certificados NFPA. Se combina con PBI®, Kevlar® y barreras de humedad en el sistema de 3 capas del traje estructural.",
    imagen: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
    categoria: "Normativas",
    tags: ["Nomex", "Aramida", "PBI", "Kevlar", "Inherente", "NFPA 1970"],
    autor: AUTOR,
    autorRol: ROL,
    anchorKeyword: "Nomex fibra ignífuga inherente bombero NFPA",
    contenido: `
## Qué es el Nomex®

**Nomex®** (marca de DuPont™) es una **fibra de aramida meta** con resistencia a la llama **inherente**: la protección forma parte de la química de la fibra, no es un tratamiento aplicado. Por eso **no se pierde con los lavados ni con el uso** —la diferencia crítica frente a los textiles tratados con químico.

Es uno de los materiales base del EPP de bombero: aparece en **trajes, capuchas (monjas), forros y guantes** certificados **NFPA 1970** (ed. 2025).

## Por qué "inherente" importa tanto

Un textil de algodón tratado puede pasar el ensayo de flama vertical **ASTM D6413** cuando es nuevo, pero degradarse con el tiempo. El Nomex® mantiene su comportamiento: ante la llama **se carboniza y engrosa en lugar de arder o fundirse**, creando una barrera protectora. No gotea sobre la piel como lo harían las fibras sintéticas comunes (poliéster, nylon).

## Nomex® en el sistema de 3 capas

El traje estructural no es una sola tela: es un **sistema de 3 capas** donde el Nomex® suele participar en varias:

- **Capa exterior (outer shell):** Nomex®, o mezclas Nomex®/Kevlar®, o **PBI®** para máxima resistencia térmica.
- **Barrera de humedad (moisture barrier):** membrana (p. ej. tipo Gore-Tex®) laminada sobre soporte de aramida.
- **Barrera térmica (thermal liner):** acolchado de aramida que aporta el aislamiento (TPP/THL).

Nomex® y **PBI®** no compiten: PBI® ofrece mayor resistencia térmica y estabilidad; Nomex® aporta durabilidad y costo eficiente. Muchas capas exteriores combinan ambos.

## Nomex® frente a Kevlar®

Ambos son aramidas de DuPont™ pero con roles distintos: el **Nomex®** (meta-aramida) destaca en **resistencia térmica y a la llama**; el **Kevlar®** (para-aramida) destaca en **resistencia mecánica** (corte, tracción). Por eso se combinan: Kevlar® para costuras y refuerzos, Nomex® para la barrera térmica.

## Para compras en México

Al comprar traje, capucha o guantes, verifica que el material FR sea **inherente** (Nomex®, PBI®) y no un tratamiento, y pide el respaldo de ensayo (**ASTM D6413**) por lote. [Cotiza equipo estructural](/cotizar/) y te compartimos la composición y certificación de cada modelo.
`,
  },

};
