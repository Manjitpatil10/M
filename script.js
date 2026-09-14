const body=document.body, themeToggle=document.getElementById('themeToggle');
if(localStorage.getItem('theme')==='dark'){body.classList.add('dark');themeToggle.textContent='☀️'}
themeToggle?.addEventListener('click',()=>{body.classList.toggle('dark');const d=body.classList.contains('dark');themeToggle.textContent=d?'☀️':'🌙';localStorage.setItem('theme',d?'dark':'light')});
const menuToggle=document.getElementById('menuToggle'), mainNav=document.getElementById('mainNav');
menuToggle?.addEventListener('click',()=>mainNav.classList.toggle('open'));
mainNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mainNav.classList.remove('open')));
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
const s=document.getElementById('searchInput'), cards=[...document.querySelectorAll('.searchable')], no=document.getElementById('noResults');
s?.addEventListener('input',()=>{const q=s.value.toLowerCase().trim();let v=0;cards.forEach(c=>{const m=c.innerText.toLowerCase().includes(q);c.style.display=m?'block':'none';if(m)v++});if(no)no.style.display=v?'none':'block'});
