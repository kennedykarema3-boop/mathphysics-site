/* Render year-by-year archive links and direct timed-exam entry points. */
(function(){
 const buttons=document.querySelectorAll("#past-paper-subjects .filter");
 const yearSelect=document.getElementById("past-year");
 const grid=document.getElementById("past-paper-grid");
 const archiveLink=document.getElementById("open-full-archive");
 let subject="Mathematics";
 function timedHref(year,paper){
  return "exam-room.html?subject="+encodeURIComponent(subject)+"&year="+year+"&paper="+paper;
 }
 function render(){
  const data=KCSE_PAST_PAPER_ARCHIVES[subject];
  archiveLink.href=data.archive;
  const items=data.years.filter(item=>yearSelect.value==="all"||String(item.year)===yearSelect.value);
  grid.innerHTML="";
  items.forEach(item=>{
   const article=document.createElement("article");
   article.className="past-paper-card";
   const head=document.createElement("div");
   head.className="past-paper-card-head";
   const tag=document.createElement("span");
   tag.className="tag "+(subject==="Physics"?"physics":"math");
   tag.textContent=subject;
   const year=document.createElement("strong");
   year.textContent=String(item.year);
   head.append(tag,year);
   const title=document.createElement("h2");
   title.textContent="KCSE "+item.year+" "+subject;
   const note=document.createElement("p");
   note.textContent=item.note;
   const actions=document.createElement("div");
   actions.className="past-paper-actions";
   const p1=document.createElement("a");
   p1.className="btn";
   p1.href=timedHref(item.year,1);
   p1.textContent="Timed Paper 1";
   const p2=document.createElement("a");
   p2.className="btn btn-light";
   p2.href=timedHref(item.year,2);
   p2.textContent="Timed Paper 2";
   const open=document.createElement("a");
   open.className="text-link";
   open.href=item.url;
   open.target="_blank";
   open.rel="noopener noreferrer";
   open.textContent="Open " + item.year + " paper archive ↗";
   actions.append(p1,p2,open);
   article.append(head,title,note,actions);
   grid.appendChild(article);
  });
 }
 for(let year=2025;year>=2011;year--){
  const option=document.createElement("option");
  option.value=String(year);
  option.textContent=String(year);
  yearSelect.appendChild(option);
 }
 buttons.forEach(button=>button.addEventListener("click",()=>{
  subject=button.dataset.subject;
  buttons.forEach(item=>item.classList.toggle("active",item===button));
  yearSelect.value="all";
  render();
 }));
 yearSelect.addEventListener("change",render);
 render();
})();