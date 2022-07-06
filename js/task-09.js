// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");


btn.addEventListener('click', handleClick );


function handleClick() {
  let color = getRandomHexColor();
  body.setAttribute('style', `background-color: ${color}`)
  span.textContent = color;
}