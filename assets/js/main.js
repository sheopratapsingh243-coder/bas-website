(function(){
  const state = { lang: localStorage.getItem('bas_lang') || 'hi' };

  function setLangLabel(){
  const label = document.getElementById('langLabel');
  if(label) label.textContent = state.lang === 'hi' ? 'English' : 'हिन्दी';
  document.documentElement.lang = state.lang;
}

  function applyLanguage(){
    document.querySelectorAll('[data-hi]').forEach(el=>{
      const val = el.getAttribute('data-' + state.lang);
      if(val !== null){
        if(el.hasAttribute('data-html')) el.innerHTML = val;
        else el.textContent = val;
      }
    });
    document.querySelectorAll('[data-hi-placeholder]').forEach(el=>{
      const val = el.getAttribute('data-' + state.lang + '-placeholder');
      if(val !== null) el.setAttribute('placeholder', val);
    });
    setLangLabel();

  }

  function setActiveMenu(){
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(a=>{
      const href = a.getAttribute('href');
      a.classList.toggle('active', href === current || (current === '' && href === 'index.html'));
    });
  }

  function wireHeader(){
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainMenu');
    if(menuToggle && nav){
      menuToggle.onclick = () => nav.classList.toggle('open');
      nav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>nav.classList.remove('open')));
    }
    const langToggle = document.getElementById('langToggle');
    if(langToggle){
      langToggle.onclick = ()=>{
        state.lang = state.lang === 'hi' ? 'en' : 'hi';
        localStorage.setItem('bas_lang', state.lang);
        applyLanguage();
      };
    }
    setActiveMenu();
    applyLanguage();
  }

  function loadPartial(id, file, cb){
    const target = document.getElementById(id);
    if(!target) return;
    fetch(file).then(r=>r.text()).then(html=>{
      target.innerHTML = html;
      cb && cb();
    }).catch(console.error);
  }

  function copyText(text, btn){
    navigator.clipboard.writeText(text).then(()=>{
      if(!btn) return;
      const original = btn.textContent;
      btn.textContent = state.lang === 'hi' ? 'कॉपी हो गया' : 'Copied';
      setTimeout(()=>btn.textContent = original, 1400);
    }).catch(()=>{});
  }

  function wireCopies(){
  const bankBtn = document.getElementById('copyBankBtn');
  if(bankBtn){
    bankBtn.addEventListener('click', ()=> copyText(document.getElementById('bankCopyText').textContent.trim(), bankBtn));
  }
}

function animateCounters(){
  const counters = document.querySelectorAll('[data-count]');
  if(!counters.length) return;

  counters.forEach(el=>{
    const end = parseInt(el.getAttribute('data-count'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    let cur = 0;
    const step = Math.max(1, Math.ceil(end / 50));

    const timer = setInterval(()=>{
      cur += step;
      if(cur >= end){
        cur = end;
        clearInterval(timer);
      }
      el.textContent = cur.toLocaleString('en-IN') + suffix;
    }, 30);
  });
}

  function wireContactForm(){
    const form = document.getElementById('contactForm');
    if(!form) return;
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const name = encodeURIComponent(document.getElementById('nameField').value.trim());
      const phone = encodeURIComponent(document.getElementById('phoneField').value.trim());
      const msg = encodeURIComponent(document.getElementById('messageField').value.trim());
      const text = state.lang === 'hi'
        ? `नमस्ते, मैं ${name} बोल रहा/रही हूँ। फोन: ${phone}. संदेश: ${msg}`
        : `Hello, this is ${name}. Phone: ${phone}. Message: ${msg}`;
      window.open(`https://wa.me/918604669454?text=${text}`, '_blank');
    });
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    loadPartial('header', 'components/header.html', wireHeader);
    loadPartial('footer', 'components/footer.html', applyLanguage);
    applyLanguage();
    animateCounters();
    wireCopies();
    wireContactForm();
  });
})();
