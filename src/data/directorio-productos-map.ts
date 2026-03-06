/**
 * directorio-productos-map.ts
 * ──────────────────────────────────────────────────────────────────
 * Mapeo dinámico de productos relacionados para fichas de estaciones
 * del directorio.  Analiza servicios + especialidades de cada estación
 * y devuelve los productos NFPA más relevantes para el sidebar.
 *
 * Usado por EstacionLayout.astro (reemplaza el array estático).
 * ──────────────────────────────────────────────────────────────────
 */

export interface ProductoRelacionado {
  nombre: string;
  href: string;
  desc: string;
}

/* ─── Catálogo de productos enlazables ──────────────────────────── */

const PRODUCTOS = {
  trajEstructural: {
    nombre: "Trajes Estructurales",
    href: "/productos/trajes-para-bomberos/",
    desc: "Trajes NFPA 1971 para bomberos",
  },
  cascos: {
    nombre: "Cascos de Bombero",
    href: "/productos/cascos-para-bomberos/",
    desc: "Cascos certificados NFPA",
  },
  scba: {
    nombre: "Equipos SCBA",
    href: "/productos/scba/",
    desc: "Equipos de respiración autónoma",
  },
  herramientasRescate: {
    nombre: "Herramientas de Rescate",
    href: "/productos/herramientas-rescate/",
    desc: "Equipo Holmatro y más",
  },
  hazmat: {
    nombre: "Trajes HAZMAT",
    href: "/productos/hazmat/",
    desc: "Protección NFPA 1991/1992/1994",
  },
  extintores: {
    nombre: "Extintores Certificados",
    href: "/productos/extintores/",
    desc: "Extintores NOM y NFPA 10",
  },
  equipoContraIncendios: {
    nombre: "Equipo Contra Incendios",
    href: "/productos/equipo-contra-incendios/",
    desc: "Mangueras, boquillas y herramientas",
  },
  guantes: {
    nombre: "Guantes para Bombero",
    href: "/productos/guantes-para-bomberos/",
    desc: "Guantes estructurales NFPA 1971",
  },
  botas: {
    nombre: "Botas para Bombero",
    href: "/productos/botas-para-bomberos/",
    desc: "Botas certificadas NFPA 1971",
  },
  forestales: {
    nombre: "Equipos Forestales",
    href: "/productos/forestales/",
    desc: "Equipo NFPA 1977 para incendios forestales",
  },
  rescateAcuatico: {
    nombre: "Rescate Acuático",
    href: "/productos/rescate-acuatico/",
    desc: "Equipos para rescate en agua",
  },
  tecnologia: {
    nombre: "Tecnología",
    href: "/productos/tecnologia/",
    desc: "Cámaras térmicas y drones",
  },
} as const;

type ProductoKey = keyof typeof PRODUCTOS;


/* ─── Reglas de matching (keyword → producto) ───────────────────── */

interface MatchRule {
  /** Palabras clave (lowercase) a buscar en servicios/especialidades */
  keywords: string[];
  /** Producto(s) a incluir si hay match */
  productos: ProductoKey[];
  /** Prioridad (mayor = aparece primero). Default 5 */
  priority?: number;
}

const MATCH_RULES: MatchRule[] = [
  // HAZMAT / materiales peligrosos
  {
    keywords: ["hazmat", "materiales peligrosos", "quím", "químic", "hidrocarburo", "fumigacion", "derrame"],
    productos: ["hazmat", "scba"],
    priority: 9,
  },
  // Incendios forestales / wildland
  {
    keywords: ["forestal", "wildland", "incendio forestal", "pastizal", "bosque", "cerro", "vegetación"],
    productos: ["forestales"],
    priority: 8,
  },
  // Rescate acuático
  {
    keywords: ["acuátic", "acuatic", "inundacion", "inundación", "buceo", "cenote", "mar", "rio", "río", "playa", "costa", "lacustre", "puerto"],
    productos: ["rescateAcuatico"],
    priority: 8,
  },
  // Rescate vehicular / técnico
  {
    keywords: ["rescate vehicular", "vehicular", "atrapamiento", "excarcelación", "carretero", "holmatro"],
    productos: ["herramientasRescate"],
    priority: 7,
  },
  // Rescate en altura
  {
    keywords: ["altura", "vertical", "rapel", "rascacielos", "edificio", "torre"],
    productos: ["herramientasRescate"],
    priority: 7,
  },
  // Incendios estructurales (base)
  {
    keywords: ["estructural", "incendio", "fuego", "combustión", "siniestro"],
    productos: ["trajEstructural", "cascos"],
    priority: 6,
  },
  // SCBA / respiración
  {
    keywords: ["scba", "respiración autónoma", "aire comprimido", "fuga de gas"],
    productos: ["scba"],
    priority: 7,
  },
  // Industrial
  {
    keywords: ["industrial", "refinería", "petroquím", "planta", "fábrica", "manufactur", "parque industrial"],
    productos: ["hazmat", "equipoContraIncendios"],
    priority: 7,
  },
  // Equipo contra incendios general
  {
    keywords: ["manguera", "boquilla", "hidrante", "extintor", "gabinete"],
    productos: ["equipoContraIncendios", "extintores"],
    priority: 6,
  },
  // Prehospitalario (no mapea a producto directo, pero refuerza SCBA)
  {
    keywords: ["prehospitalario", "ambulancia", "primer respondiente"],
    productos: ["scba"],
    priority: 4,
  },
  // Tecnología
  {
    keywords: ["dron", "cámara", "térmic", "tecnolog"],
    productos: ["tecnologia"],
    priority: 5,
  },
];


/* ─── Función principal ─────────────────────────────────────────── */

/**
 * Devuelve hasta `max` productos relacionados para una estación,
 * basándose en sus servicios y especialidades.
 *
 * Siempre incluye traje estructural y cascos como base, luego
 * añade productos contextuales según las keywords que matcheen.
 */
export function getProductosRelacionadosEstacion(
  servicios: string[],
  especialidades: string[] = [],
  max: number = 6,
): ProductoRelacionado[] {

  const textosCombinados = [...servicios, ...especialidades]
    .map((s) => s.toLowerCase())
    .join(" | ");

  // Acumular matches con prioridad
  const matchedProducts = new Map<ProductoKey, number>();

  for (const rule of MATCH_RULES) {
    const hasMatch = rule.keywords.some((kw) => textosCombinados.includes(kw.toLowerCase()));
    if (hasMatch) {
      const priority = rule.priority ?? 5;
      for (const pk of rule.productos) {
        const current = matchedProducts.get(pk) ?? 0;
        matchedProducts.set(pk, Math.max(current, priority));
      }
    }
  }

  // Base: siempre incluir traje estructural y cascos (prioridad 10)
  matchedProducts.set("trajEstructural", 10);
  matchedProducts.set("cascos", 10);

  // Ordenar por prioridad descendente
  const sorted = [...matchedProducts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, max)
    .map(([key]) => ({ ...PRODUCTOS[key] }));

  // Si tenemos menos de 4, rellenar con defaults
  const defaultFills: ProductoKey[] = ["scba", "herramientasRescate", "guantes", "botas", "equipoContraIncendios"];
  for (const fill of defaultFills) {
    if (sorted.length >= max) break;
    if (!sorted.some((p) => p.href === PRODUCTOS[fill].href)) {
      sorted.push({ ...PRODUCTOS[fill] });
    }
  }

  return sorted.slice(0, max);
}
