
document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');}));}
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 const copy=document.querySelector('[data-copy-email]'); if(copy){copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(copy.dataset.copyEmail);const old=copy.textContent;copy.textContent='Gekopieerd ✓';setTimeout(()=>copy.textContent=old,1800);}catch(e){}})}
 const search=document.getElementById('case-search'),chips=[...document.querySelectorAll('.filter-chip')],cards=[...document.querySelectorAll('#case-list .case-card')],count=document.getElementById('case-count'),empty=document.getElementById('case-empty');
 if(cards.length){let filter='all'; const run=()=>{const q=(search?.value||'').trim().toLowerCase();let shown=0;cards.forEach(card=>{const okF=filter==='all'||card.dataset.status===filter;const okQ=!q||card.dataset.search.includes(q);const show=okF&&okQ;card.hidden=!show;if(show)shown++;});if(count)count.textContent=`${shown} ${shown===1?'dossier':'dossiers'}`;if(empty)empty.hidden=shown!==0;}; chips.forEach(chip=>chip.addEventListener('click',()=>{chips.forEach(c=>c.classList.remove('is-active'));chip.classList.add('is-active');filter=chip.dataset.filter;run();}));search?.addEventListener('input',run);run();}
});
