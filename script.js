console.log ("JS works");

const burger = document.getElementById('burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const closemenu = document.getElementById('closemenu');

closemenu.addEventListener('click', () => {
    nav.classList.remove('active');
});