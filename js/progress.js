/* =========================================================
   progress.js — saves each student's quiz results in the
   browser (localStorage). Used by the home, quiz and
   progress pages. Wrapped in try/catch because some browsers
   block storage (e.g. private mode); the site still works.
   ========================================================= */

const PROGRESS_KEY = "mathphysics-progress";

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function writeProgress(progress) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (e) {
    /* storage blocked: ignore */
  }
}

/* Record one finished quiz: keeps the best score, last score and attempt count */
function saveQuizResult(topicId, score, total) {
  const progress = loadProgress();
  const old = progress[topicId] || { score: 0, total: total, attempts: 0 };
  progress[topicId] = {
    score: Math.max(old.score, score),  // best score
    last: score,
    total: total,
    attempts: (old.attempts || 0) + 1
  };
  writeProgress(progress);
}

function getBestScore(topicId) {
  return loadProgress()[topicId] || null;
}

function resetProgress() {
  writeProgress({});
}

/* Small helper used by several pages */
function subjectClass(subject) {
  return subject === "Physics" ? "physics" : "maths";
}
