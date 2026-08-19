# RH Hidrolavados SL — sitio web

Rediseño completo del sitio de **RH Hidrolavados SL**, centro de lavado y engrase de
vehículos industriales en el Polígono Industrial «Los Olivos» de Getafe (Madrid).

Sustituye a la web anterior (`lavadoyengraserhhidrolavado.es`, plantilla Dreamweaver
con menús Spry, jQuery 1.x y fancybox 1.3) por un sitio estático, responsive y sin
dependencias externas más allá de la tipografía.

Todo el contenido, las fotografías, los precios y los documentos legales proceden del
dominio original. No hay datos inventados.

---

## Estructura

```
.
├── index.html          Portada
├── servicios.html      Servicios y venta de recambios
├── tarifas.html        Tarifa completa y preguntas frecuentes
├── nosotros.html       Quiénes somos
├── galeria.html        Galería + sección Documentos (#documentos)
├── contacto.html       Contacto, formulario, mapa y cómo llegar
├── 404.html            Página de error
├── sitemap.xml         Generado
├── robots.txt          Generado
├── assets/
│   ├── css/style.css   Sistema visual completo
│   ├── js/main.js      Menú, visor de fotos, formulario, scroll
│   ├── img/            Fotografías originales, reoptimizadas
│   │   └── thumb/      Versiones de 900 px para la rejilla
│   └── docs/           Aviso legal y política de privacidad (PDF)
├── tools/build.mjs     Generador de los HTML
├── PRODUCT.md          Verdad de producto
└── DESIGN.md           Sistema de diseño
```

## Publicar

Es HTML plano: se sube la carpeta entera a cualquier alojamiento y funciona.
No hace falta Node, ni PHP, ni base de datos.

- **Hosting clásico (FTP):** subir todo el contenido de la carpeta a `public_html`.
- **GitHub Pages / Netlify / Vercel:** apuntar al directorio raíz del repositorio,
  sin comando de compilación.

## Editar

Los seis HTML se generan desde `tools/build.mjs`, que contiene los textos, los
precios, los datos de contacto y las plantillas de cabecera y pie. Editar ahí y
regenerar evita que los seis archivos se desincronicen:

```bash
node tools/build.mjs
```

Si se prefiere no usar Node, se pueden editar los `.html` directamente; solo hay que
recordar que la cabecera y el pie están repetidos en cada archivo.

### Cambiar precios

Están en el array `TARIFAS` de `tools/build.mjs`. Salen a la vez en la portada
(las cinco primeras líneas) y en la página de tarifas (todas).

### Cambiar teléfono, correo o dirección

Objeto `EMPRESA`, al principio de `tools/build.mjs`. De ahí salen la cabecera, el
menú móvil, la barra inferior, el pie, los enlaces `tel:`, el de WhatsApp, la ruta
de Google Maps y los datos estructurados de Schema.org.

---

## Dos cosas pendientes de confirmar

1. **WhatsApp.** El botón apunta a `wa.me/34666756474`. Si ese número no tiene
   WhatsApp activo, hay que cambiarlo o quitarlo: está en `EMPRESA.wa` y aparece en
   la cabecera, el menú móvil, la barra inferior de móvil, el pie y contacto.

2. **Formulario de contacto.** No hay servidor. Ahora mismo, al enviar, valida los
   campos y abre el programa de correo del usuario con el mensaje ya redactado
   (`mailto:`). Para que llegue solo, sin abrir el correo, basta con añadir un
   `action` al formulario en `tools/build.mjs`:

   ```html
   <form class="form" id="form-contacto" method="POST"
         action="https://formspree.io/f/TU_CODIGO" novalidate>
   ```

   El JavaScript detecta que existe `action` y deja de usar `mailto:`, enviando el
   formulario de forma normal. Sirve cualquier servicio equivalente (Formspree,
   Basin, Web3Forms, Netlify Forms).

---

## Notas técnicas

- **Sin dependencias.** Nada de jQuery ni de librerías. Un único CSS y un único JS,
  ambos sin minificar para que sigan siendo editables.
- **Tipografía:** Archivo variable, desde Google Fonts, con `display=swap` y
  `preconnect`. Si falla la carga, cae a Helvetica Neue / Segoe UI / Arial.
- **Compatibilidad:** propiedades con prefijo `-webkit-` para `backdrop-filter`,
  `mask-image` y `text-size-adjust`; `min-height: 100svh` con reserva de `100vh`
  para la barra de Safari en iOS; `env(safe-area-inset-*)` para el notch del iPhone.
- **Accesibilidad:** enlace de salto al contenido, foco visible, menú móvil con
  trampa de foco y cierre con Escape, visor de fotos navegable con teclado y con
  gestos, campos de formulario a 16 px para que iOS no haga zoom, y respeto a
  `prefers-reduced-motion`. Se ha eliminado el bloqueo de clic derecho y de teclado
  que traía el sitio anterior.
- **Rendimiento:** las fotografías se han reescalado a 1600 px y se han generado
  miniaturas de 900 px para las rejillas. Dos de ellas pesaban 2,9 MB y ahora pesan
  188 KB. Todo lo que no está en el primer pantallazo carga en diferido.
- **SEO:** títulos y descripciones por página, `canonical`, Open Graph, `sitemap.xml`,
  `robots.txt` y datos estructurados `AutoWash` (más `FAQPage` en tarifas).

## Origen del contenido

| Página nueva | Página original |
|---|---|
| `index.html` | `portada.php` |
| `nosotros.html` | `ge-quienes_somos` |
| `servicios.html` | `se-servicios` |
| `tarifas.html` | `pa-tarifas` |
| `galeria.html` | `mu-multimedia`, `mu-imagenes`, `mu-documentos` |
| `contacto.html` | `ge-contacto`, `ge-situacion` |

Se han retirado del menú `mu-videos` y `mu-sonidos`, que estaban vacías en el sitio
original, y `ge-ayuda` y `ge-mapa_web`, que solo servían para explicar los problemas
técnicos de la web anterior.
