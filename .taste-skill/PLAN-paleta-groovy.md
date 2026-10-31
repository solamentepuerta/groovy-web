# Plan — Nueva paleta de Groovy.pics

**Dirección que se conserva:** The pinned poster (seed 1826938027). No se toca composición,
tipografía, textos, animaciones ni SEO. Cambia solo la paleta y el tratamiento de las fotos.
Motivo del redraw de paleta (el único permitido): el dueño fija los colores de marca → gris negro
+ azul eléctrico, casi monocromática, tema oscuro.
**Ruta afectada:** `/groovy` (la home de Kiosko 2001 no se toca).

## 1. Tokens

| Rol | Hex | Uso | Contraste |
| --- | --- | --- | --- |
| `--g-bg` | `#0a0b0d` | fondo de página | — |
| `--g-surface` | `#191c22` | panel elevado (bloque CTA móvil) | 1.15:1 vs bg |
| `--g-paper` | `#ecedef` | tarjeta del hero, footer, CTA móvil | 16.81:1 con negro |
| `--g-ink` | `#edeef0` | texto sobre oscuro | 16.96:1 sobre bg |
| `--g-ink-on-paper` | `#0a0b0d` | texto sobre papel | 16.81:1 |
| `--g-muted` | `#9298a3` | texto secundario sobre oscuro | 6.79:1 sobre bg |
| `--g-muted-on-paper` | `#4a4f57` | secundario sobre papel | 7.04:1 |
| `--g-accent` | `#2f6bff` | relleno de botones y selección | blanco encima: 4.50:1 |
| `--g-accent-hover` | `#1f55e6` | hover de botón | blanco encima: 6.00:1 |
| `--g-accent-text` | `#4a7dff` | enlaces, focus, subrayados | 5.31:1 sobre bg |

Regla: el azul solo aparece en acciones y estados (botón, link, focus, selección). Nunca como
fondo grande. El papel (`#ecedef`) es el único registro claro y aparece tres veces: tarjeta del
hero, bloque de texto del CTA en móvil, footer.

## 2. Cambios archivo por archivo

### `app/globals.css` — tokens (líneas 15-18)
```css
--g-bg: #0a0b0d;
--g-surface: #191c22;
--g-paper: #ecedef;
--g-ink: #edeef0;
--g-muted: #9298a3;
--g-muted-on-paper: #4a4f57;
--g-accent: #2f6bff;
--g-accent-ink: #ffffff;
--g-accent-hover: #1f55e6;
--g-accent-text: #4a7dff;
```

### `app/globals.css` — bloques
| Línea | Selector | Cambio |
| --- | --- | --- |
| 323 | `.g-page` | añadir `color-scheme: dark` |
| 324 | `.g-page ::selection` | fondo `--g-accent`, texto `#fff` |
| 325 | `.g-page :focus-visible` | outline `--g-accent-text` |
| 327-334 | `.g-btn` | fondo `--g-accent`, texto `#fff`, hover `--g-accent-hover` |
| 339 | `.g-hero-bg img` | `brightness(.5) saturate(.9)` |
| 340-346 | `.g-hero-card` | fondo `--g-paper`, texto `--g-ink-on-paper` |
| 375-380 | `.g-seq-item figcaption` | texto `--g-ink`, scrim `rgba(10,11,13,.72)` |
| 411 | `.g-project-meta a` | hover `--g-accent-text` |
| 423 | `.g-about-title` | `#fff` → `--g-ink` (mantiene `difference`) |
| nuevo | `.g-about img` | `filter: grayscale(1) contrast(1.06) brightness(.95)` |
| 459 | `.g-cta img` | `brightness(.45) saturate(.85)` |
| 462 | `.g-cta-para` | `rgba(237,238,240,.85)` |
| 466 | `.g-cta-text` móvil | fondo `--g-paper`, texto `--g-ink-on-paper` |
| 467 | `.g-cta-para` móvil | `--g-muted-on-paper` |
| 471 | `.g-footer` | fondo `--g-paper`, texto `--g-ink-on-paper` |
| 480-483 | `.g-footer-mark` | color `--g-ink-on-paper` |

### `app/groovy/page.tsx`
Añadir, junto a `metadata`:
```ts
export const viewport = { themeColor: "#0a0b0d" }
```
El `themeColor` de `app/layout.tsx` sigue valiendo para Kiosko.

## 3. Fotos (se eligen después)
- Nada de código depende de las imágenes: se cambian los archivos de `/public/portfolio` sin tocar
  componentes. Mantener 4:5 en los retratos y 3:2 en secuencia/CTA.
- Tratamiento fijado en CSS, así que cualquier foto entra en la paleta: oscurecida en el hero y el
  CTA, y en blanco y negro solo en "Sobre Groovy" (necesario para que `mix-blend-mode: difference`
  siga siendo monocromo y legible).
- Al elegir fotos: que la esquina inferior izquierda de la secuencia esté tranquila (ahí va el
  caption), y que el CTA tenga su sujeto en la mitad izquierda (el texto ocupa la derecha).

## 4. Orden de trabajo
1. Tokens y reglas globales.
2. Tarjeta del hero + footer (los dos anclajes visuales).
3. Secuencia, trabajo, about, FAQ, CTA.
4. `viewport.themeColor`.
5. Gate.

## 5. Gate
1. Capturar el estado actual: `inspect.mjs http://localhost:3111/groovy --out .taste-skill/before`.
2. `node <skill>/scripts/lint.mjs app/globals.css components/groovy` → 0 avisos nuevos.
3. `npx tsc --noEmit` (el build ignora tipos: `ignoreBuildErrors: true`).
4. `next build` + `next start`, y sobre el build: `inspect.mjs ... --out .taste-skill/after`.
5. Abrir las capturas de 1440/768/390 y comparar antes/después.

## 6. Criterios de aceptación
- 0 `FAIL` del inspector en 1440, 768 y 390.
- Ningún `#133621`, `#1a4429`, `#f4d96c`, `#b3a55e`, `#ffe89a`, `#efe3a8`, `#274627` restante.
- Un solo papel claro por pantalla como máximo; ningún bloque claro pegado a otro.
- Texto corrido ≥ 4.5:1 y texto grande ≥ 3:1 en todas las combinaciones reales.
- Azul solo en acciones/estados.
- El footer sigue leyendo "GROOVY" recortado por abajo y por la derecha.
- Nada cambia en textos, layout, animaciones, metadatos ni enlaces.

## 7. Fuera de alcance
Dominio falso en metadata/sitemap, `geo`/`openingHours`, Instagram genérico, imágenes sin comprimir,
vacío de la sección about y escala del hero en móvil. Van en otra tanda.
