const grid = document.getElementById('grid');
const button = document.getElementById('input');

button.addEventListener('click', () => {
    const numberOfSqrPerSide = prompt('Select number of squares per side: ');
    createGrid(numberOfSqrPerSide);
});

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
