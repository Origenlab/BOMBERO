# Workflow — Subir Cambios a GitHub

**Proyecto:** BOMBERO
**Fecha:** 2026-05-31
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

Cuando Frank diga **"sube los cambios"**, Claude ejecuta esto sin preguntar nada:

```bash
# 1. Eliminar lock si existe
rm -f /Users/frankoropeza/Documents/Claude/Projects/BOMBERO/.git/index.lock

# 2. Hacer commit y push con los archivos modificados
cd /Users/frankoropeza/Documents/Claude/Projects/BOMBERO
git add [archivos modificados]
git commit -m "descripción del cambio"
git push
```

## Credenciales git del proyecto

- **email:** ccarsolio@gmail.com
- **name:** Frank
*(ya configuradas en el .git/config del repo)*

## Notas importantes

- La herramienta para ejecutar comandos en el Mac es `mcp__Macos__Shell`
- NO usar el sandbox de Linux para git (los permisos del lock fallan ahí)
- Siempre usar la ruta real del Mac, no la ruta del mount de Cowork
- Si hay un `index.lock`, borrarlo primero con `rm -f`

---

#workflow #git #github #BOMBERO
