/* =========================================================
   data.js — ALL lesson content lives here.
   To add a new topic, copy one object in TOPICS, give it a
   new unique "id", and change the text. No other file needs
   to change: the home page, topic page, formula sheet and
   quiz page all read from this list automatically.

   17 topics: 9 Mathematics, 8 Physics.
   ========================================================= */

const TOPICS = [
  /* =====================================================
     MATHEMATICS
     ===================================================== */
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
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>Forgetting the <b>±</b>: there are usually two answers.</li><li>Dividing both sides by x. In x² = 4x this throws away the root x = 0. Factorise instead: x(x − 4) = 0.</li><li>Getting the sign of b wrong in the formula: if b = −5, then −b = +5.</li><li>Not making the equation equal to zero before factorising.</li></ul>"
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
      },
      {
        question: "Solve x² − 4x = 0",
        steps: [
          "Do NOT divide by x. Take out the common factor x instead.",
          "x(x − 4) = 0",
          "x = 0 or x − 4 = 0"
        ],
        answer: "x = 0 or x = 4"
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
      },
      {
        question: "Solve x² = 6x",
        options: ["x = 6 only", "x = 0 or x = 6", "x = ±6", "x = 36"],
        answer: 1,
        explanation: "x² − 6x = 0, so x(x − 6) = 0, giving x = 0 or x = 6. Dividing by x would lose the root x = 0."
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
      "Pythagoras: Hypotenuse² = Opposite² + Adjacent²",
      "Special values: sin 30° = cos 60° = 0.5,  tan 45° = 1"
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
      },
      {
        heading: "Angles of elevation and depression",
        body: "The <b>angle of elevation</b> is measured <b>up</b> from the horizontal to an object (looking up at a tree top). The <b>angle of depression</b> is measured <b>down</b> from the horizontal (looking down from a cliff to a boat). Always draw a sketch and mark the horizontal line first."
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>Calculator in the wrong mode: it must show <b>D</b> or <b>DEG</b>, not RAD.</li><li>Labelling opposite and adjacent from the wrong angle: they change when θ changes.</li><li>Rounding too early: keep full calculator values until the final answer.</li></ul>"
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
      },
      {
        question: "A 5 m ladder leans against a wall, making an angle of 60° with the ground. How high up the wall does it reach?",
        steps: [
          "The ladder is the hypotenuse (5 m). The height up the wall is opposite the 60° angle.",
          "SOH: sin 60° = height / 5",
          "height = 5 × sin 60° = 5 × 0.866"
        ],
        answer: "Height ≈ 4.33 m"
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
      },
      {
        question: "From the top of a cliff you look DOWN at a boat. The angle you measure from the horizontal is called the angle of…",
        options: ["elevation", "depression", "reflection", "inclination"],
        answer: 1,
        explanation: "Looking down from the horizontal gives an angle of depression. Looking up gives an angle of elevation."
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
      "Substitution: make one variable the subject, then substitute",
      "Graphical: the solution is the point where the two lines meet"
    ],
    notes: [
      {
        heading: "What are simultaneous equations?",
        body: "Two equations with two unknowns (usually x and y) that are true <b>at the same time</b>. The solution is the pair of values that satisfies both."
      },
      {
        heading: "Method 1: Elimination",
        body: "Make the coefficient of one variable the same in both equations (multiply if needed), then <b>add</b> or <b>subtract</b> the equations to eliminate it. Solve for the remaining variable and substitute back.<br>Rule of thumb: <b>same signs → subtract, different signs → add</b>."
      },
      {
        heading: "Method 2: Substitution",
        body: "Rearrange one equation to make x or y the subject, substitute it into the other equation, and solve."
      },
      {
        heading: "Method 3: Graphs",
        body: "Draw both straight lines on the same axes. The point where they <b>cross</b> gives the solution (x, y). This is useful for checking, but less accurate than algebra."
      },
      {
        heading: "Always check",
        body: "Put your values back into <b>both</b> original equations to confirm they work."
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>Subtracting only some of the terms. Subtract <b>every</b> term, including the number on the right-hand side.</li><li>Sign errors when subtracting negatives: 5 − (−2) = 7.</li><li>Multiplying only the left-hand side of an equation. Multiply <b>both sides</b>.</li></ul>"
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
      },
      {
        question: "Solve: 3x + 2y = 16 and 2x − y = 6",
        steps: [
          "Multiply the second equation by 2 so the y terms match: 4x − 2y = 12",
          "The y terms have different signs, so add: (3x + 2y) + (4x − 2y) = 16 + 12, giving 7x = 28",
          "x = 4",
          "Substitute into 2x − y = 6: 8 − y = 6, so y = 2",
          "Check in the first equation: 3(4) + 2(2) = 12 + 4 = 16 ✓"
        ],
        answer: "x = 4, y = 2"
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
      },
      {
        question: "On a graph, the solution of two simultaneous equations is…",
        options: ["where the lines cross the y-axis", "where the two lines meet", "the gradient of each line", "where the lines cross the x-axis"],
        answer: 1,
        explanation: "The meeting point lies on both lines, so its (x, y) values satisfy both equations."
      }
    ]
  },

  {
    id: "probability",
    subject: "Mathematics",
    level: "Form 4",
    title: "Probability",
    summary: "Work out the chance of events happening, including combined and independent events.",
    formulas: [
      "P(A) = number of favourable outcomes / total number of outcomes",
      "P(not A) = 1 − P(A)",
      "Mutually exclusive: P(A or B) = P(A) + P(B)",
      "Independent: P(A and B) = P(A) × P(B)",
      "Expected frequency = P(A) × number of trials"
    ],
    notes: [
      {
        heading: "What is probability?",
        body: "Probability measures how likely an event is. It is always between <b>0</b> (impossible) and <b>1</b> (certain), and can be written as a fraction, decimal or percentage.<div class='formula'>P(A) = favourable outcomes / total outcomes</div>"
      },
      {
        heading: "The complement",
        body: "An event either happens or it does not, so the two probabilities add up to 1:<div class='formula'>P(not A) = 1 − P(A)</div>If the chance of rain is 0.3, the chance of no rain is 0.7."
      },
      {
        heading: "Combining events",
        body: "<ul><li><b>OR</b> (mutually exclusive events, which cannot happen together): <b>add</b> the probabilities.</li><li><b>AND</b> (independent events, where one does not affect the other): <b>multiply</b> the probabilities.</li></ul>A tree diagram helps you see every possible outcome. Multiply <b>along</b> the branches, then add the results of different paths."
      },
      {
        heading: "With and without replacement",
        body: "If an item is picked and <b>put back</b>, the probabilities stay the same for the second pick. If it is <b>not put back</b>, the total goes down by one, and so may the number of favourable items. So the second fraction changes."
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>Adding when you should multiply. \"And\" usually means multiply.</li><li>Forgetting to reduce the total when there is no replacement.</li><li>Giving an answer bigger than 1. That is always wrong.</li></ul>"
      }
    ],
    examples: [
      {
        question: "A bag has 3 red and 5 blue balls. One ball is picked at random. Find the probability that it is red, and that it is not red.",
        steps: [
          "Total number of balls = 3 + 5 = 8",
          "P(red) = 3/8",
          "P(not red) = 1 − 3/8 = 5/8"
        ],
        answer: "P(red) = 3/8, P(not red) = 5/8"
      },
      {
        question: "A fair coin is tossed and a fair die is rolled. Find the probability of getting a head and a 6.",
        steps: [
          "P(head) = 1/2 and P(6) = 1/6",
          "The coin does not affect the die, so the events are independent: multiply.",
          "P(head and 6) = 1/2 × 1/6 = 1/12"
        ],
        answer: "1/12"
      },
      {
        question: "The same bag has 3 red and 5 blue balls. Two balls are picked one after the other WITHOUT replacement. Find P(both red).",
        steps: [
          "First pick: P(red) = 3/8",
          "The red ball is not put back: now 2 red out of 7 balls, so P(second red) = 2/7",
          "P(both red) = 3/8 × 2/7 = 6/56"
        ],
        answer: "3/28"
      }
    ],
    quiz: [
      {
        question: "A fair die is rolled. What is the probability of getting an even number?",
        options: ["1/6", "1/3", "1/2", "2/3"],
        answer: 2,
        explanation: "The even numbers are 2, 4 and 6: three out of six outcomes, so P = 3/6 = 1/2."
      },
      {
        question: "The probability that it rains tomorrow is 0.3. What is the probability that it does not rain?",
        options: ["0.3", "0.7", "1.3", "0"],
        answer: 1,
        explanation: "P(not rain) = 1 − 0.3 = 0.7."
      },
      {
        question: "A bag has 4 red and 6 green sweets. One is picked at random. What is P(green)?",
        options: ["2/5", "3/5", "1/6", "2/3"],
        answer: 1,
        explanation: "There are 10 sweets and 6 are green, so P(green) = 6/10 = 3/5."
      },
      {
        question: "Two fair coins are tossed. What is the probability of getting two tails?",
        options: ["1/2", "1/4", "3/4", "1/3"],
        answer: 1,
        explanation: "The coins are independent: P = 1/2 × 1/2 = 1/4. (Outcomes: HH, HT, TH, TT, and only TT works.)"
      },
      {
        question: "Events A and B are independent, with P(A) = 0.2 and P(B) = 0.5. What is P(A and B)?",
        options: ["0.7", "0.25", "0.3", "0.1"],
        answer: 3,
        explanation: "For independent events, multiply: 0.2 × 0.5 = 0.1."
      },
      {
        question: "A fair die is rolled 60 times. About how many times would you expect a 3?",
        options: ["6", "10", "20", "3"],
        answer: 1,
        explanation: "Expected frequency = P(3) × trials = 1/6 × 60 = 10."
      }
    ]
  },

  {
    id: "indices-logarithms",
    subject: "Mathematics",
    level: "Form 2",
    title: "Indices and Logarithms",
    summary: "Use the laws of indices and logarithms to simplify expressions and solve equations.",
    formulas: [
      "aᵐ × aⁿ = aᵐ⁺ⁿ",
      "aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
      "(aᵐ)ⁿ = aᵐⁿ",
      "a⁰ = 1,  a⁻ⁿ = 1/aⁿ",
      "a^(1/n) = ⁿ√a,  a^(m/n) = (ⁿ√a)ᵐ",
      "log_a x = y  means  aʸ = x",
      "log(xy) = log x + log y,  log(x/y) = log x − log y",
      "log xⁿ = n log x"
    ],
    notes: [
      {
        heading: "What is an index?",
        body: "In <b>2⁵</b>, 2 is the <b>base</b> and 5 is the <b>index</b> (or power). It means 2 × 2 × 2 × 2 × 2 = 32. Indices are a short way of writing repeated multiplication."
      },
      {
        heading: "The laws of indices",
        body: "These only work when the <b>bases are the same</b>:<div class='formula'>aᵐ × aⁿ = aᵐ⁺ⁿ  (multiply → add the powers)<br>aᵐ ÷ aⁿ = aᵐ⁻ⁿ  (divide → subtract the powers)<br>(aᵐ)ⁿ = aᵐⁿ  (power of a power → multiply)</div>"
      },
      {
        heading: "Zero, negative and fractional indices",
        body: "<ul><li><b>a⁰ = 1</b> for any a ≠ 0. Example: 7⁰ = 1.</li><li><b>Negative</b> index means 1 over: 2⁻³ = 1/2³ = 1/8.</li><li><b>Fractional</b> index means a root: 9^(1/2) = √9 = 3, and 8^(2/3) = (∛8)² = 2² = 4.</li></ul>For a fractional power, take the <b>root first</b> (the bottom number), then the power. The numbers stay smaller that way."
      },
      {
        heading: "Solving equations with indices",
        body: "Write both sides with the <b>same base</b>, then make the powers equal. Example: 2ˣ = 16 → 2ˣ = 2⁴ → x = 4."
      },
      {
        heading: "Logarithms",
        body: "A logarithm answers the question <b>\"what power?\"</b>:<div class='formula'>log_a x = y  means  aʸ = x</div>log₁₀ 100 = 2 because 10² = 100. On calculators, <b>log</b> means base 10.<br>Laws of logarithms:<div class='formula'>log(xy) = log x + log y<br>log(x/y) = log x − log y<br>log xⁿ = n log x</div>"
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>Adding powers when the bases are different: 2³ × 3² is NOT 6⁵.</li><li>Thinking a negative power makes a negative number: 2⁻² = 1/4, which is positive.</li><li>Writing log(x + y) = log x + log y. That is false. The law is for log(xy).</li></ul>"
      }
    ],
    examples: [
      {
        question: "Simplify 2³ × 2⁴ ÷ 2⁵",
        steps: [
          "Same base, so add the powers for × and subtract for ÷",
          "2³⁺⁴⁻⁵ = 2²"
        ],
        answer: "2² = 4"
      },
      {
        question: "Evaluate 27^(2/3)",
        steps: [
          "The 3 at the bottom means cube root: ∛27 = 3",
          "The 2 at the top means square: 3² = 9"
        ],
        answer: "9"
      },
      {
        question: "Solve 2^(x + 1) = 32",
        steps: [
          "Write 32 as a power of 2: 32 = 2⁵",
          "2^(x + 1) = 2⁵, so the powers are equal: x + 1 = 5"
        ],
        answer: "x = 4"
      },
      {
        question: "Without a calculator, evaluate log 2 + log 50",
        steps: [
          "Use log x + log y = log(xy): log 2 + log 50 = log(2 × 50) = log 100",
          "10² = 100, so log 100 = 2"
        ],
        answer: "2"
      }
    ],
    quiz: [
      {
        question: "Simplify x⁵ × x³",
        options: ["x¹⁵", "x⁸", "x²", "2x⁸"],
        answer: 1,
        explanation: "Multiplying with the same base: add the powers. 5 + 3 = 8, so x⁸."
      },
      {
        question: "What is 5⁰?",
        options: ["0", "5", "1", "undefined"],
        answer: 2,
        explanation: "Any non-zero number to the power 0 equals 1."
      },
      {
        question: "What is 4⁻²?",
        options: ["−16", "1/16", "−8", "1/8"],
        answer: 1,
        explanation: "A negative power means 1 over: 4⁻² = 1/4² = 1/16."
      },
      {
        question: "What is 16^(1/2)?",
        options: ["8", "4", "32", "1/4"],
        answer: 1,
        explanation: "The power 1/2 means square root: √16 = 4."
      },
      {
        question: "Solve 3ˣ = 81",
        options: ["x = 3", "x = 27", "x = 4", "x = 9"],
        answer: 2,
        explanation: "81 = 3 × 3 × 3 × 3 = 3⁴, so x = 4."
      },
      {
        question: "What is log₁₀ 1000?",
        options: ["3", "100", "10", "30"],
        answer: 0,
        explanation: "10³ = 1000, so log₁₀ 1000 = 3."
      }
    ]
  },

  {
    id: "area-volume",
    subject: "Mathematics",
    level: "Form 2",
    title: "Area and Volume (Mensuration)",
    summary: "Find areas of plane shapes and the surface area and volume of prisms, cylinders, cones and spheres.",
    formulas: [
      "Rectangle: A = l × w",
      "Triangle: A = ½ × base × height",
      "Trapezium: A = ½(a + b)h",
      "Circle: A = πr²,  Circumference = 2πr",
      "Prism: V = cross-section area × length",
      "Cylinder: V = πr²h,  Curved surface area = 2πrh",
      "Cone: V = ⅓πr²h,  Curved surface area = πrl",
      "Sphere: V = (4/3)πr³,  Surface area = 4πr²",
      "1 m² = 10 000 cm²,  1 litre = 1000 cm³"
    ],
    notes: [
      {
        heading: "Area and volume: what is the difference?",
        body: "<b>Area</b> is the amount of flat surface a shape covers, in <b>square units</b> (cm², m²). <b>Volume</b> is the amount of space a solid takes up, in <b>cubic units</b> (cm³, m³). <b>Capacity</b> is the volume a container holds, often in litres."
      },
      {
        heading: "Areas of plane shapes",
        body: "<div class='formula'>Triangle: A = ½bh<br>Parallelogram: A = bh<br>Trapezium: A = ½(a + b)h<br>Circle: A = πr²</div>The height must always be <b>perpendicular</b> (at 90°) to the base. In a trapezium, a and b are the two <b>parallel</b> sides."
      },
      {
        heading: "Prisms and cylinders",
        body: "A prism has the <b>same cross-section</b> all the way through. Its volume is:<div class='formula'>V = area of cross-section × length</div>A cylinder is a prism with a circular cross-section, so <b>V = πr²h</b>. Its total surface area is two circles plus the curved part: <b>2πr² + 2πrh</b>."
      },
      {
        heading: "Pyramids and cones",
        body: "A pyramid or cone holds exactly <b>one third</b> of the prism or cylinder with the same base and height:<div class='formula'>Pyramid: V = ⅓ × base area × h<br>Cone: V = ⅓πr²h</div>The <b>slant height</b> l of a cone comes from Pythagoras: l² = r² + h²."
      },
      {
        heading: "Spheres",
        body: "<div class='formula'>V = (4/3)πr³<br>Surface area = 4πr²</div>A hemisphere is half a sphere: V = (2/3)πr³."
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>Using the <b>diameter</b> instead of the <b>radius</b>. Halve it first!</li><li>Mixing units: change everything to cm or everything to m before you calculate.</li><li>Converting area units wrongly: 1 m = 100 cm, but 1 m² = 100 × 100 = <b>10 000 cm²</b>.</li><li>Using the slant height l in a volume formula. Volume needs the perpendicular height h.</li></ul>"
      }
    ],
    examples: [
      {
        question: "A trapezium has parallel sides 6 cm and 10 cm, and height 4 cm. Find its area.",
        steps: [
          "A = ½(a + b)h",
          "A = ½ × (6 + 10) × 4 = ½ × 16 × 4"
        ],
        answer: "A = 32 cm²"
      },
      {
        question: "A cylindrical tin has radius 7 cm and height 10 cm. Find its volume in cm³ and in litres. (Take π = 22/7)",
        steps: [
          "V = πr²h = 22/7 × 7 × 7 × 10",
          "= 22 × 7 × 10 = 1540 cm³",
          "1 litre = 1000 cm³, so 1540 ÷ 1000 = 1.54 litres"
        ],
        answer: "1540 cm³ = 1.54 litres"
      },
      {
        question: "Find the volume of a ball of radius 3 cm. (Take π = 3.142)",
        steps: [
          "V = (4/3)πr³",
          "r³ = 3 × 3 × 3 = 27",
          "V = 4/3 × 3.142 × 27 = 36 × 3.142"
        ],
        answer: "V ≈ 113.1 cm³"
      }
    ],
    quiz: [
      {
        question: "A triangle has base 8 cm and height 5 cm. What is its area?",
        options: ["40 cm²", "20 cm²", "13 cm²", "80 cm²"],
        answer: 1,
        explanation: "A = ½ × 8 × 5 = 20 cm²."
      },
      {
        question: "Find the area of a circle of radius 7 cm. (π = 22/7)",
        options: ["44 cm²", "154 cm²", "49 cm²", "308 cm²"],
        answer: 1,
        explanation: "A = πr² = 22/7 × 7 × 7 = 22 × 7 = 154 cm². (44 cm is the circumference.)"
      },
      {
        question: "What is the volume of a cube of side 3 cm?",
        options: ["9 cm³", "27 cm³", "18 cm³", "54 cm³"],
        answer: 1,
        explanation: "V = 3 × 3 × 3 = 27 cm³."
      },
      {
        question: "A cone has radius 3 cm and height 7 cm. What is its volume? (π = 22/7)",
        options: ["66 cm³", "198 cm³", "22 cm³", "132 cm³"],
        answer: 0,
        explanation: "V = ⅓πr²h = ⅓ × 22/7 × 9 × 7 = ⅓ × 198 = 66 cm³."
      },
      {
        question: "How many cm² are there in 1 m²?",
        options: ["100", "1000", "10 000", "1 000 000"],
        answer: 2,
        explanation: "1 m² = 100 cm × 100 cm = 10 000 cm²."
      },
      {
        question: "How many cm³ make 1 litre?",
        options: ["100", "1000", "10", "10 000"],
        answer: 1,
        explanation: "1 litre = 1000 cm³ (and 1 m³ = 1000 litres)."
      }
    ]
  },

  {
    id: "sequences-series",
    subject: "Mathematics",
    level: "Form 3",
    title: "Sequences and Series (AP and GP)",
    summary: "Find any term and the sum of arithmetic and geometric progressions.",
    formulas: [
      "AP nth term: Tₙ = a + (n − 1)d",
      "AP sum: Sₙ = n/2 [2a + (n − 1)d] = n/2 (a + l)",
      "GP nth term: Tₙ = arⁿ⁻¹",
      "GP sum: Sₙ = a(rⁿ − 1) / (r − 1),  r ≠ 1",
      "Sum to infinity (−1 < r < 1): S∞ = a / (1 − r)"
    ],
    notes: [
      {
        heading: "Sequences and series",
        body: "A <b>sequence</b> is a list of numbers that follows a rule, such as 3, 7, 11, 15, … A <b>series</b> is what you get when you <b>add</b> the terms: 3 + 7 + 11 + 15 + …"
      },
      {
        heading: "Arithmetic Progression (AP)",
        body: "Each term is found by <b>adding</b> the same number, the <b>common difference d</b>. In 3, 7, 11, 15, …, a = 3 and d = 4.<div class='formula'>Tₙ = a + (n − 1)d<br>Sₙ = n/2 [2a + (n − 1)d]</div>If you know the last term l, use Sₙ = n/2 (a + l)."
      },
      {
        heading: "Geometric Progression (GP)",
        body: "Each term is found by <b>multiplying</b> by the same number, the <b>common ratio r</b>. In 2, 6, 18, 54, …, a = 2 and r = 3. Find r by dividing any term by the one before it.<div class='formula'>Tₙ = arⁿ⁻¹<br>Sₙ = a(rⁿ − 1) / (r − 1)</div>"
      },
      {
        heading: "Sum to infinity",
        body: "If r is between −1 and 1, the terms get smaller and smaller, and the sum settles down to a fixed value:<div class='formula'>S∞ = a / (1 − r)</div>For 8 + 4 + 2 + 1 + …, S∞ = 8 / (1 − ½) = 16."
      },
      {
        heading: "Real life uses",
        body: "<ul><li><b>AP:</b> saving the same extra amount each month, or seats in rows that grow by a fixed number.</li><li><b>GP:</b> compound interest, population growth, and a car losing a fixed percentage of its value every year (depreciation).</li></ul>"
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>Using n instead of <b>(n − 1)</b> in the nth-term formula.</li><li>Mixing up the term Tₙ and the sum Sₙ. Read the question carefully.</li><li>Finding d by subtracting the wrong way round: d = second term − first term.</li></ul>"
      }
    ],
    examples: [
      {
        question: "Find the 10th term of the AP 3, 7, 11, …",
        steps: [
          "a = 3, d = 7 − 3 = 4, n = 10",
          "T₁₀ = a + (n − 1)d = 3 + 9 × 4 = 3 + 36"
        ],
        answer: "T₁₀ = 39"
      },
      {
        question: "Find the sum of the first 20 terms of 3, 7, 11, …",
        steps: [
          "a = 3, d = 4, n = 20",
          "S₂₀ = 20/2 [2(3) + 19 × 4] = 10 [6 + 76]",
          "S₂₀ = 10 × 82"
        ],
        answer: "S₂₀ = 820"
      },
      {
        question: "Find the 6th term of the GP 2, 6, 18, …",
        steps: [
          "a = 2, r = 6 ÷ 2 = 3, n = 6",
          "T₆ = ar⁵ = 2 × 3⁵ = 2 × 243"
        ],
        answer: "T₆ = 486"
      },
      {
        question: "Find the sum to infinity of 8 + 4 + 2 + 1 + …",
        steps: [
          "a = 8, r = 4 ÷ 8 = ½. r is between −1 and 1, so S∞ exists.",
          "S∞ = a / (1 − r) = 8 / (1 − ½) = 8 / ½"
        ],
        answer: "S∞ = 16"
      }
    ],
    quiz: [
      {
        question: "What is the common difference of 5, 9, 13, 17, …?",
        options: ["4", "5", "9", "13/9"],
        answer: 0,
        explanation: "d = 9 − 5 = 4. Each term is 4 more than the one before."
      },
      {
        question: "Find the 8th term of the AP 2, 5, 8, …",
        options: ["23", "26", "24", "20"],
        answer: 0,
        explanation: "T₈ = 2 + (8 − 1) × 3 = 2 + 21 = 23."
      },
      {
        question: "What is the common ratio of 3, 12, 48, …?",
        options: ["9", "4", "3", "36"],
        answer: 1,
        explanation: "r = 12 ÷ 3 = 4. Each term is 4 times the one before."
      },
      {
        question: "A GP has a = 1 and r = 2. What is the 5th term?",
        options: ["10", "16", "32", "8"],
        answer: 1,
        explanation: "T₅ = ar⁴ = 1 × 2⁴ = 16. (The terms are 1, 2, 4, 8, 16.)"
      },
      {
        question: "What is 1 + 2 + 3 + … + 10?",
        options: ["55", "50", "100", "45"],
        answer: 0,
        explanation: "S₁₀ = n/2 (a + l) = 10/2 × (1 + 10) = 5 × 11 = 55."
      },
      {
        question: "Find the sum to infinity of 9 + 3 + 1 + …",
        options: ["13.5", "12", "27", "It has no sum"],
        answer: 0,
        explanation: "a = 9, r = 1/3. S∞ = 9 / (1 − 1/3) = 9 / (2/3) = 13.5."
      }
    ]
  },

  {
    id: "matrices",
    subject: "Mathematics",
    level: "Form 3",
    title: "Matrices",
    summary: "Add and multiply matrices, find determinants and inverses, and solve simultaneous equations.",
    formulas: [
      "Order of a matrix = rows × columns",
      "Multiplying: (m × n) × (n × p) gives an m × p matrix",
      "For A = [a b; c d]: determinant |A| = ad − bc",
      "Inverse: A⁻¹ = (1/|A|) [d −b; −c a]",
      "Identity I = [1 0; 0 1],  AI = IA = A,  AA⁻¹ = I",
      "If |A| = 0, A is singular (no inverse)"
    ],
    notes: [
      {
        heading: "What is a matrix?",
        body: "A matrix is a rectangular arrangement of numbers in <b>rows</b> and <b>columns</b>. Its <b>order</b> is written rows × columns. Here we write a 2 × 2 matrix row by row, with a semicolon between rows: <b>[2 1; 3 4]</b> means the first row is 2 1 and the second row is 3 4."
      },
      {
        heading: "Adding and subtracting",
        body: "You can only add or subtract matrices of the <b>same order</b>. Add or subtract the numbers in matching positions:<div class='formula'>[2 1; 3 4] + [1 0; 2 5] = [3 1; 5 9]</div>"
      },
      {
        heading: "Multiplying matrices",
        body: "You can multiply A × B only if the number of <b>columns of A</b> equals the number of <b>rows of B</b>. Multiply each <b>row</b> of the first by each <b>column</b> of the second, then add the products.<div class='formula'>[a b; c d] × [p; q] = [ap + bq; cp + dq]</div>In general <b>AB ≠ BA</b>, so the order matters."
      },
      {
        heading: "Determinant and inverse",
        body: "For A = [a b; c d]:<div class='formula'>|A| = ad − bc<br>A⁻¹ = (1/|A|) [d −b; −c a]</div>To get the inverse: <b>swap</b> a and d, <b>change the signs</b> of b and c, then <b>divide</b> by the determinant. If |A| = 0 the matrix is <b>singular</b> and has no inverse."
      },
      {
        heading: "Solving simultaneous equations",
        body: "Write the equations as <b>AX = B</b>, where A holds the coefficients, X = [x; y] and B holds the answers. Then:<div class='formula'>X = A⁻¹B</div>Remember to multiply by A⁻¹ on the <b>left</b>."
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>Calculating the determinant as ad + bc. It is <b>ad − bc</b>.</li><li>Forgetting to divide by the determinant when finding the inverse.</li><li>Multiplying in the wrong order: A⁻¹B is not the same as BA⁻¹.</li></ul>"
      }
    ],
    examples: [
      {
        question: "Find [2 1; 3 4] + [1 0; 2 5]",
        steps: [
          "Add matching positions: top row 2 + 1 = 3 and 1 + 0 = 1",
          "Bottom row: 3 + 2 = 5 and 4 + 5 = 9"
        ],
        answer: "[3 1; 5 9]"
      },
      {
        question: "Find [1 2; 3 4] × [5; 6]",
        steps: [
          "(2 × 2) × (2 × 1) gives a 2 × 1 matrix",
          "Top: row 1 × column = 1 × 5 + 2 × 6 = 5 + 12 = 17",
          "Bottom: row 2 × column = 3 × 5 + 4 × 6 = 15 + 24 = 39"
        ],
        answer: "[17; 39]"
      },
      {
        question: "Find the inverse of A = [4 3; 1 1]",
        steps: [
          "|A| = (4 × 1) − (3 × 1) = 4 − 3 = 1",
          "Swap 4 and 1, change the signs of 3 and 1: [1 −3; −1 4]",
          "Divide by |A| = 1 (no change)"
        ],
        answer: "A⁻¹ = [1 −3; −1 4]"
      },
      {
        question: "Use matrices to solve 2x + y = 5 and x + y = 3",
        steps: [
          "A = [2 1; 1 1], X = [x; y], B = [5; 3]",
          "|A| = 2 × 1 − 1 × 1 = 1, so A⁻¹ = [1 −1; −1 2]",
          "X = A⁻¹B = [1 × 5 + (−1) × 3; (−1) × 5 + 2 × 3] = [2; 1]",
          "Check: 2(2) + 1 = 5 ✓ and 2 + 1 = 3 ✓"
        ],
        answer: "x = 2, y = 1"
      }
    ],
    quiz: [
      {
        question: "A matrix has 2 rows and 3 columns. What is its order?",
        options: ["3 × 2", "2 × 3", "6", "5"],
        answer: 1,
        explanation: "Order is always rows × columns: 2 × 3."
      },
      {
        question: "Find the determinant of [3 2; 1 4]",
        options: ["10", "14", "12", "−10"],
        answer: 0,
        explanation: "ad − bc = 3 × 4 − 2 × 1 = 12 − 2 = 10."
      },
      {
        question: "Find [2 0; 0 2] × [3; 5]",
        options: ["[6; 10]", "[5; 7]", "[6; 0]", "[3; 5]"],
        answer: 0,
        explanation: "Top: 2 × 3 + 0 × 5 = 6. Bottom: 0 × 3 + 2 × 5 = 10."
      },
      {
        question: "A matrix with no inverse (a singular matrix) has a determinant of…",
        options: ["1", "0", "−1", "any negative number"],
        answer: 1,
        explanation: "The inverse divides by the determinant, and you cannot divide by 0."
      },
      {
        question: "What is the inverse of [2 1; 1 1]?",
        options: ["[1 −1; −1 2]", "[2 −1; −1 1]", "[1 1; 1 2]", "[−1 1; 1 −2]"],
        answer: 0,
        explanation: "Determinant = 2 − 1 = 1. Swap 2 and 1, change the signs of the others: [1 −1; −1 2]."
      },
      {
        question: "Can a 2 × 3 matrix be multiplied by another 2 × 3 matrix?",
        options: ["Yes, always", "No: the first has 3 columns but the second has 2 rows", "Yes, the answer is 2 × 3", "Yes, the answer is 3 × 3"],
        answer: 1,
        explanation: "Columns of the first (3) must equal rows of the second (2). They don't, so it is not possible."
      }
    ]
  },

  {
    id: "differentiation",
    subject: "Mathematics",
    level: "Form 4",
    title: "Differentiation",
    summary: "Find gradients of curves, stationary points, and velocity and acceleration from displacement.",
    formulas: [
      "If y = axⁿ, then dy/dx = naxⁿ⁻¹",
      "Derivative of a constant = 0",
      "Gradient of a curve at a point = value of dy/dx there",
      "Stationary point: dy/dx = 0",
      "Minimum if d²y/dx² > 0,  Maximum if d²y/dx² < 0",
      "Velocity v = ds/dt,  Acceleration a = dv/dt"
    ],
    notes: [
      {
        heading: "The gradient of a curve",
        body: "A straight line has the same gradient everywhere, but a curve's gradient <b>changes</b> from point to point. The gradient at a point is the gradient of the <b>tangent</b> there. Differentiation gives a formula, <b>dy/dx</b>, for that gradient at any x."
      },
      {
        heading: "The rule",
        body: "<div class='formula'>If y = axⁿ, then dy/dx = naxⁿ⁻¹</div><b>Multiply</b> by the power, then <b>reduce</b> the power by 1. Differentiate each term separately.<ul><li>y = x³ → dy/dx = 3x²</li><li>y = 5x → dy/dx = 5</li><li>y = 7 (a constant) → dy/dx = 0</li></ul>"
      },
      {
        heading: "Equation of a tangent",
        body: "1. Find dy/dx and substitute x to get the gradient m.<br>2. Find the y-value of the point.<br>3. Use <b>y − y₁ = m(x − x₁)</b>."
      },
      {
        heading: "Stationary points (turning points)",
        body: "At the top of a hill or the bottom of a valley on a curve, the gradient is zero:<div class='formula'>dy/dx = 0</div>To tell which kind, differentiate again:<ul><li>d²y/dx² > 0 → <b>minimum</b> (valley)</li><li>d²y/dx² < 0 → <b>maximum</b> (hill)</li></ul>"
      },
      {
        heading: "Rates of change: motion",
        body: "If displacement s depends on time t:<div class='formula'>Velocity v = ds/dt<br>Acceleration a = dv/dt</div>An object is momentarily at rest when v = 0."
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>Forgetting that a constant differentiates to <b>0</b>.</li><li>Leaving the power unchanged: x³ becomes 3x², not 3x³.</li><li>Giving only x at a stationary point. Find the y-coordinate too by putting x into the <b>original</b> equation.</li></ul>"
      }
    ],
    examples: [
      {
        question: "Differentiate y = 3x⁴ − 2x² + 5x − 7",
        steps: [
          "3x⁴ → 4 × 3x³ = 12x³",
          "−2x² → 2 × (−2)x = −4x",
          "5x → 5,  and −7 → 0"
        ],
        answer: "dy/dx = 12x³ − 4x + 5"
      },
      {
        question: "Find the gradient of y = x² − 3x at the point where x = 4",
        steps: [
          "dy/dx = 2x − 3",
          "At x = 4: dy/dx = 2(4) − 3 = 8 − 3"
        ],
        answer: "Gradient = 5"
      },
      {
        question: "Find the stationary point of y = x² − 6x + 5 and state its nature",
        steps: [
          "dy/dx = 2x − 6. Set it to 0: 2x − 6 = 0, so x = 3",
          "y = 3² − 6(3) + 5 = 9 − 18 + 5 = −4",
          "d²y/dx² = 2, which is greater than 0, so it is a minimum"
        ],
        answer: "Minimum point at (3, −4)"
      },
      {
        question: "A particle moves so that s = t³ − 2t² metres. Find its velocity when t = 3 s.",
        steps: [
          "v = ds/dt = 3t² − 4t",
          "At t = 3: v = 3(9) − 4(3) = 27 − 12"
        ],
        answer: "v = 15 m/s"
      }
    ],
    quiz: [
      {
        question: "Differentiate y = x⁵",
        options: ["5x⁴", "x⁴", "5x⁶", "4x⁵"],
        answer: 0,
        explanation: "Multiply by the power (5) and reduce the power by 1: 5x⁴."
      },
      {
        question: "Differentiate y = 7",
        options: ["7", "1", "0", "7x"],
        answer: 2,
        explanation: "A constant does not change, so its gradient is 0."
      },
      {
        question: "If y = 4x³, what is dy/dx?",
        options: ["12x²", "4x²", "12x³", "7x²"],
        answer: 0,
        explanation: "3 × 4 = 12, and the power goes from 3 to 2: 12x²."
      },
      {
        question: "What is the gradient of y = x² at x = 3?",
        options: ["9", "6", "3", "2"],
        answer: 1,
        explanation: "dy/dx = 2x = 2 × 3 = 6. (9 is the y-value, not the gradient.)"
      },
      {
        question: "At what value of x does y = x² − 4x have a stationary point?",
        options: ["x = 4", "x = 2", "x = −2", "x = 0"],
        answer: 1,
        explanation: "dy/dx = 2x − 4 = 0, so x = 2."
      },
      {
        question: "A body moves with s = 5t². What is its velocity at t = 2 s?",
        options: ["20 m/s", "10 m/s", "40 m/s", "25 m/s"],
        answer: 0,
        explanation: "v = ds/dt = 10t = 10 × 2 = 20 m/s."
      }
    ]
  },

  /* =====================================================
     PHYSICS
     ===================================================== */
  {
    id: "pressure",
    subject: "Physics",
    level: "Form 2",
    title: "Pressure",
    summary: "Understand pressure in solids, liquids and gases, and calculate it using P = F/A and P = hρg.",
    formulas: [
      "Pressure: P = F / A",
      "Pressure in a liquid: P = hρg",
      "Hydraulic machines: F₁ / A₁ = F₂ / A₂",
      "1 pascal (Pa) = 1 N/m²",
      "Atmospheric pressure ≈ 101 325 Pa (760 mmHg)"
    ],
    notes: [
      {
        heading: "Pressure in solids",
        body: "Pressure is the force acting <b>perpendicularly</b> on a unit area.<div class='formula'>P = F / A</div>The same force gives a <b>bigger</b> pressure on a <b>smaller</b> area. That is why knives are sharpened and why tractors have wide tyres (to reduce pressure on soft ground)."
      },
      {
        heading: "Pressure in liquids",
        body: "Pressure in a liquid increases with <b>depth</b> and with the <b>density</b> of the liquid:<div class='formula'>P = hρg</div>where h is depth (m), ρ is density (kg/m³) and g ≈ 10 N/kg. It does <b>not</b> depend on the shape of the container, and at any point it acts equally in all directions. This is why dam walls are made <b>thicker at the bottom</b>."
      },
      {
        heading: "Hydraulic machines (Pascal's principle)",
        body: "Pressure applied to an enclosed liquid is passed on <b>equally</b> to every part of it. A small force on a small piston creates a pressure that pushes a large piston with a much bigger force:<div class='formula'>F₁ / A₁ = F₂ / A₂</div>Examples: hydraulic brakes in cars, hydraulic jacks and car lifts at garages."
      },
      {
        heading: "Atmospheric pressure",
        body: "The air above us presses down on everything. At sea level it is about <b>101 325 Pa</b>, enough to hold up a column of mercury 760 mm tall. It decreases as you go higher above sea level. Drinking straws, syringes and rubber suckers all work because of atmospheric pressure."
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>Leaving area in cm². Convert to m² first: <b>1 cm² = 0.0001 m²</b>.</li><li>Using mass instead of force. Weight = mg, so a 50 kg mass has weight 500 N.</li><li>Measuring depth from the bottom. Depth h is measured <b>down from the liquid surface</b>.</li></ul>"
      }
    ],
    examples: [
      {
        question: "A box of weight 600 N rests on a face measuring 1.5 m by 0.4 m. Find the pressure it exerts on the floor.",
        steps: [
          "Area A = 1.5 × 0.4 = 0.6 m²",
          "P = F / A = 600 / 0.6"
        ],
        answer: "P = 1000 Pa (1000 N/m²)"
      },
      {
        question: "Find the pressure due to water at a depth of 5 m. (Density of water = 1000 kg/m³, g = 10 N/kg)",
        steps: [
          "h = 5 m, ρ = 1000 kg/m³, g = 10 N/kg",
          "P = hρg = 5 × 1000 × 10"
        ],
        answer: "P = 50 000 Pa"
      },
      {
        question: "In a hydraulic press, a force of 50 N acts on a small piston of area 0.01 m². The large piston has area 0.5 m². Find the force on the large piston.",
        steps: [
          "F₁ / A₁ = F₂ / A₂",
          "50 / 0.01 = F₂ / 0.5",
          "F₂ = 5000 × 0.5"
        ],
        answer: "F₂ = 2500 N"
      }
    ],
    quiz: [
      {
        question: "A force of 200 N acts on an area of 4 m². What is the pressure?",
        options: ["800 Pa", "50 Pa", "204 Pa", "0.02 Pa"],
        answer: 1,
        explanation: "P = F / A = 200 / 4 = 50 Pa."
      },
      {
        question: "What is the SI unit of pressure?",
        options: ["Newton (N)", "Joule (J)", "Pascal (Pa)", "Watt (W)"],
        answer: 2,
        explanation: "Pressure is measured in pascals: 1 Pa = 1 N/m²."
      },
      {
        question: "What is the pressure due to water at a depth of 10 m? (ρ = 1000 kg/m³, g = 10 N/kg)",
        options: ["10 000 Pa", "1 000 Pa", "100 000 Pa", "1 000 000 Pa"],
        answer: 2,
        explanation: "P = hρg = 10 × 1000 × 10 = 100 000 Pa."
      },
      {
        question: "Why is a sharp knife better for cutting than a blunt one?",
        options: ["It has a smaller area, so it exerts a greater pressure", "It is heavier", "It has a larger area, so it exerts a greater pressure", "It reduces the force needed to zero"],
        answer: 0,
        explanation: "P = F / A: the thin edge has a tiny area, so the same force produces a much bigger pressure."
      },
      {
        question: "Pressure at a point in a liquid does NOT depend on…",
        options: ["the depth", "the density of the liquid", "the shape of the container", "the gravitational field strength"],
        answer: 2,
        explanation: "P = hρg depends only on depth, density and g, not on the shape of the container."
      },
      {
        question: "A hydraulic jack has pistons of area 0.02 m² and 0.4 m². What force on the small piston lifts a 4000 N load?",
        options: ["200 N", "80 000 N", "100 N", "2000 N"],
        answer: 0,
        explanation: "F₁ / 0.02 = 4000 / 0.4 = 10 000, so F₁ = 10 000 × 0.02 = 200 N."
      }
    ]
  },

  {
    id: "linear-motion",
    subject: "Physics",
    level: "Form 3",
    title: "Linear Motion",
    summary: "Use the equations of motion to solve problems on velocity, acceleration and distance.",
    formulas: [
      "Average speed = total distance / total time",
      "Acceleration: a = (v − u) / t",
      "v = u + at",
      "s = ut + ½at²",
      "v² = u² + 2as",
      "s = ½(u + v)t",
      "km/h → m/s: divide by 3.6"
    ],
    notes: [
      {
        heading: "Key quantities",
        body: "<ul><li><b>u</b> — initial velocity (m/s)</li><li><b>v</b> — final velocity (m/s)</li><li><b>a</b> — acceleration (m/s²)</li><li><b>t</b> — time (s)</li><li><b>s</b> — displacement (m)</li></ul><b>Speed</b> has size only (a scalar). <b>Velocity</b> has size and direction (a vector)."
      },
      {
        heading: "Equations of uniformly accelerated motion",
        body: "<div class='formula'>v = u + at<br>s = ut + ½at²<br>v² = u² + 2as<br>s = ½(u + v)t</div>Write down what you know (u, v, a, s, t), mark what you want, then choose the equation that contains exactly those."
      },
      {
        heading: "Motion graphs",
        body: "<ul><li><b>Distance–time graph:</b> the gradient is the speed. A flat line means the object is stationary.</li><li><b>Velocity–time graph:</b> the gradient is the acceleration, and the <b>area under the graph</b> is the distance travelled.</li></ul>"
      },
      {
        heading: "Tips",
        body: "\"Starts from rest\" means u = 0. \"Comes to rest\" means v = 0. A negative acceleration means the object is slowing down (deceleration). For free fall, take a = g ≈ 10 m/s²."
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>Using km/h in the equations. Change to m/s first: <b>72 km/h ÷ 3.6 = 20 m/s</b>.</li><li>Forgetting to square t in s = ut + ½at².</li><li>Dropping the minus sign for a deceleration.</li></ul>"
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
      },
      {
        question: "A matatu moving at 72 km/h stops in 4 s. Find its deceleration.",
        steps: [
          "Convert: u = 72 ÷ 3.6 = 20 m/s,  v = 0,  t = 4 s",
          "a = (v − u) / t = (0 − 20) / 4"
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
      },
      {
        question: "On a velocity–time graph, what does the area under the line represent?",
        options: ["Acceleration", "Distance travelled", "Speed", "Force"],
        answer: 1,
        explanation: "Area = velocity × time, which is distance. (The gradient gives the acceleration.)"
      }
    ]
  },

  {
    id: "newtons-laws",
    subject: "Physics",
    level: "Form 3",
    title: "Newton's Laws and Momentum",
    summary: "Apply Newton's three laws of motion, momentum, impulse and the conservation of momentum.",
    formulas: [
      "Momentum: p = mv",
      "Newton's 2nd law: F = ma",
      "Force = rate of change of momentum: F = (mv − mu) / t",
      "Impulse: Ft = mv − mu",
      "Conservation of momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
      "Weight: W = mg"
    ],
    notes: [
      {
        heading: "Newton's first law (inertia)",
        body: "An object stays <b>at rest</b>, or keeps moving at a <b>constant velocity</b> in a straight line, unless a resultant force acts on it. This resistance to change is called <b>inertia</b>, and more mass means more inertia. This is why passengers jerk forward when a bus brakes suddenly, and why seat belts save lives."
      },
      {
        heading: "Momentum",
        body: "Momentum is mass times velocity:<div class='formula'>p = mv</div>Its unit is <b>kg m/s</b> (or N s). It is a vector, so direction matters. A slow, heavy lorry can have more momentum than a fast motorbike."
      },
      {
        heading: "Newton's second law",
        body: "The rate of change of momentum is proportional to the resultant force, and happens in the direction of the force. For a fixed mass this gives:<div class='formula'>F = ma</div>A force of <b>1 newton</b> gives a 1 kg mass an acceleration of 1 m/s². <b>Impulse</b> = Ft = change in momentum. This is why crumple zones and airbags work: making the time t longer makes the force F smaller."
      },
      {
        heading: "Newton's third law",
        body: "When body A exerts a force on body B, body B exerts an <b>equal and opposite</b> force on body A. The two forces act on <b>different</b> bodies. Examples: a gun recoiling, a rocket pushing out gases, and you pushing back on the ground when you walk."
      },
      {
        heading: "Conservation of momentum",
        body: "If no outside force acts, the total momentum <b>before</b> a collision or explosion equals the total momentum <b>after</b>:<div class='formula'>m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂</div>If the bodies stick together, they share one final velocity: m₁u₁ + m₂u₂ = (m₁ + m₂)v.<br><b>Elastic</b> collision: kinetic energy is also conserved. <b>Inelastic</b> collision: some kinetic energy turns into heat and sound."
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>Mixing up <b>mass</b> (kg) and <b>weight</b> (N). Weight = mg.</li><li>Leaving mass in grams. Change to kg: 20 g = 0.02 kg.</li><li>Ignoring direction. Choose one direction as positive, and give velocities the opposite way a minus sign.</li></ul>"
      }
    ],
    examples: [
      {
        question: "Find the force needed to give a 5 kg mass an acceleration of 4 m/s².",
        steps: [
          "F = ma",
          "F = 5 × 4"
        ],
        answer: "F = 20 N"
      },
      {
        question: "A 0.5 kg ball moving at 10 m/s is kicked and leaves at 30 m/s in the same direction. The kick lasts 0.2 s. Find the average force.",
        steps: [
          "Change in momentum = mv − mu = 0.5 × 30 − 0.5 × 10 = 15 − 5 = 10 kg m/s",
          "F = change in momentum / t = 10 / 0.2"
        ],
        answer: "F = 50 N"
      },
      {
        question: "A 2 kg trolley moving at 6 m/s hits a stationary 1 kg trolley, and they stick together. Find their common velocity.",
        steps: [
          "Momentum before = 2 × 6 + 1 × 0 = 12 kg m/s",
          "Momentum after = (2 + 1) × v = 3v",
          "3v = 12"
        ],
        answer: "v = 4 m/s"
      },
      {
        question: "A 4 kg gun fires a 0.02 kg bullet at 400 m/s. Find the recoil velocity of the gun.",
        steps: [
          "Before firing everything is at rest, so total momentum = 0",
          "After: 0.02 × 400 + 4 × v = 0",
          "8 + 4v = 0, so v = −2 m/s"
        ],
        answer: "The gun recoils at 2 m/s (backwards)"
      }
    ],
    quiz: [
      {
        question: "What is the momentum of a 1000 kg car moving at 20 m/s?",
        options: ["20 000 kg m/s", "50 kg m/s", "1020 kg m/s", "2000 kg m/s"],
        answer: 0,
        explanation: "p = mv = 1000 × 20 = 20 000 kg m/s."
      },
      {
        question: "What force gives a 3 kg mass an acceleration of 2 m/s²?",
        options: ["1.5 N", "5 N", "6 N", "9 N"],
        answer: 2,
        explanation: "F = ma = 3 × 2 = 6 N."
      },
      {
        question: "Passengers jerk forward when a bus brakes suddenly. This is explained by…",
        options: ["Newton's first law (inertia)", "Newton's second law", "Newton's third law", "the law of conservation of energy"],
        answer: 0,
        explanation: "The passengers' bodies tend to keep moving forward because of inertia: Newton's first law."
      },
      {
        question: "What is the SI unit of momentum?",
        options: ["N", "kg m/s", "kg m/s²", "J"],
        answer: 1,
        explanation: "Momentum = mass × velocity, so kg × m/s = kg m/s (equivalent to N s)."
      },
      {
        question: "What is the weight of a 5 kg mass on Earth? (g = 10 N/kg)",
        options: ["5 N", "0.5 N", "50 N", "500 N"],
        answer: 2,
        explanation: "W = mg = 5 × 10 = 50 N."
      },
      {
        question: "A 4 kg body at 3 m/s hits a stationary 2 kg body and they stick together. What is their common velocity?",
        options: ["2 m/s", "3 m/s", "6 m/s", "1.5 m/s"],
        answer: 0,
        explanation: "Momentum before = 4 × 3 = 12. After: (4 + 2)v = 12, so v = 2 m/s."
      }
    ]
  },

  {
    id: "work-energy-power",
    subject: "Physics",
    level: "Form 2",
    title: "Work, Energy, Power and Machines",
    summary: "Calculate work done, kinetic and potential energy, power and the efficiency of machines.",
    formulas: [
      "Work: W = F × d",
      "Kinetic energy: KE = ½mv²",
      "Potential energy: PE = mgh",
      "Power: P = W / t  (energy ÷ time)",
      "Mechanical advantage: MA = Load / Effort",
      "Velocity ratio: VR = effort distance / load distance",
      "Efficiency = (MA / VR) × 100% = (useful output / input) × 100%"
    ],
    notes: [
      {
        heading: "Work",
        body: "Work is done when a force moves an object <b>in the direction of the force</b>:<div class='formula'>W = F × d</div>The unit is the <b>joule (J)</b>: 1 J is the work done when a force of 1 N moves 1 m. If nothing moves, <b>no work</b> is done, however tiring it feels!"
      },
      {
        heading: "Energy and its conservation",
        body: "Energy is the ability to do work, measured in joules. It comes in many forms: kinetic, potential, chemical, heat, light, sound and electrical. <b>Energy cannot be created or destroyed, only changed from one form to another.</b> A falling stone changes potential energy into kinetic energy."
      },
      {
        heading: "Kinetic and potential energy",
        body: "<div class='formula'>KE = ½mv²  (energy of motion)<br>PE = mgh  (energy due to height)</div>For a falling object (ignoring air resistance), the PE lost equals the KE gained: mgh = ½mv², which gives <b>v = √(2gh)</b>."
      },
      {
        heading: "Power",
        body: "Power is the <b>rate</b> of doing work, or of changing energy:<div class='formula'>P = W / t</div>The unit is the <b>watt (W)</b>: 1 W = 1 J/s. 1 kilowatt (kW) = 1000 W."
      },
      {
        heading: "Machines and efficiency",
        body: "A machine (lever, pulley, inclined plane) lets a small <b>effort</b> move a large <b>load</b>.<div class='formula'>MA = Load / Effort<br>VR = effort distance / load distance<br>Efficiency = MA / VR × 100%</div>Efficiency is always <b>less than 100%</b>, because some energy is wasted overcoming friction and lifting moving parts."
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>Forgetting to square v in KE = ½mv².</li><li>Using minutes instead of seconds in P = W / t.</li><li>Giving an efficiency above 100%. That is impossible, so check your working.</li></ul>"
      }
    ],
    examples: [
      {
        question: "A force of 50 N pushes a box 8 m along the floor. How much work is done?",
        steps: [
          "W = F × d",
          "W = 50 × 8"
        ],
        answer: "W = 400 J"
      },
      {
        question: "A 2 kg ball is dropped from a height of 20 m. Find its PE at the top and its speed just before it hits the ground. (g = 10 N/kg, ignore air resistance)",
        steps: [
          "PE = mgh = 2 × 10 × 20 = 400 J",
          "All the PE becomes KE: ½ × 2 × v² = 400",
          "v² = 400, so v = 20 m/s"
        ],
        answer: "PE = 400 J, v = 20 m/s"
      },
      {
        question: "A pump lifts 600 kg of water through a height of 10 m in 60 s. Find its power. (g = 10 N/kg)",
        steps: [
          "Work done = mgh = 600 × 10 × 10 = 60 000 J",
          "P = W / t = 60 000 / 60"
        ],
        answer: "P = 1000 W (1 kW)"
      },
      {
        question: "A pulley system with velocity ratio 4 lifts a 400 N load using an effort of 125 N. Find its efficiency.",
        steps: [
          "MA = Load / Effort = 400 / 125 = 3.2",
          "Efficiency = MA / VR × 100% = 3.2 / 4 × 100%"
        ],
        answer: "Efficiency = 80%"
      }
    ],
    quiz: [
      {
        question: "A force of 20 N moves an object 5 m. How much work is done?",
        options: ["4 J", "25 J", "100 J", "15 J"],
        answer: 2,
        explanation: "W = F × d = 20 × 5 = 100 J."
      },
      {
        question: "What is the kinetic energy of a 4 kg mass moving at 3 m/s?",
        options: ["18 J", "12 J", "36 J", "6 J"],
        answer: 0,
        explanation: "KE = ½mv² = ½ × 4 × 3² = ½ × 4 × 9 = 18 J."
      },
      {
        question: "A 5 kg mass is raised through 2 m. What potential energy does it gain? (g = 10 N/kg)",
        options: ["10 J", "100 J", "50 J", "1000 J"],
        answer: 1,
        explanation: "PE = mgh = 5 × 10 × 2 = 100 J."
      },
      {
        question: "A motor does 1200 J of work in 60 s. What is its power?",
        options: ["20 W", "72 000 W", "1260 W", "0.05 W"],
        answer: 0,
        explanation: "P = W / t = 1200 / 60 = 20 W."
      },
      {
        question: "What is the SI unit of power?",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        answer: 2,
        explanation: "Power is measured in watts: 1 W = 1 J/s."
      },
      {
        question: "A machine has MA = 3 and VR = 4. What is its efficiency?",
        options: ["75%", "133%", "12%", "7%"],
        answer: 0,
        explanation: "Efficiency = MA / VR × 100% = 3/4 × 100% = 75%."
      }
    ]
  },

  {
    id: "waves",
    subject: "Physics",
    level: "Form 2",
    title: "Waves and Sound",
    summary: "Describe transverse and longitudinal waves, use v = fλ, and solve echo problems.",
    formulas: [
      "Wave equation: v = fλ",
      "Period: T = 1 / f",
      "Echo: v = 2d / t",
      "Speed of light in vacuum: c = 3 × 10⁸ m/s",
      "Speed of sound in air ≈ 330–340 m/s"
    ],
    notes: [
      {
        heading: "What is a wave?",
        body: "A wave is a disturbance that transfers <b>energy</b> from one place to another <b>without</b> carrying matter along with it. When a wave passes through water, the water only moves up and down while the energy travels across."
      },
      {
        heading: "Transverse and longitudinal waves",
        body: "<ul><li><b>Transverse:</b> particles vibrate at <b>right angles</b> to the direction the wave travels, forming crests and troughs. Examples: water waves, light and all electromagnetic waves.</li><li><b>Longitudinal:</b> particles vibrate <b>along</b> the direction the wave travels, forming compressions and rarefactions. Example: sound.</li></ul>"
      },
      {
        heading: "Describing a wave",
        body: "<ul><li><b>Amplitude (A):</b> the maximum displacement from the rest position.</li><li><b>Wavelength (λ):</b> the distance between two neighbouring crests, in metres.</li><li><b>Frequency (f):</b> the number of complete waves per second, in hertz (Hz).</li><li><b>Period (T):</b> the time for one complete wave. T = 1/f.</li></ul>"
      },
      {
        heading: "The wave equation",
        body: "<div class='formula'>v = fλ</div>Speed = frequency × wavelength. For waves of the same speed, a <b>higher frequency</b> means a <b>shorter wavelength</b>."
      },
      {
        heading: "Sound and echoes",
        body: "Sound needs a <b>medium</b> (solid, liquid or gas) and cannot travel through a vacuum. It travels fastest in solids. An <b>echo</b> is reflected sound. It goes to the wall <b>and back</b>, so it covers twice the distance:<div class='formula'>v = 2d / t</div>Echoes are used in sonar to find the depth of the sea, and in ultrasound scans."
      },
      {
        heading: "The electromagnetic spectrum",
        body: "In order of increasing frequency (decreasing wavelength): <b>radio → microwaves → infrared → visible light → ultraviolet → X-rays → gamma rays</b>. They are all transverse, and all travel at <b>3 × 10⁸ m/s</b> in a vacuum."
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>Forgetting the <b>2</b> in echo problems.</li><li>Not converting units: kHz × 1000 = Hz, MHz × 1 000 000 = Hz, and cm ÷ 100 = m.</li><li>Confusing period and frequency: they are reciprocals of each other.</li></ul>"
      }
    ],
    examples: [
      {
        question: "A wave has frequency 50 Hz and wavelength 0.4 m. Find its speed.",
        steps: [
          "v = fλ",
          "v = 50 × 0.4"
        ],
        answer: "v = 20 m/s"
      },
      {
        question: "A radio station broadcasts at 100 MHz. Find the wavelength. (c = 3 × 10⁸ m/s)",
        steps: [
          "f = 100 MHz = 100 × 10⁶ = 1 × 10⁸ Hz",
          "λ = v / f = 3 × 10⁸ / 1 × 10⁸"
        ],
        answer: "λ = 3 m"
      },
      {
        question: "A student standing 170 m from a cliff claps and hears the echo 1 s later. Find the speed of sound.",
        steps: [
          "The sound travels to the cliff and back: total distance = 2 × 170 = 340 m",
          "v = 2d / t = 340 / 1"
        ],
        answer: "v = 340 m/s"
      }
    ],
    quiz: [
      {
        question: "A wave has frequency 10 Hz and wavelength 2 m. What is its speed?",
        options: ["5 m/s", "12 m/s", "20 m/s", "0.2 m/s"],
        answer: 2,
        explanation: "v = fλ = 10 × 2 = 20 m/s."
      },
      {
        question: "What is the period of a wave of frequency 50 Hz?",
        options: ["50 s", "0.02 s", "0.5 s", "5 s"],
        answer: 1,
        explanation: "T = 1/f = 1/50 = 0.02 s."
      },
      {
        question: "Sound is an example of which type of wave?",
        options: ["Transverse", "Longitudinal", "Electromagnetic", "It is not a wave"],
        answer: 1,
        explanation: "In sound, air particles vibrate along the direction of travel, so it is longitudinal."
      },
      {
        question: "What is the speed of light in a vacuum?",
        options: ["330 m/s", "3 × 10⁸ m/s", "3 × 10⁶ m/s", "1500 m/s"],
        answer: 1,
        explanation: "All electromagnetic waves travel at 3 × 10⁸ m/s in a vacuum."
      },
      {
        question: "An echo is heard 2 s after a shout. If sound travels at 340 m/s, how far away is the wall?",
        options: ["680 m", "340 m", "170 m", "1360 m"],
        answer: 1,
        explanation: "d = vt / 2 = 340 × 2 / 2 = 340 m. The sound went there and back."
      },
      {
        question: "Which electromagnetic wave has the shortest wavelength?",
        options: ["Radio waves", "Visible light", "Gamma rays", "Infrared"],
        answer: 2,
        explanation: "Gamma rays have the highest frequency and therefore the shortest wavelength."
      }
    ]
  },

  {
    id: "refraction-of-light",
    subject: "Physics",
    level: "Form 3",
    title: "Refraction of Light",
    summary: "Use Snell's law, refractive index, real and apparent depth, and total internal reflection.",
    formulas: [
      "Snell's law: n = sin i / sin r",
      "n = speed of light in vacuum / speed in medium = c / v",
      "n = real depth / apparent depth",
      "Critical angle: sin c = 1 / n"
    ],
    notes: [
      {
        heading: "What is refraction?",
        body: "Refraction is the <b>bending of light</b> as it passes from one medium to another, caused by a change in its <b>speed</b>.<ul><li>Into a denser medium (air → glass): light slows down and bends <b>towards</b> the normal.</li><li>Into a less dense medium (glass → air): light speeds up and bends <b>away from</b> the normal.</li></ul>"
      },
      {
        heading: "Laws of refraction",
        body: "1. The incident ray, the refracted ray and the normal all lie in the <b>same plane</b>.<br>2. <b>Snell's law:</b> for two given media, sin i / sin r is constant:<div class='formula'>n = sin i / sin r</div>Here i is the angle in air (or the less dense medium) and r is the angle in the denser medium. Both are measured from the <b>normal</b>."
      },
      {
        heading: "Refractive index and speed",
        body: "<div class='formula'>n = c / v</div>Glass has n ≈ 1.5, so light travels 1.5 times slower in glass than in a vacuum. Water has n ≈ 1.33. A larger n means light bends more."
      },
      {
        heading: "Real and apparent depth",
        body: "A swimming pool looks <b>shallower</b> than it really is, and a stick in water looks bent. Light from the bottom bends away from the normal as it leaves the water.<div class='formula'>n = real depth / apparent depth</div>"
      },
      {
        heading: "Total internal reflection",
        body: "When light goes from a <b>denser to a less dense</b> medium at an angle <b>greater than the critical angle c</b>, none of it escapes. It all reflects back inside.<div class='formula'>sin c = 1 / n</div>Uses: <b>optical fibres</b> (internet and medical endoscopes), prism periscopes and binoculars, and the sparkle of diamonds. Mirages are caused by the same effect in hot air."
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>Measuring angles from the surface instead of from the <b>normal</b>.</li><li>Putting the angles the wrong way round: the larger angle is in the <b>less dense</b> medium.</li><li>Forgetting that total internal reflection only happens going from denser to less dense.</li></ul>"
      }
    ],
    examples: [
      {
        question: "Light in air hits glass at an angle of incidence of 30°, and the angle of refraction is 19.5°. Find the refractive index of the glass.",
        steps: [
          "n = sin i / sin r",
          "n = sin 30° / sin 19.5° = 0.5 / 0.334"
        ],
        answer: "n ≈ 1.5"
      },
      {
        question: "Find the speed of light in glass of refractive index 1.5. (c = 3 × 10⁸ m/s)",
        steps: [
          "n = c / v, so v = c / n",
          "v = 3 × 10⁸ / 1.5"
        ],
        answer: "v = 2 × 10⁸ m/s"
      },
      {
        question: "A pool is 2 m deep. How deep does it appear when viewed from above? (n of water = 1.33)",
        steps: [
          "n = real depth / apparent depth",
          "apparent depth = real depth / n = 2 / 1.33"
        ],
        answer: "Apparent depth ≈ 1.5 m"
      },
      {
        question: "Find the critical angle for glass of refractive index 1.5.",
        steps: [
          "sin c = 1 / n = 1 / 1.5 = 0.667",
          "c = sin⁻¹(0.667)"
        ],
        answer: "c ≈ 41.8°"
      }
    ],
    quiz: [
      {
        question: "When light passes from air into glass, it bends…",
        options: ["towards the normal", "away from the normal", "it does not bend at all", "back into the air"],
        answer: 0,
        explanation: "Glass is denser than air. Light slows down and bends towards the normal."
      },
      {
        question: "Light enters a medium with i = 60° and r = 30°. What is the refractive index? (sin 60° = 0.866, sin 30° = 0.5)",
        options: ["1.73", "2", "0.58", "1.5"],
        answer: 0,
        explanation: "n = sin i / sin r = 0.866 / 0.5 = 1.73."
      },
      {
        question: "What is the speed of light in a medium of refractive index 2? (c = 3 × 10⁸ m/s)",
        options: ["6 × 10⁸ m/s", "1.5 × 10⁸ m/s", "3 × 10⁸ m/s", "2 × 10⁸ m/s"],
        answer: 1,
        explanation: "v = c / n = 3 × 10⁸ / 2 = 1.5 × 10⁸ m/s."
      },
      {
        question: "A coin at the bottom of 12 cm of liquid appears to be 9 cm deep. What is the refractive index of the liquid?",
        options: ["1.33", "0.75", "3", "21"],
        answer: 0,
        explanation: "n = real / apparent = 12 / 9 = 1.33."
      },
      {
        question: "What is the critical angle for a material with refractive index 2?",
        options: ["60°", "45°", "30°", "90°"],
        answer: 2,
        explanation: "sin c = 1/2 = 0.5, so c = 30°."
      },
      {
        question: "Total internal reflection happens when light travels…",
        options: ["from a less dense to a denser medium, at any angle", "from a denser to a less dense medium, at more than the critical angle", "straight along the normal (0°)", "only through a vacuum"],
        answer: 1,
        explanation: "Both conditions are needed: denser → less dense, and an angle of incidence greater than the critical angle."
      }
    ]
  },

  {
    id: "quantity-of-heat",
    subject: "Physics",
    level: "Form 3",
    title: "Quantity of Heat",
    summary: "Use specific heat capacity and latent heat to calculate the heat needed to warm, melt and boil substances.",
    formulas: [
      "Heat capacity: C = Q / Δθ",
      "Specific heat capacity: Q = mcΔθ",
      "Latent heat: Q = mL",
      "Method of mixtures: heat lost = heat gained",
      "Electrical heating: Q = Pt = VIt",
      "c of water = 4200 J/kg K,  Lf of ice = 3.34 × 10⁵ J/kg,  Lv of water = 2.26 × 10⁶ J/kg"
    ],
    notes: [
      {
        heading: "Heat and temperature",
        body: "<b>Heat</b> is energy that flows from a hotter body to a colder one, measured in joules (J). <b>Temperature</b> tells us how hot something is, measured in °C or kelvin (K). A change of 1°C is the same as a change of 1 K."
      },
      {
        heading: "Specific heat capacity",
        body: "The <b>specific heat capacity</b> c is the heat needed to raise the temperature of <b>1 kg</b> of a substance by <b>1 K</b>:<div class='formula'>Q = mcΔθ</div>Water has a very high c (4200 J/kg K). It takes a lot of energy to heat up and it stays warm for long. That is why water is used in car radiators and hot water bottles. Heat capacity C = mc is for the whole object."
      },
      {
        heading: "Latent heat (change of state)",
        body: "While a substance is <b>melting</b> or <b>boiling</b>, its temperature stays <b>constant</b>, even though heat is still going in. That energy breaks the bonds between particles.<div class='formula'>Q = mL</div><ul><li><b>Latent heat of fusion</b> (melting ice): 3.34 × 10⁵ J/kg</li><li><b>Latent heat of vaporisation</b> (boiling water): 2.26 × 10⁶ J/kg</li></ul>Steam scalds badly because it gives out its large latent heat when it condenses on your skin."
      },
      {
        heading: "Method of mixtures",
        body: "When a hot and a cold substance are mixed (and no heat is lost to the surroundings):<div class='formula'>heat lost by hot body = heat gained by cold body</div>Write Q = mcΔθ for each side and solve for the final temperature T."
      },
      {
        heading: "Electrical heating",
        body: "An electric heater of power P supplies energy Q = Pt (or Q = VIt). In experiments we set this equal to mcΔθ to find c. Real results are slightly off because some heat is lost to the surroundings, which is why we use <b>lagging</b> (insulation)."
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>Leaving mass in grams. Change to kg: 500 g = 0.5 kg.</li><li>Using the final temperature instead of the <b>change</b> Δθ = final − initial.</li><li>Forgetting the latent heat stage when ice is melted and then warmed. Calculate each stage separately and add them.</li></ul>"
      }
    ],
    examples: [
      {
        question: "How much heat is needed to raise 2 kg of water from 20°C to 70°C? (c = 4200 J/kg K)",
        steps: [
          "Δθ = 70 − 20 = 50 K",
          "Q = mcΔθ = 2 × 4200 × 50"
        ],
        answer: "Q = 420 000 J (420 kJ)"
      },
      {
        question: "How much heat is needed to melt 0.5 kg of ice at 0°C? (Lf = 3.34 × 10⁵ J/kg)",
        steps: [
          "The temperature stays at 0°C while melting, so use Q = mL",
          "Q = 0.5 × 3.34 × 10⁵"
        ],
        answer: "Q = 1.67 × 10⁵ J (167 000 J)"
      },
      {
        question: "A 2 kW kettle heats 1.5 kg of water from 25°C to 100°C. How long does it take? (c = 4200 J/kg K, ignore heat losses)",
        steps: [
          "Q = mcΔθ = 1.5 × 4200 × 75 = 472 500 J",
          "Q = Pt, so t = Q / P = 472 500 / 2000"
        ],
        answer: "t ≈ 236 s (about 4 minutes)"
      },
      {
        question: "0.2 kg of water at 80°C is mixed with 0.3 kg of water at 20°C. Find the final temperature T.",
        steps: [
          "Heat lost = heat gained: 0.2 × 4200 × (80 − T) = 0.3 × 4200 × (T − 20)",
          "Cancel 4200: 0.2(80 − T) = 0.3(T − 20)",
          "16 − 0.2T = 0.3T − 6, so 22 = 0.5T"
        ],
        answer: "T = 44°C"
      }
    ],
    quiz: [
      {
        question: "How much heat raises 1 kg of water by 10 K? (c = 4200 J/kg K)",
        options: ["4200 J", "42 000 J", "420 J", "420 000 J"],
        answer: 1,
        explanation: "Q = mcΔθ = 1 × 4200 × 10 = 42 000 J."
      },
      {
        question: "What is the SI unit of specific heat capacity?",
        options: ["J", "J/K", "J/kg K", "W"],
        answer: 2,
        explanation: "c = Q / (mΔθ), so the unit is J ÷ (kg × K) = J/kg K."
      },
      {
        question: "While ice is melting, its temperature…",
        options: ["rises steadily", "falls", "stays constant", "doubles"],
        answer: 2,
        explanation: "During a change of state, the energy goes into breaking bonds (latent heat), so the temperature stays constant."
      },
      {
        question: "How much heat turns 2 kg of boiling water into steam? (Lv = 2.26 × 10⁶ J/kg)",
        options: ["1.13 × 10⁶ J", "4.52 × 10⁶ J", "2.26 × 10⁶ J", "9.04 × 10⁶ J"],
        answer: 1,
        explanation: "Q = mL = 2 × 2.26 × 10⁶ = 4.52 × 10⁶ J."
      },
      {
        question: "How much energy does a 1 kW heater supply in 5 minutes?",
        options: ["5000 J", "300 000 J", "60 000 J", "5 J"],
        answer: 1,
        explanation: "Q = Pt = 1000 × (5 × 60) = 300 000 J. Remember to change minutes to seconds."
      },
      {
        question: "Water is used as a coolant in car radiators mainly because it…",
        options: ["has a high specific heat capacity", "has a low boiling point", "conducts electricity well", "has a high density"],
        answer: 0,
        explanation: "A high c means water absorbs a lot of heat with only a small rise in temperature."
      }
    ]
  },

  {
    id: "current-electricity",
    subject: "Physics",
    level: "Form 2",
    title: "Current Electricity: Ohm's Law",
    summary: "Relate voltage, current and resistance, combine resistors, and calculate electrical power.",
    formulas: [
      "Charge: Q = It",
      "Ohm's law: V = IR",
      "Series: R = R₁ + R₂ + …",
      "Parallel: 1/R = 1/R₁ + 1/R₂ + …",
      "Power: P = VI = I²R = V²/R",
      "Energy: E = Pt = VIt  (1 kWh = 3.6 × 10⁶ J)"
    ],
    notes: [
      {
        heading: "Key quantities",
        body: "<ul><li><b>Current (I)</b> — rate of flow of charge, measured in amperes (A). Q = It.</li><li><b>Voltage / p.d. (V)</b> — measured in volts (V)</li><li><b>Resistance (R)</b> — opposition to current, measured in ohms (Ω)</li></ul>An <b>ammeter</b> is connected in <b>series</b>. A <b>voltmeter</b> is connected in <b>parallel</b> across the component."
      },
      {
        heading: "Ohm's law",
        body: "For a conductor at constant temperature, the current is directly proportional to the potential difference across it:<div class='formula'>V = IR</div>Rearrange as I = V/R or R = V/I depending on what you need. A graph of V against I for an ohmic conductor is a straight line through the origin, and its gradient is R."
      },
      {
        heading: "Resistors in series and parallel",
        body: "<div class='formula'>Series: R = R₁ + R₂<br>Parallel: 1/R = 1/R₁ + 1/R₂</div>In series the same current flows through each resistor. In parallel each resistor has the same voltage, and the total resistance is <b>smaller</b> than the smallest resistor. For just two in parallel there is a shortcut: <b>R = (R₁ × R₂) / (R₁ + R₂)</b>."
      },
      {
        heading: "Electrical power and energy",
        body: "<div class='formula'>P = VI = I²R = V²/R<br>E = Pt</div>Electricity bills use the <b>kilowatt-hour (kWh)</b>: the energy used by a 1 kW appliance in 1 hour. Cost = number of kWh × price per unit."
      },
      {
        heading: "Common mistakes to avoid",
        body: "<ul><li>For parallel resistors, forgetting to <b>flip</b> the fraction at the end. 1/R = 1/2 means R = 2 Ω, not 0.5 Ω.</li><li>Using the total voltage across just one resistor in a series circuit.</li><li>Using minutes or hours in E = Pt when the answer must be in joules. Use seconds.</li></ul>"
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
      },
      {
        question: "A 2 Ω resistor is in series with a parallel pair of 6 Ω and 3 Ω, across a 12 V supply. Find the current from the supply.",
        steps: [
          "Parallel pair: (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω",
          "Total resistance = 2 + 2 = 4 Ω",
          "I = V / R = 12 / 4"
        ],
        answer: "I = 3 A"
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
      },
      {
        question: "A current of 0.5 A flows for 1 minute. How much charge passes?",
        options: ["0.5 C", "30 C", "120 C", "60 C"],
        answer: 1,
        explanation: "Q = It = 0.5 × 60 = 30 C. Change 1 minute to 60 s."
      }
    ]
  }
];



/* Helper: find one topic by its id (used by topic and quiz pages) */
function getTopicById(id) {
  return TOPICS.find(function (topic) { return topic.id === id; });
}
