/* =========================================================
   layout.js — the shared header, menu and footer, plus the
   "install as an app" features. Every page has
   <div id="site-header"></div> and <div id="site-footer"></div>;
   this file fills them in.
   To add a page to the menu, add ONE line to NAV_LINKS
   below and it appears on every page.
   ========================================================= */

const NAV_LINKS = [
  { href: "index.html",          label: "Topics",        page: "home" },
  { href: "quiz.html?id=mixed",  label: "Practice",      page: "practice" },
  { href: "kcse.html",            label: "KCSE Practice", page: "kcse" },
  { href: "structured-papers.html", label: "Timed Exams",    page: "kcse" },
  { href: "formulas.html",       label: "Formula Sheet", page: "formulas" },
  { href: "simulation.html",     label: "Simulation",    page: "simulation" },
  { href: "progress.html",       label: "My Progress",   page: "progress" },
  { href: "about.html",          label: "About",         page: "about" }
];

/* ---------- Small storage helpers (never crash if storage is blocked) ---------- */
function storeGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function storeSet(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}

/* ---------- Dark mode: remember the choice ---------- */
const THEME_KEY = "mathphysics-theme";

// No saved choice yet? Follow the phone/computer setting.
function preferredTheme() {
  const saved = storeGet(THEME_KEY);
  if (saved) return saved;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme, save) {
  document.documentElement.setAttribute("data-theme", theme);
  if (save) storeSet(THEME_KEY, theme);
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
  // Colour of the phone's status bar
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#0d1a28" : "#1f4e79");
}

// Apply the theme straight away to avoid a flash of the wrong colours
document.documentElement.setAttribute("data-theme", preferredTheme());

/* ---------- Build the header and footer ---------- */
function buildLayout() {
  let currentPage = document.body.dataset.page; // set in each HTML file
  if (currentPage === "quiz" && new URLSearchParams(location.search).get("id") === "mixed") currentPage = "practice";
  if (currentPage === "topic" || currentPage === "quiz") currentPage = "home"; // they belong under Topics

  const links = NAV_LINKS.map(function (link) {
    const active = link.page === currentPage ? ' class="active" aria-current="page"' : "";
    return `<a href="${link.href}"${active}>${link.label}</a>`;
  }).join("");

  document.getElementById("site-header").innerHTML = `
    <header class="site-header">
      <a href="index.html" class="logo"><img src="icons/icon.svg" alt="" width="30" height="30"><span class="logo-text">Math<em>Physics</em> Hub</span></a>
      <div class="header-buttons">
        <button id="install-btn" class="install-btn" hidden>⬇ Install app</button>
        <button id="theme-toggle" class="icon-btn" aria-label="Switch light or dark mode">🌙</button>
        <button id="menu-toggle" class="icon-btn menu-btn" aria-label="Open menu" aria-expanded="false">☰</button>
      </div>
      <nav id="main-nav">${links}<button class="nav-install install-trigger" hidden>⬇ Install app</button></nav>
    </header>`;

  document.getElementById("site-footer").innerHTML = `
    <footer class="site-footer">
      <nav class="footer-nav">${links}</nav>
      <p>&copy; ${new Date().getFullYear()} MathPhysics Hub · Learn. Practise. Master.</p>
    </footer>
    <div id="toast" class="toast" role="status" aria-live="polite" hidden></div>
    <div id="ios-help" class="modal" hidden>
      <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="ios-help-title">
        <h2 id="ios-help-title">Install MathPhysics Hub</h2>
        <ol>
          <li>Tap the <b>Share</b> button <span class="share-icon">⬆︎</span> at the bottom (or top) of Safari.</li>
          <li>Scroll down and tap <b>Add to Home Screen</b>.</li>
          <li>Tap <b>Add</b>. The app appears on your home screen and works offline.</li>
        </ol>
        <button class="btn" id="ios-help-close">Got it</button>
      </div>
    </div>`;

  // Dark mode button
  applyTheme(preferredTheme(), false);
  document.getElementById("theme-toggle").addEventListener("click", function () {
    const now = document.documentElement.getAttribute("data-theme");
    applyTheme(now === "dark" ? "light" : "dark", true);
  });

  // Mobile menu button
  const menuBtn = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  menuBtn.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });

  document.getElementById("ios-help-close").addEventListener("click", function () {
    document.getElementById("ios-help").hidden = true;
  });
}

/* ---------- Toast: a small message at the bottom of the screen ---------- */
let toastTimer;
function showToast(message, actionLabel, action) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.innerHTML = `<span>${message}</span>` + (actionLabel ? `<button class="toast-action">${actionLabel}</button>` : "");
  toast.hidden = false;
  if (actionLabel) toast.querySelector(".toast-action").addEventListener("click", function () {
    toast.hidden = true;
    action();
  });
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { toast.hidden = true; }, actionLabel ? 12000 : 4000);
}

/* =========================================================
   INSTALL AS AN APP (Progressive Web App)
   - Android / Chrome / Edge: the browser fires
     "beforeinstallprompt"; we show our own Install button.
   - iPhone / iPad (Safari): no prompt exists, so the button
     opens step-by-step instructions instead.
   ========================================================= */
let installPrompt = null;

function isInstalled() {
  return (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) ||
         window.navigator.standalone === true;
}

function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) ||
         (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

function canInstall() {
  return !isInstalled() && (installPrompt !== null || isIOS());
}

// Show or hide every install button on the page (header + home banner)
function updateInstallUI() {
  const show = canInstall();
  document.querySelectorAll("#install-btn, .install-trigger").forEach(function (el) { el.hidden = !show; });
  const banner = document.getElementById("install-banner");
  if (banner) banner.hidden = !show || storeGet("mathphysics-hide-install") === "1";
}

function startInstall() {
  if (installPrompt) {
    installPrompt.prompt();
    installPrompt.userChoice.then(function () {
      installPrompt = null;
      updateInstallUI();
    });
  } else if (isIOS()) {
    document.getElementById("ios-help").hidden = false;
  }
}

window.addEventListener("beforeinstallprompt", function (event) {
  event.preventDefault();       // stop the browser's mini bar; we use our own button
  installPrompt = event;
  updateInstallUI();
});

window.addEventListener("appinstalled", function () {
  installPrompt = null;
  updateInstallUI();
  showToast("🎉 Installed! Find MathPhysics Hub on your home screen.");
});

document.addEventListener("click", function (event) {
  if (event.target.closest("#install-btn, .install-trigger")) startInstall();
  if (event.target.closest(".install-dismiss")) {
    storeSet("mathphysics-hide-install", "1");
    updateInstallUI();
  }
});

/* ---------- Offline / back online messages ---------- */
window.addEventListener("offline", function () {
  showToast("📴 You're offline. Notes, quizzes and the simulation still work.");
});
window.addEventListener("online", function () {
  showToast("✅ Back online.");
});

/* ---------- Service worker: saves the site for offline use ---------- */
if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").then(function (reg) {
      // A new version of the site was downloaded in the background
      function offerUpdate(worker) {
        showToast("New lessons and fixes are ready.", "Update", function () {
          worker.postMessage("skipWaiting");
        });
      }
      if (reg.waiting && navigator.serviceWorker.controller) offerUpdate(reg.waiting);
      reg.addEventListener("updatefound", function () {
        const worker = reg.installing;
        worker.addEventListener("statechange", function () {
          if (worker.state === "installed" && navigator.serviceWorker.controller) offerUpdate(worker);
        });
      });
    }).catch(function () { /* offline support unavailable: site still works */ });

    // Reload only when an OLD version is replaced (not on the very first visit)
    const hadController = !!navigator.serviceWorker.controller;
    let reloading = false;
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (reloading || !hadController) return;
      reloading = true;
      location.reload();
    });
  });
}

buildLayout();
updateInstallUI();
