/**
 * ─── Blog Artículos Data ───
 * Datos de artículos del blog (migrar a content collections después).
 */

export interface ArticuloData {
  titulo: string;
  excerpt: string;
  imagen: string;
  categoria: string;
  tags: string[];
  autor: string;
  autorRol: string;
  contenido: string;
  anchorKeyword: string; // Palabra clave para anchor text SEO
}

export const articulosData: Record<string, ArticuloData> = {
  "nfpa-1971-guia-completa": {
    titulo: "NFPA 1971: Guía Completa del Estándar para Equipo Estructural",
    excerpt: "Todo lo que necesitas saber sobre la norma NFPA 1971, requisitos de certificación y cómo verificar que tu equipo cumple con los estándares.",
    imagen: "/images/directorio/traje-bombero-estructural-nfpa-01.avif",
    categoria: "Normativas",
    tags: ["NFPA 1971", "Certificación", "EPP", "Estructural"],
    autor: "Equipo BOMBERO.MX",
    autorRol: "Especialistas en EPP",
    anchorKeyword: "Requisitos NFPA 1971 para EPP estructural",
    contenido: `
## ¿Qué es la NFPA 1971?

La **NFPA 1971** es el estándar de la National Fire Protection Association que establece los requisitos mínimos para el diseño, fabricación, certificación y selección del **equipo de protección personal (EPP)** utilizado en operaciones de extinción de incendios estructurales.

Esta norma es reconocida internacionalmente como el estándar de referencia para equipo de bomberos, y su cumplimiento es obligatorio en la mayoría de los departamentos de bomberos profesionales en América del Norte y muchos otros países.

### Componentes cubiertos por NFPA 1971

La norma NFPA 1971 cubre los siguientes elementos del conjunto de protección estructural:

- **Cascos estructurales** - Protección de cabeza, cara y cuello
- **Chaquetones y pantalones** - Protección del torso y extremidades
- **Guantes estructurales** - Protección de manos
- **Calzado estructural** - Protección de pies y tobillos
- **Capuchas protectoras** - Protección de cabeza y cuello

### Requisitos de certificación

Para que un equipo sea certificado bajo NFPA 1971, debe:

1. **Pasar pruebas de laboratorio** acreditado por ISO/IEC 17025
2. **Cumplir con todos los requisitos** de rendimiento especificados
3. **Ser sometido a inspección** del proceso de fabricación
4. **Llevar etiquetas de certificación** visibles y permanentes

> **Importante:** La certificación NFPA debe ser de una entidad acreditada. En México, busca equipos con certificación UL o Intertek.

### Ediciones de la norma

La NFPA 1971 se actualiza cada cinco años. Las ediciones recientes incluyen:

| Edición | Año | Cambios principales |
|---------|-----|---------------------|
| 2018 | 2018 | Requisitos de partículas |
| 2013 | 2013 | Mejoras en TPP |
| 2007 | 2007 | Estándar consolidado |

### Cómo verificar la certificación

Para verificar que tu equipo cumple con NFPA 1971:

1. **Busca la etiqueta de certificación** cosida al equipo
2. **Verifica el laboratorio certificador** (UL, Intertek, SEI)
3. **Confirma la edición de la norma** (preferiblemente 2018 o posterior)
4. **Revisa el estado del equipo** - daños pueden invalidar la certificación

### Importancia del cumplimiento

El uso de equipo certificado NFPA 1971 es crítico porque:

- **Protege la vida** del bombero en condiciones extremas
- **Garantiza rendimiento** probado en laboratorio
- **Cumple con regulaciones** locales e internacionales
- **Reduce responsabilidad** del departamento

## Conclusión

La norma NFPA 1971 es fundamental para la seguridad de los bomberos. Asegúrate de que todo tu equipo estructural esté certificado por un laboratorio acreditado y sea de la edición más reciente posible.

En **BOMBERO.MX** todos nuestros equipos estructurales cumplen con NFPA 1971 edición 2018 o posterior. [Consulta nuestro catálogo](/productos/trajes-para-bomberos) para más información.
    `,
  },
  "mantenimiento-scba": {
    titulo: "Mantenimiento de Equipos SCBA: Protocolo Profesional",
    excerpt: "Procedimientos de inspección, limpieza y mantenimiento para equipos de respiración autónoma según estándares NFPA 1852.",
    imagen: "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
    categoria: "Mantenimiento",
    tags: ["SCBA", "Mantenimiento", "NFPA 1852", "Respiración"],
    autor: "Equipo BOMBERO.MX",
    autorRol: "Especialistas en EPP",
    anchorKeyword: "Protocolo mantenimiento SCBA NFPA 1852",
    contenido: `
## Introducción al Mantenimiento SCBA

El **Equipo de Respiración Autónoma (SCBA)** es uno de los componentes más críticos del equipo de protección personal para bomberos. Un mantenimiento adecuado no solo garantiza el correcto funcionamiento del equipo, sino que puede salvar vidas.

La norma **NFPA 1852** establece los requisitos para la selección, cuidado y mantenimiento de equipos SCBA de circuito abierto.

### Inspección diaria

Cada turno, el bombero debe realizar las siguientes verificaciones:

- **Presión del cilindro** - Debe estar al menos al 90% de capacidad
- **Integridad de la máscara** - Sin grietas, deformaciones o daños
- **Funcionamiento del regulador** - Flujo de aire constante y suave
- **Arnés y correas** - Sin desgaste, cortes o deformaciones
- **Válvulas** - Apertura y cierre correcto

### Limpieza después de cada uso

Después de cada uso operativo:

1. **Desinfectar la máscara** con solución aprobada
2. **Limpiar el arnés** con agua y jabón neutro
3. **Secar completamente** antes de guardar
4. **Inspeccionar visualmente** todos los componentes
5. **Documentar** cualquier anomalía encontrada

> **Nota:** Nunca uses solventes o productos abrasivos para limpiar componentes SCBA.

### Mantenimiento mensual

Cada mes, un técnico calificado debe:

- Verificar calibración del regulador
- Inspeccionar válvulas de demanda
- Revisar indicadores de presión
- Probar alarmas de baja presión
- Documentar en bitácora de equipo

### Pruebas anuales obligatorias

La NFPA 1852 requiere pruebas anuales que incluyen:

| Prueba | Frecuencia | Responsable |
|--------|------------|-------------|
| Prueba hidrostática de cilindros | Cada 5 años | Laboratorio certificado |
| Prueba de flujo | Anual | Técnico certificado |
| Inspección de válvulas | Anual | Técnico certificado |
| Calibración de reguladores | Anual | Fabricante o distribuidor |

### Señales de alerta

Retira el equipo de servicio inmediatamente si observas:

- Fugas de aire audibles o visibles
- Dificultad para respirar durante uso
- Alarmas que no funcionan correctamente
- Daños visibles en máscara o cilindro
- Correas o arnés dañados

### Documentación requerida

Mantén registros de:

- Inspecciones diarias (firmas)
- Mantenimientos mensuales
- Pruebas anuales
- Reparaciones realizadas
- Retiros de servicio

## Conclusión

El mantenimiento adecuado del SCBA es responsabilidad de todos. Un equipo bien mantenido es la diferencia entre regresar a casa o no.

¿Necesitas cilindros, máscaras o refacciones SCBA? [Consulta nuestro catálogo](/productos/scba) o [solicita una cotización](/cotizar).
    `,
  },
  "rescate-vehicular-tecnicas": {
    titulo: "Técnicas Modernas de Rescate Vehicular",
    excerpt: "Métodos actualizados para extricación vehicular, considerando los nuevos materiales y sistemas de seguridad de automóviles modernos.",
    imagen: "/images/directorio/rescate-montana-bomberos-01.avif",
    categoria: "Técnicas",
    tags: ["Rescate", "Extricación", "Herramientas", "Vehicular"],
    autor: "Equipo BOMBERO.MX",
    autorRol: "Especialistas en Rescate",
    anchorKeyword: "Técnicas extricación vehicular moderna",
    contenido: `
## Evolución del Rescate Vehicular

El rescate vehicular ha evolucionado significativamente en las últimas décadas. Los vehículos modernos incorporan **aceros de alta resistencia**, **múltiples airbags** y **sistemas de baterías de alto voltaje** que requieren técnicas y herramientas actualizadas.

### Nuevos desafíos

Los bomberos de hoy enfrentan:

- **Aceros de ultra alta resistencia (UHSS)** que requieren herramientas más potentes
- **Vehículos híbridos y eléctricos** con riesgos de electrocución
- **Múltiples airbags** que pueden desplegarse durante el rescate
- **Sistemas de retención activos** como cinturones pretensores

### Protocolo de aproximación

Antes de iniciar cualquier operación:

1. **Estabilizar el vehículo** - Cuñas, estabilizadores, desconectar batería
2. **Identificar riesgos** - Tipo de vehículo, airbags no desplegados, fugas
3. **Establecer zonas** - Caliente, tibia y fría
4. **Asignar roles** - Oficial de seguridad, operadores, asistentes

### Técnicas de corte actualizadas

Para vehículos con aceros de alta resistencia:

- Usar **cortadores con rating** de 1000+ kN
- Identificar **puntos de corte óptimos** (no en refuerzos)
- Considerar **técnicas alternativas** como el roof flap
- Mantener **ángulos de corte correctos** (perpendicular al material)

> **Importante:** Nunca cortes cerca de airbags no desplegados o pretensores de cinturón.

### Vehículos eléctricos e híbridos

Consideraciones especiales:

| Aspecto | Acción requerida |
|---------|------------------|
| Identificación | Buscar emblemas, cables naranjas |
| Desconexión | Seguir protocolo del fabricante |
| Zonas de exclusión | Mantener distancia de baterías |
| Herramientas | Usar solo equipo dieléctrico |
| Post-incidente | No almacenar cerca de estructuras |

### Herramientas esenciales

El equipo moderno de rescate vehicular incluye:

- Cortadores hidráulicos de alta fuerza
- Separadores con mayor apertura
- Rams telescópicos
- Herramientas combinadas
- Estabilizadores modulares
- Equipo dieléctrico para vehículos eléctricos

### Protección del paciente

Durante toda la operación:

- Proteger al paciente con **mantas de protección**
- Mantener **contacto verbal** constante
- Coordinar con **personal médico** presente
- Minimizar **movimiento de la columna** hasta extricación

## Conclusión

El rescate vehicular moderno requiere capacitación continua y equipo actualizado. Los bomberos deben estar preparados para los desafíos que presentan los vehículos de hoy.

¿Necesitas herramientas de rescate? [Consulta nuestro catálogo](/productos) o [solicita una demostración](/cotizar).
    `,
  },
  "brigadas-industriales-epp": {
    titulo: "EPP para Brigadas Industriales: Selección y Uso",
    excerpt: "Guía de selección de equipo de protección personal para brigadas industriales según el tipo de riesgo y sector productivo.",
    imagen: "/images/directorio/bomberos-profesionales-accion-01.avif",
    categoria: "Industrial",
    tags: ["Industrial", "Brigadas", "EPP", "Seguridad"],
    autor: "Equipo BOMBERO.MX",
    autorRol: "Especialistas en EPP Industrial",
    anchorKeyword: "Selección EPP brigadas industriales",
    contenido: `
## Brigadas Industriales y su EPP

Las **brigadas industriales** son equipos de respuesta a emergencias conformados por personal de planta capacitado para atender incidentes antes de la llegada de servicios externos.

El EPP para brigadas debe seleccionarse según los **riesgos específicos** de cada industria.

### Evaluación de riesgos

Antes de seleccionar EPP, evalúa:

- **Tipo de industria** - Petroquímica, manufactura, alimentos, etc.
- **Materiales manejados** - Químicos, combustibles, materiales reactivos
- **Procesos de riesgo** - Alta temperatura, presión, electricidad
- **Escenarios probables** - Incendio, derrame, fuga, explosión

### EPP por tipo de brigada

#### Brigada de incendios estructurales

Para plantas con riesgo de incendio estructural:

- Traje estructural NFPA 1971
- Casco estructural NFPA 1971
- Guantes estructurales
- Botas estructurales
- SCBA

#### Brigada HAZMAT

Para industrias con materiales peligrosos:

- Trajes de protección química (Nivel A, B o C según riesgo)
- Guantes de protección química
- Botas de protección química
- Equipo de detección
- SCBA o respiradores con filtro

#### Brigada de rescate

- Casco de rescate técnico
- Arnés de cuerpo completo
- Guantes de rescate
- Calzado de seguridad
- Equipo de comunicación

### Certificaciones importantes

| Certificación | Aplicación |
|---------------|------------|
| NFPA 1971 | Combate de incendios estructural |
| NFPA 1977 | Combate de incendios forestales |
| NFPA 1994 | Protección química |
| NFPA 1951 | Rescate técnico |

### Mantenimiento del EPP industrial

Las brigadas industriales deben:

1. **Inspeccionar** antes y después de cada uso
2. **Limpiar** según especificaciones del fabricante
3. **Almacenar** correctamente (ambiente seco, sin luz solar directa)
4. **Reemplazar** cuando expire vida útil o presente daños
5. **Documentar** todo mantenimiento y uso

> **Norma clave:** La NOM-017-STPS-2008 establece los requisitos de EPP para trabajadores en México.

### Capacitación continua

El EPP solo es efectivo si el usuario sabe utilizarlo:

- Capacitación inicial para todo el equipo
- Prácticas periódicas (mínimo trimestrales)
- Actualización cuando se adquiere equipo nuevo
- Simulacros con condiciones realistas

## Conclusión

La selección correcta de EPP para brigadas industriales depende de una evaluación detallada de riesgos. Invierte en equipo certificado y capacitación continua.

¿Necesitas equipar tu brigada industrial? [Contáctanos](/cotizar) para una evaluación personalizada.
    `,
  },
  "incendios-forestales-mexico": {
    titulo: "Temporada de Incendios Forestales en México: Preparación",
    excerpt: "Estrategias de preparación para la temporada de incendios forestales, equipo necesario y coordinación interinstitucional.",
    imagen: "/images/directorio/capacitacion-bomberos-profesional-01.avif",
    categoria: "Forestales",
    tags: ["Forestales", "Temporada", "Preparación", "México"],
    autor: "Equipo BOMBERO.MX",
    autorRol: "Especialistas en Equipos Forestales",
    anchorKeyword: "Preparación incendios forestales México",
    contenido: `
## Temporada de Incendios Forestales en México

México enfrenta cada año una **temporada de incendios forestales** que típicamente se extiende de enero a junio, con picos en marzo y abril. La preparación adecuada puede hacer la diferencia entre contener un incendio o perder miles de hectáreas.

### Zonas de mayor riesgo

Las áreas con mayor incidencia de incendios forestales en México incluyen:

- **Estado de México** - Bosques templados
- **Chihuahua** - Sierra Tarahumara
- **Jalisco** - Bosque de la Primavera
- **Michoacán** - Reserva de la Mariposa Monarca
- **Oaxaca** - Sierra Norte

### EPP específico para combate forestal

El equipo para incendios forestales difiere del estructural:

| Componente | Especificación |
|------------|----------------|
| Traje | NFPA 1977 (más ligero, transpirable) |
| Casco | NFPA 1977 forestal |
| Guantes | Cuero o Nomex NFPA 1977 |
| Calzado | Botas forestales con suela Vibram |
| Protección ocular | Goggles antihumo |

### Herramientas manuales esenciales

Las herramientas de mano son fundamentales en combate forestal:

- **Pulaski** - Combinación de hacha y azadón
- **McLeod** - Rastrillo/azadón combinado
- **Pala forestal** - Para crear líneas de fuego
- **Machete** - Limpieza de vegetación
- **Mochila extintora** - Extinción de puntos calientes

### Coordinación interinstitucional

En México, el combate de incendios forestales involucra:

1. **CONAFOR** - Coordinación nacional
2. **SEDENA** - Apoyo militar
3. **SEMAR** - Apoyo en zonas costeras
4. **Protección Civil** - Coordinación estatal
5. **Bomberos locales** - Primera respuesta

### Estrategias de prevención

Antes de la temporada:

- Crear **brechas cortafuegos**
- Realizar **quemas controladas**
- Capacitar **brigadas comunitarias**
- Establecer **sistemas de vigilancia**
- Preparar **equipo y personal**

> **Estadística:** En 2023, México registró más de 7,000 incendios forestales que afectaron más de 500,000 hectáreas.

### Señales de alerta temprana

Condiciones que aumentan el riesgo:

- Temperaturas superiores a 30°C
- Humedad relativa menor al 30%
- Vientos superiores a 30 km/h
- Sequía prolongada
- Acumulación de material combustible

### Respuesta inicial

Al detectar un incendio forestal:

1. **Reportar** inmediatamente a las autoridades
2. **Evaluar** dirección del viento y propagación
3. **Establecer** punto de reunión seguro
4. **Iniciar** líneas de defensa si es seguro
5. **Coordinar** con refuerzos en camino

## Conclusión

La temporada de incendios forestales requiere preparación, equipo adecuado y coordinación efectiva. Invierte en EPP NFPA 1977 y capacitación para tu equipo.

¿Necesitas equipar tu brigada forestal? [Consulta nuestro catálogo de equipo forestal](/productos) o [solicita una cotización](/cotizar).
    `,
  },
  "cascos-bombero-tipos": {
    titulo: "Tipos de Cascos para Bombero: Estructural, Forestal y ARFF",
    excerpt: "Comparativa de los diferentes tipos de cascos para bombero según su aplicación: estructural, forestal, rescate y aeroportuario.",
    imagen: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
    categoria: "Equipo",
    tags: ["Cascos", "NFPA 1971", "NFPA 1977", "ARFF"],
    autor: "Equipo BOMBERO.MX",
    autorRol: "Especialistas en EPP",
    anchorKeyword: "Comparativa cascos NFPA para bomberos",
    contenido: `
## Guía de Cascos para Bombero

El casco es uno de los componentes más visibles y críticos del equipo de protección para bomberos. Existen diferentes tipos de cascos diseñados para aplicaciones específicas, y elegir el correcto puede significar la diferencia entre una lesión grave y una operación exitosa.

### Cascos Estructurales (NFPA 1971)

Los cascos estructurales están diseñados para **combate de incendios en edificaciones**:

**Características:**
- Protección térmica superior (TPP alto)
- Protección de impacto frontal, superior y lateral
- Sistema de retención de energía
- Visor facial integrado
- Protector de cuello/oídos

**Certificaciones requeridas:**
- NFPA 1971 (edición más reciente)
- Prueba de penetración
- Prueba de impacto
- Prueba de llama

### Cascos Forestales (NFPA 1977)

Diseñados para **incendios forestales y de vegetación**:

| Característica | Estructural | Forestal |
|----------------|-------------|----------|
| Peso | 1.5-2 kg | 0.5-0.8 kg |
| Ventilación | Mínima | Alta |
| Protección térmica | Alta | Moderada |
| Ala | Ancha (tradicional) | Corta o parcial |
| Uso prolongado | Limitado | Diseñado para horas |

**Ventajas del casco forestal:**
- Ligero para jornadas largas
- Mejor ventilación
- Compatible con protección auditiva
- Menor fatiga del cuello

### Cascos de Rescate Técnico (NFPA 1951)

Para operaciones de **rescate no relacionadas con fuego**:

- Diseño tipo escalada
- Múltiples puntos de anclaje
- Compatible con linternas y accesorios
- Certificación para caídas de objetos
- Sin protección térmica significativa

**Aplicaciones:**
- Rescate en alturas
- Rescate en espacios confinados
- Rescate vehicular
- Rescate acuático

### Cascos ARFF (Aeroportuarios)

Para **bomberos aeroportuarios**:

- Diseño de perfil bajo
- Visor dorado o metalizado
- Alta protección térmica radiante
- Compatible con sistemas de comunicación
- Certificación NFPA 1971 sección ARFF

### Cómo elegir el casco correcto

Considera estos factores:

1. **Tipo de operaciones** - ¿Estructural, forestal, rescate?
2. **Certificación requerida** - NFPA 1971, 1977 o 1951
3. **Clima local** - Calor extremo requiere mejor ventilación
4. **Compatibilidad** - Con SCBA, radios, linternas
5. **Presupuesto** - Sin comprometer seguridad

> **Recomendación:** Muchos departamentos mantienen cascos estructurales Y forestales, usando cada uno según la operación.

### Mantenimiento de cascos

Para prolongar la vida útil:

- Inspeccionar antes y después de cada uso
- Limpiar con agua y jabón neutro
- Almacenar lejos de luz solar directa
- Reemplazar suspensión dañada
- No pintar ni modificar

### Vida útil

| Componente | Vida útil |
|------------|-----------|
| Casco completo | 10 años desde fabricación |
| Suspensión | 5 años o al dañarse |
| Visor | Reemplazar al rayarse |
| Protector de cuello | Según desgaste |

## Conclusión

Elegir el casco correcto requiere entender las operaciones de tu departamento. No existe un casco universal; cada tipo está optimizado para condiciones específicas.

¿Necesitas cascos para tu departamento? [Consulta nuestro catálogo de cascos](/productos/cascos-para-bomberos) con todas las certificaciones disponibles.
    `,
  },
};

export function getArticuloSlugs(): string[] {
  return Object.keys(articulosData);
}

export function getArticulo(slug: string): ArticuloData | undefined {
  return articulosData[slug];
}

export function getAllArticulos(): Array<{ slug: string } & ArticuloData> {
  return Object.entries(articulosData).map(([slug, data]) => ({
    slug,
    ...data,
  }));
}
