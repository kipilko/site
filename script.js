console.log ("JS works");

const burger = document.GetElementById(`burger`);
const nav = document.querySelector(`nav`);

burger.addEventListener(`click`, () => {
    nav.classList.toggle(`active`);
});

if (nav.classList.contains(`active`)) {
    burger.TextContent = `✕`;
} else {
    burger.TextContent = `☰`;
}