const grid = document.getElementById('grid');
function createGrid() {
    for (i=1;i<=256;i++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'grid-element';
        grid.appendChild(gridDiv);
    }
}
createGrid();