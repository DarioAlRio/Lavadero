/* ===========================================================================
   RH Hidrolavados SL — comportamiento de interfaz
   Sin dependencias. Todo degrada a HTML utilizable si falla el JavaScript.
   ========================================================================= */
(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ------------------------------------------------------- Año en el pie */
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------------------------------- Cabecera: compresión y progreso */
  var nav = $(".nav");
  var progress = $(".nav__progress");
  var thumbbar = $(".thumbbar");
  var ticking = false;

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (nav) nav.classList.toggle("is-stuck", y > 8);
    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = "scaleX(" + (h > 0 ? Math.min(1, y / h) : 0) + ")";
    }
    if (thumbbar) thumbbar.classList.toggle("is-visible", y > 240);
    ticking = false;
  }
  function requestScroll() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }
  window.addEventListener("scroll", requestScroll, { passive: true });
  window.addEventListener("resize", requestScroll);
  onScroll();

  /* ------------------------------- Foco de luz que persigue el puntero */
  var menu = $(".nav__menu");
  var glow = $(".nav__glow");
  if (menu && glow) {
    // El foco es una caja de 100px que sólo se traslada y escala: cero reflujo.
    var moveGlow = function (item) {
      glow.style.transform =
        "translate3d(" + item.offsetLeft + "px,0,0) scaleX(" + item.offsetWidth / 100 + ")";
    };
    $$(".nav__link", menu).forEach(function (link) {
      link.addEventListener("mouseenter", function () { moveGlow(link); });
      link.addEventListener("focus", function () { moveGlow(link); });
    });
    var current = $('.nav__link[aria-current="page"]', menu);
    if (current) {
      // Coloca el foco sobre la página activa sin mostrarlo hasta que haya interacción.
      window.requestAnimationFrame(function () { moveGlow(current); });
    }
  }

  /* --------------------------------------------------- Menú móvil */
  var burger = $(".burger");
  var drawer = $("#menu-movil");
  var lastFocus = null;

  function focusables() {
    return $$("a[href], button:not([disabled]), input, select, textarea", drawer)
      .filter(function (el) { return el.offsetParent !== null; });
  }

  function openDrawer() {
    if (!drawer || !burger) return;
    lastFocus = document.activeElement;
    drawer.classList.add("is-open");
    drawer.removeAttribute("aria-hidden");
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Cerrar menú");
    document.body.classList.add("is-locked");
    var first = focusables()[0];
    if (first) window.setTimeout(function () { first.focus(); }, 260);
  }

  function closeDrawer(returnFocus) {
    if (!drawer || !burger) return;
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Abrir menú");
    document.body.classList.remove("is-locked");
    if (returnFocus && lastFocus) lastFocus.focus();
  }

  if (burger && drawer) {
    drawer.setAttribute("aria-hidden", "true");
    $$(".drawer__list li", drawer).forEach(function (li, i) { li.style.setProperty("--i", i); });
    var foot = $(".drawer__foot", drawer);
    if (foot) foot.style.setProperty("--i", $$(".drawer__list li", drawer).length);

    burger.addEventListener("click", function () {
      if (burger.getAttribute("aria-expanded") === "true") closeDrawer(true);
      else openDrawer();
    });

    $$("a", drawer).forEach(function (a) {
      a.addEventListener("click", function () { closeDrawer(false); });
    });

    document.addEventListener("keydown", function (e) {
      if (!drawer.classList.contains("is-open")) return;
      if (e.key === "Escape") { closeDrawer(true); return; }
      if (e.key !== "Tab") return;
      var items = focusables();
      if (!items.length) return;
      var first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1060 && drawer.classList.contains("is-open")) closeDrawer(false);
    });
  }

  /* ------------------------------------------------ Aparición al scroll */
  var revealables = $$("[data-reveal]");
  var revealAll = function () { revealables.forEach(function (el) { el.classList.add("is-in"); }); };

  if (reduce || !("IntersectionObserver" in window)) {
    revealAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealables.forEach(function (el) { io.observe(el); });

    // Red de seguridad: si algo impide que el observador se dispare (pestaña en
    // segundo plano al cargar, navegador raro), el contenido aparece igual.
    window.setTimeout(function () {
      io.disconnect();
      revealAll();
    }, 4000);
  }

  /* ----------------------------- Charco: reflejo bajo la fotografía */
  $$(".puddle").forEach(function (fig) {
    var img = $("img", fig);
    if (img && img.getAttribute("src")) {
      fig.style.backgroundImage = 'url("' + img.getAttribute("src") + '")';
    }
  });

  /* ------------------------------------------------------ Visor de fotos */
  var viewer = $(".viewer");
  if (viewer) {
    var vImg = $("img", viewer);
    var vCap = $(".viewer__cap", viewer);
    var items = $$(".gallery__item");
    var index = 0;
    var opener = null;

    function show(i) {
      if (!items.length) return;
      index = (i + items.length) % items.length;
      var item = items[index];
      var full = item.getAttribute("data-full") || $("img", item).getAttribute("src");
      var cap = item.getAttribute("data-caption") || $("img", item).getAttribute("alt") || "";
      vImg.setAttribute("src", full);
      vImg.setAttribute("alt", cap);
      vCap.textContent = cap + "  ·  " + (index + 1) + " / " + items.length;
    }

    function openViewer(i, from) {
      opener = from || null;
      show(i);
      viewer.classList.add("is-open");
      viewer.removeAttribute("aria-hidden");
      document.body.classList.add("is-locked");
      var close = $(".viewer__close", viewer);
      if (close) close.focus();
    }

    function closeViewer() {
      viewer.classList.remove("is-open");
      viewer.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-locked");
      if (opener) opener.focus();
    }

    items.forEach(function (item, i) {
      item.setAttribute("tabindex", "0");
      item.setAttribute("role", "button");
      item.addEventListener("click", function () { openViewer(i, item); });
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openViewer(i, item); }
      });
    });

    $(".viewer__close", viewer).addEventListener("click", closeViewer);
    $(".viewer__prev", viewer).addEventListener("click", function () { show(index - 1); });
    $(".viewer__next", viewer).addEventListener("click", function () { show(index + 1); });
    viewer.addEventListener("click", function (e) { if (e.target === viewer) closeViewer(); });

    document.addEventListener("keydown", function (e) {
      if (!viewer.classList.contains("is-open")) return;
      if (e.key === "Escape") closeViewer();
      else if (e.key === "ArrowLeft") show(index - 1);
      else if (e.key === "ArrowRight") show(index + 1);
    });

    // Deslizar en táctil
    var startX = null;
    viewer.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    viewer.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 48) show(dx > 0 ? index - 1 : index + 1);
      startX = null;
    }, { passive: true });
  }

  /* ---------------------------------------------------------- Formulario */
  var form = $("#form-contacto");
  if (form) {
    var status = $("#form-estado");

    var fail = function (field, msg) {
      var wrap = field.closest(".field");
      wrap.classList.add("is-invalid");
      field.setAttribute("aria-invalid", "true");
      var err = $(".err", wrap);
      if (err) err.textContent = msg;
    };
    var clear = function (field) {
      var wrap = field.closest(".field");
      wrap.classList.remove("is-invalid");
      field.removeAttribute("aria-invalid");
    };

    $$("input, textarea, select", form).forEach(function (f) {
      f.addEventListener("input", function () { clear(f); });
      f.addEventListener("change", function () { clear(f); });
    });

    form.addEventListener("submit", function (e) {
      var ok = true;
      var firstBad = null;

      var nombre = $("#f-nombre", form);
      var email = $("#f-email", form);
      var tel = $("#f-tel", form);
      var mensaje = $("#f-mensaje", form);
      var consent = $("#f-consent", form);

      if (!nombre.value.trim()) { fail(nombre, "Escribe tu nombre o el de la empresa."); ok = false; firstBad = firstBad || nombre; }

      var hasEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim());
      var hasTel = tel.value.replace(/\D/g, "").length >= 9;
      if (!hasEmail && !hasTel) {
        fail(email, "Necesitamos un email válido o un teléfono para responderte.");
        fail(tel, "Nueve dígitos como mínimo.");
        ok = false; firstBad = firstBad || email;
      } else {
        if (email.value.trim() && !hasEmail) { fail(email, "Ese email no parece correcto."); ok = false; firstBad = firstBad || email; }
        if (tel.value.trim() && !hasTel) { fail(tel, "Ese teléfono no parece correcto."); ok = false; firstBad = firstBad || tel; }
      }

      if (mensaje.value.trim().length < 10) { fail(mensaje, "Cuéntanos brevemente qué vehículo es y qué necesitas."); ok = false; firstBad = firstBad || mensaje; }
      if (!consent.checked) { fail(consent, "Marca la casilla para que podamos contestarte."); ok = false; firstBad = firstBad || consent; }

      if (!ok) {
        e.preventDefault();
        if (status) { status.className = "formstatus is-err"; status.textContent = "Revisa los campos marcados y vuelve a enviar."; }
        if (firstBad) firstBad.focus();
        return;
      }

      // Sin endpoint configurado: se abre el correo con todo relleno.
      if (!form.getAttribute("action")) {
        e.preventDefault();
        var cuerpo =
          "Nombre / empresa: " + nombre.value.trim() + "\n" +
          "Email: " + (email.value.trim() || "-") + "\n" +
          "Teléfono: " + (tel.value.trim() || "-") + "\n" +
          "Servicio: " + ($("#f-servicio", form) ? $("#f-servicio", form).value : "-") + "\n" +
          "Vehículo: " + ($("#f-vehiculo", form) ? $("#f-vehiculo", form).value || "-" : "-") + "\n\n" +
          mensaje.value.trim();
        var asunto = "Solicitud de presupuesto — " + nombre.value.trim();
        window.location.href =
          "mailto:rhhidrolavado@gmail.com?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo);
        if (status) {
          status.className = "formstatus is-ok";
          status.textContent = "Abriendo tu programa de correo con la solicitud preparada. Si no se abre, escríbenos a rhhidrolavado@gmail.com o llama al 91 684 57 93.";
        }
      }
    });
  }
})();
