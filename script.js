console.log ("JS works");

const burger = document.getElementById('burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');

if (nav.classList.contains('active')) {
    burger.textContent = '✖';
} else {
    burger.textContent = '☰';
}
});