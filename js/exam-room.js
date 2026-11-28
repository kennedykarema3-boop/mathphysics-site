/* KCSE timed exam-room runner.
   Official question PDFs remain on their source sites; this page provides
   the countdown, local answer booklet, submission and self-mark recording. */
(function () {
  "use strict";

  const STORAGE_KEY = "mathphysics-kcse-exam-session-v1";
  const HISTORY_KEY = "mathphysics-kcse-exam-history-v1";
  const params = new URLSearchParams(window.location.search);
  const $ = id => document.getElementById(id);

  const setup = $("exam-setup");
  const active = $("exam-active");
  const finished = $("exam-finished");
  const subjectSelect = $("setup-subject");
  const yearSelect = $("setup-year");
  const paperSelect = $("setup-paper");
  const sourceLink = $("open-question-source");
  const paperMeta = $("paper-meta");
  const answerRows = $("answer-rows");

  let session = null;
  let tickHandle = null;

  function durationFor(subject) {
    return subject === "Mathematics" ? 150 : 120;
  }

  function marksFor(subject) {
    return subject === "Mathematics" ? 100 : 80;
  }

  function sourceFor(subject, year) {
    if (subject === "Mathematics" && year >= 2017) {
      return "https://www.masomofiti.co.ke/kcse-past-papers/mathematics/" + year;
    }
    if (subject === "Physics" && (year === 2025 || year === 2020)) {
      return "https://www.masomofiti.co.ke/kcse-past-papers/physics/" + year;
    }
    return KCSE_PAST_PAPER_ARCHIVES[subject].archive;
  }

  function sourceDescription(subject, year) {
    if (subject === "Mathematics" && year >= 2017) return "Year-specific Mathematics " + year + " archive. Locate Paper " + paperSelect.value + " and download the question PDF.";
    if (subject === "Physics" && (year === 2025 || year === 2020)) return "Year-specific Physics " + year + " archive. Locate Paper " + paperSelect.value + " and download the question PDF.";
    return "Subject archive. Find the " + year + " KCSE " + subject + " Paper " + paperSelect.value + " file and download it before starting.";
  }

  function selectedDetails() {
    const subject = subjectSelect.value;
    const year = Number(yearSelect.value);
    const paper = Number(paperSelect.value);
    return {
      subject,
      year,
      paper,
      durationMinutes: durationFor(subject),
      totalMarks: marksFor(subject),
      sourceUrl: sourceFor(subject, year)
    };
  }

  function updateSetup() {
    const details = selectedDetails();
    const time = details.durationMinutes === 150 ? "2 hours 30 minutes" : "2 hours";
    paperMeta.innerHTML = "<strong>" + details.year + " KCSE · " + details.subject + " · Paper " + details.paper +
      "</strong><span>" + time + " · " + details.totalMarks + " marks</span>";
    sourceLink.href = details.sourceUrl;
    $("source-help").textContent = sourceDescription(details.subject, details.year);
  }

  function safeStore(value) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(value)); } catch (e) { /* storage may be unavailable */ }
  }

  function loadStored() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function clearStored() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, ch => ({
      "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
    })[ch]);
  }

  function saveSession() {
    if (!session) return;
    safeStore(session);
  }

  function addAnswerRow(questionNo, answerText) {
    const row = document.createElement("div");
    row.className = "answer-row";
    const number = document.createElement("label");
    number.className = "answer-number";
    number.textContent = "Question";
    const numberInput = document.createElement("input");
    numberInput.type = "text";
    numberInput.maxLength = 12;
    numberInput.placeholder = "e.g. 1(a)";
    numberInput.value = questionNo || String(answerRows.children.length + 1);
    number.appendChild(numberInput);

    const work = document.createElement("label");
    work.className = "answer-work";
    work.textContent = "Answer / working";
    const textarea = document.createElement("textarea");
    textarea.rows = 4;
    textarea.placeholder = "Write your answer and show all working here…";
    textarea.value = answerText || "";
    work.appendChild(textarea);

    row.append(number, work);
    if (!session || session.status !== "active") {
      numberInput.disabled = true;
      textarea.disabled = true;
    } else {
      numberInput.addEventListener("input", collectAnswers);
      textarea.addEventListener("input", collectAnswers);
    }
    answerRows.appendChild(row);
  }

  function collectAnswers() {
    if (!session || session.status !== "active") return;
    session.answers = Array.from(answerRows.querySelectorAll(".answer-row")).map(row => ({
      question: row.querySelector(".answer-number input").value,
      answer: row.querySelector(".answer-work textarea").value
    }));
    saveSession();
  }

  function renderAnswers(answers, editable) {
    answerRows.innerHTML = "";
    const list = Array.isArray(answers) && answers.length ? answers : [{ question: "1", answer: "" }];
    list.forEach(item => addAnswerRow(item.question, item.answer));
    if (!editable) answerRows.querySelectorAll("input,textarea").forEach(input => input.disabled = true);
  }

  function setPaperFromQuery() {
    const subject = params.get("subject");
    const year = params.get("year");
    const paper = params.get("paper");
    if (subject === "Mathematics" || subject === "Physics") subjectSelect.value = subject;
    if (year && Number(year) >= 2011 && Number(year) <= 2025) yearSelect.value = year;
    if (paper === "1" || paper === "2") paperSelect.value = paper;
    updateSetup();
  }

  function renderActive() {
    setup.hidden = true;
    finished.hidden = true;
    active.hidden = false;
    document.body.classList.add("exam-running");
    $("live-title").textContent = "KCSE " + session.year + " " + session.subject + " · Paper " + session.paper;
    const candidate = [session.candidateName, session.indexNumber ? "Index: " + session.indexNumber : ""].filter(Boolean).join(" · ");
    $("live-candidate").textContent = candidate || "Candidate details not supplied";
    $("active-paper-source").href = session.sourceUrl;
    renderAnswers(session.answers, true);
    $("live-deadline").textContent = "Started " + new Date(session.startedAt).toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"});
    startClock();
  }

  function renderFinished() {
    if (tickHandle) window.clearInterval(tickHandle);
    tickHandle = null;
    active.hidden = true;
    setup.hidden = true;
    finished.hidden = false;
    document.body.classList.remove("exam-running");
    const date = new Date(session.submittedAt);
    $("finished-title").textContent = "KCSE " + session.year + " " + session.subject + " · Paper " + session.paper;
    $("finish-stats").innerHTML =
      "<div><span>Time allowed</span><strong>" + session.durationMinutes + " min</strong></div>" +
      "<div><span>Time used</span><strong>" + formatDuration(session.timeUsedMs) + "</strong></div>" +
      "<div><span>Paper total</span><strong>" + session.totalMarks + " marks</strong></div>" +
      "<div><span>Submission</span><strong>" + (session.autoSubmitted ? "Time expired" : "Submitted by candidate") + "</strong></div>";
    $("self-mark-total").textContent = "/ " + session.totalMarks;
    $("self-mark-score").max = String(session.totalMarks);
    $("self-mark-score").value = session.selfMark == null ? "" : String(session.selfMark);
    $("self-mark-result").textContent = session.selfMark == null ? "Enter your score after checking the source marking scheme." :
      "Saved score: " + session.selfMark + " / " + session.totalMarks + " (" + Math.round(session.selfMark / session.totalMarks * 100) + "%).";
    $("marking-scheme-source").href = session.sourceUrl;
    renderAnswers(session.answers, false);
    saveSession();
  }

  function formatDuration(ms) {
    const seconds = Math.max(0, Math.floor(ms / 1000));
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return [hours, minutes, secs].map(n => String(n).padStart(2, "0")).join(":");
  }

  function startClock() {
    if (tickHandle) window.clearInterval(tickHandle);
    function tick() {
      const remaining = Math.max(0, session.endAt - Date.now());
      $("live-clock").textContent = formatDuration(remaining);
      const fraction = Math.max(0, remaining / (session.durationMinutes * 60000));
      $("time-progress").style.width = (fraction * 100) + "%";
      $("live-clock").classList.toggle("time-low", remaining <= 5 * 60000);
      if (remaining <= 0) submitExam(true);
    }
    tickHandle = window.setInterval(tick, 1000);
    tick();
  }

  function beginExam() {
    if (loadStored() && loadStored().status === "active") {
      const existing = loadStored();
      if (existing.endAt > Date.now()) {
        if (!window.confirm("An examination is already in progress. Starting a new one will discard it. Continue?")) return;
      }
    }
    const details = selectedDetails();
    const now = Date.now();
    session = {
      ...details,
      candidateName: $("candidate-name").value.trim(),
      indexNumber: $("candidate-index").value.trim(),
      startedAt: now,
      endAt: now + details.durationMinutes * 60000,
      answers: [{question:"1",answer:""}],
      status: "active",
      autoSubmitted: false,
      submittedAt: null,
      timeUsedMs: 0,
      selfMark: null
    };
    safeStore(session);
    renderActive();
    document.documentElement.requestFullscreen?.().catch(() => {});
  }

  function submitExam(auto) {
    if (!session || session.status !== "active") return;
    if (!auto && !window.confirm("Submit this examination now? You will not be able to edit your answers afterwards.")) return;
    collectAnswers();
    session.status = "submitted";
    session.submittedAt = Date.now();
    session.autoSubmitted = Boolean(auto);
    session.timeUsedMs = Math.min(session.durationMinutes * 60000, session.submittedAt - session.startedAt);
    saveSession();
    if (!auto) document.exitFullscreen?.().catch(() => {});
    renderFinished();
  }

  function saveSelfMark() {
    const score = Number($("self-mark-score").value);
    if (!Number.isFinite(score) || score < 0 || score > session.totalMarks || $("self-mark-score").value === "") {
      $("self-mark-result").textContent = "Enter a valid score from 0 to " + session.totalMarks + ".";
      return;
    }
    session.selfMark = score;
    safeStore(session);
    let history = [];
    try { history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]"); } catch (e) { history = []; }
    const resultRecord = {
      subject: session.subject, year: session.year, paper: session.paper,
      score, total: session.totalMarks, percentage: Math.round(score / session.totalMarks * 100),
      submittedAt: session.submittedAt
    };
    const existingIndex = history.findIndex(item => item.submittedAt === session.submittedAt &&
      item.subject === session.subject && item.year === session.year && item.paper === session.paper);
    if (existingIndex >= 0) history[existingIndex] = resultRecord;
    else history.push(resultRecord);
    try { localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(-100))); } catch (e) { /* ignore */ }
    $("self-mark-result").textContent = "Score saved: " + score + " / " + session.totalMarks + " (" + Math.round(score / session.totalMarks * 100) + "%).";
  }

  function printAnswers() {
    window.print();
  }

  for (let year = 2025; year >= 2011; year--) {
    const option = document.createElement("option");
    option.value = String(year);
    option.textContent = String(year);
    yearSelect.appendChild(option);
  }

  subjectSelect.addEventListener("change", updateSetup);
  yearSelect.addEventListener("change", updateSetup);
  paperSelect.addEventListener("change", updateSetup);
  $("begin-exam").addEventListener("click", beginExam);
  $("submit-exam").addEventListener("click", () => submitExam(false));
  $("add-answer").addEventListener("click", () => {
    if (!session || session.status !== "active") return;
    collectAnswers();
    addAnswerRow(String(answerRows.children.length + 1), "");
    collectAnswers();
  });
  $("print-answers").addEventListener("click", printAnswers);
  $("print-finished-answers").addEventListener("click", printAnswers);
  $("fullscreen-btn").addEventListener("click", () => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else document.documentElement.requestFullscreen?.().catch(() => {});
  });
  $("save-self-mark").addEventListener("click", saveSelfMark);
  $("new-exam").addEventListener("click", () => {
    if (!window.confirm("Start another examination? Your previous result remains saved in your exam history.")) return;
    session = null;
    clearStored();
    document.body.classList.remove("exam-running");
    finished.hidden = true;
    setup.hidden = false;
    active.hidden = true;
    updateSetup();
  });

  setPaperFromQuery();
  const stored = loadStored();
  if (stored && stored.status === "active") {
    session = stored;
    if (session.endAt <= Date.now()) submitExam(true);
    else renderActive();
  } else if (stored && stored.status === "submitted") {
    session = stored;
    renderFinished();
  } else {
    setup.hidden = false;
    active.hidden = true;
    finished.hidden = true;
  }
})();