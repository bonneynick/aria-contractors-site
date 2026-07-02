// ARIA shared chrome. Injects header + footer so markup stays consistent across pages
document.documentElement.classList.add('js');

const NAV = `
<div class="wrap nav">
  <a href="index.html" class="logo"><img src="assets/logo-positive-tight.png" alt="ARIA Construction Group"></a>
  <button class="burger" aria-label="Menu"><span></span><span></span><span></span></button>
  <ul>
    <li><a href="index.html" data-p="home">Home</a></li>
    <li class="has-sub"><a href="insurance.html" data-p="insurance">Sectors</a>
      <ul class="sub">
        <li><a href="insurance.html">Insurance Sector</a></li>
        <li><a href="commercial-sector.html">Commercial Sector</a></li>
        <li><a href="residential-sector.html">Residential Sector</a></li>
      </ul>
    </li>
    <li><a href="how-we-work.html" data-p="how">How We Work</a></li>
    <li class="has-sub"><a href="about.html" data-p="about">About</a>
      <ul class="sub">
        <li><a href="about.html">About ARIA</a></li>
        <li><a href="accreditations.html">Accreditations</a></li>
      </ul>
    </li>
    <li><a href="contact.html" data-p="contact" class="btn btn-solid cta">Get in touch</a></li>
  </ul>
</div>`;

const FOOTER = `
<div class="wrap">
  <div class="fgrid">
    <div>
      <img src="assets/logo-negative-tight.png" alt="ARIA Construction Group">
      <p style="font-size:.92rem;max-width:34ch">High-quality construction for insurance, commercial and residential clients. A personal service you can trust.</p>
    </div>
    <div><h4>Site Map</h4><ul>
      <li><a href="how-we-work.html">How We Work</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Enquire</a></li>
    </ul></div>
    <div><h4>Sectors</h4><ul>
      <li><a href="insurance.html">Insurance</a></li>
      <li><a href="commercial-sector.html">Commercial</a></li>
      <li><a href="residential-sector.html">Residential</a></li>
      <li><a href="accreditations.html">Accreditations</a></li>
    </ul></div>
    <div><h4>Contact</h4><ul>
      <li><a href="tel:02081910961">0208 191 0961</a></li>
      <li><a href="mailto:info@ariacontractors.co.uk">info@ariacontractors.co.uk</a></li>
      <li><a>191 Buckingham Drive, Luton, LU2 9RE</a></li>
    </ul></div>
  </div>
  <div class="fbar">
    <span>© 2026 Aria Construction Group Ltd. Company No. 14818225 · VAT 468 2466 88</span>
    <span>Registered in England</span>
  </div>
</div>`;

document.addEventListener('DOMContentLoaded',()=>{
  const h=document.querySelector('header'), f=document.querySelector('footer');
  if(h){h.innerHTML=NAV;
    const cur=document.body.dataset.page;
    const a=h.querySelector('[data-p="'+cur+'"]'); if(a)a.classList.add('active');
  }
  if(f)f.innerHTML=FOOTER;

  const b=document.querySelector('.burger'), m=document.querySelector('.nav ul');
  if(b)b.addEventListener('click',()=>m.classList.toggle('open'));

  const els=document.querySelectorAll('.reveal');
  const io=new IntersectionObserver(es=>{
    es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})
  },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  els.forEach(el=>io.observe(el));
  setTimeout(()=>els.forEach(el=>el.classList.add('in')),4000);

  const frm=document.querySelector('form[name="contact"]');
  if(frm)frm.addEventListener('submit',()=>{const btn=frm.querySelector('button[type="submit"]');if(btn)btn.textContent='Sending…';});
});
