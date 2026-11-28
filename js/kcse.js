/* KCSE-style subject practice: one question at a time with worked feedback. */
(function(){
 const card=document.getElementById("paper-card"), fill=document.getElementById("paper-progress"), status=document.getElementById("paper-progress-text");
 let subject="Mathematics", index=0, score=0, selected=null, locked=false, review=[];
 const names=["Mathematics","Physics"];
 function render(){
  const qs=KCSE_PAPERS[subject], q=qs[index]; locked=false; selected=null;
  fill.style.width=(index/qs.length*100)+"%";
  status.textContent="Question "+(index+1)+" of "+qs.length+" · Score: "+score;
  card.innerHTML='<span class="tag '+(subject==="Physics"?"physics":"math")+'">'+subject+'</span><p class="question">'+(index+1)+'. '+q[0]+'</p><div class="options">'+q[1].map((o,i)=>'<button class="option" data-i="'+i+'"><span class="key">'+(i+1)+'</span>'+o+'</button>').join("")+'</div><div id="paper-feedback" class="feedback" aria-live="polite"></div>';
  card.querySelectorAll(".option").forEach(b=>b.addEventListener("click",()=>answer(Number(b.dataset.i))));
 }
 function answer(choice){
  if(locked)return; locked=true;
  const q=KCSE_PAPERS[subject][index], ok=choice===q[2]; if(ok)score++;
  review.push({question:q[0],chosen:q[1][choice],correct:q[1][q[2]],ok});
  card.querySelectorAll(".option").forEach((b,i)=>{b.disabled=true;if(i===q[2])b.classList.add("correct");if(i===choice&&!ok)b.classList.add("wrong");});
  const fb=document.getElementById("paper-feedback");
  fb.innerHTML='<p class="'+(ok?"good":"bad")+'">'+(ok?"✓ Correct":"✗ Incorrect")+'</p><p><b>Worked explanation:</b> '+q[3]+'</p><button class="btn" id="paper-next">'+(index===KCSE_PAPERS[subject].length-1?"View results":"Next question →")+'</button>';
  status.textContent="Question "+(index+1)+" of "+KCSE_PAPERS[subject].length+" · Score: "+score;
  document.getElementById("paper-next").addEventListener("click",()=>{index++;index<KCSE_PAPERS[subject].length?render():results();});
 }
 function results(){
  const total=KCSE_PAPERS[subject].length,pct=Math.round(score/total*100);fill.style.width="100%";status.textContent="Paper completed";
  card.innerHTML='<div class="results"><p class="big-score">'+score+' / '+total+'</p><p class="percent">'+pct+'%</p><p>'+(pct>=80?"Excellent performance.":pct>=50?"Good effort. Review the explanations for missed questions.":"Keep practising and revise the relevant topics.")+'</p><button class="btn" id="paper-retry">Retry '+subject+'</button><button class="btn btn-light" id="paper-switch">Try '+(subject==="Mathematics"?"Physics":"Mathematics")+'</button></div><h2 class="section-title">Answer review</h2><ol class="review">'+review.map((r,i)=>'<li class="'+(r.ok?"good-item":"bad-item")+'"><p><b>Q'+(i+1)+'.</b> '+r.question+'</p><p>Your answer: '+r.chosen+(r.ok?" ✓":" ✗")+'</p>'+(r.ok?"":'<p>Correct answer: <b>'+r.correct+'</b></p>')+'</li>').join("")+'</ol>';
  document.getElementById("paper-retry").addEventListener("click",()=>start(subject));
  document.getElementById("paper-switch").addEventListener("click",()=>start(subject==="Mathematics"?"Physics":"Mathematics"));
 }
 function start(s){subject=s;index=0;score=0;review=[];document.querySelectorAll("#paper-subjects .filter").forEach(b=>b.classList.toggle("active",b.dataset.subject===s));render();}
 document.querySelectorAll("#paper-subjects .filter").forEach(b=>b.addEventListener("click",()=>start(b.dataset.subject)));
 start(subject);
})();