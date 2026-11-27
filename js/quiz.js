/* =========================================================
   quiz.js — shows one question at a time with the answer
   options shuffled, marks instantly, explains the working,
   then shows the score and a review of every question.
   Keyboard: press 1–4 to choose, Enter for next.
   ========================================================= */

const params = new URLSearchParams(window.location.search);
const topic = getTopicById(params.get("id"));

const card = document.getElementById("quiz-card");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

let current = 0;      // index of the question being shown
let score = 0;        // number of correct answers
let answers = [];     // what the student chose, for the review
let shuffled = [];    // current question's options in shuffled order
let answered = false;

/* Shuffle a copy of an array (Fisher–Yates) */
function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showQuestion() {
  const q = topic.quiz[current];
  const total = topic.quiz.length;
  answered = false;

  progressFill.style.width = (current / total) * 100 + "%";
  progressText.textContent = `Question ${current + 1} of ${total} · Score: ${score}`;

  // Keep track of which shuffled option is the correct one
  shuffled = shuffle(q.options.map(function (text, i) {
    return { text: text, correct: i === q.answer };
  }));

  const options = shuffled.map(function (opt, i) {
    return `<button class="option" data-index="${i}"><span class="key">${i + 1}</span>${opt.text}</button>`;
  }).join("");

  card.innerHTML = `
    <p class="question">${q.question}</p>
    <div class="options">${options}</div>
    <div class="feedback" id="feedback" aria-live="polite"></div>`;

  card.querySelectorAll(".option").forEach(function (button) {
    button.addEventListener("click", function () {
      checkAnswer(Number(button.dataset.index));
    });
  });
}

function checkAnswer(chosen) {
  if (answered) return;
  answered = true;

  const q = topic.quiz[current];
  const buttons = card.querySelectorAll(".option");
  const isCorrect = shuffled[chosen].correct;

  if (isCorrect) score++;
  answers.push({
    question: q.question,
    chosen: shuffled[chosen].text,
    correct: q.options[q.answer],
    isCorrect: isCorrect
  });

  // Lock the buttons and colour the right / wrong answers
  buttons.forEach(function (b, i) {
    b.disabled = true;
    if (shuffled[i].correct) b.classList.add("correct");
    if (i === chosen && !isCorrect) b.classList.add("wrong");
  });

  const isLast = current === topic.quiz.length - 1;
  document.getElementById("feedback").innerHTML = `
    <p class="${isCorrect ? "good" : "bad"}">${isCorrect ? "✓ Correct!" : "✗ Not quite."}</p>
    <p>${q.explanation}</p>
    <button class="btn" id="next">${isLast ? "See my score" : "Next question →"}</button>`;

  progressText.textContent = `Question ${current + 1} of ${topic.quiz.length} · Score: ${score}`;
  document.getElementById("next").addEventListener("click", goNext);
  document.getElementById("next").focus();
}

function goNext() {
  current++;
  if (current < topic.quiz.length) showQuestion();
  else showResults();
}

function showResults() {
  const total = topic.quiz.length;
  const percent = Math.round((score / total) * 100);
  saveQuizResult(topic.id, score, total);

  progressFill.style.width = "100%";
  progressText.textContent = "Finished!";

  let message = "Keep practising: go back over the notes and try again.";
  if (percent >= 80) message = "Excellent work! You have mastered this topic.";
  else if (percent >= 50) message = "Good effort. Review the worked examples to push your score higher.";

  const review = answers.map(function (a, i) {
    return `
      <li class="${a.isCorrect ? "good-item" : "bad-item"}">
        <p><b>Q${i + 1}.</b> ${a.question}</p>
        <p>Your answer: ${a.chosen} ${a.isCorrect ? "✓" : "✗"}</p>
        ${a.isCorrect ? "" : `<p>Correct answer: <b>${a.correct}</b></p>`}
      </li>`;
  }).join("");

  // Suggest the next topic in the list
  const next = TOPICS[TOPICS.indexOf(topic) + 1];

  card.innerHTML = `
    <div class="results">
      <p class="big-score">${score} / ${total}</p>
      <p class="percent">${percent}%</p>
      <p>${message}</p>
      <div class="card-actions center">
        <a class="btn btn-light" href="topic.html?id=${topic.id}">Review notes</a>
        <button class="btn btn-light" id="retry">Try again</button>
        ${next ? `<a class="btn" href="topic.html?id=${next.id}">Next topic →</a>` : `<a class="btn" href="progress.html">My progress</a>`}
      </div>
    </div>
    <h2 class="section-title">Review your answers</h2>
    <ol class="review">${review}</ol>`;

  document.getElementById("retry").addEventListener("click", function () {
    current = 0;
    score = 0;
    answers = [];
    showQuestion();
  });
}

/* Keyboard shortcuts */
document.addEventListener("keydown", function (e) {
  if (!topic) return;
  const n = Number(e.key);
  if (!answered && n >= 1 && n <= shuffled.length && card.querySelector(".option")) {
    checkAnswer(n - 1);
  }
});

if (!topic) {
  document.getElementById("quiz-title").textContent = "Quiz not found";
  card.innerHTML = "<p>Go back to <a href='index.html'>all topics</a> and choose one.</p>";
} else {
  document.title = topic.title + " Quiz — MathPhysics Hub";
  document.getElementById("quiz-title").textContent = topic.title + " Quiz";
  document.getElementById("breadcrumb").innerHTML =
    `<a href="index.html">Topics</a> › <a href="topic.html?id=${topic.id}">${topic.title}</a> › <span>Quiz</span>`;
  showQuestion();
}
