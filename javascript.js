let gridSize = 16;

function populateGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        gridContainer.appendChild(gridRow);

        for (let j = 0; j < gridSize; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('gridItem');
            gridRow.appendChild(gridItem);
        }
    }
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function sizeButtonClicked(e) {
    let size = e.target.attributes['data-size'].nodeValue;
    if (!size) return;

    gridSize = size;
    
    clearGrid();
    populateGrid(gridSize);
}

function clrButtonClicked(e) {
    clearGrid();
    populateGrid(gridSize);
}

const sizeButtons = Array.from(document.querySelectorAll('.gridSize'));
const clrButton = document.querySelector('.clear');
const gridContainer = document.querySelector('.gridContainer');

sizeButtons.forEach(key => key.addEventListener('click', sizeButtonClicked));
clrButton.addEventListener('click', clrButtonClicked);

console.log();
