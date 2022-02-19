const sketch = document.querySelector('#sketch');
const clear = document.querySelector('#btnClear');

clear.addEventListener('click', reload);

notePad();

function notePad(gridSize = 16) {
  const sketchPad = document.createElement('div');
  sketchPad.classList.add('container');
  sketch.appendChild(sketchPad);

  for (let i = 0; i < (gridSize * gridSize); i++) {
    const measurement = (960 / gridSize);

    const square = document.createElement('div');

    square.addEventListener('mouseenter', draw);

    square.classList.add('square');
    square.style.width = `${measurement}px`;
    square.style.height = `${measurement}px`;

    sketchPad.appendChild(square);
  }
}

function draw(e) {
  e.target.style.backgroundColor = "black";
}

function reload() {
  const gridSize = prompt("How many?", 16);
  if (gridSize != null) {//not working to keep it from deleting if there is null value
    const refresh = document.querySelector('.container');
    sketch.removeChild(refresh);
    notePad(gridSize);
  }
}

/*
const gridSize = prompt("How many?", 16);
if (gridSize != null) {
  notePad(gridSize);
}
*/