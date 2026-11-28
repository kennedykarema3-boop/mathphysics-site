/* =========================================================
   sw.js — the "service worker". It saves a copy of every
   file on the student's phone so the app opens and works
   with NO internet (great for saving data bundles).

   IMPORTANT: whenever you change ANY file on the site,
   change the version number below (v2 → v3 ...). That tells
   phones to download the new files.
   ========================================================= */

const CACHE_NAME = "mathphysics-v7";

// Every file the app needs to work offline
const FILES = [
  "./",
  "index.html",
  "topic.html",
  "quiz.html",
  "kcse.html",
  "past-papers.html",
  "exam-room.html",
  "structured-papers.html",
  "formulas.html",
  "simulation.html",
  "progress.html",
  "about.html",
  "offline.html",
  "css/style.css",
  "js/data.js",
  "js/extra-topics.js",
  "js/new-topics.js",
  "js/past-papers-data.js",
  "js/past-papers.js",
  "js/exam-room.js",
  "js/kcse-data.js",
  "js/kcse.js",
  "js/structured-papers.js",
  "js/structured-exam.js",
  "js/progress.js",
  "js/layout.js",
  "js/home.js",
  "js/topic.js",
  "js/quiz.js",
  "js/formulas.js",
  "js/simulation.js",
  "js/progress-page.js",
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable-512.png",
  "icons/apple-touch-icon.png"
];

// 1. Install: download and save all the files
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      // Save each file separately so one missing file can't break offline mode
      return Promise.all(FILES.map(function (f) {
        return cache.add(f).catch(function () { console.warn("Could not cache:", f); });
      }));
    })
  );
});

// 2. Activate: delete copies saved by older versions
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(names.filter(function (n) { return n !== CACHE_NAME; })
        .map(function (n) { return caches.delete(n); }));
    }).then(function () { return self.clients.claim(); })
  );
});

// The page asks us to switch to the new version straight away
self.addEventListener("message", function (event) {
  if (event.data === "skipWaiting") self.skipWaiting();
});

// 3. Fetch: answer from the saved copy first (fast + offline),
//    and quietly refresh that copy from the internet in the background.
self.addEventListener("fetch", function (event) {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  // topic.html?id=... and topic.html share one saved copy
  const key = url.origin + url.pathname;

  event.respondWith(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.match(key).then(function (saved) {
        const fromNetwork = fetch(request).then(function (response) {
          if (response.ok && response.type === "basic") cache.put(key, response.clone());
          return response;
        }).catch(function () {
          if (saved) return saved;
          if (request.mode === "navigate") return cache.match("offline.html");
          return Response.error();
        });
        return saved || fromNetwork;
      });
    })
  );
});
