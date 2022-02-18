const sketchPad = document.querySelector('#container');

function notePad(gridSize) {
  for (let i = 0; i < (gridSize * gridSize); i++) {
    const measurement = (960 / gridSize);
    const grid = document.createElement('div');
    grid.classList.add('square');
    grid.style.width = `${measurement}px`;
    grid.style.heigth = `${measurement}px`;
    grid.style.flex

    sketchPad.appendChild(grid);
  }
};

function mouseOver() {
  document.getElementById("demo").style.color = "red";
}

notePad(16);