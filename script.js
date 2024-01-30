const grid = document.getElementById('grid');
const inputButton = document.getElementById('input');
const rainbowButton = document.getElementById('rainbow');
const blackButton = document.getElementById('black');
const effectButton = document.getElementById('darkening');

let colorState = 'blue';
let rainbowState = false;

function createGrid(x) {
    for (i=1;i<=x*x;i++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'grid-element';
        gridDiv.addEventListener("mouseover",()=> colorDiv(gridDiv,colorState));
        gridDiv.style.height = `${640/x}px`;
        gridDiv.style.width = `${640/x}px`
        grid.appendChild(gridDiv);
    }
}

function colorDiv(e,colorState) {
    if (rainbowState) {
        let red = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);
        e.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
    else e.style.backgroundColor = colorState;
}

createGrid(16);

function input() {
    let input = prompt('Select number of squares per side: ');
    if (input >100) {
        alert('Please prompt numbers less than 100')
        input = '';
    }
    return input;
}

inputButton.addEventListener('click', () => {
    let numberOfSqrPerSide = input();
    if (numberOfSqrPerSide !== null && numberOfSqrPerSide != '') {
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild);
        }
        createGrid(numberOfSqrPerSide);
    }
});

rainbowButton.addEventListener('click',()=> {
    if (rainbowState) rainbowState=false;
    else rainbowState=true;
    alert(rainbowState);
})

blackButton.addEventListener('click',()=> {
    colorState = 'black';
});