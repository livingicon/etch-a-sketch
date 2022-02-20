const sketch = document.querySelector('#sketch');
const clear = document.querySelector('#btnClear');

clear.addEventListener('click', reset);

notePad();

function notePad(gridSize = 16) {
  const sketchPad = document.createElement('div');
  sketchPad.classList.add('container');
  sketch.appendChild(sketchPad);

  for (let i = 0; i < (gridSize * gridSize); i++) {
    const measurement = (960 / gridSize);
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${measurement}px`;
    square.style.height = `${measurement}px`;
    sketchPad.appendChild(square);
    square.addEventListener('mouseenter', draw);
  } 
}

function draw(e) {
  e.target.style.backgroundColor = "black";
}

function reset() {
  const gridSize = prompt("Input desired canvas size number between 16-100", 16);
  if (isNaN(Number(gridSize)) === true) {
    alert("That won't work. You must enter a number.");
    reset();
  } else if (gridSize < 16) {
    const refresh = document.querySelector('.container');
    sketch.removeChild(refresh);
    notePad();
  } else if(gridSize > 100) {
    const refresh = document.querySelector('.container');
    sketch.removeChild(refresh);
    notePad(100);
  } else {
    const refresh = document.querySelector('.container');
    sketch.removeChild(refresh);
    notePad(gridSize);
  }
}