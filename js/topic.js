/* =========================================================
   topic.js — reads ?id=... from the address bar, finds that
   topic in data.js and shows its formulas, notes, worked
   examples and links to the quiz and neighbouring topics.
   ========================================================= */

const params = new URLSearchParams(window.location.search);
const topic = getTopicById(params.get("id"));

if (!topic) {
  document.getElementById("topic-header").innerHTML =
    "<h1>Topic not found</h1><p>Go back to <a href='index.html'>all topics</a> and choose one.</p>";
  document.getElementById("notes-section").hidden = true;
  document.getElementById("examples-section").hidden = true;
} else {
  document.title = topic.title + " — MathPhysics Hub";
  recordActivity(topic.id); // counts towards the study streak, powers "Continue"
  const best = getBestScore(topic.id);

  // Breadcrumb: Topics › Mathematics › Quadratic Equations
  document.getElementById("breadcrumb").innerHTML =
    `<a href="index.html">Topics</a> › ${topic.subject} › <span>${topic.title}</span>`;

  // Title area
  document.getElementById("topic-header").innerHTML = `
    <span class="tag ${subjectClass(topic.subject)}">${topic.subject}</span>
    <span class="level">${topic.level}</span>
    <h1>${topic.title}</h1>
    <p class="lead">${topic.summary}</p>
    ${best ? `<p class="score-badge">Your best quiz score: ${best.score}/${best.total}</p>` : ""}`;

  // Key formulas box
  if (topic.formulas && topic.formulas.length) {
    document.getElementById("key-formulas").innerHTML = `
      <h2>Key formulas</h2>
      <ul>${topic.formulas.map(function (f) { return `<li>${f}</li>`; }).join("")}</ul>`;
  }

  // Notes
  document.getElementById("notes").innerHTML = topic.notes.map(function (note) {
    return `
      <div class="note">
        <h3>${note.heading}</h3>
        <div>${note.body}</div>
      </div>`;
  }).join("");

  // Worked examples: solution hidden until the student clicks
  document.getElementById("examples").innerHTML = topic.examples.map(function (ex, i) {
    const steps = ex.steps.map(function (s) { return `<li>${s}</li>`; }).join("");
    return `
      <div class="example">
        <p class="example-q"><b>Example ${i + 1}:</b> ${ex.question}</p>
        <p class="hint">Try it yourself first, then check the working.</p>
        <button class="btn btn-light toggle-steps">Show solution</button>
        <div class="solution" hidden>
          <ol>${steps}</ol>
          <p class="answer">Answer: ${ex.answer}</p>
        </div>
      </div>`;
  }).join("");

  document.querySelectorAll(".toggle-steps").forEach(function (button) {
    button.addEventListener("click", function () {
      const solution = button.nextElementSibling;
      solution.hidden = !solution.hidden;
      button.textContent = solution.hidden ? "Show solution" : "Hide solution";
    });
  });

  // Call to action
  document.getElementById("cta").innerHTML = `
    <p>Ready to test yourself?</p>
    <a class="btn" href="quiz.html?id=${topic.id}">Take the ${topic.title} quiz →</a>`;

  // Previous / next topic links (follow the order in data.js)
  const index = TOPICS.indexOf(topic);
  const prev = TOPICS[index - 1];
  const next = TOPICS[index + 1];
  document.getElementById("pager").innerHTML = `
    ${prev ? `<a class="pager-link" href="topic.html?id=${prev.id}"><span>← Previous</span>${prev.title}</a>` : "<span></span>"}
    ${next ? `<a class="pager-link next" href="topic.html?id=${next.id}"><span>Next →</span>${next.title}</a>` : "<span></span>"}`;
}
