/* =========================================================
   home.js — builds the topic cards on the home page, and
   handles search and the Mathematics / Physics filter.
   ========================================================= */

const grid = document.getElementById("topic-grid");
const emptyMsg = document.getElementById("empty");
const searchBox = document.getElementById("search");
const filterButtons = document.querySelectorAll(".filter");

let activeSubject = "All";

function renderTopics() {
  const term = searchBox.value.trim().toLowerCase();

  const list = TOPICS.filter(function (t) {
    const subjectOk = activeSubject === "All" || t.subject === activeSubject;
    const text = (t.title + " " + t.summary + " " + t.subject + " " + t.level).toLowerCase();
    return subjectOk && text.includes(term);
  });

  emptyMsg.hidden = list.length > 0;

  grid.innerHTML = list.map(function (topic) {
    const best = getBestScore(topic.id);
    const percent = best ? Math.round((best.score / best.total) * 100) : 0;
    const badge = best
      ? `<span class="score-badge">Best: ${best.score}/${best.total}</span>`
      : `<span class="score-badge none">Not attempted</span>`;

    return `
      <article class="topic-card">
        <div class="card-top">
          <span class="tag ${subjectClass(topic.subject)}">${topic.subject}</span>
          <span class="level">${topic.level}</span>
        </div>
        <h2><a href="topic.html?id=${topic.id}">${topic.title}</a></h2>
        <p>${topic.summary}</p>
        <div class="mini-bar"><div style="width:${percent}%"></div></div>
        <div class="card-bottom">
          ${badge}
          <div class="card-actions">
            <a class="btn btn-light" href="topic.html?id=${topic.id}">Learn</a>
            <a class="btn" href="quiz.html?id=${topic.id}">Quiz</a>
          </div>
        </div>
      </article>`;
  }).join("");
}

function renderStats() {
  const progress = loadProgress();
  const done = TOPICS.filter(function (t) { return progress[t.id]; }).length;
  const questions = TOPICS.reduce(function (sum, t) { return sum + t.quiz.length; }, 0);
  document.getElementById("hero-stats").innerHTML = `
    <div><b>${TOPICS.length}</b><span>topics</span></div>
    <div><b>${questions}</b><span>quiz questions</span></div>
    <div><b>${done}/${TOPICS.length}</b><span>you've attempted</span></div>`;
}

/* "Today" panel: study streak, this week, continue, quick practice */
function renderToday() {
  const streak = getStreak();
  const week = getLastSevenDays().map(function (d) {
    return `<span class="day${d.active ? " on" : ""}${d.today ? " today" : ""}" title="${d.active ? "Studied" : "No study"}">${d.label}</span>`;
  }).join("");

  const last = getTopicById(getLastTopicId());
  // Suggest: the last topic opened, otherwise the first topic not yet attempted
  const progress = loadProgress();
  const suggestion = last || TOPICS.find(function (t) { return !progress[t.id]; }) || TOPICS[0];
  const label = last ? "Continue where you left off" : "Start here";

  document.getElementById("today").innerHTML = `
    <div class="today-card streak">
      <div class="streak-top">
        <span class="flame">${streak > 0 ? "🔥" : "✨"}</span>
        <div>
          <b>${streak} day${streak === 1 ? "" : "s"}</b>
          <span>${streak > 0 ? "study streak, keep it going!" : "Study today to start a streak"}</span>
        </div>
      </div>
      <div class="week" aria-label="Days studied this week">${week}</div>
    </div>
    <a class="today-card continue" href="topic.html?id=${suggestion.id}">
      <span class="today-label">${label}</span>
      <b>${suggestion.title}</b>
      <span class="tag ${subjectClass(suggestion.subject)}">${suggestion.subject}</span>
    </a>
    <a class="today-card practice" href="quiz.html?id=mixed">
      <span class="today-label">Quick practice</span>
      <b>🎯 10 mixed questions</b>
      <span>All topics, shuffled</span>
    </a>`;
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (b) { b.classList.remove("active"); });
    button.classList.add("active");
    activeSubject = button.dataset.subject;
    renderTopics();
  });
});

searchBox.addEventListener("input", renderTopics);

renderStats();
renderToday();
renderTopics();
