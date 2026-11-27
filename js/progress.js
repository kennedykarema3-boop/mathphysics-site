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
    attempts: (old.attempts || 0) + 1,
    date: todayString()
  };
  writeProgress(progress);
  recordActivity();
}

function getBestScore(topicId) {
  return loadProgress()[topicId] || null;
}

function resetProgress() {
  writeProgress({});
  try { localStorage.removeItem(ACTIVITY_KEY); } catch (e) { /* ignore */ }
}

/* =========================================================
   Study streak and "continue where you left off"
   ========================================================= */
const ACTIVITY_KEY = "mathphysics-activity";

function todayString(date) {
  const d = date || new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function loadActivity() {
  try {
    return JSON.parse(localStorage.getItem(ACTIVITY_KEY)) || { days: [], lastTopic: null };
  } catch (e) {
    return { days: [], lastTopic: null };
  }
}

function writeActivity(activity) {
  try { localStorage.setItem(ACTIVITY_KEY, JSON.stringify(activity)); } catch (e) { /* ignore */ }
}

/* Mark today as a study day (opening a topic or finishing a quiz counts) */
function recordActivity(topicId) {
  const activity = loadActivity();
  const today = todayString();
  if (activity.days.indexOf(today) === -1) activity.days.push(today);
  activity.days = activity.days.slice(-90);     // keep about 3 months
  if (topicId) activity.lastTopic = topicId;
  writeActivity(activity);
}

/* Number of days in a row the student has studied (today or up to yesterday) */
function getStreak() {
  const days = loadActivity().days;
  const day = new Date();
  if (days.indexOf(todayString(day)) === -1) day.setDate(day.getDate() - 1); // streak still alive until tonight
  let streak = 0;
  while (days.indexOf(todayString(day)) !== -1) {
    streak++;
    day.setDate(day.getDate() - 1);
  }
  return streak;
}

function getLastTopicId() {
  return loadActivity().lastTopic;
}

/* Which days of the last 7 had study activity (for the little week chart) */
function getLastSevenDays() {
  const days = loadActivity().days;
  const result = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    result.push({
      label: d.toLocaleDateString("en", { weekday: "narrow" }),
      active: days.indexOf(todayString(d)) !== -1,
      today: i === 0
    });
  }
  return result;
}

/* Small helper used by several pages */
function subjectClass(subject) {
  return subject === "Physics" ? "physics" : "maths";
}
