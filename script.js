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

function reset() {
  const gridSize = prompt("Input desired grid size number between 16-100", 16);
  if(gridSize < 16) {//this covers cancel
    const refresh = document.querySelector('.container');
    sketch.removeChild(refresh);
    notePad();
    console.log(gridSize);
    console.log(typeof(gridSize));
  } else if(gridSize > 100) {
    const refresh = document.querySelector('.container');
    sketch.removeChild(refresh);
    notePad(100);
    console.log(Number(gridSize));
    console.log(typeof(gridSize));
  }/* else if (Number(gridSize) == NaN) {//this is keeping it from disappearing
    const refresh = document.querySelector('.container');
    sketch.removeChild(refresh);
    notePad(16);
    console.log(gridSize);
    console.log(typeof(gridSize));
  }*/ else {
    const refresh = document.querySelector('.container');
    sketch.removeChild(refresh);
    notePad(gridSize);
    console.log(gridSize);
    console.log(typeof(gridSize));
    console.log(Number(gridSize));
  }
}

//not accept over 100 and must accept a number
//make it mousedown and mouseenter?