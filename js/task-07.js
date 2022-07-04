const sizeControl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

sizeControl.addEventListener('input', onChangeSize);

textSize.style.fontSize = sizeControl.value + 'px';

function onChangeSize() {
    textSize.style.fontSize = sizeControl.value + 'px'
};
