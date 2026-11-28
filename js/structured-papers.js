/* Original KCSE-style structured examination practice. Not official KNEC papers. */
const STRUCTURED_PAPERS = [
{
 id:"math-p1",subject:"Mathematics",paper:"Paper 1",duration:150,totalMarks:100,
 instructions:["Answer ALL questions.","Show all working clearly. Unsupported answers may not earn full marks.","Use π = 22/7 where necessary. Give answers to a suitable degree of accuracy."],
 questions:[
 {number:1,marks:20,parts:[
  {label:"(a)",prompt:"A trader bought 48 exercise books at KSh 75 each. He sold 36 books at KSh 100 each and the remainder at KSh 60 each. Calculate his total sales and percentage profit.",marks:8,scheme:["Cost price = 48 × 75 = KSh 3,600 (2 marks).","Sales = (36 × 100) + (12 × 60) = 3,600 + 720 = KSh 4,320 (3 marks).","Profit = 4,320 − 3,600 = KSh 720 (1 mark).","Percentage profit = 720/3,600 × 100 = 20% (2 marks)."],answer:"Total sales = KSh 4,320; percentage profit = 20%."},
  {label:"(b)",prompt:"A sum of KSh 12,000 is invested at 8% per annum compound interest. Calculate the amount after 2 years.",marks:5,scheme:["Use A = P(1 + r/100)^n (2 marks).","A = 12,000(1.08)^2 (1 mark).","A = KSh 13,996.80 (2 marks)."],answer:"KSh 13,996.80."},
  {label:"(c)",prompt:"A map is drawn to a scale of 1:50,000. A rectangular field measures 6.4 cm by 3.2 cm on the map. Find its actual area in hectares.",marks:7,scheme:["Actual dimensions: 6.4 × 50,000 = 320,000 cm = 3.2 km; 3.2 × 50,000 = 160,000 cm = 1.6 km (4 marks).","Area = 3.2 × 1.6 = 5.12 km² (2 marks).","1 km² = 100 ha; area = 512 ha (1 mark)."],answer:"512 hectares."}
 ]},
 {number:2,marks:20,parts:[
  {label:"(a)",prompt:"Solve the simultaneous equations 2x + 3y = 19 and 3x − 2y = 4.",marks:6,scheme:["Multiply first equation by 2: 4x + 6y = 38 (1).","Multiply second by 3: 9x − 6y = 12 (1).","Add: 13x = 50, hence x = 50/13 (2).","Substitute to obtain y = 49/13 (2)."],answer:"x = 50/13, y = 49/13."},
  {label:"(b)",prompt:"The first term of an arithmetic progression is 5 and its common difference is 3. Find (i) the 20th term and (ii) the sum of the first 20 terms.",marks:6,scheme:["Tₙ = a + (n−1)d (1).","T₂₀ = 5 + 19 × 3 = 62 (2).","Sₙ = n/2[2a + (n−1)d] (1).","S₂₀ = 10[10 + 57] = 670 (2)."],answer:"20th term = 62; sum = 670."},
  {label:"(c)",prompt:"Solve the inequality 3(2x − 1) ≤ 4x + 7. Represent the solution on a number line.",marks:4,scheme:["Expand: 6x − 3 ≤ 4x + 7 (1).","2x ≤ 10 (1).","x ≤ 5 (1).","Number line has a closed circle at 5 and shading to the left (1)."],answer:"x ≤ 5."},
  {label:"(d)",prompt:"Factorise completely x² − 7x + 12.",marks:4,scheme:["Find two numbers with product 12 and sum −7 (2).","(x − 3)(x − 4) (2)."],answer:"(x − 3)(x − 4)."}
 ]},
 {number:3,marks:20,parts:[
  {label:"(a)",prompt:"A cylinder has radius 7 cm and height 15 cm. Calculate its (i) volume and (ii) total surface area. Use π = 22/7.",marks:8,scheme:["Volume V = πr²h (1).","V = 22/7 × 7² × 15 = 2,310 cm³ (2).","Total surface area = 2πr(h + r) (2).","= 2 × 22/7 × 7 × 22 = 968 cm² (3)."],answer:"Volume = 2,310 cm³; total surface area = 968 cm²."},
  {label:"(b)",prompt:"The interior angles of a pentagon are x°, (x + 10)°, (x + 20)°, (2x)° and (2x + 10)°. Find x and the largest angle.",marks:6,scheme:["Sum of interior angles = (5 − 2) × 180 = 540° (2).","x + x+10 + x+20 + 2x + 2x+10 = 540 (2).","7x + 40 = 540; x = 500/7 = 71 3/7° (1).","Largest angle = 2x + 10 = 152 6/7° (1)."],answer:"x = 71 3/7°; largest angle = 152 6/7°."},
  {label:"(c)",prompt:"A sector of a circle has radius 14 cm and angle 45°. Find its arc length and area. Use π = 22/7.",marks:6,scheme:["Arc length = 45/360 × 2πr (2).","= 1/8 × 88 = 11 cm (1).","Area = 45/360 × πr² (2).","= 1/8 × 616 = 77 cm² (1)."],answer:"Arc length = 11 cm; area = 77 cm²."}
 ]},
 {number:4,marks:20,parts:[
  {label:"(a)",prompt:"The points A(2, 3) and B(8, 15) lie on a straight line. Find the gradient and equation of the line.",marks:6,scheme:["Gradient m = (15−3)/(8−2) = 12/6 = 2 (2).","Use y − y₁ = m(x − x₁) (2).","y − 3 = 2(x − 2), hence y = 2x − 1 (2)."],answer:"Gradient = 2; equation y = 2x − 1."},
  {label:"(b)",prompt:"Given f(x) = 2x² − 5x + 3, find f(−2) and solve f(x) = 0.",marks:6,scheme:["f(−2) = 2(4) + 10 + 3 = 21 (2).","2x² − 5x + 3 = 0 (1).","(2x − 3)(x − 1) = 0 (2).","x = 3/2 or x = 1 (1)."],answer:"f(−2) = 21; roots x = 1 or x = 3/2."},
  {label:"(c)",prompt:"Differentiate y = 2x³ − 9x² + 12x − 4. Find the stationary values of x.",marks:8,scheme:["dy/dx = 6x² − 18x + 12 (3).","At stationary points, 6x² − 18x + 12 = 0 (1).","Divide by 6: x² − 3x + 2 = 0 (1).","(x − 1)(x − 2) = 0 (2).","x = 1 or x = 2 (1)."],answer:"dy/dx = 6x² − 18x + 12; stationary x-values are 1 and 2."}
 ]},
 {number:5,marks:20,parts:[
  {label:"(a)",prompt:"A bag contains 4 red, 5 blue and 3 green counters. Two counters are drawn one after another without replacement. Find the probability that both are blue.",marks:5,scheme:["Total counters = 12 (1).","P(first blue) = 5/12 (1).","P(second blue | first blue) = 4/11 (1).","Multiply: 5/12 × 4/11 = 20/132 (1).","Simplify = 5/33 (1)."],answer:"5/33."},
  {label:"(b)",prompt:"A right-angled triangle has perpendicular sides 8 cm and 15 cm. Find the hypotenuse and the angle opposite the 8 cm side.",marks:7,scheme:["Pythagoras: c² = 8² + 15² (2).","c = √289 = 17 cm (1).","sin θ = opposite/hypotenuse = 8/17 (2).","θ = sin⁻¹(8/17) ≈ 28.1° (2)."],answer:"Hypotenuse = 17 cm; angle ≈ 28.1°."},
  {label:"(c)",prompt:"A car travels 120 km at 60 km/h and then 180 km at 90 km/h. Calculate the total journey time and average speed.",marks:8,scheme:["First time = 120/60 = 2 h (2).","Second time = 180/90 = 2 h (2).","Total distance = 300 km; total time = 4 h (2).","Average speed = 300/4 = 75 km/h (2)."],answer:"Total time = 4 h; average speed = 75 km/h."}
 ]}
]},
{
 id:"math-p2",subject:"Mathematics",paper:"Paper 2",duration:150,totalMarks:100,
 instructions:["Answer ALL questions.","Show all working clearly. Give exact answers where appropriate.","Diagrams are not necessarily drawn to scale."],
 questions:[
 {number:1,marks:20,parts:[
  {label:"(a)",prompt:"Simplify (3√5 + 2√5) − √20. Express your answer in simplest surd form.",marks:4,scheme:["√20 = 2√5 (1).","5√5 − 2√5 (1).","= 3√5 (2)."],answer:"3√5."},
  {label:"(b)",prompt:"Rationalise the denominator of 6/(√5 − 1).",marks:5,scheme:["Multiply numerator and denominator by conjugate √5 + 1 (2).","6(√5 + 1)/(5 − 1) (2).","= 3(√5 + 1)/2 (1)."],answer:"3(√5 + 1)/2."},
  {label:"(c)",prompt:"A quantity varies directly as the square of x and inversely as y. When x = 3 and y = 2, the quantity is 18. Find the quantity when x = 5 and y = 4.",marks:6,scheme:["Q = kx²/y (2).","18 = k × 9/2, so k = 4 (2).","Q = 4 × 25/4 = 25 (2)."],answer:"25."},
  {label:"(d)",prompt:"Solve 2^(x+1) = 32.",marks:5,scheme:["32 = 2⁵ (1).","Equate powers: x + 1 = 5 (2).","x = 4 (2)."],answer:"x = 4."}
 ]},
 {number:2,marks:20,parts:[
  {label:"(a)",prompt:"The matrix A = [[2, 1], [3, 2]]. Find det(A) and A⁻¹.",marks:7,scheme:["det(A) = (2×2) − (1×3) = 1 (3).","Use inverse formula 1/(ad−bc)[[d,−b],[−c,a]] (2).","A⁻¹ = [[2,−1],[−3,2]] (2)."],answer:"det(A) = 1; A⁻¹ = [[2, −1], [−3, 2]]."},
  {label:"(b)",prompt:"A transformation maps P(2, 1) to P′(−1, 2). Describe the rotation about the origin.",marks:4,scheme:["Recognise (x,y) → (−y,x) (2).","This is a 90° anticlockwise rotation about the origin (2)."],answer:"90° anticlockwise about the origin."},
  {label:"(c)",prompt:"Find the equation of the image of the line y = 2x + 1 after reflection in the x-axis.",marks:5,scheme:["Reflection in x-axis maps (x,y) to (x,−y) (2).","Image equation: y = −(2x + 1) (2).","y = −2x − 1 (1)."],answer:"y = −2x − 1."},
  {label:"(d)",prompt:"Solve the quadratic equation x² − 4x − 5 = 0 by completing the square.",marks:4,scheme:["x² − 4x = 5 (1).","(x − 2)² = 9 (1).","x − 2 = ±3 (1).","x = 5 or x = −1 (1)."],answer:"x = 5 or x = −1."}
 ]},
 {number:3,marks:20,parts:[
  {label:"(a)",prompt:"The table below gives values of x: 1, 2, 3, 4 and y: 4, 7, 12, 19. Determine a quadratic rule of the form y = ax² + bx + c.",marks:8,scheme:["First differences: 3, 5, 7; second differences: 2, so 2a = 2 and a = 1 (3).","Use x=1: 1 + b + c = 4, so b+c=3 (2).","Use x=2: 4 + 2b + c = 7, so 2b+c=3 (2).","Subtract to get b=0 and c=3; y = x² + 3 (1)."],answer:"y = x² + 3."},
  {label:"(b)",prompt:"Differentiate y = x³ − 6x² + 9x + 2. Find the x-coordinates of stationary points and state their nature using the second derivative.",marks:8,scheme:["dy/dx = 3x² − 12x + 9 (2).","Set to zero: 3(x²−4x+3)=0 (1).","(x−1)(x−3)=0; x=1,3 (2).","d²y/dx² = 6x−12 (1).","At x=1, second derivative −6: maximum; at x=3, +6: minimum (2)."],answer:"Stationary points at x=1 (maximum) and x=3 (minimum)."},
  {label:"(c)",prompt:"Evaluate ∫(6x² − 4x + 3) dx.",marks:4,scheme:["Integrate term by term (1).","6x² → 2x³; −4x → −2x²; 3 → 3x (2).","Include constant C (1)."],answer:"2x³ − 2x² + 3x + C."}
 ]},
 {number:4,marks:20,parts:[
  {label:"(a)",prompt:"A sector of radius 21 cm subtends an angle of 120° at the centre. Find its area and perimeter. Use π = 22/7.",marks:8,scheme:["Area = 120/360 × π × 21² (2).","= 1/3 × 1,386 = 462 cm² (2).","Arc length = 120/360 × 2π×21 = 44 cm (2).","Perimeter = 44 + 21 + 21 = 86 cm (2)."],answer:"Area = 462 cm²; perimeter = 86 cm."},
  {label:"(b)",prompt:"A line passes through (−2, 5) and is perpendicular to 2x + y − 7 = 0. Find its equation.",marks:6,scheme:["Given line y = −2x + 7, gradient −2 (2).","Perpendicular gradient = 1/2 (1).","y − 5 = 1/2(x + 2) (2).","y = x/2 + 6 (1)."],answer:"y = x/2 + 6."},
  {label:"(c)",prompt:"The exterior angle of a regular polygon is 24°. Find the number of sides and each interior angle.",marks:6,scheme:["Number of sides = 360/24 (2).","= 15 sides (1).","Interior angle = 180° − 24° (2).","= 156° (1)."],answer:"15 sides; each interior angle = 156°."}
 ]},
 {number:5,marks:20,parts:[
  {label:"(a)",prompt:"The mean of 6, 8, 10, 12 and x is 10. Find x and the median of the five values.",marks:6,scheme:["Total = 5 × 10 = 50 (1).","Known sum = 36 (1).","x = 50 − 36 = 14 (2).","Ordered data 6,8,10,12,14; median = 10 (2)."],answer:"x = 14; median = 10."},
  {label:"(b)",prompt:"A particle moves from A to B with velocity 4 m/s and then from B to C with velocity 10 m/s. If AB = 30 m and BC = 70 m, find its average speed for the whole journey.",marks:6,scheme:["Time AB = 30/4 = 7.5 s (2).","Time BC = 70/10 = 7 s (2).","Average speed = total distance/total time = 100/14.5 (1).","≈ 6.90 m/s (1)."],answer:"Approximately 6.90 m/s."},
  {label:"(c)",prompt:"A point P has coordinates (3, −4). Find its distance from the origin and the angle it makes with the positive x-axis, measured clockwise.",marks:8,scheme:["Distance = √(3² + (−4)²) (2).","= √25 = 5 units (1).","tan θ = 4/3 (2).","θ = tan⁻¹(4/3) ≈ 53.1° (2).","Point lies in fourth quadrant, so clockwise angle = 53.1° (1)."],answer:"Distance = 5 units; clockwise angle ≈ 53.1°."}
 ]}
]},
{
 id:"physics-p1",subject:"Physics",paper:"Paper 1",duration:120,totalMarks:80,
 instructions:["Answer ALL questions.","Take g = 10 N/kg unless otherwise stated.","Show formula, substitution and correct SI units in calculations."],
 questions:[
 {number:1,marks:16,parts:[
  {label:"(a)",prompt:"Define (i) distance and (ii) displacement. State one difference between them.",marks:4,scheme:["Distance is the total length of the actual path travelled (1).","Displacement is the straight-line change in position in a specified direction (2).","Distance is scalar while displacement is vector (1)."],answer:"Distance is scalar path length; displacement is directed change in position."},
  {label:"(b)",prompt:"A car accelerates uniformly from 5 m/s to 25 m/s in 4 seconds. Calculate its acceleration and distance travelled.",marks:7,scheme:["a = (v−u)/t = (25−5)/4 = 5 m/s² (3).","s = (u+v)t/2 (2).","s = (5+25)×4/2 = 60 m (2)."],answer:"Acceleration = 5 m/s²; distance = 60 m."},
  {label:"(c)",prompt:"State two differences between mass and weight.",marks:5,scheme:["Mass is amount of matter; weight is gravitational force (2).","Mass is measured in kg; weight in newtons (2).","Mass is constant for a body; weight varies with gravitational field strength (1)."],answer:"Mass is matter in kg and constant; weight is gravitational force in N and depends on g."}
 ]},
 {number:2,marks:16,parts:[
  {label:"(a)",prompt:"State Newton's second law of motion and write its mathematical expression.",marks:4,scheme:["Rate of change of momentum is proportional to resultant force and occurs in its direction (2).","For constant mass, F = ma (2)."],answer:"F = ma for constant mass."},
  {label:"(b)",prompt:"A resultant force of 30 N acts on a 5 kg trolley initially at rest for 6 seconds. Find its acceleration and final velocity.",marks:6,scheme:["a = F/m = 30/5 = 6 m/s² (2).","v = u + at (2).","v = 0 + 6×6 = 36 m/s (2)."],answer:"a = 6 m/s²; v = 36 m/s."},
  {label:"(c)",prompt:"Explain why passengers in a moving bus tend to fall forward when the bus stops suddenly.",marks:6,scheme:["The body has inertia (2).","The lower body is slowed by the bus/floor (2).","The upper body tends to continue moving forward (2)."],answer:"Inertia causes the upper body to continue moving forward as the bus stops."}
 ]},
 {number:3,marks:16,parts:[
  {label:"(a)",prompt:"Define pressure and state its SI unit.",marks:3,scheme:["Pressure is force per unit area acting normally on a surface (2).","SI unit is pascal (Pa) or N/m² (1)."],answer:"Pressure = normal force/area; pascal."},
  {label:"(b)",prompt:"A rectangular block of weight 120 N has dimensions 0.4 m × 0.2 m × 0.1 m. Calculate the maximum and minimum pressure it can exert on a horizontal surface.",marks:8,scheme:["Largest face area = 0.4×0.2 = 0.08 m²; smallest face area = 0.2×0.1 = 0.02 m² (3).","Minimum pressure = 120/0.08 = 1,500 Pa (2).","Maximum pressure = 120/0.02 = 6,000 Pa (2).","Correctly associate pressure with area (1)."],answer:"Maximum = 6,000 Pa; minimum = 1,500 Pa."},
  {label:"(c)",prompt:"Explain why the pressure in a liquid increases with depth.",marks:5,scheme:["Greater depth means a taller column of liquid above the point (2).","The column has greater weight (1).","Greater force acts per unit area (2)."],answer:"The weight of liquid above increases with depth, increasing force per unit area."}
 ]},
 {number:4,marks:16,parts:[
  {label:"(a)",prompt:"State the principle of conservation of energy.",marks:3,scheme:["Energy cannot be created or destroyed (2).","It is transformed from one form to another; total energy remains constant in an isolated system (1)."],answer:"Total energy remains constant; it only changes form."},
  {label:"(b)",prompt:"A 2 kg stone is dropped from a height of 20 m. Calculate its gravitational potential energy at the top and its speed just before hitting the ground. Ignore air resistance.",marks:8,scheme:["GPE = mgh = 2×10×20 = 400 J (3).","By conservation, KE at bottom = 400 J (2).","½mv² = 400 (1).","v² = 400; v = 20 m/s (2)."],answer:"GPE = 400 J; impact speed = 20 m/s."},
  {label:"(c)",prompt:"A machine receives 500 J of energy and produces 350 J useful output. Calculate its efficiency.",marks:5,scheme:["Efficiency = useful output/input × 100% (2).","= 350/500 × 100% (2).","= 70% (1)."],answer:"70%."}
 ]},
 {number:5,marks:16,parts:[
  {label:"(a)",prompt:"State the law of moments.",marks:3,scheme:["For a body in equilibrium, sum of clockwise moments about a point equals sum of anticlockwise moments about that point (3)."],answer:"Clockwise moments equal anticlockwise moments in equilibrium."},
  {label:"(b)",prompt:"A uniform metre rule is balanced on a pivot at the 40 cm mark. A 2 N weight is hung at the 10 cm mark. Find the weight that must be hung at the 60 cm mark to balance the rule. Ignore the rule's weight.",marks:7,scheme:["Distance of 2 N load from pivot = 30 cm (1).","Distance of unknown load = 20 cm (1).","Anticlockwise moment = 2×30 = 60 Ncm (2).","Clockwise moment = W×20 (1).","W×20 = 60, W = 3 N (2)."],answer:"3 N."},
  {label:"(c)",prompt:"Give two ways of increasing the turning effect of a force about a pivot.",marks:6,scheme:["Increase the magnitude of the force (3).","Increase the perpendicular distance from pivot to line of action (3)."],answer:"Increase force or increase perpendicular distance from pivot."}
 ]}
]},
{
 id:"physics-p2",subject:"Physics",paper:"Paper 2",duration:120,totalMarks:80,
 instructions:["Answer ALL questions.","Use conventional symbols and units in calculations.","Draw clear labelled diagrams where requested."],
 questions:[
 {number:1,marks:16,parts:[
  {label:"(a)",prompt:"State two properties of images formed by a plane mirror.",marks:4,scheme:["Virtual (1).","Upright/erect (1).","Same size as object (1).","Laterally inverted or same distance behind mirror as object is in front (1)."],answer:"Virtual, upright, same size, laterally inverted; image distance equals object distance."},
  {label:"(b)",prompt:"An object is placed 15 cm in front of a concave mirror of focal length 10 cm. Using the mirror formula 1/f = 1/u + 1/v with the real-is-positive convention, calculate the image distance.",marks:7,scheme:["1/v = 1/f − 1/u (2).","1/v = 1/10 − 1/15 (2).","1/v = 1/30 (2).","v = 30 cm (1)."],answer:"30 cm in front of the mirror (real image)."},
  {label:"(c)",prompt:"Explain why a pencil partly immersed in water appears bent at the surface.",marks:5,scheme:["Light changes speed when passing between water and air (2).","It changes direction due to refraction (2).","The eye traces the refracted rays back to an apparent displaced position (1)."],answer:"Refraction makes the submerged part appear displaced."}
 ]},
 {number:2,marks:16,parts:[
  {label:"(a)",prompt:"Define electric current and state its SI unit.",marks:3,scheme:["Rate of flow of electric charge (2).","Ampere (A) (1)."],answer:"Current is charge flow per unit time, measured in amperes."},
  {label:"(b)",prompt:"A 6 Ω resistor is connected across a 12 V supply. Calculate the current and electrical power dissipated.",marks:7,scheme:["I = V/R = 12/6 = 2 A (3).","P = VI (2).","P = 12×2 = 24 W (2)."],answer:"Current = 2 A; power = 24 W."},
  {label:"(c)",prompt:"Two 3 Ω resistors are connected in parallel. Calculate their effective resistance.",marks:6,scheme:["1/R = 1/3 + 1/3 (2).","1/R = 2/3 (2).","R = 1.5 Ω (2)."],answer:"1.5 Ω."}
 ]},
 {number:3,marks:16,parts:[
  {label:"(a)",prompt:"Distinguish between transverse and longitudinal waves.",marks:4,scheme:["Transverse: particle vibration perpendicular to direction of propagation (2).","Longitudinal: particle vibration parallel to direction of propagation (2)."],answer:"Perpendicular versus parallel vibrations."},
  {label:"(b)",prompt:"A sound wave travels 680 m in 2 seconds. If its frequency is 400 Hz, calculate its speed and wavelength.",marks:7,scheme:["v = distance/time = 680/2 = 340 m/s (3).","v = fλ, so λ = v/f (2).","λ = 340/400 = 0.85 m (2)."],answer:"Speed = 340 m/s; wavelength = 0.85 m."},
  {label:"(c)",prompt:"An echo is heard 0.8 s after a sound is made. Calculate the distance to the reflecting wall if sound travels at 340 m/s.",marks:5,scheme:["Total distance travelled by sound = vt = 340×0.8 = 272 m (3).","Distance to wall = 272/2 = 136 m (2)."],answer:"136 m."}
 ]},
 {number:4,marks:16,parts:[
  {label:"(a)",prompt:"State the three methods of heat transfer.",marks:3,scheme:["Conduction (1).","Convection (1).","Radiation (1)."],answer:"Conduction, convection and radiation."},
  {label:"(b)",prompt:"Calculate the heat required to raise the temperature of 0.5 kg of water from 20°C to 80°C. Take specific heat capacity of water as 4,200 J kg⁻¹ K⁻¹.",marks:6,scheme:["ΔT = 80−20 = 60 K (1).","Q = mcΔT (2).","Q = 0.5×4,200×60 (2).","Q = 126,000 J (1)."],answer:"126,000 J."},
  {label:"(c)",prompt:"Explain why a vacuum flask has silvered surfaces and a vacuum between its walls.",marks:7,scheme:["Silvered surfaces reflect thermal radiation and reduce emission/absorption (3).","Vacuum prevents conduction because there are no particles (2).","Vacuum prevents convection because there is no fluid (2)."],answer:"Silvering reduces radiation; vacuum prevents conduction and convection."}
 ]},
 {number:5,marks:16,parts:[
  {label:"(a)",prompt:"What is electromagnetic induction?",marks:3,scheme:["Production of an e.m.f. in a conductor/coil (2).","Due to a change in magnetic flux linkage (1)."],answer:"An e.m.f. is induced when magnetic flux linkage changes."},
  {label:"(b)",prompt:"A transformer has 1,000 turns in its primary coil and 200 turns in its secondary coil. The primary voltage is 240 V. Calculate the secondary voltage and identify the transformer type.",marks:6,scheme:["Vs/Vp = Ns/Np (2).","Vs/240 = 200/1,000 (2).","Vs = 48 V (1).","Step-down transformer (1)."],answer:"48 V; step-down transformer."},
  {label:"(c)",prompt:"State two ways of increasing the magnitude of induced e.m.f. in a coil.",marks:4,scheme:["Move magnet/coil faster (2).","Use a stronger magnetic field or increase number of turns (2)."],answer:"Increase relative speed, field strength or number of turns."},
  {label:"(d)",prompt:"State Lenz's law.",marks:3,scheme:["The induced current flows in a direction (1).","such that its magnetic effect (1).","opposes the change producing it (1)."],answer:"Induced current opposes the change in magnetic flux that produces it."}
 ]}
]}
];