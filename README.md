# MathPhysics Hub — Maths & Physics learning website

Plain HTML, CSS and JavaScript. No server or database needed: open `index.html`
in a browser, or in VS Code right-click `index.html` → "Open with Live Server".

## Pages

| Page              | What it does                                                    |
|-------------------|-----------------------------------------------------------------|
| `index.html`      | Home: search, Maths/Physics filter, topic cards with progress   |
| `topic.html`      | Key formulas, notes, worked examples, previous/next topic       |
| `quiz.html`       | Shuffled quiz, instant marking, explanations, answer review     |
| `formulas.html`   | Every formula from every topic, printable                       |
| `simulation.html` | Interactive projectile-motion simulation                        |
| `progress.html`   | Scores, attempts and mastery for every topic                    |
| `about.html`      | Your story and contact details (edit this!)                     |
| `quiz.html?id=mixed` | Mixed Practice: 10 random questions from all topics          |
| `kcse.html` | KCSE-style Mathematics and Physics objective practice: 15 questions per subject |
| `past-papers.html` | Year-labelled Mathematics and Physics past-paper archives, 2011–2025 |
| `exam-room.html` | Timed KCSE exam room with countdown, answer booklet, auto-submit and self-marking |
| `structured-papers.html` | Four timed structured papers with working space and self-marking schemes |
| `offline.html`    | Shown if a student opens a page offline that was never saved    |

## Install as an app (PWA)

The site is a **Progressive Web App**: students can install it on their phone
and it works **without internet** after the first visit.

- **Android (Chrome):** an orange **Install app** button appears (header on computers,
  inside the ☰ menu on phones, and a banner on the home page). Tap it → Install.
- **iPhone (Safari):** the same button shows steps: Share → Add to Home Screen.
- Files that make this work: `manifest.webmanifest` (app name, colours, icons),
  `sw.js` (saves files for offline use), `icons/` (app icons).
- Installing only works on **https** (GitHub Pages and Netlify are fine) or localhost.

**Every time you change a file, open `sw.js` and bump `CACHE_NAME`**
(`mathphysics-v2` → `mathphysics-v3`). Installed apps then show a
"New lessons and fixes are ready — Update" message.
If you add a new page or JS file, also add it to the `FILES` list in `sw.js`.

## Other features

- **Study streak & week chart** on the home page (opening a topic or finishing a quiz counts).
- **Continue where you left off** card.
- **Mixed Practice** with "topics to revise" based on wrong answers.
- **Share my score** button (phone share menu, or WhatsApp on computers).
- Dark mode follows the phone's setting until the student picks one.

## How the files are connected

```
every page ──loads──> js/data.js      (all the content)
           ──loads──> js/progress.js  (saved scores)
exam-room.html ──loads──> js/past-papers-data.js + js/exam-room.js
structured-papers.html ──loads──> js/structured-papers.js + js/structured-exam.js
           ──loads──> js/layout.js    (shared header, menu, footer, dark mode)
           ──loads──> its own script  (home.js, topic.js, quiz.js, ...)
           ──uses───> css/style.css   (all the styling)
```

- **Menu:** edit `NAV_LINKS` at the top of `js/layout.js` once, and it changes on every page.
- **Content:** edit `js/data.js` and `js/extra-topics.js` and `js/new-topics.js` for lesson content; edit `js/past-papers-data.js` for year-labelled external archives; `js/exam-room.js` controls official-time timed sittings and `js/kcse-data.js` for the objective practice bank and `js/structured-papers.js` for timed structured papers. The home page, topic pages, quizzes,
  formula sheet and progress page all update automatically.
- **Colours:** edit `:root` (light) and `[data-theme="dark"]` at the top of `css/style.css`.

## How to add a new topic

1. Open `js/data.js` and copy a whole topic block, from `{` to `},`.
2. Paste it inside the `TOPICS` list, in the order you want it shown.
3. Give it a new unique `id` (lowercase with hyphens, e.g. `"newtons-laws"`).
4. Change the `title`, `formulas`, `notes`, `examples` and `quiz`.
   In each quiz question, `answer` is the position of the correct option counting
   from 0 (first = 0, second = 1, ...). Options are shuffled on screen automatically.

## How to add a new page

1. Copy `about.html`, rename it (e.g. `pastpapers.html`) and set `<body data-page="pastpapers">`.
2. Add one line to `NAV_LINKS` in `js/layout.js`:
   `{ href: "pastpapers.html", label: "Past Papers", page: "pastpapers" },`

## Putting it online for free

- **Netlify:** drag and drop the folder at app.netlify.com/drop.
- **GitHub Pages:** upload the files to a GitHub repository, then Settings → Pages.

## Ideas for the next version

- Expand the question bank and add more fully worked topic quizzes.
- KaTeX library for textbook-style formulas.
- User accounts and a database (Firebase or Supabase) so progress follows the student.
- M-Pesa payments for premium content.
