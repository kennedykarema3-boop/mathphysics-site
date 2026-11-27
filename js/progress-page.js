/* =========================================================
   progress-page.js — shows every topic with the student's
   best score, attempts and a link to study or retry.
   ========================================================= */

function renderProgressPage() {
  const progress = loadProgress();
  const attempted = TOPICS.filter(function (t) { return progress[t.id]; });
  const mastered = attempted.filter(function (t) {
    return progress[t.id].score / progress[t.id].total >= 0.8;
  });
  const average = attempted.length
    ? Math.round(attempted.reduce(function (sum, t) {
        return sum + progress[t.id].score / progress[t.id].total;
      }, 0) / attempted.length * 100)
    : 0;

  document.getElementById("summary").innerHTML = `
    <div class="stat"><b>${attempted.length}/${TOPICS.length}</b><span>topics attempted</span></div>
    <div class="stat"><b>${mastered.length}</b><span>mastered (80%+)</span></div>
    <div class="stat"><b>${average}%</b><span>average best score</span></div>`;

  document.getElementById("progress-list").innerHTML = TOPICS.map(function (t) {
    const p = progress[t.id];
    const percent = p ? Math.round((p.score / p.total) * 100) : 0;
    let status = "Not started";
    let statusClass = "none";
    if (p && percent >= 80) { status = "Mastered"; statusClass = "good"; }
    else if (p) { status = "Keep practising"; statusClass = "mid"; }

    return `
      <div class="progress-item">
        <div class="progress-item-top">
          <div>
            <span class="tag ${subjectClass(t.subject)}">${t.subject}</span>
            <a href="topic.html?id=${t.id}" class="progress-title">${t.title}</a>
          </div>
          <span class="status ${statusClass}">${status}</span>
        </div>
        <div class="mini-bar"><div style="width:${percent}%"></div></div>
        <div class="progress-item-bottom">
          <span>${p ? `Best ${p.score}/${p.total} (${percent}%) · Last ${p.last}/${p.total} · ${p.attempts} attempt${p.attempts === 1 ? "" : "s"}` : "No attempts yet"}</span>
          <a class="btn btn-small" href="quiz.html?id=${t.id}">${p ? "Retry quiz" : "Start quiz"}</a>
        </div>
      </div>`;
  }).join("");
}

document.getElementById("reset").addEventListener("click", function () {
  if (confirm("Delete all your saved quiz scores on this device?")) {
    resetProgress();
    renderProgressPage();
  }
});

renderProgressPage();
