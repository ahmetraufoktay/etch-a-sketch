const grid = document.getElementById('grid');
const button = document.getElementById('input');

function createGrid(x) {
    for (i=1;i<=x*x;i++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'grid-element';
        gridDiv.addEventListener("mouseover",()=> colorDiv(gridDiv));
        gridDiv.style.height = `${640/x}px`;
        gridDiv.style.width = `${640/x}px`
        grid.appendChild(gridDiv);
    }
}

function colorDiv(e) {
    e.style.backgroundColor = 'blue';
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

button.addEventListener('click', () => {
    let numberOfSqrPerSide = input();
    if (numberOfSqrPerSide !== null && numberOfSqrPerSide != '') {
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild);
        }
        createGrid(numberOfSqrPerSide);
    }
});
