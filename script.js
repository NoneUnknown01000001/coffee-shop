const load = document.getElementById('loading');
const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menuList = document.getElementById('menuList');
const navItem1 = document.getElementById('navItem1');
const navItem2 = document.getElementById('navItem2');
const navItem3 = document.getElementById('navItem3');
const navItem4 = document.getElementById('navItem4');
const art1 = document.getElementById('todaySpecial');
const art2 = document.getElementById('dailyMenu');
const art3 = document.getElementById('popularItems');
const art4 = document.getElementById('ourMenu');

window.addEventListener('load', () => {
  const loadTime = 0;
  const loader = () => {
    load.classList.add('load-end');
  };
  setTimeout(loader, loadTime);
});
menu2.addEventListener('click', () => {
  function openModel() {
    menuList.style.display = 'grid';
    menu2.style.display = 'none';
    menu1.style.display = 'block';
  }
  openModel();
});
menu1.addEventListener('click', () => {
  function closeModel() {
    menuList.style.display = 'none';
    menu2.style.display = 'block';
    menu1.style.display = 'none';
  }
  closeModel();
});

const section = document.querySelectorAll('section');

const scrollAnimition = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // when you enter the section
        entry.target.classList.add('active-scroll');
      } else {
        // when you close the section
        entry.target.classList.remove('active-scroll');
      }
    });
  },
  {
    threshold: 0.2,
  },
);

section.forEach((sec) => scrollAnimition.observe(sec));

navItem1.addEventListener('click', () => {
  art1.style.display = 'block';
  art2.style.display = 'block';
  art3.style.display = 'block';
  art4.style.display = 'block';
});
navItem2.addEventListener('click', () => {
  art1.style.display = 'block';
  art2.style.display = 'none';
  art3.style.display = 'none';
  art4.style.display = 'none';
});
navItem3.addEventListener('click', () => {
  art1.style.display = 'none';
  art2.style.display = 'none';
  art3.style.display = 'none';
  art4.style.display = 'block';
});
navItem4.addEventListener('click', () => {
  art1.style.display = 'none';
  art2.style.display = 'none';
  art3.style.display = 'none';
  art4.style.display = 'none';
});
