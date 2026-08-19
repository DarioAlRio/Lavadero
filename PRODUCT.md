# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Responsables de flota, jefes de tráfico y transportistas autónomos del sur de Madrid y del corredor de la N-IV. Llegan casi siempre desde el móvil, muchas veces desde la cabina, con el camión ya en ruta y una ventana corta entre descarga y descarga. Su trabajo inmediato no es "leer una web": es confirmar que este sitio lava su tipo de vehículo, saber cuánto cuesta aproximadamente, y conseguir un teléfono y una ruta en menos de treinta segundos.

Segundo público: gestores de compras de empresas de transporte y logística que evalúan a RH Hidrolavados como proveedor recurrente de mantenimiento de flota, y que necesitan ver servicios, certificados sanitarios y capacidad antes de llamar.

## Product Purpose

RH Hidrolavados SL es un centro de lavado y engrase de vehículos industriales en Getafe (Madrid). El sitio existe para que un transportista que no conoce la empresa entienda en un vistazo qué se hace allí, cuánto cuesta y cómo llegar, y para que llame o se presente. No es un catálogo ni un e-commerce: el éxito es una llamada, un WhatsApp o un camión entrando por la puerta.

## Positioning

Lavado **manual, sin rodillos**, con **fosos propios** para lavar bajos a mano — algo que un túnel de lavado automático no puede ofrecer y que los vehículos especiales (bomberos de aeropuerto, cisternas, góndolas, frigoríficos) necesitan. A eso se suman engrase, cambio de aceite y filtros y desinfección interior con certificado sanitario en el mismo sitio: el camión entra sucio y sale lavado, engrasado y certificado sin mover de nave.

## Operating Context

- Nave industrial en C/ Empleo nº 17, Polígono Industrial "Los Olivos" (N-IV), 28906 Getafe (Madrid), a pie de la A-4 km 12,600.
- Horario: lunes a viernes de 8:00 a 18:30; sábados de 8:00 a 12:00.
- Se atiende tractoras, semirremolques, cisternas, frigoríficos, cajas, furgonetas, turismos y vehículos especiales (en las fotos reales del cliente aparecen camiones de bomberos de AENA Madrid-Barajas, cisternas Praxair, flotas Makro, Mazo, El Mosca y Volum Logistics).
- La decisión de compra ocurre en carretera y por teléfono. El sitio debe funcionar con una mano, con guantes, a pleno sol.

## Capabilities and Constraints

Servicios confirmados (del dominio original):
- Lavado exterior y de bajos de vehículos industriales y especiales; lavado de bajos manual con fosos.
- Desinfección interior de frigos y cajas, con CERTIFICADO SANITARIO.
- Lavado o petroleado de motores.
- Engrase general y centralizado.
- Cambio de aceite, filtros y valvulina de primeras marcas.
- Venta de recambios: filtros Mann (30% dto.), aceite Gulf 15w40 y BP 10w40, jabón de lavado, baterías de primeras marcas.

Tarifas publicadas por el cliente (se conservan literales, como precios "desde"):
lavado exterior desde 20 €; lavado de bajos desde 30 €; engrase desde 15 €; petroleado de motores desde 35 €; lavado interior de cajas o frigos desde 34 € con certificado de desinfección; filtros 1ª marcas 30% dto.; 5 l aceite Gulf 15w40 21 €; 5 l aceite BP 10w40 26 €; jabón lavado camiones 5 l 15 € y 25 l 75 €; baterías 1ª marcas (sin precio).

Restricciones técnicas: sitio estático (HTML/CSS/JS sin build, sin backend). El formulario de contacto no tiene servidor propio; se entrega listo para conectar a un endpoint y con `mailto:` como fallback. Sin analítica ni cookies de terceros más allá del mapa embebido de Google.

Decisiones abiertas: no hay confirmación de que el 666 75 64 74 tenga WhatsApp activo (el usuario pidió el botón; se implementa y se marca como verificable). No hay endpoint de formulario elegido todavía.

## Brand Commitments

- Nombre legal: RH Hidrolavados SL. Anteriormente conocidos como "Los Cuñados".
- Logotipo existente y vinculante: `assets/img/logo_empresa.png` — cinco gotas de agua en azul cian degradado formando un triángulo, con las letras "RH" en rojo sobre ellas.
- Rótulo físico de la nave (visible en casi todas las fotos): "RH HIDROLAVADOS, S.L. / LAVADO CAMIONES / 91 684 57 93" en azul marino sobre blanco. La paleta azul agua + azul marino + rojo RH es identidad real, no una elección estética libre.
- Contacto: 91 684 57 93 · 666 75 64 74 · rhhidrolavado@gmail.com.
- Voz: directa, de gremio, sin marketing hueco. Los transportistas desconfían de la palabrería.

## Evidence on Hand

Reales, descargadas del dominio a `assets/img/` (originales) y `assets/img/thumb/` (900 px):
- `logo_empresa.png` — logotipo oficial.
- `imgRH_2.jpg`, `imgRH_3.jpg` — nave de noche, camión entrando, suelo mojado con reflejos. Las mejores fotos del lote.
- `imgRH_5.jpg`, `imgRH_6.jpg`, `imgRH_7.jpg` — fachada a pleno sol con el rótulo legible y flota Mazo/Volum Logistics.
- `imgRH_1.jpg` — camión de bomberos H-4 de AENA Madrid-Barajas ante la nave. Prueba directa de "vehículos especiales".
- `imgRH_9.jpg` — dos frigoríficos Makro dentro de la nave.
- `RH_008.jpg`, `RH_009.jpg` — tractora MAN con cabina basculada, operario trabajando. Prueba de lavado de motor.
- `RH_005_1.jpg` — cisterna Praxair sobre el foso.
- `RH_001_1.jpg`, `situacion_empresa.jpg` — situación.
- `recambios.jpg` — logos Mann Filter, Gulf, Repsol.
- `ib1.jpg`–`ib4.jpg` — banners antiguos con texto quemado; solo utilizables como textura, no como contenido.

Hechos verificables aportados por el cliente y conservados: más de 25 años de experiencia; más de 5.300 empresas atendidas, nacionales e internacionales.

No existen: testimonios, reseñas, casos de estudio, número de empleados, certificaciones ISO ni precios de baterías. **No se inventan.**

## Product Principles

1. **El teléfono es el producto.** Cada pantalla, en cualquier scroll, deja el teléfono y la ruta a un toque de distancia.
2. **La foto real gana a la ilustración.** El activo diferencial es que las fotos son de esta nave, con estos camiones y este rótulo. La imagen de stock destruiría la única prueba que hay.
3. **Precio a la vista.** El sector oculta tarifas; publicarlas es una ventaja competitiva. Nunca esconder los "desde" tras un formulario.
4. **Manual y con foso, dicho sin rodeos.** La diferencia frente al túnel automático se nombra explícitamente, no se insinúa.
5. **Móvil primero, en carretera.** Objetivos táctiles grandes, contraste alto a pleno sol, cero dependencia de hover, carga rápida con datos móviles.

## Accessibility & Inclusion

Sitio en español para usuarios que a menudo miran la pantalla al sol y con guantes. Objetivo WCAG 2.1 AA: contraste mínimo 4.5:1 en texto, foco visible siempre, navegación completa por teclado, ninguna función exclusiva de hover, y respeto a `prefers-reduced-motion`. El sitio original bloqueaba el clic derecho y las teclas (`oncontextmenu="return false" onkeydown="return false"`); eso se elimina, era una barrera de accesibilidad.
