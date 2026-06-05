# Workflow — Subir Cambios a GitHub

**Proyecto:** BOMBERO
**Fecha:** 2026-05-31
**Actualizado:** 2026-06-05
**Estado:** Activo — aplica a todas las sesiones de trabajo

---

## Ruta del proyecto en el Mac

```
/Users/frankoropeza/Documents/Claude/Projects/BOMBERO
```

## Repositorio

```
https://github.com/Origenlab/BOMBERO.git
```

## Cómo subir cambios (flujo directo)

Cuando Frank diga **"sube los cambios"** o **"genera commit y push"**, Claude ejecuta esto sin preguntar nada:

```bash
# 1. Eliminar locks si existen
rm -f /Users/frankoropeza/Documents/Claude/Projects/BOMBERO/.git/index.lock
rm -f /Users/frankoropeza/Documents/Claude/Projects/BOMBERO/.git/HEAD.lock
rm -f /Users/frankoropeza/Documents/Claude/Projects/BOMBERO/.git/refs/heads/main.lock

# 2. Hacer commit y push
cd /Users/frankoropeza/Documents/Claude/Projects/BOMBERO
git add -A
git commit -m "descripción del cambio"
git push origin main
```

## Herramientas disponibles para git (en orden de preferencia)

| Herramienta | Funciona | Notas |
|-------------|----------|-------|
| `mcp__Macos__Shell` | ✅ Sí | Primera opción documentada |
| `mcp__Desktop_Commander__start_process` | ✅ Sí | Alternativa equivalente, también corre en el Mac real |
| `mcp__workspace__bash` (sandbox Linux) | ❌ No | No puede eliminar `.git/*.lock` por permisos |

**Regla:** SIEMPRE usar una herramienta que corra en el Mac real, nunca el sandbox de Linux para operaciones git.

## Credenciales git del proyecto

- **email:** ccarsolio@gmail.com
- **name:** Frank
*(ya configuradas en el .git/config del repo)*

## Notas importantes

- Si hay locks (`.git/index.lock`, `.git/HEAD.lock`, `.git/refs/heads/main.lock`), borrarlos primero
- Usar siempre la ruta real del Mac: `/Users/frankoropeza/Documents/Claude/Projects/BOMBERO`
- NO usar rutas de mount de Cowork (`/sessions/...`) para git
- El push siempre va a `origin main`

---

#workflow #git #github #BOMBERO
