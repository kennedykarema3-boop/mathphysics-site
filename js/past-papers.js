(function(){
 const buttons=document.querySelectorAll("#past-paper-subjects .filter");
 const yearSelect=document.getElementById("past-year");
 const grid=document.getElementById("past-paper-grid");
 const archiveLink=document.getElementById("open-full-archive");
 let subject="Mathematics";
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
   const open=document.createElement("a");
   open.className="btn";
   open.href=item.url;
   open.target="_blank";
   open.rel="noopener noreferrer";
   open.textContent="Open "+item.year+" archive ↗";
   const browse=document.createElement("a");
   browse.className="text-link";
   browse.href=data.archive;
   browse.target="_blank";
   browse.rel="noopener noreferrer";
   browse.textContent="Browse "+subject+" file index";
   actions.append(open,browse);
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