function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");


btn.addEventListener('click', handleClick );

function handleClick() {
  body.style.background = getRandomHexColor();
}
