/* Timed structured examination and transparent self-marking workflow. */
(function(){
 const byId=id=>document.getElementById(id);
 const picker=byId("exam-picker"),workspace=byId("exam-workspace"),results=byId("exam-results");
 let paper=null,remaining=0,timer=null,submitted=false,answers={};
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const fmt=s=>{const h=Math.floor(s/3600),m=Math.floor(s%3600/60),v=s%60;return [h,m,v].map(n=>String(n).padStart(2,"0")).join(":");};
 function stopTimer(){if(timer){clearInterval(timer);timer=null;}}
 function start(id){
  stopTimer();paper=STRUCTURED_PAPERS.find(p=>p.id===id);if(!paper)return;
  remaining=paper.duration*60;submitted=false;answers={};
  picker.hidden=true;results.hidden=true;workspace.hidden=false;
  byId("exam-name").textContent=paper.subject+" "+paper.paper;
  byId("exam-meta").textContent=paper.questions.length+" questions · "+paper.totalMarks+" marks";
  byId("exam-clock").textContent=fmt(remaining);byId("exam-clock").classList.remove("time-low");
  byId("exam-instructions").innerHTML=paper.instructions.map(x=>"<li>"+esc(x)+"</li>").join("");
  byId("exam-questions").innerHTML=paper.questions.map(q=>'<article class="exam-question"><div class="exam-qhead"><h2>Question '+q.number+'</h2><b>'+q.marks+' marks</b></div>'+q.parts.map((part,i)=>'<div class="exam-part"><p><b>'+esc(part.label)+' </b>'+esc(part.prompt)+' <span class="mark-value">['+part.marks+' marks]</span></p><textarea class="exam-answer" rows="4" data-key="'+q.number+'-'+i+'" placeholder="Write your working and final answer here..."></textarea></div>').join("")+'</article>').join("");
  byId("exam-questions").querySelectorAll("textarea").forEach(el=>el.addEventListener("input",()=>{answers[el.dataset.key]=el.value;}));
  byId("submit-exam").disabled=false;byId("submit-exam").textContent="Submit examination";
  timer=setInterval(()=>{if(submitted)return;remaining--;byId("exam-clock").textContent=fmt(remaining);if(remaining<=300)byId("exam-clock").classList.add("time-low");if(remaining<=0){stopTimer();submit(true);}},1000);
  workspace.scrollIntoView({behavior:"smooth",block:"start"});
 }
 function submit(auto){
  if(submitted||!paper)return;
  const filled=Object.values(answers).filter(v=>v.trim()).length;
  if(!auto&&!confirm("Submit this paper now? You have entered answers in "+filled+" of "+paper.questions.reduce((n,q)=>n+q.parts.length,0)+" parts. You cannot edit answers after submission."))return;
  submitted=true;stopTimer();byId("submit-exam").disabled=true;
  byId("exam-clock").textContent=auto?"TIME EXPIRED":fmt(remaining);
  byId("exam-questions").querySelectorAll("textarea").forEach(el=>{el.disabled=true;});
  renderMarking(auto);
 }
 function renderMarking(auto){
  const totalParts=paper.questions.reduce((n,q)=>n+q.parts.length,0);
  results.hidden=false;results.innerHTML='<div class="exam-result-head"><h2>'+(auto?"Time is up — examination submitted":"Examination submitted")+'</h2><p>Compare each response with the model marking points. Enter the marks you honestly earned for each part; the total updates automatically.</p><div class="self-score"><strong id="self-score">0</strong><span> / '+paper.totalMarks+' marks</span><b id="self-percent">0%</b></div></div><div id="marking-content">'+paper.questions.map(q=>'<article class="marking-question"><h3>Question '+q.number+' <span>'+q.marks+' marks</span></h3>'+q.parts.map((part,i)=>{const key=q.number+"-"+i;return '<div class="marking-part"><p><b>'+esc(part.label)+' </b>'+esc(part.prompt)+'</p><p class="your-answer-label">Your response</p><div class="your-answer">'+(answers[key]?esc(answers[key]).replace(/\n/g,"<br>"):"Not attempted")+'</div><div class="marking-scheme"><b>Marking scheme</b><ol>'+part.scheme.map(s=>"<li>"+esc(s)+"</li>").join("")+'</ol><p class="model-answer"><b>Expected answer:</b> '+esc(part.answer)+'</p></div><label class="self-mark-label">Marks awarded (0–'+part.marks+')</label><input class="self-mark" type="number" min="0" max="'+part.marks+'" step="1" value="0" data-max="'+part.marks+'" aria-label="Marks awarded for question '+q.number+' '+esc(part.label)+'"></div>';}).join("")+'</article>').join("")+'</div><div class="exam-actions"><button class="btn" id="finish-marking">Finish marking</button><button class="btn btn-light" id="print-paper">Print marking scheme</button></div>';
  results.scrollIntoView({behavior:"smooth",block:"start"});
  results.querySelectorAll(".self-mark").forEach(el=>el.addEventListener("input",()=>{let v=Number(el.value);if(!Number.isFinite(v))v=0;v=Math.max(0,Math.min(Number(el.dataset.max),Math.floor(v)));el.value=String(v);updateScore();}));
  byId("finish-marking").addEventListener("click",()=>{updateScore();const score=results.querySelector("#self-score").textContent;const pct=results.querySelector("#self-percent").textContent;const msg=document.createElement("p");msg.className="marking-complete";msg.textContent="Self-assessed result: "+score+" / "+paper.totalMarks+" ("+pct+"). Review the topics for any marks you missed.";results.querySelector(".exam-result-head").appendChild(msg);});
  byId("print-paper").addEventListener("click",()=>window.print());
  updateScore();
 }
 function updateScore(){
  const inputs=results.querySelectorAll(".self-mark");let score=0;inputs.forEach(el=>score+=Number(el.value)||0);
  byId("self-score").textContent=score;byId("self-percent").textContent=Math.round(score/paper.totalMarks*100)+"%";
 }
 byId("exam-picker").querySelectorAll("[data-paper]").forEach(btn=>btn.addEventListener("click",()=>start(btn.dataset.paper)));
 byId("submit-exam").addEventListener("click",()=>submit(false));
 byId("back-papers").addEventListener("click",()=>{stopTimer();workspace.hidden=true;results.hidden=true;picker.hidden=false;});
})();