
const boxes = document.querySelector('#boxes');
const input = document.querySelector('#controls input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');

function getAmount() {
  let amount = input.value;
  let normalSize = 30;

  for (let i = 0; i < amount; i++) {
    let size = normalSize + i * 10;
    const element = document.createElement('div');
    element.style.cssText =
      `width: ${size}px;
            height: ${size}px;
            background-color: rgba( ${getRandomInt()} , 
                                    ${getRandomInt()} , 
                                    ${getRandomInt()} )`;
    boxes.appendChild(element);
  };
}

function getRandomInt() {
  return Math.floor(Math.random() * 256);
};


function destroyBoxes() {
  boxes.innerHTML = "";
};

create.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);
