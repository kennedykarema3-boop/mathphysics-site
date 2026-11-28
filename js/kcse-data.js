/* KCSE-style original revision questions. These are not reproduced official KNEC papers. */
const KCSE_PAPERS = {
 Mathematics: [
  ["A trader buys an article for KSh 2,400 and sells it at a profit of 15%. Find the selling price.",["KSh 2,640","KSh 2,760","KSh 2,800","KSh 2,940"],1,"Profit = 0.15 × 2,400 = 360. Selling price = 2,400 + 360 = KSh 2,760."],
  ["Solve 3(2x − 1) = 4x + 9.",["x = 3","x = 6","x = 9","x = −6"],1,"6x − 3 = 4x + 9; 2x = 12; x = 6."],
  ["The angles of a triangle are (x + 10)°, 2x° and (3x − 10)°. Find the largest angle.",["60°","70°","80°","90°"],2,"x + 10 + 2x + 3x − 10 = 180; 6x = 180, x = 30. Angles are 40°, 60° and 80°."],
  ["A map has a scale of 1:50,000. Two towns are 7.2 cm apart on the map. Find the actual distance in kilometres.",["0.36 km","3.6 km","36 km","360 km"],1,"Actual distance = 7.2 × 50,000 = 360,000 cm = 3,600 m = 3.6 km."],
  ["Find the gradient of the line joining (2, 3) and (6, 11).",["1","2","3","4"],1,"Gradient = (11 − 3)/(6 − 2) = 8/4 = 2."],
  ["Solve simultaneously: 2x + y = 11 and x − y = 1.",["x = 4, y = 3","x = 3, y = 5","x = 5, y = 1","x = 6, y = −1"],0,"Add the equations: 3x = 12, x = 4. Then y = 11 − 8 = 3."],
  ["A cylinder has radius 3.5 cm and height 10 cm. Find its volume. Use π = 22/7.",["110 cm³","220 cm³","385 cm³","770 cm³"],2,"V = πr²h = 22/7 × 3.5 × 3.5 × 10 = 385 cm³."],
  ["A bag contains 5 red, 3 blue and 2 green balls. One ball is selected at random. Find the probability that it is not blue.",["3/10","1/2","7/10","4/5"],2,"Not blue = 5 + 2 = 7 favourable balls out of 10; probability = 7/10."],
  ["Find the simple interest on KSh 8,000 invested for 3 years at 5% per annum.",["KSh 400","KSh 800","KSh 1,200","KSh 2,000"],2,"I = PRT/100 = 8,000 × 5 × 3/100 = KSh 1,200."],
  ["Given f(x) = 2x² − 3x + 1, find f(−2).",["3","7","11","15"],3,"f(−2) = 2(4) − 3(−2) + 1 = 8 + 6 + 1 = 15."],
  ["A sector has radius 7 cm and angle 90°. Find its arc length. Use π = 22/7.",["5.5 cm","11 cm","22 cm","44 cm"],1,"Arc length = 90/360 × 2πr = 1/4 × 44 = 11 cm."],
  ["Differentiate y = 4x³ − 5x² + 2x.",["12x² − 10x + 2","4x² − 5x + 2","12x³ − 10x² + 2","12x² − 5x + 2"],0,"Apply the power rule term by term: dy/dx = 12x² − 10x + 2."],
  ["A number is increased by 20% and becomes 96. Find the original number.",["76.8","80","84","115.2"],1,"96 represents 120% of the original. Original = 96/1.2 = 80."],
  ["The first term of an arithmetic progression is 7 and the common difference is 4. Find the sum of the first 12 terms.",["300","324","348","372"],2,"S₁₂ = 12/2[2(7) + 11(4)] = 6(14 + 44) = 348."],
  ["A right-angled triangle has perpendicular sides 9 cm and 12 cm. Find the hypotenuse.",["13 cm","14 cm","15 cm","21 cm"],2,"By Pythagoras, c = √(9² + 12²) = √225 = 15 cm."]
 ],
 Physics: [
  ["A car travels 180 m in 12 s at uniform speed. Calculate its speed.",["12 m/s","15 m/s","18 m/s","21.6 m/s"],1,"Speed = distance/time = 180/12 = 15 m/s."],
  ["A force of 24 N acts on a mass of 6 kg. Find the acceleration.",["2 m/s²","4 m/s²","6 m/s²","144 m/s²"],1,"From F = ma, a = F/m = 24/6 = 4 m/s²."],
  ["A stone has a mass of 2 kg. Calculate its weight where g = 10 N/kg.",["0.2 N","2 N","12 N","20 N"],3,"Weight = mg = 2 × 10 = 20 N."],
  ["A force of 50 N moves a load through 4 m in its direction. Find the work done.",["12.5 J","46 J","200 J","400 J"],2,"Work done = force × distance = 50 × 4 = 200 J."],
  ["A machine does 600 J of work in 20 s. Find its power.",["20 W","30 W","120 W","12,000 W"],1,"Power = work/time = 600/20 = 30 W."],
  ["A 2 kg body moves at 3 m/s. Calculate its kinetic energy.",["3 J","6 J","9 J","18 J"],2,"KE = 1/2 mv² = 0.5 × 2 × 9 = 9 J."],
  ["A 2 kg object is raised vertically through 5 m. Find its gain in potential energy (g = 10 N/kg).",["10 J","25 J","50 J","100 J"],3,"GPE = mgh = 2 × 10 × 5 = 100 J."],
  ["A current of 0.5 A flows through a resistor of 8 Ω. Find the potential difference.",["4 V","8.5 V","16 V","40 V"],0,"Ohm's law: V = IR = 0.5 × 8 = 4 V."],
  ["Two resistors of 4 Ω and 6 Ω are connected in series. Find the total resistance.",["2.4 Ω","5 Ω","10 Ω","24 Ω"],2,"For series connection, resistances add: R = 4 + 6 = 10 Ω."],
  ["A wave has frequency 25 Hz and wavelength 0.8 m. Find its speed.",["20 m/s","25.8 m/s","31.25 m/s","40 m/s"],0,"Wave speed v = fλ = 25 × 0.8 = 20 m/s."],
  ["A 0.4 kg metal block is heated by 50°C. If its specific heat capacity is 400 J/kg°C, calculate heat supplied.",["800 J","2,000 J","8,000 J","20,000 J"],2,"Q = mcΔT = 0.4 × 400 × 50 = 8,000 J."],
  ["An object is placed 30 cm from a plane mirror. How far is its image from the mirror?",["15 cm","30 cm","60 cm","90 cm"],1,"A plane mirror forms an image the same perpendicular distance behind the mirror as the object is in front."],
  ["A transformer has 200 turns in the primary and 800 turns in the secondary. If the primary voltage is 12 V, find the secondary voltage.",["3 V","12 V","48 V","96 V"],2,"Vs/Vp = Ns/Np = 800/200 = 4. Vs = 4 × 12 = 48 V."],
  ["A body starts from rest and accelerates uniformly at 3 m/s² for 4 s. Find the distance travelled.",["12 m","18 m","24 m","48 m"],2,"s = ut + 1/2 at² = 0 + 0.5 × 3 × 16 = 24 m."],
  ["Which instrument is used to measure electric current in a circuit?",["Voltmeter","Ammeter","Thermometer","Barometer"],1,"An ammeter measures current and is connected in series with the component."]
 ]
};