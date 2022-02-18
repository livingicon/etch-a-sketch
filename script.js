const sketchPad = document.querySelector('#container');
const clear = document.querySelector('#btnClear');

clear.addEventListener('click', reload, false);

function notePad(gridSize = 16) {
  for (let i = 0; i < (gridSize * gridSize); i++) {
    const measurement = (960 / gridSize);

    const square = document.createElement('div');

    square.addEventListener('mouseenter', draw);

    square.classList.add('square');
    square.style.width = `${measurement}px`;
    square.style.heigth = `${measurement}px`;

    sketchPad.appendChild(square);
  }
};

notePad();

function draw(e) {
  e.target.style.backgroundColor = "black";
}

function reload() {
  reload = location.reload();
}

//set limit to 100