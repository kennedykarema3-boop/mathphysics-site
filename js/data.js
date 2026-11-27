/* =========================================================
   data.js — ALL lesson content lives here.
   To add a new topic, copy one object in TOPICS, give it a
   new unique "id", and change the text. No other file needs
   to change: the home page, topic page and quiz page all
   read from this list automatically.
   ========================================================= */

const TOPICS = [
  /* ---------------- MATHEMATICS ---------------- */
  {
    id: "quadratic-equations",
    subject: "Mathematics",
    level: "Form 3",
    title: "Quadratic Equations",
    summary: "Solve equations of the form ax² + bx + c = 0 by factorising and by the formula.",
    formulas: [
      "General form: ax² + bx + c = 0",
      "Quadratic formula: x = (−b ± √(b² − 4ac)) / 2a",
      "Discriminant: D = b² − 4ac",
      "Sum of roots = −b/a,  Product of roots = c/a"
    ],
    notes: [
      {
        heading: "What is a quadratic equation?",
        body: "A quadratic equation has the general form <b>ax² + bx + c = 0</b>, where a, b and c are numbers and a ≠ 0. The highest power of x is 2, so it can have up to two solutions (called <b>roots</b>)."
      },
      {
        heading: "Method 1: Factorisation",
        body: "Find two numbers that <b>multiply</b> to give ac and <b>add</b> to give b. Use them to write the equation as a product of two brackets, then set each bracket equal to zero."
      },
      {
        heading: "Method 2: The quadratic formula",
        body: "When factorising is hard, use:<div class='formula'>x = (−b ± √(b² − 4ac)) / 2a</div>"
      },
      {
        heading: "The discriminant",
        body: "The value <b>b² − 4ac</b> tells you the type of roots:<ul><li>Greater than 0 → two different real roots</li><li>Equal to 0 → one repeated root</li><li>Less than 0 → no real roots</li></ul>"
      }
    ],
    examples: [
      {
        question: "Solve x² − 5x + 6 = 0",
        steps: [
          "Find two numbers that multiply to 6 and add to −5: these are −2 and −3.",
          "Write in brackets: (x − 2)(x − 3) = 0",
          "Set each bracket to zero: x − 2 = 0 or x − 3 = 0"
        ],
        answer: "x = 2 or x = 3"
      },
      {
        question: "Solve 2x² + 3x − 2 = 0 using the formula",
        steps: [
          "Identify a = 2, b = 3, c = −2",
          "Discriminant: b² − 4ac = 9 − 4(2)(−2) = 9 + 16 = 25",
          "x = (−3 ± √25) / (2 × 2) = (−3 ± 5) / 4",
          "x = 2/4 or x = −8/4"
        ],
        answer: "x = 0.5 or x = −2"
      }
    ],
    quiz: [
      {
        question: "Solve x² − 7x + 12 = 0",
        options: ["x = 3 or x = 4", "x = −3 or x = −4", "x = 2 or x = 6", "x = 1 or x = 12"],
        answer: 0,
        explanation: "−3 and −4 multiply to 12 and add to −7, so (x − 3)(x − 4) = 0, giving x = 3 or x = 4."
      },
      {
        question: "What is the discriminant of x² + 4x + 4 = 0?",
        options: ["16", "8", "0", "−16"],
        answer: 2,
        explanation: "b² − 4ac = 4² − 4(1)(4) = 16 − 16 = 0, so there is one repeated root."
      },
      {
        question: "If b² − 4ac < 0, the equation has…",
        options: ["two real roots", "one repeated root", "no real roots", "infinitely many roots"],
        answer: 2,
        explanation: "You cannot take the square root of a negative number in real numbers, so there are no real roots."
      },
      {
        question: "Solve x² − 9 = 0",
        options: ["x = 9", "x = 3 only", "x = ±3", "x = ±9"],
        answer: 2,
        explanation: "x² = 9, so x = 3 or x = −3 (written x = ±3)."
      },
      {
        question: "What is the sum of the roots of x² − 5x + 6 = 0?",
        options: ["6", "5", "−5", "1"],
        answer: 1,
        explanation: "The roots are 2 and 3, and 2 + 3 = 5. (In general, the sum of roots is −b/a.)"
      }
    ]
  },

  {
    id: "trigonometry-basics",
    subject: "Mathematics",
    level: "Form 2",
    title: "Trigonometry: SOH CAH TOA",
    summary: "Use sine, cosine and tangent to find missing sides and angles in right-angled triangles.",
    formulas: [
      "sin θ = Opposite / Hypotenuse",
      "cos θ = Adjacent / Hypotenuse",
      "tan θ = Opposite / Adjacent",
      "Pythagoras: Hypotenuse² = Opposite² + Adjacent²"
    ],
    notes: [
      {
        heading: "Naming the sides",
        body: "In a right-angled triangle, relative to the angle θ:<ul><li><b>Hypotenuse</b> — the longest side, opposite the right angle</li><li><b>Opposite</b> — the side across from θ</li><li><b>Adjacent</b> — the side next to θ (not the hypotenuse)</li></ul>"
      },
      {
        heading: "The three ratios",
        body: "<div class='formula'>sin θ = Opposite / Hypotenuse<br>cos θ = Adjacent / Hypotenuse<br>tan θ = Opposite / Adjacent</div>Remember them with <b>SOH CAH TOA</b>."
      },
      {
        heading: "Finding an angle",
        body: "If you know two sides, work out the ratio, then use the inverse function on your calculator (sin⁻¹, cos⁻¹ or tan⁻¹)."
      }
    ],
    examples: [
      {
        question: "A right-angled triangle has opposite = 6 cm and hypotenuse = 10 cm. Find θ.",
        steps: [
          "We have Opposite and Hypotenuse, so use SOH: sin θ = 6/10 = 0.6",
          "θ = sin⁻¹(0.6)"
        ],
        answer: "θ ≈ 36.87°"
      },
      {
        question: "The hypotenuse is 12 cm and θ = 30°. Find the opposite side.",
        steps: [
          "Use SOH: sin 30° = Opposite / 12",
          "Opposite = 12 × sin 30° = 12 × 0.5"
        ],
        answer: "Opposite = 6 cm"
      }
    ],
    quiz: [
      {
        question: "tan θ is equal to…",
        options: ["Opposite / Hypotenuse", "Adjacent / Hypotenuse", "Opposite / Adjacent", "Adjacent / Opposite"],
        answer: 2,
        explanation: "TOA: Tangent = Opposite / Adjacent."
      },
      {
        question: "What is sin 30°?",
        options: ["1", "0.5", "0.866", "0"],
        answer: 1,
        explanation: "sin 30° = 0.5 exactly. It is a value worth memorising."
      },
      {
        question: "Adjacent = 4 cm and hypotenuse = 5 cm. What is cos θ?",
        options: ["0.8", "1.25", "0.75", "0.6"],
        answer: 0,
        explanation: "CAH: cos θ = Adjacent / Hypotenuse = 4/5 = 0.8."
      },
      {
        question: "Hypotenuse = 13 cm and opposite = 5 cm. How long is the adjacent side?",
        options: ["8 cm", "18 cm", "12 cm", "10 cm"],
        answer: 2,
        explanation: "By Pythagoras: adjacent = √(13² − 5²) = √(169 − 25) = √144 = 12 cm."
      },
      {
        question: "What is cos 60°?",
        options: ["0.5", "0.866", "1", "1.732"],
        answer: 0,
        explanation: "cos 60° = 0.5, the same value as sin 30°."
      }
    ]
  },

  {
    id: "simultaneous-equations",
    subject: "Mathematics",
    level: "Form 2",
    title: "Simultaneous Equations",
    summary: "Solve two linear equations together using elimination and substitution.",
    formulas: [
      "Elimination: add or subtract equations to remove one variable",
      "Substitution: make one variable the subject, then substitute"
    ],
    notes: [
      {
        heading: "What are simultaneous equations?",
        body: "Two equations with two unknowns (usually x and y) that are true <b>at the same time</b>. The solution is the pair of values that satisfies both."
      },
      {
        heading: "Method 1: Elimination",
        body: "Make the coefficient of one variable the same in both equations (multiply if needed), then <b>add</b> or <b>subtract</b> the equations to eliminate it. Solve for the remaining variable and substitute back."
      },
      {
        heading: "Method 2: Substitution",
        body: "Rearrange one equation to make x or y the subject, substitute it into the other equation, and solve."
      },
      {
        heading: "Always check",
        body: "Put your values back into <b>both</b> original equations to confirm they work."
      }
    ],
    examples: [
      {
        question: "Solve: x + y = 10 and x − y = 2",
        steps: [
          "Add the equations: (x + y) + (x − y) = 10 + 2, so 2x = 12",
          "x = 6",
          "Substitute into x + y = 10: 6 + y = 10, so y = 4"
        ],
        answer: "x = 6, y = 4"
      },
      {
        question: "Solve: 2x + 3y = 12 and x = 2y − 1",
        steps: [
          "Substitute x = 2y − 1 into the first equation: 2(2y − 1) + 3y = 12",
          "4y − 2 + 3y = 12, so 7y = 14 and y = 2",
          "x = 2(2) − 1 = 3"
        ],
        answer: "x = 3, y = 2"
      }
    ],
    quiz: [
      {
        question: "Solve: x + y = 7 and x − y = 1",
        options: ["x = 3, y = 4", "x = 4, y = 3", "x = 5, y = 2", "x = 6, y = 1"],
        answer: 1,
        explanation: "Adding gives 2x = 8, so x = 4. Then y = 7 − 4 = 3."
      },
      {
        question: "If 2x + y = 9 and x = 3, what is y?",
        options: ["6", "1.5", "3", "15"],
        answer: 2,
        explanation: "2(3) + y = 9, so 6 + y = 9 and y = 3."
      },
      {
        question: "Solve: x + 2y = 8 and x − 2y = 0",
        options: ["x = 4, y = 2", "x = 2, y = 3", "x = 8, y = 0", "x = 0, y = 4"],
        answer: 0,
        explanation: "Adding gives 2x = 8, so x = 4. Then 4 + 2y = 8 gives y = 2."
      },
      {
        question: "Adding or subtracting the equations to remove one variable is called…",
        options: ["substitution", "factorisation", "elimination", "expansion"],
        answer: 2,
        explanation: "This is the elimination method."
      },
      {
        question: "Solve: 3x + y = 11 and x + y = 5",
        options: ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 1", "x = 1, y = 4"],
        answer: 1,
        explanation: "Subtracting gives 2x = 6, so x = 3. Then y = 5 − 3 = 2."
      }
    ]
  },

  /* ---------------- PHYSICS ---------------- */
  {
    id: "linear-motion",
    subject: "Physics",
    level: "Form 3",
    title: "Linear Motion",
    summary: "Use the equations of motion to solve problems on velocity, acceleration and distance.",
    formulas: [
      "v = u + at",
      "s = ut + ½at²",
      "v² = u² + 2as",
      "Acceleration: a = (v − u) / t"
    ],
    notes: [
      {
        heading: "Key quantities",
        body: "<ul><li><b>u</b> — initial velocity (m/s)</li><li><b>v</b> — final velocity (m/s)</li><li><b>a</b> — acceleration (m/s²)</li><li><b>t</b> — time (s)</li><li><b>s</b> — displacement (m)</li></ul>"
      },
      {
        heading: "Equations of uniformly accelerated motion",
        body: "<div class='formula'>v = u + at<br>s = ut + ½at²<br>v² = u² + 2as</div>Choose the equation that contains the quantities you know and the one you want."
      },
      {
        heading: "Tips",
        body: "\"Starts from rest\" means u = 0. \"Comes to rest\" means v = 0. A negative acceleration means the object is slowing down (deceleration). For free fall, take a = g ≈ 10 m/s²."
      }
    ],
    examples: [
      {
        question: "A car starts from rest and accelerates at 2 m/s² for 5 s. Find its final velocity and distance travelled.",
        steps: [
          "u = 0, a = 2 m/s², t = 5 s",
          "v = u + at = 0 + 2 × 5 = 10 m/s",
          "s = ut + ½at² = 0 + ½ × 2 × 5² = 25 m"
        ],
        answer: "v = 10 m/s, s = 25 m"
      },
      {
        question: "A car moving at 20 m/s brakes and stops in 40 m. Find its deceleration.",
        steps: [
          "u = 20 m/s, v = 0, s = 40 m",
          "v² = u² + 2as → 0 = 20² + 2 × a × 40",
          "0 = 400 + 80a → a = −400 / 80"
        ],
        answer: "a = −5 m/s² (a deceleration of 5 m/s²)"
      }
    ],
    quiz: [
      {
        question: "A body starts from rest with acceleration 3 m/s². What is its velocity after 4 s?",
        options: ["7 m/s", "12 m/s", "0.75 m/s", "24 m/s"],
        answer: 1,
        explanation: "v = u + at = 0 + 3 × 4 = 12 m/s."
      },
      {
        question: "A body starts from rest and accelerates at 2 m/s² for 3 s. How far does it travel?",
        options: ["6 m", "18 m", "9 m", "3 m"],
        answer: 2,
        explanation: "s = ut + ½at² = 0 + ½ × 2 × 3² = 9 m."
      },
      {
        question: "What is the SI unit of acceleration?",
        options: ["m/s", "m/s²", "N", "m²/s"],
        answer: 1,
        explanation: "Acceleration is change in velocity (m/s) per second, so its unit is m/s²."
      },
      {
        question: "Velocity increases from 10 m/s to 30 m/s in 5 s. What is the acceleration?",
        options: ["4 m/s²", "6 m/s²", "8 m/s²", "2 m/s²"],
        answer: 0,
        explanation: "a = (v − u) / t = (30 − 10) / 5 = 4 m/s²."
      },
      {
        question: "A stone is dropped from rest. Taking g = 10 m/s², what is its velocity after 2 s?",
        options: ["5 m/s", "10 m/s", "20 m/s", "40 m/s"],
        answer: 2,
        explanation: "v = u + gt = 0 + 10 × 2 = 20 m/s."
      }
    ]
  },

  {
    id: "current-electricity",
    subject: "Physics",
    level: "Form 2",
    title: "Current Electricity: Ohm's Law",
    summary: "Relate voltage, current and resistance, and combine resistors in series and parallel.",
    formulas: [
      "Ohm's law: V = IR",
      "Series: R = R₁ + R₂ + …",
      "Parallel: 1/R = 1/R₁ + 1/R₂ + …",
      "Power: P = VI"
    ],
    notes: [
      {
        heading: "Key quantities",
        body: "<ul><li><b>Current (I)</b> — rate of flow of charge, measured in amperes (A)</li><li><b>Voltage / p.d. (V)</b> — measured in volts (V)</li><li><b>Resistance (R)</b> — opposition to current, measured in ohms (Ω)</li></ul>"
      },
      {
        heading: "Ohm's law",
        body: "For a conductor at constant temperature, the current is directly proportional to the potential difference across it:<div class='formula'>V = IR</div>Rearrange as I = V/R or R = V/I depending on what you need."
      },
      {
        heading: "Resistors in series and parallel",
        body: "<div class='formula'>Series: R = R₁ + R₂<br>Parallel: 1/R = 1/R₁ + 1/R₂</div>In series the same current flows through each resistor. In parallel each resistor has the same voltage, and the total resistance is <b>smaller</b> than the smallest resistor."
      }
    ],
    examples: [
      {
        question: "A 4 Ω resistor is connected to a 12 V supply. Find the current.",
        steps: [
          "V = 12 V, R = 4 Ω",
          "I = V / R = 12 / 4"
        ],
        answer: "I = 3 A"
      },
      {
        question: "Find the total resistance of 6 Ω and 3 Ω connected in parallel.",
        steps: [
          "1/R = 1/6 + 1/3",
          "1/R = 1/6 + 2/6 = 3/6 = 1/2",
          "R = 2/1"
        ],
        answer: "R = 2 Ω"
      }
    ],
    quiz: [
      {
        question: "A 5 Ω resistor has 10 V across it. What current flows?",
        options: ["50 A", "2 A", "0.5 A", "15 A"],
        answer: 1,
        explanation: "I = V / R = 10 / 5 = 2 A."
      },
      {
        question: "What is the total resistance of 4 Ω and 6 Ω in series?",
        options: ["2.4 Ω", "24 Ω", "10 Ω", "2 Ω"],
        answer: 2,
        explanation: "In series, R = R₁ + R₂ = 4 + 6 = 10 Ω."
      },
      {
        question: "Two 10 Ω resistors are connected in parallel. What is the total resistance?",
        options: ["20 Ω", "5 Ω", "10 Ω", "100 Ω"],
        answer: 1,
        explanation: "1/R = 1/10 + 1/10 = 2/10, so R = 10/2 = 5 Ω."
      },
      {
        question: "A current of 2 A flows through a 3 Ω resistor. What is the voltage across it?",
        options: ["1.5 V", "5 V", "6 V", "0.67 V"],
        answer: 2,
        explanation: "V = IR = 2 × 3 = 6 V."
      },
      {
        question: "A bulb draws 2 A from a 12 V supply. What is its power?",
        options: ["6 W", "14 W", "24 W", "10 W"],
        answer: 2,
        explanation: "P = VI = 12 × 2 = 24 W."
      }
    ]
  }
];



/* Helper: find one topic by its id (used by topic and quiz pages) */
function getTopicById(id) {
  return TOPICS.find(function (topic) { return topic.id === id; });
}
