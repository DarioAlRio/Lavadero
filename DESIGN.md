---
name: RH Hidrolavados SL
description: La nave de noche — asfalto mojado, cian como luz y un solo rojo para la acción.
colors:
  ink-990: "#04070c"
  ink-950: "#060b12"
  ink-900: "#090f18"
  ink-850: "#0c1523"
  ink-800: "#101c2d"
  ink-750: "#152740"
  ink-700: "#1b3251"
  ink-600: "#24425f"
  agua-300: "#a8e8ff"
  agua-400: "#6fd6f7"
  agua-500: "#3bb4e5"
  agua-600: "#1e90c8"
  agua-700: "#11618c"
  rh-400: "#ff5450"
  rh-500: "#e22b27"
  rh-600: "#bd1d1a"
  sodio-300: "#ffd9a3"
  sodio-400: "#ffb558"
  paper-050: "#f2f7fb"
  paper-200: "#cbdae7"
  paper-400: "#93aabf"
  paper-500: "#7c93a9"
  verde-wa: "#1faf54"
  panel-luz-alto: "#f6fafd"
  panel-luz-bajo: "#dbe7f1"
  tinta-panel: "#0b1421"
  line: "rgba(150, 190, 225, 0.16)"
  line-soft: "rgba(150, 190, 225, 0.09)"
  line-strong: "rgba(150, 190, 225, 0.3)"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(2.7rem, 1.6rem + 5.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 122, 'wght' 800"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(2.2rem, 1.6rem + 3vw, 4.2rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.028em"
    fontVariation: "'wdth' 118, 'wght' 800"
  title:
    fontFamily: "Archivo, Helvetica Neue, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1.45rem, 1.3rem + 0.75vw, 1.95rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.022em"
    fontVariation: "'wdth' 118, 'wght' 800"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1.18rem, 1.1rem + 0.4vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Archivo, Helvetica Neue, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.09rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
    fontVariation: "'wdth' 100, 'wght' 400"
  label:
    fontFamily: "Archivo, Helvetica Neue, Segoe UI, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.19em"
    fontVariation: "'wdth' 84, 'wght' 600"
  cifra:
    fontFamily: "Archivo, Helvetica Neue, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1.1vw, 2.2rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 116, 'wght' 800"
    fontFeature: "'tnum' 1"
rounded:
  r-1: "2px"
  r-2: "4px"
  r-3: "10px"
  r-pill: "999px"
spacing:
  s-1: "0.25rem"
  s-2: "0.5rem"
  s-3: "0.75rem"
  s-4: "1rem"
  s-5: "1.5rem"
  s-6: "2rem"
  s-7: "3rem"
  s-8: "4rem"
  s-9: "5.5rem"
  s-10: "7.5rem"
  gut: "clamp(1.15rem, 4vw, 3.5rem)"
  shell: "1280px"
components:
  button-rh:
    backgroundColor: "{colors.rh-500}"
    textColor: "#ffffff"
    rounded: "{rounded.r-2}"
    padding: "0.92rem 1.5rem"
    height: "50px"
  button-rh-hover:
    backgroundColor: "{colors.rh-400}"
    textColor: "#ffffff"
  button-agua:
    backgroundColor: "{colors.agua-500}"
    textColor: "{colors.ink-990}"
    rounded: "{rounded.r-2}"
    padding: "0.92rem 1.5rem"
    height: "50px"
  button-agua-hover:
    backgroundColor: "{colors.agua-400}"
    textColor: "{colors.ink-990}"
  button-ghost:
    backgroundColor: "rgba(150, 190, 225, 0.05)"
    textColor: "{colors.paper-050}"
    rounded: "{rounded.r-2}"
    padding: "0.92rem 1.5rem"
    height: "50px"
  button-ghost-hover:
    backgroundColor: "rgba(150, 190, 225, 0.12)"
    textColor: "#ffffff"
  button-wa:
    backgroundColor: "{colors.verde-wa}"
    textColor: "#ffffff"
    rounded: "{rounded.r-2}"
    padding: "0.92rem 1.5rem"
    height: "50px"
  button-lg:
    padding: "1.08rem 1.9rem"
    height: "58px"
  nav-tel:
    backgroundColor: "{colors.rh-500}"
    textColor: "#ffffff"
    rounded: "{rounded.r-2}"
    padding: "0.66rem 1.05rem"
  nav-icon:
    backgroundColor: "rgba(150, 190, 225, 0.05)"
    textColor: "{colors.paper-200}"
    rounded: "{rounded.r-2}"
    size: "44px"
  field-input:
    backgroundColor: "rgba(150, 190, 225, 0.05)"
    textColor: "{colors.paper-050}"
    rounded: "{rounded.r-2}"
    padding: "0.82rem 0.95rem"
    height: "50px"
  field-input-focus:
    backgroundColor: "rgba(59, 180, 229, 0.07)"
    textColor: "{colors.paper-050}"
  field-label:
    typography: "{typography.label}"
    textColor: "{colors.paper-400}"
  board-price:
    textColor: "{colors.sodio-300}"
  pricepanel:
    backgroundColor: "{colors.panel-luz-alto}"
    textColor: "{colors.tinta-panel}"
    rounded: "{rounded.r-3}"
    padding: "clamp(1.6rem, 4vw, 3rem)"
  pricepanel-stamp:
    textColor: "{colors.rh-600}"
    rounded: "{rounded.r-1}"
    padding: "0.25rem 0.6rem"
  chip-fleet:
    backgroundColor: "rgba(150, 190, 225, 0.04)"
    textColor: "{colors.paper-400}"
    rounded: "{rounded.r-pill}"
    padding: "0.42rem 0.85rem"
  gallery-item:
    backgroundColor: "{colors.ink-850}"
    rounded: "{rounded.r-2}"
  thumbbar-link:
    backgroundColor: "rgba(6, 11, 18, 0.93)"
    textColor: "{colors.paper-200}"
    height: "58px"
---

# Design System: RH Hidrolavados SL

## Overview

**Creative North Star: "La nave de noche: agua y luz"**

El sistema es la nave a las tres de la madrugada. El fondo no es "un tema oscuro": es asfalto mojado continuo (`ink-990`→`ink-800`) que no se interrumpe de una página a otra, y sobre el que la información aparece porque algo la ilumina, no porque tenga una caja alrededor. La fotografía real del cliente es el material principal —a sangre en portada, atenuada tras las cabeceras interiores, reflejada en el suelo dentro de los bloques— y todo lo demás es luz recortando lo que importa.

El cian del logotipo (`agua-500`) funciona como fuente de luz: barras finas con halo, puntos de foco, filos de foco (`.nav__glow`), bordes de campo enfocado. No es un color de relleno de superficies. El rojo RH (`rh-500`) está reservado a una sola función —la acción: llamar, enviar, señalar la página activa— y por eso se lee sin esfuerzo. El ámbar de sodio (`sodio-300/400`), tomado de las lámparas del techo, sólo toca cifras y precios. La densidad es de taller: filas con reglas de 1px en lugar de tarjetas, tipografía condensada en las etiquetas técnicas y ensanchada en los titulares de chapa.

Rechazo confirmado, escrito en el contrato de dirección de cada página: el lavadero azul celeste con burbujas y rejilla de tarjetas idénticas. Por eso los servicios se listan como un tablero de nave (`.board`), no como cards, y las tarifas viven en el único panel claro del sitio.

**Key Characteristics:**
- Suelo oscuro continuo; ninguna sección introduce un fondo claro salvo el panel de tarifas.
- Cian = luz; rojo = acción; ámbar = cifra. Tres papeles, sin solapamiento.
- Separación por reglas de 1px translúcidas (`line` / `line-soft` / `line-strong`), no por cajas.
- Fotografía a sangre con degradados de atmósfera encima; reflejo en el suelo (`.puddle`).
- Una sola familia (Archivo variable) con dos voces por eje `wdth`.
- Movimiento sólo en `opacity`, `transform` y `filter`; todo se anula bajo `prefers-reduced-motion`.

## Colors

Paleta de una noche mojada: ocho grises azulados de asfalto, una luz cian, un rojo de señal, un ámbar de lámpara y cuatro tintas de papel frío.

### Primary
- **Cian de agua a presión** (`agua-500`): la luz del sistema. Reglas iluminadas, halos, punto de la lista de servicios, borde de campo enfocado, foco móvil de la barra de navegación, `::selection`. `agua-400` es su forma de texto (enlaces, iconos, énfasis del titular); `agua-300` para etiquetas sobre foto; `agua-600/700` para degradados y bordes apagados.

### Secondary
- **Rojo RH** (`rh-500`): la acción y sólo la acción — botón de teléfono, envío, punto de página activa, borde de campo inválido. `rh-400` es el estado hover y el texto de error; `rh-600` sólo dentro del panel claro (sello "IVA no incluido").

### Tertiary
- **Ámbar de sodio** (`sodio-300` / `sodio-400`): luz de las lámparas del techo. Se usa exclusivamente en cifras de dinero (`.board__price`). Nunca en texto corrido ni en superficies.
- **Verde WhatsApp** (`verde-wa`): color de marca ajeno, admitido sólo en el canal de WhatsApp (botón, icono de cabecera, segunda celda de la barra de pulgar) y en el estado de formulario correcto.

### Neutral
- **Asfalto mojado** (`ink-990` a `ink-600`): suelo del sitio. `ink-950` es el fondo del `body`, `ink-990` las secciones profundas y el pie, `ink-900` el punto medio del degradado "mojado", `ink-850` los huecos de imagen y mapa, `ink-600` los separadores tipográficos de migas.
- **Papel frío** (`paper-050` a `paper-500`): `paper-050` para titulares y datos duros, `paper-200` para texto corrido, `paper-400` para texto secundario, `paper-500` para etiquetas y letra pequeña.
- **Reglas** (`line`, `line-soft`, `line-strong`): azul claro translúcido, no gris. Toda la estructura del sitio se dibuja con ellas.
- **Panel de luz** (`panel-luz-alto` → `panel-luz-bajo` sobre `tinta-panel`): la única superficie clara, exclusiva de las tarifas.

### Named Rules
**La Regla de la Luz.** El cian se emite, no se pinta. Se admite como barra de 1px con halo, punto luminoso, filo, degradado de foco o borde de foco; no como fondo de una superficie de contenido. La única excepción viva es `.btn--agua`, un botón secundario que sí se rellena de `agua-500` porque tiene que competir con el rojo sin usarlo.

**La Regla del Único Rojo.** `rh-500` marca la acción y nada más. Si un elemento rojo no se puede pulsar (o no señala dónde estás), está mal.

**La Regla de la Cifra Ámbar.** El ámbar es dinero. Un precio puede ir en ámbar sobre oscuro o en `tinta-panel` dentro del panel claro; ningún otro contenido lleva ámbar.

**La Regla del Suelo Continuo.** El fondo nunca aclara para "separar" una sección. Las variantes son `--wet` (degradado `ink-950`→`ink-900`→`ink-950`) y `--deep` (`ink-990`), ambas dentro del asfalto.

## Typography

**Familia única:** Archivo variable (ejes `wdth` 62–125, `wght` 400–900), con caída a Helvetica Neue / Segoe UI / Arial.

**Character:** una sola superfamilia con dos voces opuestas: ensanchada y pesada para el rótulo de chapa, estrechada y espaciada para la etiqueta técnica de taller. La jerarquía la lleva el ancho, no el contraste de dos familias distintas.

### Hierarchy
- **Display** (`wdth` 122 / `wght` 800, `--step-5`, interlínea 1.02, tracking -0.035em): sólo el `h1` de portada, con `text-shadow` de 40px para separarlo de la foto. El `<em>` interior se colorea con `agua-400` y halo cian.
- **Headline** (`wdth` 118 / `wght` 800, `--step-4` en `h1`, `--step-3` en `h2`): titulares de sección y de páginas interiores. `text-wrap: balance` de serie.
- **Title** (`wdth` 118 / `wght` 800, `--step-2`; `h4` baja a `wdth` 104 / `wght` 700, `--step-1`): filas del tablero, notas y bloques de apoyo.
- **Lead** (`--step-1`, interlínea 1.5, máx. 60ch): entradilla bajo el titular.
- **Body** (`wdth` 100 / `wght` 400, `--step-0`, interlínea 1.65, párrafo limitado a 68ch): texto corrido en `paper-200`.
- **Label** (`wdth` 84 / `wght` 600, 0.72rem, tracking 0.19em, mayúsculas): etiquetas de sección, migas, `dt`, pies de barra de pulgar, cabeceras del pie. La variante `.label` lleva delante una barra de 22×1px en `agua-500` con halo.
- **Cifra** (`wdth` 116 / `wght` 800, `tnum` activado): números de portada y precios. Las cifras nunca cambian de ancho al animarse.

### Named Rules
**La Regla de las Dos Voces.** Una familia, dos anchos. `wdth` 118–122 con `wght` 800 para lo que se lee de lejos (rótulo); `wdth` 84–92 con `wght` 600, mayúsculas y tracking ≥0.12em para lo que se lee de cerca (etiqueta técnica). Los valores intermedios (`wdth` 104–112) son transiciones deliberadas para marca, enlaces del panel móvil y citas. **Decisión deliberada, no carencia:** el sistema no empareja dos tipografías ajenas; el eje `wdth` de Archivo es el que produce el contraste, y hacerlo con una sola superfamilia mantiene una única descarga de fuente y un ritmo de trazo coherente en toda la nave.

**La Regla del Cuerpo Fluido.** Todos los tamaños salen de la escala `--step--1`…`--step-5` (clamp). Ningún componente inventa un `font-size` fuera de la escala salvo la letra pequeña de interfaz (0.66–0.95rem), que es cuerpo de etiqueta y no de texto.

## Layout

Contenedor `.shell` de 1280px máximo (`--shell`) con canal lateral fluido `--gut` (1.15rem→3.5rem); la variante `.shell--wide` sube a 1560px y se reserva a la barra de navegación. Cabecera fija de 74px (`--nav-h`), que se comprime a 62px al hacer scroll; `scroll-padding-top` la compensa en los anclajes.

El ritmo vertical usa una escala de diez pasos (`--s-1` 0.25rem → `--s-10` 7.5rem). Las secciones respiran con `padding-block: clamp(3.6rem, 9vw, 8rem)` (`.section--tight`: 2.6→5rem). Los huecos internos de rejillas usan `clamp()` en lugar de saltos de breakpoint.

Puntos de corte reales: 620px (fichas `.dl` a dos columnas), 640px (la pieza alta de la galería vuelve a 4:3), 680px (formulario a dos columnas), 720px y 1040px (rejilla del pie: 1 → 3 → 4 columnas), 760px (el precio del tablero salta a su propia columna de 150px), 900px (bloques `.slab` a 1.05fr/1fr e indicador "Bajar"), 1060px (frontera móvil/escritorio: aparecen menú y CTA de cabecera, desaparecen hamburguesa, panel y barra de pulgar).

En móvil el pie añade 5.2rem de relleno inferior para no quedar bajo la barra de pulgar, y todos los elementos fijos respetan `env(safe-area-inset-*)`.

### Named Rules
**La Regla del Pulgar.** Por debajo de 1060px, llamar / WhatsApp / ruta viven en una barra fija inferior de tres celdas que entra al pasar 240px de scroll. Ninguna página móvil puede dejar la acción fuera del alcance del pulgar.

**La Regla de la Fila, no la Tarjeta.** El contenido tabulado (servicios, tarifas, documentos, datos) se ordena en filas separadas por reglas de 1px. Las rejillas de tarjetas iguales están descartadas por el contrato de dirección.

## Elevation & Depth

Sistema híbrido pero asimétrico: la profundidad la crea la **luz** (degradados radiales de atmósfera, halos cian y ámbar, `backdrop-filter`), y la sombra sólo aparece donde algo se levanta físicamente del suelo mojado: fotografía, panel de tarifas, visor, mapa. Las superficies planas de contenido no llevan sombra; llevan regla.

### Shadow Vocabulary
- **`--shadow-1`** (`0 2px 6px rgba(0,0,0,0.4)`): asiento mínimo de las piezas de galería.
- **`--shadow-2`** (`0 14px 34px -12px rgba(0,0,0,0.7), 0 3px 10px rgba(0,0,0,0.35)`): marco del mapa y elementos de media elevación.
- **`--shadow-3`** (`0 34px 70px -24px rgba(0,0,0,0.85), 0 8px 20px rgba(0,0,0,0.4)`): fotografía dentro de `.puddle`, panel de tarifas y visor a pantalla completa.
- **Halos de color** (`0 6px 20px -8px rgba(226,43,39,0.9)` en rojo, `…rgba(59,180,229,0.85)` en cian, `…rgba(31,175,84,0.8)` en verde, más `inset 0 1px 0 rgba(255,255,255,0.22)`): no son sombras de profundidad, son el brillo del botón mojado. Se intensifican en hover.
- **Desenfoque de cristal**: `.nav` (blur 16px + saturate 150%), `.thumbbar` (blur 14px), `.viewer` (blur 12px), `.hero__kicker` (blur 6px). El contenido pasa por debajo como tras un parabrisas mojado.

### Named Rules
**La Regla del Halo.** Todo lo que emite luz lleva su propio halo del mismo color (`box-shadow` sin desplazamiento o con desplazamiento corto y difuminado ancho). Una fuente de luz sin halo se lee como un rectángulo de color y rompe el mundo.

## Shapes

Radios casi inexistentes, en cuatro pasos: 2px (`--r-1`, sellos y anillo de foco), 4px (`--r-2`, valor por defecto de botones, campos, iconos, piezas de galería), 10px (`--r-3`, sólo superficies grandes: panel de tarifas, nota, marco de mapa, fotografía de `.puddle`) y `999px` (`--r-pill`, sólo píldoras de texto: kicker de portada y marcas de flota). Los círculos completos se reservan a puntos de luz (4–9px) y a los botones del visor (48px).

El borde no es un marco: es una regla. Casi todo se dibuja con `1px solid var(--line)` en el lado que corresponde (superior en el tablero, inferior en las filas, izquierdo en la cita). Textura de chapa grecada disponible como `--grecada` (bandas verticales repetidas de 1px cada 7px) para vestir superficies grandes; en la construcción actual se aplica al panel de menú móvil.

## Components

### Buttons
- **Forma:** esquinas casi rectas (4px), altura mínima 50px (58px en `--lg`), relleno 0.92rem 1.5rem, icono SVG de 18px a la izquierda, `white-space: nowrap`.
- **Primario `--rh`:** rojo RH sobre blanco con halo rojo e `inset` superior claro; hover pasa a `rh-400` y duplica el halo. Es el botón de llamar.
- **Secundario `--agua`:** cian relleno con tinta `ink-990`; para la acción de navegación fuerte que no es el teléfono.
- **Ghost:** velo azul al 5% con borde `line-strong`; hover sube al 12% y el borde vira a `agua-600`.
- **WhatsApp `--wa`:** verde de canal, sólo para WhatsApp.
- **Estados:** transición 0.22s con `--ease-out` en transform, fondo, sombra, borde y color; `:active` baja 1px. El foco se ve con el anillo global de 2px `agua-400` a 3px de distancia.

### Chips
- **`.fleet`**: píldora de contorno (`--r-pill`), fondo azul al 4%, texto `paper-400` en mayúsculas `wdth` 90. Sin estado seleccionado: es rotulación, no filtro.
- **`.pricepanel__stamp`**: sello de contorno rojo `rh-600` girado -1.4°, radio 2px, dentro del panel claro.

### Cards / Containers
No hay tarjeta genérica. Los contenedores reales son:
- **`.note`**: aviso con borde `line`, radio 10px y degradado cian al 9%→2%.
- **`.mapframe`**: marco de 10px con `--shadow-2`, fondo `ink-850` y el iframe filtrado (grayscale 0.25, contraste 1.06, brillo 0.92) para que el mapa entre en la noche.
- **`.quote`**: sin caja; sólo filete izquierdo `agua-600`, texto `wdth` 104 / 500 a 34ch.
- **`.dl`**: fichas de datos en filas con regla inferior; `dt` en voz de etiqueta a 180px, `dd` en `paper-050`.
- **`.docs`**: lista de documentos con reglas arriba y abajo, icono cian de 22px y desplazamiento de 8px a la derecha en hover.

### Inputs / Fields
- **Estilo:** velo azul al 5%, borde `line` de 1px, radio 4px, alto mínimo 50px, texto `paper-050`, etiqueta encima en voz de etiqueta (`wdth` 84). El `select` lleva su chevron como SVG en `data:` teñido de `paper-400`; el `textarea` arranca en 132px y sólo escala en vertical.
- **Hover:** el borde sube a `line-strong`.
- **Foco:** borde `agua-500`, fondo cian al 7% y anillo de 3px `rgba(59,180,229,0.18)`; sin `outline` del navegador.
- **Error (`.field.is-invalid`):** borde `rh-500`, anillo rojo de 3px al 16% y mensaje visible en `rh-400`; el asterisco de campo obligatorio también es `rh-400`. La validación limpia el error al primer `input`/`change`.
- **Estado de envío:** `.formstatus.is-ok` en verde al 13% con texto `#8ef0b2`; `.is-err` en rojo al 12% con texto `#ffa8a5`.
- **Consentimiento:** casilla nativa de 20px con `accent-color: agua-500`.

### Navigation
- **Cabecera `.nav`:** fija, degradado de negro al 86%→62% con desenfoque de 16px y saturación 150%; al pasar 8px de scroll toma la clase `is-stuck`, opaca más el fondo, enciende un filete cian bajo el borde y encoge el logotipo al 83%. **Decisión deliberada:** en ese mismo estado la altura interior pasa de 74px a 62px. Es una transición de layout, aceptada porque ocurre una sola vez por estado de scroll sobre un elemento fijo sin hermanos que reflujan; resolverla con `transform` deformaría el contenido de la barra.
- **Enlaces:** mayúsculas `wdth` 92 / 600 a 0.79rem con tracking 0.13em, `paper-400` → `paper-050` en hover; la página activa añade un punto rojo de 4px con halo.
- **`.nav__glow`:** caja de 100px que persigue al puntero por el menú **sólo con `translate3d` y `scaleX`** (cero reflujo), degradado cian vertical con halo; aparece con `:hover`/`:focus-within` del menú.
- **`.nav__progress`:** filete de 2px al pie de la barra, degradado `agua-600`→`agua-400`, animado por `scaleX` según el scroll.
- **Móvil:** hamburguesa de 48px que se transforma en aspa; el panel `.drawer` baja a pantalla completa como el cierre de la nave (`translateY(-100%)`→0 en 0.52s), con textura grecada al 35%, enlaces de 1.18–1.55rem en `wdth` 112 que se desplazan 7px en hover, entrada escalonada de 45ms por elemento (`--i`), y pie con los tres botones a bloque completo.

### Barra de pulgar (`.thumbbar`)
Componente firma. Tres celdas iguales fijas al fondo (llamar en `rh-400`, WhatsApp en verde, ruta en `paper-200`), fondo casi negro con desenfoque de 14px, borde superior de regla, alto mínimo 58px por celda y rótulos de etiqueta a 0.68rem. Entra deslizando (`translateY(110%)`→0) al superar 240px de scroll y desaparece a partir de 1060px.

### Portada (`.hero`)
Alto de viewport completo (`100svh`), foto a sangre en `z-index: -2` con deriva lenta de 26s (escala 1.08→1.15) y encima dos radiales de atmósfera —ámbar arriba a la derecha, cian abajo a la izquierda— más un degradado vertical que devuelve el pie de la imagen a `ink-950`. El contenido se alinea abajo a la izquierda: kicker en píldora con punto cian pulsante, titular display, entradilla a 46ch, fila de botones (rojo + ghost) y franja de cifras separada por una regla superior. Los hijos de `.hero__inner` entran escalonados con `liftIn` (0.95s, desplazamiento de 26px y desenfoque de 9px).

### Cabecera interior (`.pagehead`)
Misma gramática en versión corta: foto al 42% de opacidad, radial cian arriba a la derecha, migas en voz de etiqueta, `h1` a 18ch y entradilla a 58ch, cerrada por una regla suave.

### Tablero de servicios (`.board`)
Sustituto explícito de la rejilla de tarjetas. Filas con regla arriba y abajo; el `h3` lleva delante un punto cian de 9px con halo; la descripción va en `paper-400` a 58ch; el precio, en ámbar `sodio-300` con `tnum` y un `small` en voz de etiqueta ("desde"). En hover, un barrido cian al 7% entra por la izquierda desbordando 1.2rem el ancho de la fila. A partir de 760px el precio ocupa su columna de 150px alineado a la derecha.

### Bloque foto/texto (`.slab`) y charco (`.puddle`)
Dos columnas 1.05fr/1fr desde 900px, alternables con `--flip`. La fotografía lleva radio de 10px, borde de regla y `--shadow-3`; debajo, un pseudo-elemento hereda la imagen (el JS copia el `src` a `background-image`), la voltea en vertical, la difumina 7px, la enmascara con un degradado y la deja al 50% de opacidad: el reflejo en el suelo mojado. `--none` desactiva el reflejo cuando el bloque va pegado a otra sección.

### Galería y visor
Rejilla `auto-fill` de mínimo 260px con hueco fluido; piezas en 4:3 (la primera, 4:5 a doble alto en escritorio), radio 4px, borde de regla, imagen ligeramente desaturada que se acerca al 106% y recupera color en hover/foco, y pie que sube 6px al aparecer. Cada pieza es un `role="button"` con `tabindex`. El visor cubre la pantalla con negro al 94% y desenfoque de 12px, muestra la imagen a 82vh con `--shadow-3` entrando de escala 0.96 a 1, con botones circulares de 48px, pie con posición "n / total", cierre con Escape o clic en el fondo, flechas de teclado y deslizamiento táctil de 48px.

### Panel de tarifas (`.pricepanel` / `.pricelist`)
La única superficie clara del sitio: degradado `panel-luz-alto`→`panel-luz-bajo` sobre tinta `tinta-panel`, radio 10px, `--shadow-3` con `inset` blanco y borde blanco al 70%. Cabecera con regla inferior de 2px sólida y sello rojo girado. Cada línea es nombre + filete punteado elástico + valor con `tnum`, con el prefijo "desde" en versalitas `wdth` 88. Es una hoja de precios impresa clavada en la pared, no una tabla web.

### Cierre (`.closer`) y pie (`.foot`)
El cierre repite la puesta en escena fotográfica al 50% de opacidad con radial oscuro a la izquierda para sostener el texto: `h2` a 16ch, párrafo a 48ch y botones de acción. El pie es `ink-990` con regla superior, rejilla de 1→3→4 columnas, cabeceras en voz de etiqueta a 0.73rem, mini-mapa que recupera color y brillo en hover, y barra legal final separada por regla suave.

### Reglas de luz y chapa (`.lightline`, `.grecada`)
Utilidades del mundo: `.lightline` es una regla de 1px cuyo degradado va de transparente a `agua-400` en el centro con halo de 14px al 55% de opacidad; `.grecada` es una banda de 8px con la textura `--grecada` al 50%. Están definidas en el sistema y son la forma canónica de separar sin borde, pero **la construcción actual no las instancia en ninguna página**: hoy el papel de "regla de luz" lo cumplen la barra con halo de `.label::before`, el filete cian de `.nav::after` y las reglas de 1px de `line`. Úsalas cuando haga falta una separación iluminada explícita; no inventes otra.

### Movimiento
Dos curvas: `--ease-out` (`cubic-bezier(0.16, 1, 0.3, 1)`) para todo lo que entra o reacciona, y `--ease-in-out` (`cubic-bezier(0.65, 0, 0.35, 1)`) para lo que respira en bucle (deriva de la portada, pulso del punto). Las apariciones al scroll (`[data-reveal]`) sólo se ocultan si el documento tiene la clase `js`, entran con opacidad + 22px de subida + desenfoque de 6px en 0.75–0.85s, admiten retardos de 0.08/0.16/0.24s, se observan con `IntersectionObserver` y tienen red de seguridad a los 4s. Bajo `prefers-reduced-motion` todas las animaciones y transiciones caen a 0.001ms, el contenido revelado se muestra y la portada se congela en escala 1.04.

## Do's and Don'ts

### Do:
- **Do** mantener el suelo continuo: fondos dentro del rango `ink-990`–`ink-800`, con `.section--wet` o `.section--deep` para variar.
- **Do** usar el cian como luz —barra con halo, punto, filo, borde de foco— y darle siempre su halo del mismo color.
- **Do** reservar `rh-500` para la acción y el indicador de página activa.
- **Do** poner los precios y las cifras en `sodio-300`/`sodio-400` con `font-feature-settings: "tnum" 1`.
- **Do** separar con reglas de 1px (`line`, `line-soft`, `line-strong`) y componer listas y tableros en filas.
- **Do** aplicar las dos voces del eje `wdth`: 118–122/800 para titulares, 84–92/600 en mayúsculas y tracking ≥0.12em para etiquetas.
- **Do** reflejar toda fotografía de bloque con `.puddle`, y montar las fotos a sangre con radiales de atmósfera y degradado de cierre hacia `ink-950`.
- **Do** animar sólo `opacity`, `transform` y `filter`, con `--ease-out`, y comprobar el resultado bajo `prefers-reduced-motion`.
- **Do** garantizar que llamar, WhatsApp y ruta estén siempre accesibles en móvil por la barra de pulgar.

### Don't:
- **Don't** rellenar superficies de contenido con `agua-500`; el único relleno cian admitido es el botón `.btn--agua`.
- **Don't** usar rojo en nada que no se pueda pulsar.
- **Don't** introducir una segunda familia tipográfica: el contraste lo produce el eje `wdth` de Archivo.
- **Don't** montar rejillas de tarjetas iguales para los servicios ni añadir burbujas, gotas decorativas o azul celeste de lavadero.
- **Don't** crear más superficies claras: el panel de tarifas es la única, y su blancura es lo que la convierte en hoja de precios.
- **Don't** subir los radios: nada por encima de 10px salvo píldoras de texto y círculos de luz.
- **Don't** poner sombra a superficies planas de contenido; la sombra es para lo que se levanta del suelo (foto, panel, visor, mapa).
- **Don't** animar `width`, `top`, `left` ni `margin`; la única transición de layout del sistema es la compresión de la cabecera, y está justificada arriba.
- **Don't** ocultar contenido con `[data-reveal]` sin que exista la red de seguridad: sin JavaScript el contenido debe verse.
