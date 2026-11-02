// @ts-nocheck
/**
 * Site behaviour — page routing with the slanted wipe, intro, menu, scroll reveals,
 * parallax, galleries, FAQ, chips, forms and the ambassador/crew detail views.
 * Ported unchanged from the approved site. Runs once in the browser (see SiteScript.tsx).
 */
export interface SiteMessages {
  /** Formspree form endpoint, e.g. https://formspree.io/f/xxxxxxx */
  formEndpoint: string;
  fillIn: (field: string) => string;
  pickDivision: string;
  pickCity: string;
  copied: string;
  sending: string;
  error: string;
}

export function initSite(i18n: SiteMessages) {
  const rtl = document.documentElement.dir === 'rtl';
  const locale = document.documentElement.lang || 'en';

  const pages=[...document.querySelectorAll('.page')];
  const names=pages.map(p=>p.dataset.page);
  const nav=document.getElementById('nav'), wipe=document.getElementById('wipe');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lightTop=new Set(['concept','faq']);
  let cur=null, busy=false;

  function show(name,instant){
    if(!names.includes(name)) name='home';
    pages.forEach(p=>{p.classList.remove('on','in')});
    const pg=pages[names.indexOf(name)];
    pg.classList.add('on');
    window.scrollTo(0,0);
    document.querySelectorAll('[data-go]').forEach(a=>a.classList.toggle('on',a.dataset.go===name&&a.closest('.links')));
    nav.classList.toggle('onlight',lightTop.has(name));
    cur=name;
    prepReveal(pg);
    requestAnimationFrame(()=>requestAnimationFrame(()=>pg.classList.add('in')));
    onScroll();
  }
  function go(name){
    closeMenu();
    if(busy) return;
    if(name===cur){window.scrollTo({top:0,behavior:reduce?'auto':'smooth'});return;}
    if(reduce){show(name);history.replaceState(null,'','#'+name);return;}
    busy=true;
    wipe.classList.remove('go'); void wipe.offsetWidth; wipe.classList.add('go');
    setTimeout(()=>{show(name);try{history.replaceState(null,'','#'+name)}catch(e){location.hash=name}},560);
    setTimeout(()=>{wipe.classList.remove('go');busy=false},1250);
  }
  document.addEventListener('click',e=>{
    const a=e.target.closest('[data-go]'); if(!a) return;
    e.preventDefault(); go(a.dataset.go);
  });
  window.addEventListener('hashchange',()=>{const h=location.hash.slice(1); if(names.includes(h)&&h!==cur) go(h)});

  // in-page scroll links
  function smoothTo(id){const el=document.getElementById(id); if(el) window.scrollTo({top:el.getBoundingClientRect().top+scrollY-60,behavior:reduce?'auto':'smooth'})}
  document.getElementById('readmore').addEventListener('click',e=>{e.preventDefault();smoothTo('about')});
  document.getElementById('toreg').addEventListener('click',e=>{e.preventDefault();smoothTo('reg')});

  // menu
  const burger=document.getElementById('burger');
  function closeMenu(){document.body.classList.remove('menu-open');burger.setAttribute('aria-expanded','false')}
  burger.addEventListener('click',()=>{const o=document.body.classList.toggle('menu-open');burger.setAttribute('aria-expanded',o)});
  document.querySelectorAll('.mm a.row').forEach((a,i)=>a.style.transitionDelay=(0.12+i*0.05)+'s');

  // reveal on scroll (elements start visible, below-fold ones get a soft offset)
  let io=('IntersectionObserver' in window)?new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.remove('pre');io.unobserve(en.target)}}),{rootMargin:'0px 0px -8% 0px'}):null;
  function prepReveal(pg){
    if(!io||reduce) return;
    pg.querySelectorAll('.rv,.imgrv').forEach(el=>{
      const r=el.getBoundingClientRect();
      if(r.top>innerHeight*0.92){el.classList.add('pre');io.observe(el)} else el.classList.remove('pre');
    });
  }

  // nav solid + parallax
  const par=()=>document.querySelectorAll('.page.on [data-par] .bg');
  function onScroll(){
    nav.classList.toggle('solid',scrollY>40);
    if(reduce) return;
    par().forEach(b=>{const r=b.parentElement.getBoundingClientRect(); if(r.bottom<0||r.top>innerHeight) return; const p=(r.top+r.height/2-innerHeight/2)/innerHeight; b.style.transform=`translateY(${p*-6}%) scale(1.08)`});
  }
  addEventListener('scroll',onScroll,{passive:true});

  // galleries
  document.querySelectorAll('.gal').forEach(g=>{
    const wrap=g.nextElementSibling, bar=wrap.querySelector('.prog i');
    const upd=()=>{const max=g.scrollWidth-g.clientWidth; const f=max>0?Math.abs(g.scrollLeft)/max:0; bar.style.width=(14+f*86)+'%'};
    g.addEventListener('scroll',upd,{passive:true}); upd();
    wrap.querySelectorAll('[data-gal]').forEach(b=>b.addEventListener('click',()=>g.scrollBy({left:(rtl?-1:1)*+b.dataset.gal*g.clientWidth*0.7,behavior:reduce?'auto':'smooth'})));
    let down=false,sx=0,sl=0,moved=false;
    g.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;moved=false;sx=e.clientX;sl=g.scrollLeft;g.classList.add('drag')});
    addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-sx;if(Math.abs(dx)>4)moved=true;g.scrollLeft=sl-dx});
    addEventListener('pointerup',()=>{if(!down)return;down=false;g.classList.remove('drag')});
  });


  // gallery: keep first photos fixed, shuffle the rest, slow auto-scroll that pauses on touch/hover
  document.querySelectorAll('.gal[data-shuffle]').forEach(g=>{
    const free=[...g.children].filter(f=>!f.hasAttribute('data-fixed'));
    for(let i=free.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[free[i],free[j]]=[free[j],free[i]]}
    free.forEach(f=>g.appendChild(f));
  });
  if(!reduce) document.querySelectorAll('.gal[data-auto]').forEach(g=>{
    let pause=0,last=0;
    const hold=()=>{pause=performance.now()+3500};
    ['pointerdown','pointerenter','touchstart','wheel','focusin'].forEach(e=>g.addEventListener(e,hold,{passive:true}));
    g.parentElement.querySelectorAll('[data-gal]').forEach(b=>b.addEventListener('click',hold));
    function step(t){
      const dt=last?Math.min(t-last,50):16; last=t;
      if(g.offsetParent&&t>pause&&!g.matches(':hover')){
        g.style.scrollSnapType='none';
        const max=g.scrollWidth-g.clientWidth;
        if(Math.abs(g.scrollLeft)>=max-1){g.scrollLeft=0}else{g.scrollLeft+=(rtl?-1:1)*dt*0.035}
      } else g.style.scrollSnapType='';
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });

  // faq
  document.querySelectorAll('.acc>button').forEach(b=>b.addEventListener('click',()=>{const a=b.parentElement;const o=a.classList.toggle('open');b.setAttribute('aria-expanded',o)}));
  document.querySelectorAll('#cats button').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('#cats button').forEach(x=>x.classList.toggle('on',x===b));
    const t=document.querySelector(`#faqs [data-c="${b.dataset.cat}"]`); if(t) window.scrollTo({top:t.getBoundingClientRect().top+scrollY-100,behavior:reduce?'auto':'smooth'});
  }));

  // chips
  document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>c.setAttribute('aria-pressed',c.getAttribute('aria-pressed')!=='true')));
  document.querySelectorAll('.cchip').forEach(c=>c.addEventListener('click',()=>{document.querySelectorAll('.cchip').forEach(x=>x.setAttribute('aria-pressed',x===c))}));

  // forms: validate, send to Formspree in the background, then show the confirmation
  function wire(formId,cardId,errId,extra,payload){
    const f=document.getElementById(formId), card=document.getElementById(cardId), err=document.getElementById(errId);
    const submit=f.querySelector('[type="submit"]');
    f.addEventListener('submit',async e=>{
      e.preventDefault();
      if(f.dataset.busy) return;
      const bad=[...f.querySelectorAll('[required]')].find(i=>!i.value.trim()||(i.type==='email'&&!/^\S+@\S+\.\S+$/.test(i.value)));
      if(bad){err.textContent=i18n.fillIn(bad.closest('.field').querySelector('label').textContent.toLowerCase());bad.focus();return}
      if(extra){const m=extra();if(m){err.textContent=m;return}}
      err.textContent=i18n.sending; f.dataset.busy='1'; submit.disabled=true; submit.style.opacity='.6';
      try{
        // Formspree: JSON in, JSON out — the page never reloads or redirects.
        const res=await fetch(i18n.formEndpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},
          body:JSON.stringify({...payload(f),'Language':locale==='ar'?'Arabic':'English'})});
        const data=await res.json().catch(()=>({}));
        if(!res.ok||data.ok===false||data.errors) throw new Error((data.errors||[]).map(x=>x.message).join(', '));
        err.textContent=''; card.classList.add('sent');
      }catch(_){
        err.textContent=i18n.error;
      }finally{
        delete f.dataset.busy; submit.disabled=false; submit.style.opacity='';
      }
    });
    const r=card.querySelector('[data-reset]'); if(r) r.addEventListener('click',()=>{f.reset();card.classList.remove('sent');document.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed','false'))});
  }
  wire('regform','regcard','regerr',
    ()=>document.querySelector('.chip[aria-pressed="true"]')?'':i18n.pickDivision,
    f=>({
      _subject:'Hybrid One Jeddah — early registration',
      'Form':'Jeddah early registration',
      'Full name':f.elements.name.value.trim(),
      'Mobile':'+966 '+f.elements.phone.value.trim().replace(/^(\+?966|0)/,'').trim(),
      email:f.elements.email.value.trim(),
      'Divisions':[...document.querySelectorAll('.chip[aria-pressed="true"]')].map(c=>c.dataset.value).join(', ')}));
  const cm2=document.getElementById('copymail'); if(cm2) cm2.addEventListener('click',()=>{const t=document.getElementById('pmail').textContent; const ok=()=>{document.getElementById('copied').textContent=i18n.copied}; if(navigator.clipboard) navigator.clipboard.writeText(t).then(ok).catch(()=>{const r=document.createRange();r.selectNodeContents(document.getElementById('pmail'));const sel=getSelection();sel.removeAllRanges();sel.addRange(r)}); });
  wire('jform','jcard','jerr',
    ()=>document.querySelector('.cchip[aria-pressed="true"]')?'':i18n.pickCity,
    f=>{const contact=f.elements.contact.value.trim();return {
      _subject:'Hybrid One — waitlist',
      'Form':'Waitlist',
      'Full name':f.elements.name.value.trim(),
      'Email or WhatsApp':contact,
      ...(contact.includes('@')?{email:contact}:{}),
      'City':(document.querySelector('.cchip[aria-pressed="true"]')||{}).dataset?.value||''}});


  // ambassador cards -> detail view
  const am=document.getElementById('amodal');
  function openAmb(c){
    const ph=c.querySelector('.ph img:not(.mk2)'); if(!ph) return;
    const b=c.querySelectorAll('.st b');
    const ig=(c.querySelector('.st .ig b')||{}).textContent||'';
    am.querySelector('#am-img').src=ph.src; am.querySelector('#am-img').alt=ph.alt;
    am.querySelector('#am-tag').textContent=c.querySelector('.tag').textContent;
    am.querySelector('#am-name').textContent=c.querySelector('.nm').textContent;
    am.querySelector('#am-bio').textContent=c.querySelector('.bio').textContent;
    am.querySelector('#am-sport').textContent=b[0].textContent;
    am.querySelector('#am-since').textContent=b[1].textContent;
    const a=am.querySelector('#am-ig'); a.textContent=ig; a.href='https://instagram.com/'+ig.replace('@','');
    am.hidden=false; document.body.style.overflow='hidden'; am.querySelector('.amx').focus();
  }
  function closeAmb(){am.hidden=true;document.body.style.overflow=''}
  document.querySelectorAll('.ecard').forEach(c=>{c.tabIndex=0;c.setAttribute('role','button');c.addEventListener('click',()=>openAmb(c));c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openAmb(c)}})});
  am.querySelectorAll('[data-close]').forEach(x=>x.addEventListener('click',closeAmb));
  addEventListener('keydown',e=>{if(e.key==='Escape'&&!am.hidden)closeAmb()});


  // crews -> detail
  const cm=document.getElementById('cmodal');
  function openCrew(c){
    const d=c.querySelector('.cdata').dataset;
    const lg=c.querySelector('.logo'); const L=cm.querySelector('#cm-logo'); L.innerHTML=lg.innerHTML;
    cm.querySelector('#cm-name').textContent=c.querySelector('.nm').textContent;
    cm.querySelector('#cm-meta').textContent=d.type+' · '+d.city;
    const avs=c.querySelectorAll('.av');
    cm.querySelector('#cm-reps').innerHTML=[1,2].map((n,i)=>`<div class="cm-rep"><div class="av">${avs[i]&&avs[i].querySelector('img:not(.ph0)')?avs[i].innerHTML:''}</div><div><b style="display:block;font-weight:800;font-stretch:105%">${d['r'+n]}</b><span class="k">${d['r'+n+'s']}</span></div></div>`).join('');
    const a=cm.querySelector('#cm-ig'); a.textContent=d.ig; a.href='https://instagram.com/'+d.ig.replace('@','');
    cm.hidden=false; document.body.style.overflow='hidden'; cm.querySelector('.amx').focus();
  }
  function closeCrew(){cm.hidden=true;document.body.style.overflow=''}
  document.querySelectorAll('.crews .crew').forEach(c=>{c.addEventListener('click',()=>openCrew(c));c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openCrew(c)}})});
  cm.querySelectorAll('[data-cclose]').forEach(x=>x.addEventListener('click',closeCrew));
  addEventListener('keydown',e=>{if(e.key==='Escape'&&!cm.hidden)closeCrew()});

  // intro (first load only)
  const intro=document.getElementById('intro');
  let seen=false; try{seen=sessionStorage.getItem('h1intro')==='1'}catch(e){}
  function endIntro(){if(!intro.isConnected)return;intro.classList.add('out');setTimeout(()=>intro.remove(),700);try{sessionStorage.setItem('h1intro','1')}catch(e){}}
  const start=location.hash.slice(1);
  if(reduce||seen||(start&&start!=='home')) intro.remove();
  else{document.getElementById('skip').addEventListener('click',endIntro);setTimeout(endIntro,5000)}

  show(names.includes(start)?start:'home',true);

}
