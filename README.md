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

## How the files are connected

```
every page ──loads──> js/data.js      (all the content)
           ──loads──> js/progress.js  (saved scores)
           ──loads──> js/layout.js    (shared header, menu, footer, dark mode)
           ──loads──> its own script  (home.js, topic.js, quiz.js, ...)
           ──uses───> css/style.css   (all the styling)
```

- **Menu:** edit `NAV_LINKS` at the top of `js/layout.js` once, and it changes on every page.
- **Content:** edit `js/data.js` only. The home page, topic pages, quizzes,
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

- More topics and KCSE past-paper questions.
- KaTeX library for textbook-style formulas.
- User accounts and a database (Firebase or Supabase) so progress follows the student.
- M-Pesa payments for premium content.
