/* =========================================================
   simulation.js — projectile motion on an HTML <canvas>.
   Uses x = u cosθ · t  and  y = u sinθ · t − ½ g t²
   ========================================================= */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const speedInput = document.getElementById("speed");
const angleInput = document.getElementById("angle");
const gravityInput = document.getElementById("gravity");

const PADDING = 40;          // space for the axes, in pixels
const MIN_METRES_X = 40;     // smallest width shown, in metres (the graph zooms out to fit longer paths)
let paths = [];              // previous launches, drawn faded
let animationId = null;

const COLOURS = ["#f2a541", "#2e7d5b", "#7b3fa0", "#1f78b4", "#c62828"];

function getSettings() {
  return {
    u: Number(speedInput.value),
    angleDeg: Number(angleInput.value),
    g: Number(gravityInput.value)
  };
}

/* Physics results from the formulas */
function calculate(s) {
  const theta = s.angleDeg * Math.PI / 180;
  return {
    theta: theta,
    time: 2 * s.u * Math.sin(theta) / s.g,
    height: Math.pow(s.u * Math.sin(theta), 2) / (2 * s.g),
    range: s.u * s.u * Math.sin(2 * theta) / s.g
  };
}

/* Choose a scale (pixels per metre) that fits everything drawn */
function getScale() {
  let maxX = MIN_METRES_X, maxY = 15;
  paths.concat([calculate(getSettings())]).forEach(function (r) {
    maxX = Math.max(maxX, r.range * 1.05);
    maxY = Math.max(maxY, r.height * 1.15);
  });
  const sx = (canvas.width - PADDING * 2) / maxX;
  const sy = (canvas.height - PADDING * 2) / maxY;
  return Math.min(sx, sy);
}

function toCanvas(x, y, scale) {
  return { cx: PADDING + x * scale, cy: canvas.height - PADDING - y * scale };
}

function drawAxes(scale) {
  const styles = getComputedStyle(document.documentElement);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = styles.getPropertyValue("--border");
  ctx.fillStyle = styles.getPropertyValue("--muted");
  ctx.font = "12px system-ui, sans-serif";
  ctx.lineWidth = 1;

  // Grid lines
  const step = scale > 8 ? 5 : scale > 4 ? 10 : 20;   // grid spacing in metres
  for (let m = 0; PADDING + m * scale <= canvas.width - 10; m += step) {
    const p = toCanvas(m, 0, scale);
    ctx.beginPath(); ctx.moveTo(p.cx, PADDING / 2); ctx.lineTo(p.cx, p.cy); ctx.stroke();
    ctx.fillText(m + " m", p.cx - 10, p.cy + 18);
  }
  for (let m = step; canvas.height - PADDING - m * scale >= 10; m += step) {
    const p = toCanvas(0, m, scale);
    ctx.beginPath(); ctx.moveTo(PADDING, p.cy); ctx.lineTo(canvas.width - 10, p.cy); ctx.stroke();
    ctx.fillText(m, 8, p.cy + 4);
  }

  // Ground
  ctx.strokeStyle = styles.getPropertyValue("--text");
  ctx.lineWidth = 2;
  const ground = toCanvas(0, 0, scale);
  ctx.beginPath(); ctx.moveTo(PADDING, ground.cy); ctx.lineTo(canvas.width - 10, ground.cy); ctx.stroke();
}

/* Draw one path up to time t */
function drawPath(r, u, g, upToTime, colour, scale, faded) {
  ctx.strokeStyle = colour;
  ctx.globalAlpha = faded ? 0.45 : 1;
  ctx.lineWidth = 3;
  ctx.beginPath();
  const steps = 120;
  for (let i = 0; i <= steps; i++) {
    const t = Math.min(upToTime, (r.time * i) / steps);
    const x = u * Math.cos(r.theta) * t;
    const y = Math.max(0, u * Math.sin(r.theta) * t - 0.5 * g * t * t);
    const p = toCanvas(x, y, scale);
    if (i === 0) ctx.moveTo(p.cx, p.cy); else ctx.lineTo(p.cx, p.cy);
  }
  ctx.stroke();
  ctx.globalAlpha = 1;
}

function drawBall(x, y, colour, scale) {
  const p = toCanvas(x, y, scale);
  ctx.fillStyle = colour;
  ctx.beginPath(); ctx.arc(p.cx, p.cy, 7, 0, Math.PI * 2); ctx.fill();
}

function redrawOld(scale) {
  paths.forEach(function (old) {
    drawPath(old, old.u, old.g, old.time, old.colour, scale, true);
  });
}

function showResults(s, r) {
  document.getElementById("results").innerHTML = `
    <h3>Results</h3>
    <p>Time of flight: <b>${r.time.toFixed(2)} s</b></p>
    <p>Maximum height: <b>${r.height.toFixed(2)} m</b></p>
    <p>Range: <b>${r.range.toFixed(2)} m</b></p>
    <p class="hint">u = ${s.u} m/s, θ = ${s.angleDeg}°, g = ${s.g} m/s²</p>`;
}

function launch() {
  if (animationId) cancelAnimationFrame(animationId);
  const s = getSettings();
  const r = calculate(s);
  const colour = COLOURS[paths.length % COLOURS.length];
  showResults(s, r);

  const scale = getScale();
  const duration = Math.min(4000, Math.max(1200, r.time * 600)); // ms on screen
  const start = performance.now();

  function frame(now) {
    const t = Math.min(r.time, ((now - start) / duration) * r.time);
    drawAxes(scale);
    redrawOld(scale);
    drawPath(r, s.u, s.g, t, colour, scale, false);
    const x = s.u * Math.cos(r.theta) * t;
    const y = Math.max(0, s.u * Math.sin(r.theta) * t - 0.5 * s.g * t * t);
    drawBall(x, y, colour, scale);

    if (t < r.time) {
      animationId = requestAnimationFrame(frame);
    } else {
      paths.push(Object.assign({ u: s.u, g: s.g, colour: colour }, r));
      animationId = null;
    }
  }
  animationId = requestAnimationFrame(frame);
}

function clearPaths() {
  if (animationId) cancelAnimationFrame(animationId);
  animationId = null;
  paths = [];
  drawAxes(getScale());
  document.getElementById("results").innerHTML = "";
}

/* Live labels for the sliders */
speedInput.addEventListener("input", function () {
  document.getElementById("speed-value").textContent = speedInput.value;
});
angleInput.addEventListener("input", function () {
  document.getElementById("angle-value").textContent = angleInput.value;
});

document.getElementById("launch").addEventListener("click", launch);
document.getElementById("clear").addEventListener("click", clearPaths);

// Redraw when switching dark/light mode so the axes use the right colours
document.getElementById("theme-toggle").addEventListener("click", function () {
  if (!animationId) { const sc = getScale(); drawAxes(sc); redrawOld(sc); }
});

drawAxes(getScale());
