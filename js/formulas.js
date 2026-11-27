/* =========================================================
   formulas.js — builds the formula sheet from data.js,
   grouped by subject. New topics appear here automatically.
   ========================================================= */

const subjects = ["Mathematics", "Physics"];

document.getElementById("formula-sheet").innerHTML = subjects.map(function (subject) {
  const topics = TOPICS.filter(function (t) {
    return t.subject === subject && t.formulas && t.formulas.length;
  });
  if (!topics.length) return "";

  const blocks = topics.map(function (t) {
    return `
      <div class="formula-block">
        <h3><a href="topic.html?id=${t.id}">${t.title}</a></h3>
        <ul>${t.formulas.map(function (f) { return `<li>${f}</li>`; }).join("")}</ul>
      </div>`;
  }).join("");

  return `
    <section>
      <h2 class="section-title ${subjectClass(subject)}-title">${subject}</h2>
      <div class="formula-grid">${blocks}</div>
    </section>`;
}).join("");
