// Tabs & mobile nav
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');
tabs.forEach((tab, idx) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => { t.classList.remove('is-active'); t.setAttribute('aria-selected','false'); });
    panels.forEach(p => p.classList.remove('is-active'));
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected','true');
    const panel = document.getElementById(tab.getAttribute('aria-controls'));
    if(panel) panel.classList.add('is-active');
  });
});

// Mobile nav
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('site-nav');
if(navToggle && nav){
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('show');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
