/* Additional KCSE revision topics. Loaded after js/data.js on all topic-aware pages. */
TOPICS.push(
  {
    id:"surds",
    subject:"Mathematics", level:"Form 3", title:"Surds",
    summary:"Simplify surds, rationalise denominators and solve problems involving irrational numbers.",
    formulas:["√(ab) = √a × √b (for a,b ≥ 0)","a√m + b√m = (a+b)√m","1/√a = √a/a","(√a + √b)(√a − √b) = a − b"],
    notes:[
      {heading:"Meaning of a surd",body:"A surd is an irrational root that cannot be simplified to a rational number, for example √2, √3 and √5. Simplify a surd by taking out the largest perfect-square factor."},
      {heading:"Adding and subtracting surds",body:"Only like surds can be collected. For example, 3√2 + 5√2 = 8√2, but √2 + √3 cannot be simplified further."},
      {heading:"Rationalising a denominator",body:"Multiply the numerator and denominator by the surd in the denominator. For a binomial denominator, use its conjugate."}
    ],
    examples:[
      {question:"Simplify √72.",steps:["Write 72 = 36 × 2.","√72 = √36 × √2 = 6√2."],answer:"6√2"},
      {question:"Rationalise 5/√3.",steps:["Multiply top and bottom by √3.","(5√3)/(√3 × √3) = 5√3/3."],answer:"5√3/3"}
    ],
    quiz:[
      {question:"Simplify √98.",options:["7√2","2√7","14√2","49√2"],answer:0,explanation:"98 = 49 × 2, so √98 = 7√2."},
      {question:"Evaluate 3√5 + 2√5.",options:["5√10","6√5","5√5","√5"],answer:2,explanation:"Add the coefficients of like surds: (3 + 2)√5 = 5√5."},
      {question:"Rationalise 1/√7.",options:["1/7","√7/7","7√7","√7"],answer:1,explanation:"Multiply numerator and denominator by √7 to obtain √7/7."},
      {question:"Expand (√5 + 2)(√5 − 2).",options:["9","1","√5 − 4","5 − 4√5"],answer:1,explanation:"Use difference of two squares: 5 − 4 = 1."}
    ]
  },
  {
    id:"sequences-series",
    subject:"Mathematics", level:"Form 3", title:"Sequences and Series",
    summary:"Find terms, common differences, common ratios and sums of arithmetic and geometric progressions.",
    formulas:["Arithmetic nth term: Tₙ = a + (n−1)d","Arithmetic sum: Sₙ = n/2[2a + (n−1)d]","Geometric nth term: Tₙ = arⁿ⁻¹","Geometric sum: Sₙ = a(rⁿ−1)/(r−1), r ≠ 1"],
    notes:[
      {heading:"Arithmetic progression (AP)",body:"An AP has a constant difference between consecutive terms. Subtract one term from the next to find the common difference d."},
      {heading:"Geometric progression (GP)",body:"A GP has a constant ratio between consecutive terms. Divide a term by the preceding term to find r."},
      {heading:"Choosing the formula",body:"Identify the first term a, the common difference or ratio, and the number of terms n. State the formula before substituting values."}
    ],
    examples:[
      {question:"Find the 12th term of 4, 7, 10, 13, …",steps:["a = 4 and d = 3.","T₁₂ = a + 11d = 4 + 33."],answer:"37"},
      {question:"Find the sum of the first 5 terms of 2, 6, 18, …",steps:["a = 2, r = 3, n = 5.","S₅ = 2(3⁵ − 1)/(3 − 1) = 242."],answer:"242"}
    ],
    quiz:[
      {question:"What is the common difference in 8, 13, 18, 23, …?",options:["3","5","8","13"],answer:1,explanation:"13 − 8 = 5; the difference is constant."},
      {question:"Find the 10th term of 3, 7, 11, 15, …",options:["35","39","40","43"],answer:1,explanation:"a = 3, d = 4. T₁₀ = 3 + 9(4) = 39."},
      {question:"What is the common ratio in 2, 6, 18, 54, …?",options:["2","3","4","6"],answer:1,explanation:"6 ÷ 2 = 3 and 18 ÷ 6 = 3."},
      {question:"Find the sum of the first 6 positive even numbers.",options:["36","40","42","48"],answer:2,explanation:"2 + 4 + 6 + 8 + 10 + 12 = 42."}
    ]
  },
  {
    id:"matrices-transformations",
    subject:"Mathematics", level:"Form 4", title:"Matrices and Transformations",
    summary:"Perform matrix operations, find determinants and describe plane transformations.",
    formulas:["For A = [[a,b],[c,d]], det(A) = ad − bc","A⁻¹ = 1/(ad−bc) [[d,−b],[−c,a]]","Reflection in x-axis: (x,y) → (x,−y)","Rotation 90° anticlockwise: (x,y) → (−y,x)"],
    notes:[
      {heading:"Matrix operations",body:"Matrices can be added or subtracted only when they have the same order. For multiplication, the number of columns in the first matrix must equal the number of rows in the second."},
      {heading:"Determinant and inverse",body:"For a 2 × 2 matrix, calculate ad − bc. The matrix has an inverse only when its determinant is not zero."},
      {heading:"Transformations",body:"A transformation maps points to new positions. Describe the object, image and transformation accurately; for a rotation give the centre, angle and direction."}
    ],
    examples:[
      {question:"Find the determinant of [[3,2],[1,4]].",steps:["det(A) = ad − bc.","= (3 × 4) − (2 × 1) = 12 − 2."],answer:"10"}
    ],
    quiz:[
      {question:"Find the determinant of [[2,3],[1,5]].",options:["7","10","13","−7"],answer:0,explanation:"(2 × 5) − (3 × 1) = 10 − 3 = 7."},
      {question:"When does a square matrix have no inverse?",options:["When its determinant is zero","When its entries are positive","When it is 2 × 2","When its trace is positive"],answer:0,explanation:"A matrix is singular and has no inverse when its determinant is zero."},
      {question:"The image of (4,−2) after reflection in the x-axis is…",options:["(−4,−2)","(4,2)","(−4,2)","(2,4)"],answer:1,explanation:"Reflection in the x-axis changes the sign of y only."},
      {question:"A rotation of 90° anticlockwise about the origin maps (x,y) to…",options:["(y,−x)","(−x,−y)","(−y,x)","(x,−y)"],answer:2,explanation:"The coordinate rule for 90° anticlockwise rotation is (x,y) → (−y,x)."}
    ]
  },
  {
    id:"differentiation",
    subject:"Mathematics", level:"Form 4", title:"Differentiation",
    summary:"Differentiate polynomial functions and apply gradients to rates of change and stationary points.",
    formulas:["d/dx(xⁿ) = nxⁿ⁻¹","d/dx(c) = 0","Gradient of curve y=f(x) at x = dy/dx","Stationary points occur where dy/dx = 0"],
    notes:[
      {heading:"The power rule",body:"To differentiate x raised to a power, bring the power down as a coefficient and reduce the power by one. Differentiate each term separately."},
      {heading:"Gradient",body:"The derivative gives the gradient of a curve at a point. Substitute the given x-coordinate into dy/dx to find the gradient."},
      {heading:"Stationary points",body:"At a stationary point the gradient is zero. Solve dy/dx = 0, then substitute the resulting x-values into the original function to find y."}
    ],
    examples:[
      {question:"Differentiate y = 3x³ − 4x² + 7x − 9.",steps:["Differentiate each term: 3(3x²) − 4(2x) + 7.","The derivative of a constant is zero."],answer:"dy/dx = 9x² − 8x + 7"}
    ],
    quiz:[
      {question:"Differentiate y = 5x⁴.",options:["5x³","20x³","20x⁴","x⁵"],answer:1,explanation:"dy/dx = 5 × 4x³ = 20x³."},
      {question:"The derivative of a constant is…",options:["1","the constant","0","x"],answer:2,explanation:"A constant has no change as x changes, so its derivative is zero."},
      {question:"Find the gradient of y = x² + 3x at x = 2.",options:["4","5","7","8"],answer:2,explanation:"dy/dx = 2x + 3. At x = 2, gradient = 4 + 3 = 7."},
      {question:"At a stationary point…",options:["dy/dx = 0","y = 0","x = 0","dy/dx = 1"],answer:0,explanation:"A stationary point has a horizontal tangent, so its gradient is zero."}
    ]
  },
  {
    id:"linear-motion-physics",
    subject:"Physics", level:"Form 3", title:"Linear Motion",
    summary:"Analyse distance, displacement, speed, velocity, acceleration and motion graphs.",
    formulas:["Speed = distance/time","Velocity = displacement/time","a = (v−u)/t","v = u + at","s = ut + ½at²","v² = u² + 2as"],
    notes:[
      {heading:"Distance and displacement",body:"Distance is the total path travelled and is a scalar. Displacement is the straight-line change in position in a specified direction and is a vector."},
      {heading:"Velocity and acceleration",body:"Velocity is the rate of change of displacement. Acceleration is the rate of change of velocity; negative acceleration may represent deceleration depending on the chosen direction."},
      {heading:"Motion graphs",body:"The gradient of a displacement-time graph gives velocity. The gradient of a velocity-time graph gives acceleration, while the area under a velocity-time graph gives displacement."}
    ],
    examples:[
      {question:"A car increases its velocity from 5 m/s to 25 m/s in 4 s. Find its acceleration.",steps:["a = (v − u)/t","a = (25 − 5)/4 = 20/4."],answer:"5 m/s²"}
    ],
    quiz:[
      {question:"A runner covers 150 m in 30 s. Find the average speed.",options:["3 m/s","5 m/s","30 m/s","180 m/s"],answer:1,explanation:"Speed = distance/time = 150/30 = 5 m/s."},
      {question:"A body starts from rest and accelerates at 2 m/s² for 6 s. Find its final velocity.",options:["8 m/s","10 m/s","12 m/s","14 m/s"],answer:2,explanation:"v = u + at = 0 + 2 × 6 = 12 m/s."},
      {question:"The gradient of a velocity-time graph represents…",options:["distance","speed","acceleration","displacement"],answer:2,explanation:"Gradient = change in velocity/time = acceleration."},
      {question:"A car moving at 20 m/s is brought to rest in 5 s. Find its acceleration.",options:["−4 m/s²","4 m/s²","−5 m/s²","100 m/s²"],answer:0,explanation:"a = (0 − 20)/5 = −4 m/s²."}
    ]
  },
  {
    id:"heat-transfer",
    subject:"Physics", level:"Form 2", title:"Heat Transfer",
    summary:"Explain conduction, convection and radiation and solve specific heat capacity problems.",
    formulas:["Q = mcΔT","Q = mL","Power = energy/time","Temperature change: ΔT = final − initial"],
    notes:[
      {heading:"Conduction",body:"Heat is transferred through a material without bulk movement of the material. Metals are generally good conductors because of their free electrons."},
      {heading:"Convection",body:"Convection occurs in fluids. Heated fluid expands, becomes less dense and rises; cooler, denser fluid sinks to replace it, setting up convection currents."},
      {heading:"Radiation and calculations",body:"Thermal radiation is transferred by electromagnetic waves and needs no medium. Use Q = mcΔT for temperature change and Q = mL for a change of state."}
    ],
    examples:[
      {question:"Calculate the heat needed to raise 2 kg of water by 5°C. Take c = 4200 J kg⁻¹ °C⁻¹.",steps:["Q = mcΔT","Q = 2 × 4200 × 5."],answer:"42,000 J"}
    ],
    quiz:[
      {question:"Which method of heat transfer can occur through a vacuum?",options:["Conduction","Convection","Radiation","All three"],answer:2,explanation:"Radiation travels as electromagnetic waves and does not require a material medium."},
      {question:"Calculate Q when m = 2 kg, c = 500 J/kg°C and ΔT = 10°C.",options:["1,000 J","5,000 J","10,000 J","20,000 J"],answer:2,explanation:"Q = mcΔT = 2 × 500 × 10 = 10,000 J."},
      {question:"Convection occurs mainly in…",options:["solids only","fluids","a vacuum","metals only"],answer:1,explanation:"Convection involves bulk movement of liquids or gases."},
      {question:"Why are cooking-pan handles often made of plastic or wood?",options:["They are dense","They are poor conductors","They radiate heat faster","They have high melting points"],answer:1,explanation:"Wood and many plastics are thermal insulators, reducing heat transfer to the hand."}
    ]
  },
  {
    id:"waves-sound",
    subject:"Physics", level:"Form 3", title:"Waves and Sound",
    summary:"Distinguish transverse and longitudinal waves and calculate wave speed, frequency and wavelength.",
    formulas:["v = fλ","f = 1/T","T = 1/f","Echo distance = speed × time/2"],
    notes:[
      {heading:"Types of waves",body:"In a transverse wave, particles vibrate perpendicular to the direction of travel. In a longitudinal wave, particles vibrate parallel to the direction of travel."},
      {heading:"Wave quantities",body:"Amplitude is the maximum displacement from equilibrium. Wavelength is the distance between successive points in phase. Frequency is the number of complete oscillations per second."},
      {heading:"Sound",body:"Sound is a longitudinal mechanical wave and cannot travel through a vacuum. An echo is reflected sound; divide the total sound travel distance by two to obtain the distance to the reflector."}
    ],
    examples:[
      {question:"A wave has frequency 50 Hz and wavelength 0.4 m. Find its speed.",steps:["v = fλ","v = 50 × 0.4."],answer:"20 m/s"}
    ],
    quiz:[
      {question:"A wave has frequency 20 Hz and wavelength 3 m. Find its speed.",options:["6.7 m/s","17 m/s","23 m/s","60 m/s"],answer:3,explanation:"v = fλ = 20 × 3 = 60 m/s."},
      {question:"Sound waves in air are…",options:["transverse","longitudinal","electromagnetic","stationary only"],answer:1,explanation:"Air particles vibrate back and forth parallel to the direction of sound travel."},
      {question:"The SI unit of frequency is…",options:["metre","second","hertz","watt"],answer:2,explanation:"Frequency is measured in hertz (Hz), equivalent to cycles per second."},
      {question:"A sound echo returns after 2 s. If sound speed is 340 m/s, how far away is the wall?",options:["170 m","340 m","680 m","85 m"],answer:1,explanation:"The sound travels to the wall and back. Total path = 340 × 2 = 680 m; one-way distance = 680/2 = 340 m."}
    ]
  },
  {
    id:"magnetism-electromagnetism",
    subject:"Physics", level:"Form 4", title:"Magnetism and Electromagnetic Induction",
    summary:"Study magnetic fields, electromagnets, motors, generators and induced e.m.f.",
    formulas:["Magnetic force on a current: F = BIL sinθ","Transformer: Vₚ/Vₛ = Nₚ/Nₛ","Ideal transformer: VₚIₚ = VₛIₛ","Induced e.m.f. increases with rate of change of magnetic flux"],
    notes:[
      {heading:"Magnetic fields",body:"Magnetic field lines outside a bar magnet run from north to south. They never cross; closer spacing indicates a stronger field."},
      {heading:"Electromagnets and motors",body:"A current-carrying coil produces a magnetic field. An iron core strengthens an electromagnet. An electric motor converts electrical energy into mechanical energy."},
      {heading:"Electromagnetic induction",body:"An e.m.f. is induced when magnetic flux linking a conductor changes. Increasing the speed of relative motion, number of turns or magnetic field strength increases the induced e.m.f."}
    ],
    examples:[
      {question:"A transformer has 500 primary turns and 100 secondary turns. If the primary voltage is 240 V, find the secondary voltage.",steps:["Vₚ/Vₛ = Nₚ/Nₛ","240/Vₛ = 500/100 = 5","Vₛ = 240/5."],answer:"48 V"}
    ],
    quiz:[
      {question:"Outside a bar magnet, magnetic field lines travel from…",options:["south to north","north to south","east to west","the centre outward"],answer:1,explanation:"By convention, magnetic field lines outside a magnet leave the north pole and enter the south pole."},
      {question:"An electric motor converts…",options:["mechanical to electrical energy","electrical to mechanical energy","heat to chemical energy","sound to electrical energy"],answer:1,explanation:"A motor uses electrical energy to produce mechanical rotation."},
      {question:"A transformer works with…",options:["steady direct current only","alternating current","static charge","chemical energy"],answer:1,explanation:"A changing current is needed to create changing magnetic flux in the transformer core."},
      {question:"A transformer has Np = 200, Ns = 1000 and Vp = 12 V. Find Vs.",options:["2.4 V","12 V","60 V","120 V"],answer:2,explanation:"Vs/Vp = Ns/Np = 1000/200 = 5, so Vs = 5 × 12 = 60 V."}
    ]
  }
);


/* Keep the first definition of each topic id so core lesson IDs never collide
   with legacy appended content. */
(function () {
  const seen = new Set();
  const unique = [];
  TOPICS.forEach(function (topic) {
    if (!seen.has(topic.id)) { seen.add(topic.id); unique.push(topic); }
  });
  TOPICS.splice(0, TOPICS.length, ...unique);
})();
