/* ===========================================================================
   Generador estático de RH Hidrolavados SL
   ---------------------------------------------------------------------------
   No es un framework: es un molde. Escribe los HTML finales en la raíz para
   que el sitio siga siendo HTML plano, sin dependencias ni paso de compilación
   en el servidor. Ejecutar con:  node tools/build.mjs
   ========================================================================= */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/* --------------------------------------------------------------- Datos */
const EMPRESA = {
  nombre: "RH Hidrolavados SL",
  tel1: "916845793",
  tel1fmt: "91 684 57 93",
  tel2: "666756474",
  tel2fmt: "666 75 64 74",
  wa: "34666756474",
  email: "rhhidrolavado@gmail.com",
  calle: "Calle Empleo nº 17",
  poligono: "Polígono Industrial «Los Olivos» (N-IV)",
  cp: "28906 Getafe (Madrid)",
  ruta: "https://www.google.es/maps/dir//RH+Hidrolavados,+Calle+Empleo,+17,+28906+Getafe,+Madrid/@40.3152936,-3.7203789,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0xd4221409a3f853f:0x2fa6f8bcc1fb5c96!2m2!1d-3.6853595!2d40.3152334!3e0",
  mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.221678429144!2d-3.6875481842621007!3d40.315237469729155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4221409a3f853f%3A0x2fa6f8bcc1fb5c96!2sRH+Hidrolavados!5e0!3m2!1ses!2ses!4v1518694922382",
  base: "https://lavadoyengraserhhidrolavado.es",
};

const NAV = [
  { href: "index.html", label: "Inicio", key: "inicio" },
  { href: "servicios.html", label: "Servicios", key: "servicios" },
  { href: "tarifas.html", label: "Tarifas", key: "tarifas" },
  { href: "nosotros.html", label: "Nosotros", key: "nosotros" },
  { href: "galeria.html", label: "Galería", key: "galeria" },
  { href: "contacto.html", label: "Contacto", key: "contacto" },
];

/* ----------------------------------------------------------- Iconos SVG */
const ico = {
  tel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>`,
  wa: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5s0-.3-.1-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.6.6 2.2.7 3 .6a2.5 2.5 0 0 0 1.7-1.2 2 2 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10.5c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10.5" r="3"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 6.5L21 6"/></svg>`,
  doc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.5Z"/><path d="M14 2.5v5h5"/><path d="M8.5 13.5h7M8.5 17h4.5"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>`,
  prev: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>`,
  next: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>`,
};

/* ------------------------------------------------------- Bloques comunes */
const CONTRATO = `<!--
  ===========================================================================
  CONTRATO DE DIRECCIÓN — RH Hidrolavados SL
  THESIS: El activo real de esta empresa son sus propias fotos de nave a las
    tres de la mañana. La página se construye como esa nave —oscura, mojada,
    con la luz recortando lo que importa— y rechaza el lavadero azul celeste
    con burbujas y tarjetas iguales que ship todo el sector.
  OWN-WORLD: Asfalto mojado (#04070c–#101c2d) como suelo continuo; cian del
    logotipo (#3bb4e5) usado siempre como LUZ —barras finas con halo, focos,
    filos— nunca como relleno; rojo RH (#e22b27) reservado para una sola cosa:
    la acción. Ámbar de sodio (#ffb558) para las cifras, tomado de las lámparas
    del techo. Archivo variable: eje wdth 122 en titulares (rótulo de chapa),
    wdth 84 en etiquetas técnicas. Reglas de luz y chapa grecada en lugar de
    bordes. Fotos con charco: cada imagen se refleja en el suelo.
  STORY: El jefe de tráfico entiende en un viewport que aquí se lava a mano y
    con foso, ve el precio sin pedirlo, y llama.
  FIRST VIEWPORT: Fotografía nocturna a sangre de la nave con el camión
    entrando; titular de rótulo abajo a la izquierda sobre el suelo mojado;
    botón rojo de teléfono junto al titular; franja de cifras reales bajo una
    regla de luz. En móvil, barra de pulgar fija con llamar / WhatsApp / ruta.
  FORM: "La nave de noche: agua y luz", candidato 3 de la lista razonada,
    puesta en escena fotográfica a sangre. Semilla e8a0f8e3 (tirada degradada:
    sin retadores de catálogo).
  ===========================================================================
-->`;

const head = (p) => `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${p.title}</title>
<meta name="description" content="${p.desc}">
<meta name="author" content="RH Hidrolavados SL">
<meta name="theme-color" content="#04070c">
<link rel="canonical" href="${EMPRESA.base}/${p.file}">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_ES">
<meta property="og:site_name" content="RH Hidrolavados SL">
<meta property="og:title" content="${p.title}">
<meta property="og:description" content="${p.desc}">
<meta property="og:image" content="${EMPRESA.base}/assets/img/${p.og || "imgRH_5.jpg"}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="assets/img/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="assets/img/logo_empresa.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&display=swap">
<link rel="stylesheet" href="assets/css/style.css">
<script>document.documentElement.className+=" js";</script>`;

const navbar = (active) => `
<a class="skip-link" href="#principal">Saltar al contenido</a>

<header class="nav" id="cabecera">
  <div class="shell shell--wide nav__inner">
    <a class="brand" href="index.html" aria-label="RH Hidrolavados SL, inicio">
      <img class="brand__mark" src="assets/img/logo_empresa.png" alt="" width="474" height="410" fetchpriority="high">
      <span class="brand__txt">
        <span class="brand__name">RH Hidrolavados</span>
        <span class="brand__sub">Lavado y engrase · Getafe</span>
      </span>
    </a>

    <nav aria-label="Principal">
      <ul class="nav__menu">
        <span class="nav__glow" aria-hidden="true"></span>
        ${NAV.map((n) => `<li><a class="nav__link" href="${n.href}"${n.key === active ? ' aria-current="page"' : ""}>${n.label}</a></li>`).join("\n        ")}
      </ul>
    </nav>

    <div class="nav__cta">
      <a class="nav__icon" href="https://wa.me/${EMPRESA.wa}" target="_blank" rel="noopener" aria-label="Escribir por WhatsApp al ${EMPRESA.tel2fmt}">${ico.wa}</a>
      <a class="nav__tel" href="tel:+34${EMPRESA.tel1}">${ico.tel}<span>${EMPRESA.tel1fmt}</span></a>
    </div>

    <button class="burger" type="button" aria-expanded="false" aria-controls="menu-movil" aria-label="Abrir menú">
      <span class="burger__box" aria-hidden="true"><span></span><span></span><span></span></span>
    </button>
  </div>
  <span class="nav__progress" aria-hidden="true"></span>
</header>

<div class="drawer" id="menu-movil">
  <nav aria-label="Menú principal móvil">
    <ul class="drawer__list">
      ${NAV.map((n) => `<li><a class="drawer__link" href="${n.href}"${n.key === active ? ' aria-current="page"' : ""}>${n.label}</a></li>`).join("\n      ")}
    </ul>
  </nav>
  <div class="drawer__foot">
    <a class="btn btn--rh btn--lg btn--block" href="tel:+34${EMPRESA.tel1}">${ico.tel} Llamar al ${EMPRESA.tel1fmt}</a>
    <a class="btn btn--wa btn--lg btn--block" href="https://wa.me/${EMPRESA.wa}" target="_blank" rel="noopener">${ico.wa} WhatsApp ${EMPRESA.tel2fmt}</a>
    <a class="btn btn--ghost btn--lg btn--block" href="${EMPRESA.ruta}" target="_blank" rel="noopener">${ico.pin} Cómo llegar</a>
    <p class="drawer__meta">
      <strong>${EMPRESA.calle}</strong>
      ${EMPRESA.poligono}<br>${EMPRESA.cp}<br>
      <a href="mailto:${EMPRESA.email}">${EMPRESA.email}</a><br>
      L–V 8:00–18:30 · S 8:00–12:00
    </p>
  </div>
</div>`;

const thumbbar = `
<nav class="thumbbar" aria-label="Acciones rápidas">
  <a href="tel:+34${EMPRESA.tel1}">${ico.tel}<span>Llamar</span></a>
  <a href="https://wa.me/${EMPRESA.wa}" target="_blank" rel="noopener">${ico.wa}<span>WhatsApp</span></a>
  <a href="${EMPRESA.ruta}" target="_blank" rel="noopener">${ico.pin}<span>Ruta</span></a>
</nav>`;

const closer = (img, h2, p) => `
<section class="closer">
  <div class="closer__media" aria-hidden="true"><img src="assets/img/${img}" alt="" loading="lazy" decoding="async" width="1600" height="1200"></div>
  <div class="shell">
    <p class="label">Sin cita para el lavado</p>
    <h2 data-reveal>${h2}</h2>
    <p data-reveal data-reveal-delay="1">${p}</p>
    <div class="btn-row" data-reveal data-reveal-delay="2">
      <a class="btn btn--rh btn--lg" href="tel:+34${EMPRESA.tel1}">${ico.tel} ${EMPRESA.tel1fmt}</a>
      <a class="btn btn--wa btn--lg" href="https://wa.me/${EMPRESA.wa}" target="_blank" rel="noopener">${ico.wa} WhatsApp</a>
      <a class="btn btn--ghost btn--lg" href="${EMPRESA.ruta}" target="_blank" rel="noopener">${ico.pin} Cómo llegar</a>
    </div>
  </div>
</section>`;

const footer = `
<footer class="foot">
  <div class="shell">
    <div class="foot__grid">
      <div>
        <div class="foot__brand">
          <img src="assets/img/logo_empresa.png" alt="" width="474" height="410" loading="lazy">
          <span><b>RH Hidrolavados SL</b><span>Lavado y engrase de camiones</span></span>
        </div>
        <p>Lavado manual sin rodillos, foso propio para los bajos, engrase y cambio de aceite. A pie de la A-4, en el Polígono Los Olivos de Getafe.</p>
      </div>

      <div>
        <h2>Navegación</h2>
        <ul>
          ${NAV.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("\n          ")}
        </ul>
      </div>

      <div>
        <h2>Contacto</h2>
        <ul>
          <li><a href="tel:+34${EMPRESA.tel1}">${EMPRESA.tel1fmt}</a></li>
          <li><a href="tel:+34${EMPRESA.tel2}">${EMPRESA.tel2fmt}</a></li>
          <li><a href="https://wa.me/${EMPRESA.wa}" target="_blank" rel="noopener">WhatsApp</a></li>
          <li><a href="mailto:${EMPRESA.email}">${EMPRESA.email}</a></li>
        </ul>
        <h2 style="margin-top:1.6rem">Horario</h2>
        <p>Lunes a viernes 8:00–18:30<br>Sábados 8:00–12:00</p>
      </div>

      <div>
        <h2>Dónde estamos</h2>
        <p>${EMPRESA.calle}<br>${EMPRESA.poligono}<br>${EMPRESA.cp}</p>
        <a class="foot__map" href="${EMPRESA.ruta}" target="_blank" rel="noopener" aria-label="Abrir la ruta hasta RH Hidrolavados en Google Maps">
          <img src="assets/img/situacion_empresa.jpg" alt="Plano de situación de RH Hidrolavados en el Polígono Los Olivos de Getafe" width="500" height="500" loading="lazy">
        </a>
      </div>
    </div>

    <div class="foot__bar">
      <p>© <span data-year>2026</span> RH Hidrolavados SL · CIF y datos registrales en el aviso legal</p>
      <nav aria-label="Legal">
        <a href="assets/docs/AvisoLegal.pdf" target="_blank" rel="noopener">Aviso legal</a>
        <a href="assets/docs/PoliticaDePrivacidad.pdf" target="_blank" rel="noopener">Política de privacidad</a>
        <a href="galeria.html#documentos">Documentos</a>
      </nav>
    </div>
  </div>
</footer>`;

const viewer = `
<div class="viewer" role="dialog" aria-modal="true" aria-label="Visor de imágenes" aria-hidden="true">
  <button class="viewer__btn viewer__close" type="button" aria-label="Cerrar visor">${ico.close}</button>
  <button class="viewer__btn viewer__prev" type="button" aria-label="Imagen anterior">${ico.prev}</button>
  <button class="viewer__btn viewer__next" type="button" aria-label="Imagen siguiente">${ico.next}</button>
  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="">
  <p class="viewer__cap"></p>
</div>`;

const jsonld = (extra = "") => `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "name": "RH Hidrolavados SL",
  "alternateName": "RH Hidrolavados",
  "description": "Lavado manual sin rodillos, lavado de bajos con foso, desinfección de frigos con certificado sanitario, engrase y cambio de aceite y filtros para vehículos industriales y especiales.",
  "url": "${EMPRESA.base}/",
  "image": "${EMPRESA.base}/assets/img/imgRH_5.jpg",
  "logo": "${EMPRESA.base}/assets/img/logo_empresa.png",
  "telephone": ["+34${EMPRESA.tel1}", "+34${EMPRESA.tel2}"],
  "email": "${EMPRESA.email}",
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Empleo 17, Polígono Industrial Los Olivos",
    "addressLocality": "Getafe",
    "addressRegion": "Madrid",
    "postalCode": "28906",
    "addressCountry": "ES"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 40.3152334, "longitude": -3.6853595 },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:30" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "12:00" }
  ],
  "areaServed": ["Getafe", "Madrid", "Comunidad de Madrid", "Zona Centro"]
}
</script>${extra}`;

const page = (p) => `<!DOCTYPE html>
<html lang="es">
<head>
${CONTRATO}
${head(p)}
</head>
<body>
${navbar(p.key)}

<main id="principal">
${p.body}
</main>

${footer}
${thumbbar}
${p.viewer ? viewer : ""}
${jsonld(p.jsonld || "")}
<script src="assets/js/main.js" defer></script>
</body>
</html>
`;

/* ======================================================= Contenido común */
const SERVICIOS = [
  {
    t: "Lavado exterior manual",
    d: "A mano y sin rodillos: la cabina, el toldo, la caja y las lonas se lavan con lanza de alta presión y cepillo, sin las rayas que dejan los túneles automáticos. Tractoras, semirremolques, góndolas, cisternas y vehículos especiales.",
    p: "20 €",
  },
  {
    t: "Lavado de bajos con foso",
    d: "Tenemos foso propio, así que el operario se mete debajo del vehículo y lava los bajos, el chasis y los ejes de verdad. Imprescindible antes de una ITV o de una reparación en taller.",
    p: "30 €",
  },
  {
    t: "Desinfección de frigos y cajas",
    d: "Lavado interior de cajas frigoríficas y furgones con desinfección y CERTIFICADO SANITARIO, el documento que te van a pedir para transportar alimentos.",
    p: "34 €",
  },
  {
    t: "Lavado y petroleado de motores",
    d: "Se bascula la cabina y se desengrasa el motor a mano. Un motor limpio deja ver las fugas antes de que te dejen tirado y baja la temperatura de trabajo.",
    p: "35 €",
  },
  {
    t: "Engrase general y centralizado",
    d: "Engrase de quinta rueda, bulones, ballestas y suspensión, y recarga de los sistemas de engrase centralizado. Se hace en la misma parada del lavado.",
    p: "15 €",
  },
  {
    t: "Aceite, filtros y valvulina",
    d: "Cambio de aceite de motor, filtros y valvulina de primeras marcas: Mann, Gulf, BP y Repsol. Filtros Mann con un 30 % de descuento.",
    p: "Consultar",
  },
];

const boardHTML = SERVICIOS.map(
  (s) => `      <article class="board__row" data-reveal>
        <h3>${s.t}</h3>
        <p>${s.d}</p>
        <p class="board__price">${s.p === "Consultar" ? "Consultar" : s.p}<small>${s.p === "Consultar" ? "según vehículo" : "desde"}</small></p>
      </article>`
).join("\n");

const FOTOS = [
  { f: "imgRH_5.jpg", c: "Dos tractoras Renault de la flota Mazo esperando turno en la puerta de la nave, Polígono Los Olivos." },
  { f: "imgRH_3.jpg", c: "Semirremolque frigorífico de El Mosca entrando a lavar de madrugada. El foso, a la izquierda." },
  { f: "imgRH_9.jpg", c: "Dos frigoríficos de Makro Madrid dentro de la nave, en pleno lavado interior." },
  { f: "imgRH_1.jpg", c: "Camión de bomberos H-4 del aeropuerto Adolfo Suárez Madrid-Barajas, uno de los vehículos especiales que atendemos." },
  { f: "imgRH_2.jpg", c: "Tráiler de Volum Logistics saliendo de la nave de noche, con el suelo todavía mojado." },
  { f: "RH_008.jpg", c: "Tractora MAN con la cabina basculada para el lavado y petroleado del motor." },
  { f: "imgRH_7.jpg", c: "Fachada de la nave a primera hora, con el rótulo y el cierre abierto." },
  { f: "RH_009.jpg", c: "Trabajo de desengrase de motor sobre el foso, con el chasis a la vista." },
  { f: "RH_005_1.jpg", c: "Cisterna de Praxair sobre el foso de lavado de bajos." },
  { f: "RH_001_1.jpg", c: "Acceso a la nave desde la calle Empleo, en el Polígono Los Olivos." },
];

const galeria = (lista) =>
  lista
    .map(
      (g, i) => `      <figure class="gallery__item${i === 0 ? " gallery__item--tall" : ""}" data-full="assets/img/${g.f}" data-caption="${g.c.replace(/"/g, "&quot;")}">
        <img src="assets/img/thumb/${g.f}" alt="${g.c.replace(/"/g, "&quot;")}" loading="lazy" decoding="async" width="900" height="675">
        <figcaption>${g.c}</figcaption>
      </figure>`
    )
    .join("\n");

const TARIFAS = [
  ["Lavado exterior", "desde", "20 €"],
  ["Lavado de bajos", "desde", "30 €"],
  ["Engrase", "desde", "15 €"],
  ["Petroleado de motores", "desde", "35 €"],
  ["Lavado interior de cajas o frigos, con certificado de desinfección", "desde", "34 €"],
  ["Filtros de 1ª marca", "", "30 % dto."],
  ["Aceite Gulf 15w40 · garrafa de 5 l", "", "21 €"],
  ["Aceite BP 10w40 · garrafa de 5 l", "", "26 €"],
  ["Jabón de lavado de camiones · 5 l", "", "15 €"],
  ["Jabón de lavado de camiones · 25 l", "", "75 €"],
  ["Baterías de 1ª marca", "", "Consultar"],
];

const precios = (lista) =>
  lista
    .map(
      ([n, pre, v]) => `        <li>
          <span class="pricelist__name">${n}</span>
          <span class="pricelist__dots" aria-hidden="true"></span>
          <span class="pricelist__val">${pre ? `<em>${pre}</em>` : ""}${v}</span>
        </li>`
    )
    .join("\n");

const pagehead = (img, crumb, h1, lead) => `
<section class="pagehead">
  <div class="pagehead__media" aria-hidden="true"><img src="assets/img/${img}" alt="" width="1600" height="1200" fetchpriority="high"></div>
  <div class="shell">
    <ol class="crumbs">
      <li><a href="index.html">Inicio</a></li>
      <li aria-current="page">${crumb}</li>
    </ol>
    <h1>${h1}</h1>
    <p class="lead">${lead}</p>
  </div>
</section>`;

/* ============================================================== Páginas */
const paginas = [];

/* ------------------------------------------------------------- Portada */
paginas.push({
  file: "index.html",
  key: "inicio",
  viewer: true,
  og: "imgRH_3.jpg",
  title: "RH Hidrolavados SL — Lavado y engrase de camiones en Getafe (Madrid)",
  desc: "Lavado manual sin rodillos, lavado de bajos con foso, desinfección de frigos con certificado, engrase y cambio de aceite. A pie de la A-4, Polígono Los Olivos, Getafe. Más de 25 años.",
  body: `
<section class="hero">
  <div class="hero__media" aria-hidden="true">
    <img src="assets/img/imgRH_3.jpg" alt="" width="1600" height="1200" fetchpriority="high">
  </div>
  <div class="shell hero__inner">
    <p class="hero__kicker"><i aria-hidden="true"></i> Getafe · A-4, km 12,600 · Polígono Los Olivos</p>
    <h1>Lavamos camiones <em>a mano</em>, sin rodillos y con foso.</h1>
    <p class="hero__lead">Lavado exterior y de bajos, desinfección de frigos con certificado sanitario, engrase y cambio de aceite. Todo en la misma nave, en la misma parada.</p>
    <div class="btn-row">
      <a class="btn btn--rh btn--lg" href="tel:+34${EMPRESA.tel1}">${ico.tel} Llamar al ${EMPRESA.tel1fmt}</a>
      <a class="btn btn--ghost btn--lg" href="tarifas.html">Ver tarifas</a>
    </div>
    <div class="hero__facts">
      <div><b>+25</b><span>años de oficio</span></div>
      <div><b>+5.300</b><span>empresas atendidas</span></div>
      <div><b>6</b><span>servicios en una parada</span></div>
      <div><b>L–V 8:00</b><span>a 18:30 · sáb. 8–12</span></div>
    </div>
  </div>
  <a class="hero__scroll" href="#sin-rodillos">Bajar</a>
</section>

<section class="section" id="sin-rodillos">
  <div class="shell">
    <div class="slab">
      <div class="slab__media puddle" data-reveal>
        <img src="assets/img/thumb/imgRH_2.jpg" alt="Tráiler de Volum Logistics saliendo de la nave de RH Hidrolavados de noche, con el suelo mojado" width="900" height="675" loading="lazy" decoding="async">
      </div>
      <div class="slab__body" data-reveal data-reveal-delay="1">
        <p class="label">Por qué a mano</p>
        <h2>El rodillo no llega donde llega un operario.</h2>
        <p>Un túnel automático pasa el cepillo por donde puede y deja fuera el faldón, el paso de rueda, la parte alta del toldo y todo lo que sobresale. Nosotros lavamos con lanza de alta presión y a mano, pieza por pieza, sin rayar la pintura ni arrancar los adhesivos de la flota.</p>
        <p>Y por debajo lo mismo: tenemos <strong>foso propio</strong>. El operario se mete bajo el vehículo y limpia chasis, ejes y bajos de verdad, no a ciegas desde el suelo.</p>
        <div class="btn-row" style="margin-top:1.6rem">
          <a class="btn btn--agua" href="servicios.html">Ver todos los servicios</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--wet">
  <div class="shell">
    <div class="section__head" data-reveal>
      <p class="label">Servicios</p>
      <h2>Entra sucio y sale lavado, engrasado y con el papel firmado.</h2>
      <p>Seis trabajos que normalmente obligan a visitar tres sitios distintos. Aquí se hacen en la misma nave y en la misma mañana.</p>
    </div>
    <div class="board">
${boardHTML}
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="slab slab--flip">
      <div class="slab__media puddle" data-reveal>
        <img src="assets/img/thumb/imgRH_1.jpg" alt="Camión de bomberos H-4 del aeropuerto Madrid-Barajas aparcado ante la nave de RH Hidrolavados" width="900" height="675" loading="lazy" decoding="async">
      </div>
      <div class="slab__body" data-reveal data-reveal-delay="1">
        <p class="label">Vehículos especiales</p>
        <h2>Si tiene ruedas y no cabe en un túnel, cabe aquí.</h2>
        <p>Por la nave pasan tractoras y semirremolques, pero también cisternas, góndolas, frigoríficos, plataformas y vehículos que no entran en ningún lavadero convencional: en esta foto, un camión de bomberos del aeropuerto Adolfo Suárez Madrid-Barajas.</p>
        <p class="muted">Flotas que lavan con nosotros, tal y como aparecen en nuestras propias fotos:</p>
        <ul class="fleet">
          <li>Makro</li><li>Mazo</li><li>El Mosca</li><li>Volum Logistics</li>
          <li>ID Logistics</li><li>Praxair</li><li>AENA Barajas</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section section--deep">
  <div class="shell">
    <div class="slab">
      <div class="slab__body" data-reveal>
        <p class="label">Tarifas</p>
        <h2>Los precios, delante. No detrás de un formulario.</h2>
        <p>En este sector casi nadie publica lo que cobra. Nosotros sí: estos son los precios de partida reales, para que sepas a qué atenerte antes de coger el teléfono.</p>
        <div class="btn-row" style="margin-top:1.6rem">
          <a class="btn btn--ghost" href="tarifas.html">Tarifa completa y recambios</a>
        </div>
      </div>
      <div class="slab__media" data-reveal data-reveal-delay="1">
        <div class="pricepanel">
          <div class="pricepanel__head">
            <h3>Precios de partida</h3>
            <span class="pricepanel__stamp">IVA no incluido</span>
          </div>
          <ul class="pricelist">
${precios(TARIFAS.slice(0, 5))}
          </ul>
          <p class="pricepanel__note"><strong>El precio final depende del vehículo y de cómo venga.</strong> Llámanos con la matrícula y el tipo de carrocería y te lo cerramos por teléfono.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell shell--wide">
    <div class="section__head" data-reveal>
      <p class="label">La nave</p>
      <h2>Fotos de nuestra propia nave. Ninguna de catálogo.</h2>
    </div>
    <div class="gallery" data-reveal>
${galeria(FOTOS.slice(0, 5))}
    </div>
    <div class="btn-row" style="margin-top:2rem" data-reveal>
      <a class="btn btn--ghost" href="galeria.html">Ver la galería completa</a>
    </div>
  </div>
</section>

${closer("imgRH_5.jpg", "Trae el camión cuando lo tengas parado.", "Sin cita para el lavado. Estamos a pie de la A-4, en el Polígono Los Olivos de Getafe, de lunes a viernes de 8:00 a 18:30 y los sábados por la mañana.")}
`,
});

/* ------------------------------------------------------------ Servicios */
paginas.push({
  file: "servicios.html",
  key: "servicios",
  og: "imgRH_9.jpg",
  title: "Servicios — Lavado, engrase y desinfección de camiones | RH Hidrolavados",
  desc: "Lavado exterior manual, lavado de bajos con foso, desinfección de frigos con certificado sanitario, petroleado de motores, engrase centralizado y cambio de aceite y filtros de primeras marcas.",
  body: `
${pagehead("imgRH_9.jpg", "Servicios", "Todo el mantenimiento de la flota, en una sola parada.", "Lavado, desinfección, engrase y cambio de aceite para vehículos industriales y especiales. Sin rodillos y con foso propio, en el Polígono Los Olivos de Getafe.")}

<section class="section">
  <div class="shell">
    <div class="board">
${boardHTML}
    </div>
  </div>
</section>

<section class="section section--wet">
  <div class="shell">
    <div class="slab">
      <div class="slab__media puddle" data-reveal>
        <img src="assets/img/thumb/RH_008.jpg" alt="Tractora MAN con la cabina basculada durante el lavado y petroleado del motor" width="900" height="675" loading="lazy" decoding="async">
      </div>
      <div class="slab__body" data-reveal data-reveal-delay="1">
        <p class="label">Motor y bajos</p>
        <h2>Se bascula la cabina y se trabaja debajo.</h2>
        <p>El petroleado de motor no es pasar la manguera: se levanta la cabina, se desengrasa a mano y se aclara con cuidado de la instalación eléctrica. Un motor limpio deja ver una fuga de gasoil o de aceite cuando todavía es una mancha, no cuando te deja parado en el arcén.</p>
        <p>El lavado de bajos se hace desde el <strong>foso</strong>, no desde el suelo. Es la diferencia entre limpiar el chasis y mojarlo.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="slab slab--flip">
      <div class="slab__media" data-reveal>
        <div class="note">
          <h3>Certificado sanitario de desinfección</h3>
          <p>La desinfección interior de cajas frigoríficas y furgones se entrega <strong>con certificado</strong>. Es el documento que exigen las cadenas de alimentación y las inspecciones de transporte de mercancías perecederas.</p>
          <p class="muted">Se hace en la misma visita del lavado exterior.</p>
        </div>
      </div>
      <div class="slab__body" data-reveal data-reveal-delay="1">
        <p class="label">Frigos y cajas</p>
        <h2>Si transportas alimento, te van a pedir el papel.</h2>
        <p>Lavamos y desinfectamos el interior de frigos, cajas y furgones, y emitimos el certificado sanitario correspondiente. Lo habitual es aprovechar la parada del lavado exterior y salir con las dos cosas resueltas.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--deep">
  <div class="shell">
    <div class="slab">
      <div class="slab__media puddle puddle--none" data-reveal>
        <img src="assets/img/recambios.jpg" alt="Marcas de recambios que distribuimos: Mann Filter, Gulf y Repsol" width="200" height="300" loading="lazy" decoding="async" style="max-width:260px;border-radius:10px">
      </div>
      <div class="slab__body" data-reveal data-reveal-delay="1">
        <p class="label">Venta de recambios</p>
        <h2>Filtros, aceite, valvulina, jabón y baterías.</h2>
        <ul>
          <li><strong>Filtros Mann</strong> con un 30 % de descuento.</li>
          <li><strong>Aceite Gulf 15w40</strong>, garrafa de 5 l: 21 €.</li>
          <li><strong>Aceite BP 10w40</strong>, garrafa de 5 l: 26 €.</li>
          <li><strong>Jabón de lavado de camiones</strong>: 5 l por 15 € y 25 l por 75 €.</li>
          <li><strong>Baterías de primeras marcas</strong>: consultar precio y medida.</li>
        </ul>
        <p class="muted">Trabajamos con Mann Filter, Gulf, BP y Repsol. Si necesitas otra marca o una referencia concreta, pregúntanos.</p>
        <div class="btn-row" style="margin-top:1.4rem">
          <a class="btn btn--agua" href="tarifas.html">Ver la tarifa completa</a>
        </div>
      </div>
    </div>
  </div>
</section>

${closer("imgRH_7.jpg", "¿No sabes qué necesita tu vehículo?", "Dinos qué llevas y cómo viene y te decimos qué hace falta y cuánto cuesta. Sin compromiso y sin cita para el lavado.")}
`,
});

/* -------------------------------------------------------------- Tarifas */
paginas.push({
  file: "tarifas.html",
  key: "tarifas",
  og: "imgRH_1.jpg",
  title: "Tarifas — Precios de lavado, engrase y recambios | RH Hidrolavados Getafe",
  desc: "Lavado exterior desde 20 €, bajos desde 30 €, engrase desde 15 €, petroleado de motores desde 35 €, desinfección de frigos con certificado desde 34 €. Filtros Mann 30 % dto.",
  body: `
${pagehead("imgRH_1.jpg", "Tarifas", "Lo que cuesta, dicho antes de que preguntes.", "Precios de partida reales para vehículos industriales. El importe final depende del tipo de vehículo y del estado en que llegue; te lo cerramos por teléfono en un minuto.")}

<section class="section">
  <div class="shell">
    <div class="slab">
      <div class="slab__media" data-reveal>
        <div class="pricepanel">
          <div class="pricepanel__head">
            <h2 style="font-size:var(--step-2)">Tarifa RH Hidrolavados</h2>
            <span class="pricepanel__stamp">IVA no incluido</span>
          </div>
          <ul class="pricelist">
${precios(TARIFAS)}
          </ul>
          <p class="pricepanel__note"><strong>«Desde» significa desde.</strong> Una furgoneta no cuesta lo mismo que una góndola de obra que llega con barro seco de una semana. Llámanos con el tipo de vehículo y te damos el precio cerrado.</p>
        </div>
      </div>
      <div class="slab__body" data-reveal data-reveal-delay="1">
        <p class="label">Cómo se calcula</p>
        <h2>Tres cosas mueven el precio.</h2>
        <ul>
          <li><strong>El tamaño y la carrocería.</strong> No es igual una cabina suelta que un mega con toldo, ni una cisterna que una góndola.</li>
          <li><strong>Cómo viene.</strong> Polvo de autopista se va rápido; barro de cantera, hormigón o restos de carga tardan bastante más.</li>
          <li><strong>Qué trabajos se juntan.</strong> Si aprovechas la parada para lavar, engrasar y cambiar el aceite, sale mejor que hacerlo en tres visitas.</li>
        </ul>
        <div class="note" style="margin-top:1.8rem">
          <h3>Flotas y abonos</h3>
          <p>Si mueves varios vehículos al mes, llámanos y hablamos de condiciones. Más de 5.300 empresas han pasado por aquí; muchas lavan con nosotros de forma fija.</p>
        </div>
        <div class="btn-row" style="margin-top:1.6rem">
          <a class="btn btn--rh btn--lg" href="tel:+34${EMPRESA.tel1}">${ico.tel} Pedir precio: ${EMPRESA.tel1fmt}</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--wet">
  <div class="shell">
    <div class="section__head" data-reveal>
      <p class="label">Preguntas habituales</p>
      <h2>Lo que nos preguntan por teléfono.</h2>
    </div>
    <div class="board">
      <article class="board__row" data-reveal>
        <h3>¿Hace falta cita?</h3>
        <p>Para el lavado no: se entra por orden de llegada dentro del horario. Para engrase, cambio de aceite o desinfección conviene llamar antes y reservar hueco, sobre todo a primera hora.</p>
      </article>
      <article class="board__row" data-reveal>
        <h3>¿Cuánto tarda un lavado?</h3>
        <p>Depende del vehículo y de cómo venga. Llámanos antes de salir y te decimos cómo está la nave en ese momento.</p>
      </article>
      <article class="board__row" data-reveal>
        <h3>¿Los precios llevan IVA?</h3>
        <p>No. Los importes de esta página son sin IVA.</p>
      </article>
      <article class="board__row" data-reveal>
        <h3>¿Lavan turismos y furgonetas?</h3>
        <p>Sí. La nave está dimensionada para vehículo industrial, pero también lavamos furgonetas y turismos.</p>
      </article>
      <article class="board__row" data-reveal>
        <h3>¿Dan certificado de desinfección?</h3>
        <p>Sí, en el lavado interior de frigos y cajas se entrega el certificado sanitario.</p>
      </article>
    </div>
  </div>
</section>

${closer("imgRH_3.jpg", "Dinos la matrícula y el tipo de caja.", "Con eso te damos precio cerrado por teléfono o por WhatsApp, sin que tengas que desviarte para preguntar.")}
`,
  jsonld: `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Hace falta cita?", "acceptedAnswer": { "@type": "Answer", "text": "Para el lavado no: se entra por orden de llegada dentro del horario. Para engrase, cambio de aceite o desinfección conviene llamar antes y reservar hueco." } },
    { "@type": "Question", "name": "¿Los precios llevan IVA?", "acceptedAnswer": { "@type": "Answer", "text": "No. Los importes publicados son sin IVA." } },
    { "@type": "Question", "name": "¿Lavan turismos y furgonetas?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. La nave está dimensionada para vehículo industrial, pero también lavamos furgonetas y turismos." } },
    { "@type": "Question", "name": "¿Dan certificado de desinfección?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, en el lavado interior de frigos y cajas se entrega el certificado sanitario." } }
  ]
}
</script>`,
});

/* ------------------------------------------------------------- Nosotros */
paginas.push({
  file: "nosotros.html",
  key: "nosotros",
  viewer: true,
  og: "imgRH_7.jpg",
  title: "Quiénes somos — 25 años lavando camiones en Getafe | RH Hidrolavados",
  desc: "Más de 25 años de experiencia en mantenimiento de vehículos industriales y especiales. Antes conocidos como Los Cuñados. Más de 5.300 empresas confían en nuestro trabajo.",
  body: `
${pagehead("imgRH_7.jpg", "Nosotros", "Veinticinco años y pico lavando camiones en el mismo sitio.", "RH Hidrolavados SL es una empresa familiar del Polígono Los Olivos de Getafe dedicada al mantenimiento de vehículos industriales y especiales.")}

<section class="section">
  <div class="shell">
    <div class="slab">
      <div class="slab__body" data-reveal>
        <p class="label">La casa</p>
        <h2>Antes nos conocíais como Los Cuñados.</h2>
        <p>Llevamos más de <strong>25 años</strong> en el mantenimiento de vehículos industriales y vehículos especiales. Empezamos con ese nombre y mucha gente del gremio nos sigue llamando así; hoy la empresa es RH Hidrolavados SL, en la misma nave y con la misma forma de trabajar.</p>
        <p>Por aquí han pasado ya más de <strong>5.300 empresas</strong>, de transportistas autónomos con una tractora a flotas nacionales e internacionales de primer nivel. Lo que no ha cambiado es que el lavado se hace a mano, uno a uno.</p>
        <div class="hero__facts" style="border-top-color:var(--line)">
          <div><b>+25</b><span>años de oficio</span></div>
          <div><b>+5.300</b><span>empresas atendidas</span></div>
          <div><b>1</b><span>nave, la de siempre</span></div>
        </div>
      </div>
      <div class="slab__media puddle" data-reveal data-reveal-delay="1">
        <img src="assets/img/thumb/imgRH_5.jpg" alt="Fachada de la nave de RH Hidrolavados con el rótulo y dos tractoras Renault de la flota Mazo" width="900" height="675" loading="lazy" decoding="async">
      </div>
    </div>
  </div>
</section>

<section class="section section--wet">
  <div class="shell">
    <div class="slab slab--flip">
      <div class="slab__media" data-reveal>
        <blockquote class="quote">
          <p>Lo que nos interesa es que vuelvas.</p>
          <footer>RH Hidrolavados SL</footer>
        </blockquote>
      </div>
      <div class="slab__body" data-reveal data-reveal-delay="1">
        <p class="label">Cómo trabajamos</p>
        <h2>Nos tomamos en serio lo que nos decís.</h2>
        <p>Nos tomamos todas las sugerencias muy en serio, y por eso queremos ser uno de los centros de lavado más representativos de la Comunidad de Madrid y de la zona centro peninsular. Eso no se consigue con publicidad: se consigue cuando el camión vuelve el mes siguiente.</p>
        <p class="muted">Estamos en el Polígono Industrial «Los Olivos», a pie de la N-IV / A-4 en el kilómetro 12,600, en el sur de Madrid.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell shell--wide">
    <div class="section__head" data-reveal>
      <p class="label">Un día cualquiera</p>
      <h2>Lo que entra por esa puerta.</h2>
    </div>
    <div class="gallery" data-reveal>
${galeria([FOTOS[3], FOTOS[2], FOTOS[8], FOTOS[1]])}
    </div>
  </div>
</section>

${closer("imgRH_9.jpg", "Ven a verlo, está a pie de autovía.", "Salida del kilómetro 12,600 de la A-4. Calle Empleo nº 17, Polígono Los Olivos, Getafe.")}
`,
});

/* -------------------------------------------------------------- Galería */
paginas.push({
  file: "galeria.html",
  key: "galeria",
  viewer: true,
  og: "imgRH_2.jpg",
  title: "Galería y documentos — RH Hidrolavados SL, Getafe",
  desc: "Fotografías reales de la nave de RH Hidrolavados en el Polígono Los Olivos de Getafe: lavado exterior, lavado de bajos con foso, motores y vehículos especiales. Documentos descargables.",
  body: `
${pagehead("imgRH_2.jpg", "Galería", "La nave, tal y como está.", "Todas las fotografías son de nuestras instalaciones en la calle Empleo de Getafe y de vehículos que han pasado por aquí. Pulsa cualquier imagen para verla grande; con las flechas del teclado se pasa de una a otra.")}

<section class="section">
  <div class="shell shell--wide">
    <div class="section__head" data-reveal>
      <p class="label">Lavado exterior, bajos y motor</p>
      <h2>Diez fotografías, cero catálogo.</h2>
    </div>
    <div class="gallery" data-reveal>
${galeria(FOTOS)}
    </div>
  </div>
</section>

<section class="section section--wet" id="documentos">
  <div class="shell">
    <div class="section__head" data-reveal>
      <p class="label">Documentos</p>
      <h2>Documentación descargable.</h2>
      <p>Los documentos legales de RH Hidrolavados SL, en PDF. Si necesitas cualquier otro papel —un certificado de desinfección, una factura o los datos fiscales para darnos de alta como proveedor— pídelo por teléfono o por correo.</p>
    </div>
    <ul class="docs" data-reveal>
      <li>
        <a href="assets/docs/AvisoLegal.pdf" target="_blank" rel="noopener" download>
          ${ico.doc}
          <span><b>Aviso legal</b><span>Datos identificativos y condiciones de uso del sitio</span></span>
          <em>PDF · 1 pág.</em>
        </a>
      </li>
      <li>
        <a href="assets/docs/PoliticaDePrivacidad.pdf" target="_blank" rel="noopener" download>
          ${ico.doc}
          <span><b>Política de privacidad</b><span>Tratamiento de datos personales y derechos del usuario</span></span>
          <em>PDF · 3 pág.</em>
        </a>
      </li>
      <li>
        <a href="mailto:${EMPRESA.email}?subject=Solicitud%20de%20documentaci%C3%B3n">
          ${ico.mail}
          <span><b>Otra documentación</b><span>Certificados de desinfección, facturas o alta como proveedor</span></span>
          <em>Solicitar</em>
        </a>
      </li>
    </ul>
  </div>
</section>

${closer("imgRH_1.jpg", "¿Tienes un vehículo raro?", "Cisternas, góndolas, plataformas, bomberos. Si no estás seguro de que quepa, mándanos una foto por WhatsApp y te decimos.")}
`,
});

/* ------------------------------------------------------------- Contacto */
paginas.push({
  file: "contacto.html",
  key: "contacto",
  og: "imgRH_5.jpg",
  title: "Contacto y cómo llegar — RH Hidrolavados SL, Getafe (Madrid)",
  desc: "Calle Empleo nº 17, Polígono Industrial Los Olivos, 28906 Getafe (Madrid). Tel. 91 684 57 93 y 666 75 64 74. Lunes a viernes de 8:00 a 18:30 y sábados de 8:00 a 12:00.",
  body: `
${pagehead("imgRH_5.jpg", "Contacto", "Llámanos, escríbenos o preséntate.", "Estamos a pie de la A-4, en el Polígono Industrial «Los Olivos» de Getafe. Para el lavado no hace falta cita; para engrase, aceite o desinfección conviene avisar antes.")}

<section class="section">
  <div class="shell">
    <div class="slab">
      <div class="slab__body" data-reveal>
        <p class="label">Datos</p>
        <h2>Directo, sin centralita.</h2>
        <dl class="dl">
          <div>
            <dt>Teléfonos</dt>
            <dd><a href="tel:+34${EMPRESA.tel1}">${EMPRESA.tel1fmt}</a> · <a href="tel:+34${EMPRESA.tel2}">${EMPRESA.tel2fmt}</a></dd>
          </div>
          <div>
            <dt>WhatsApp</dt>
            <dd><a href="https://wa.me/${EMPRESA.wa}" target="_blank" rel="noopener">${EMPRESA.tel2fmt}</a></dd>
          </div>
          <div>
            <dt>Correo</dt>
            <dd><a href="mailto:${EMPRESA.email}">${EMPRESA.email}</a></dd>
          </div>
          <div>
            <dt>Dirección</dt>
            <dd>${EMPRESA.calle}<br>${EMPRESA.poligono}<br>${EMPRESA.cp}</dd>
          </div>
          <div>
            <dt>Horario</dt>
            <dd>Lunes a viernes de 8:00 a 18:30<br>Sábados de 8:00 a 12:00</dd>
          </div>
          <div>
            <dt>Acceso</dt>
            <dd>N-IV / A-4, kilómetro 12,600. Salida al Polígono Los Olivos.</dd>
          </div>
        </dl>
        <div class="btn-row" style="margin-top:1.8rem">
          <a class="btn btn--rh btn--lg" href="tel:+34${EMPRESA.tel1}">${ico.tel} ${EMPRESA.tel1fmt}</a>
          <a class="btn btn--wa btn--lg" href="https://wa.me/${EMPRESA.wa}" target="_blank" rel="noopener">${ico.wa} WhatsApp</a>
        </div>
      </div>

      <div class="slab__media" data-reveal data-reveal-delay="1">
        <div class="note">
          <p class="label">Presupuesto</p>
          <h3 style="margin-bottom:1.2rem">Cuéntanos qué necesitas</h3>
          <form class="form" id="form-contacto" novalidate>
            <p class="formstatus" id="form-estado" role="status" aria-live="polite"></p>
            <div class="form__grid">
              <div class="field">
                <label for="f-nombre">Nombre o empresa <span class="req" aria-hidden="true">*</span></label>
                <input id="f-nombre" name="nombre" type="text" autocomplete="organization" required>
                <p class="err"></p>
              </div>
              <div class="field">
                <label for="f-tel">Teléfono</label>
                <input id="f-tel" name="telefono" type="tel" inputmode="tel" autocomplete="tel" placeholder="600 00 00 00">
                <p class="err"></p>
              </div>
            </div>
            <div class="field">
              <label for="f-email">Email</label>
              <input id="f-email" name="email" type="email" autocomplete="email" placeholder="nombre@empresa.es">
              <p class="err"></p>
            </div>
            <div class="form__grid">
              <div class="field">
                <label for="f-servicio">Servicio</label>
                <select id="f-servicio" name="servicio">
                  <option>Lavado exterior</option>
                  <option>Lavado de bajos</option>
                  <option>Desinfección de frigo o caja</option>
                  <option>Lavado o petroleado de motor</option>
                  <option>Engrase</option>
                  <option>Aceite, filtros o valvulina</option>
                  <option>Recambios</option>
                  <option>Varios servicios</option>
                </select>
              </div>
              <div class="field">
                <label for="f-vehiculo">Vehículo</label>
                <input id="f-vehiculo" name="vehiculo" type="text" placeholder="Tractora + frigo, cisterna…">
              </div>
            </div>
            <div class="field">
              <label for="f-mensaje">Qué necesitas <span class="req" aria-hidden="true">*</span></label>
              <textarea id="f-mensaje" name="mensaje" required placeholder="Ej.: tractora con semirremolque frigorífico, lavado exterior y desinfección con certificado. ¿Para el jueves por la mañana?"></textarea>
              <p class="err"></p>
            </div>
            <div class="field">
              <label class="consent" for="f-consent">
                <input id="f-consent" name="consentimiento" type="checkbox" required>
                <span>He leído y acepto la <a href="assets/docs/PoliticaDePrivacidad.pdf" target="_blank" rel="noopener">política de privacidad</a> y que uséis mis datos para responderme.</span>
              </label>
              <p class="err"></p>
            </div>
            <button class="btn btn--agua btn--lg btn--block" type="submit">Enviar solicitud</button>
            <p class="formnote">Te respondemos en horario de taller. Si tienes prisa, llama al <a href="tel:+34${EMPRESA.tel1}">${EMPRESA.tel1fmt}</a>: es lo más rápido.</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--deep" id="comollegar">
  <div class="shell shell--wide">
    <div class="section__head" data-reveal>
      <p class="label">Cómo llegar</p>
      <h2>Salida del kilómetro 12,600 de la A-4.</h2>
      <p>Bajando desde Madrid por la A-4 hacia Andalucía, se sale al Polígono Industrial «Los Olivos» y se sigue por la calle Empleo. La nave tiene el rótulo azul de RH Hidrolavados sobre el cierre.</p>
    </div>
    <div class="btn-row" style="margin-bottom:1.6rem" data-reveal>
      <a class="btn btn--agua btn--lg" href="${EMPRESA.ruta}" target="_blank" rel="noopener">${ico.pin} Abrir ruta en Google Maps</a>
    </div>
    <div class="mapframe" data-reveal>
      <iframe src="${EMPRESA.mapa}" title="Mapa de situación de RH Hidrolavados SL en la calle Empleo 17, Getafe" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="slab">
      <div class="slab__media puddle" data-reveal>
        <img src="assets/img/thumb/RH_001_1.jpg" alt="Acceso a la nave de RH Hidrolavados desde la calle Empleo, Polígono Los Olivos de Getafe" width="900" height="640" loading="lazy" decoding="async">
      </div>
      <div class="slab__body" data-reveal data-reveal-delay="1">
        <p class="label">Al llegar</p>
        <h2>Se entra por el cierre grande.</h2>
        <p>Hay sitio para maniobrar delante de la nave. Entra por el cierre y espera dentro: el operario te dice en qué calle te pones según lo que vengas a hacer.</p>
        <p class="muted">Si llegas fuera de horario o el cierre está bajado, llama antes de aparcar el conjunto.</p>
      </div>
    </div>
  </div>
</section>

${closer("imgRH_2.jpg", "Estamos abiertos ahora mismo, casi seguro.", "De lunes a viernes de 8:00 a 18:30 y los sábados de 8:00 a 12:00. Llama y te decimos cómo está la nave antes de que te desvíes.")}
`,
});

/* ------------------------------------------------------------- Escritura */
mkdirSync(ROOT, { recursive: true });
for (const p of paginas) {
  writeFileSync(join(ROOT, p.file), page(p), "utf8");
  console.log("→", p.file);
}

/* Extras */
const urls = paginas
  .map(
    (p) => `  <url><loc>${EMPRESA.base}/${p.file === "index.html" ? "" : p.file}</loc><changefreq>monthly</changefreq><priority>${p.file === "index.html" ? "1.0" : "0.8"}</priority></url>`
  )
  .join("\n");
writeFileSync(
  join(ROOT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  "utf8"
);
writeFileSync(join(ROOT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${EMPRESA.base}/sitemap.xml\n`, "utf8");

writeFileSync(
  join(ROOT, "404.html"),
  page({
    file: "404.html",
    key: "",
    title: "Página no encontrada — RH Hidrolavados SL",
    desc: "La página que buscas no existe. Vuelve al inicio o llámanos al 91 684 57 93.",
    body: `
${pagehead("imgRH_3.jpg", "Error 404", "Esta página no está en la nave.", "El enlace que has seguido ya no existe o se ha escrito mal. Desde aquí puedes volver al inicio, ver las tarifas o llamarnos directamente.")}
<section class="section">
  <div class="shell">
    <div class="btn-row">
      <a class="btn btn--agua btn--lg" href="index.html">Volver al inicio</a>
      <a class="btn btn--ghost btn--lg" href="tarifas.html">Ver tarifas</a>
      <a class="btn btn--rh btn--lg" href="tel:+34${EMPRESA.tel1}">${ico.tel} ${EMPRESA.tel1fmt}</a>
    </div>
  </div>
</section>`,
  }),
  "utf8"
);
console.log("→ sitemap.xml, robots.txt, 404.html");
