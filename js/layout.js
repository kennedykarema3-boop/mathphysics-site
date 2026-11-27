/* =========================================================
   layout.js — the shared header, menu and footer.
   Every page has <div id="site-header"></div> and
   <div id="site-footer"></div>; this file fills them in.
   To add a page to the menu, add ONE line to NAV_LINKS
   below and it appears on every page.
   ========================================================= */

const NAV_LINKS = [
  { href: "index.html",      label: "Topics",        page: "home" },
  { href: "formulas.html",   label: "Formula Sheet", page: "formulas" },
  { href: "simulation.html", label: "Simulation",    page: "simulation" },
  { href: "progress.html",   label: "My Progress",   page: "progress" },
  { href: "about.html",      label: "About",         page: "about" }
];

/* ---------- Dark mode: remember the choice ---------- */
const THEME_KEY = "mathphysics-theme";

function getSavedTheme() {
  try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* ignore */ }
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
}

// Apply the saved theme straight away to avoid a flash of the wrong colours
document.documentElement.setAttribute("data-theme", getSavedTheme() || "light");

/* ---------- Build the header and footer ---------- */
function buildLayout() {
  let currentPage = document.body.dataset.page; // set in each HTML file
  if (currentPage === "topic" || currentPage === "quiz") currentPage = "home"; // they belong under Topics

  const links = NAV_LINKS.map(function (link) {
    const active = link.page === currentPage ? ' class="active" aria-current="page"' : "";
    return `<a href="${link.href}"${active}>${link.label}</a>`;
  }).join("");

  document.getElementById("site-header").innerHTML = `
    <header class="site-header">
      <a href="index.html" class="logo">Math<span>Physics</span> Hub</a>
      <div class="header-buttons">
        <button id="theme-toggle" class="icon-btn" aria-label="Switch light or dark mode">🌙</button>
        <button id="menu-toggle" class="icon-btn menu-btn" aria-label="Open menu" aria-expanded="false">☰</button>
      </div>
      <nav id="main-nav">${links}</nav>
    </header>`;

  document.getElementById("site-footer").innerHTML = `
    <footer class="site-footer">
      <nav class="footer-nav">${links}</nav>
      <p>&copy; ${new Date().getFullYear()} MathPhysics Hub · Learn. Practise. Master.</p>
    </footer>`;

  // Dark mode button
  applyTheme(getSavedTheme() || "light");
  document.getElementById("theme-toggle").addEventListener("click", function () {
    const now = document.documentElement.getAttribute("data-theme");
    applyTheme(now === "dark" ? "light" : "dark");
  });

  // Mobile menu button
  const menuBtn = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  menuBtn.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
}

buildLayout();
