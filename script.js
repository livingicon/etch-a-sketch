const sketchPad = document.querySelector('#container');

function notePad(gridSize) {
  for (let i = 0; i < (gridSize * gridSize); i++) {
    const measurement = (960 / gridSize);
    const square = document.createElement('div');
    square.addEventListener('mouseover', mouseOver);

    square.classList.add('square');
    square.style.width = `${measurement}px`;
    square.style.heigth = `${measurement}px`;
    square.style.flex

    sketchPad.appendChild(square);
  }
};

notePad(25);

function mouseOver(e) {
  e.target.style.backgroundColor = "red";
}