const grid = document.getElementById('grid'); // Container

//Buttons
const inputButton = document.getElementById('input'); 
const rainbowButton = document.getElementById('rainbow');
const blackButton = document.getElementById('black');
const effectButton = document.getElementById('darkening');
const clearButton = document.getElementById('clear');

let colorState = 'black'; 
let rainbowState = false; //For rainbow palette
let darkeningState = false; //For darkening;

function createGrid(x) {
    for (i=1;i<=x*x;i++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'grid-element';
        gridDiv.addEventListener("mouseover",()=> colorDiv(gridDiv,colorState));
        gridDiv.addEventListener("mouseover",()=>darkening(gridDiv));
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
    else if (darkeningState) {
        colorState='rgb(220,199,160)';
    } else e.style.backgroundColor = colorState;
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
})

blackButton.addEventListener('click',()=> {
    rainbowState = false;
    colorState = 'black';
});
effectButton.addEventListener('click',()=>{
    rainbowState = false;
    if (darkeningState) darkeningState=false;
        else darkeningState=true; 
});
clearButton.addEventListener('click',()=>{
    let children = grid.children;
    for (let i = 0; i < children.length; i++) {
        let gridchild = children[i];
        gridchild.style.backgroundColor = 'wheat';
    }
});

function darkening(gridDiv) {
    if (darkeningState) {
        let gridRgb = window.getComputedStyle(gridDiv).backgroundColor;
        rgb = gridRgb.replace(/[^\d,]/g, '').split(',');
        gridRgb = `rgb(${Math.floor(rgb[0]*9/10)},${Math.floor(rgb[1]*9/10)},${Math.floor(rgb[2]*9/10)})`;
        console.log(gridRgb);
        gridDiv.style.backgroundColor = gridRgb;
    } 
}
