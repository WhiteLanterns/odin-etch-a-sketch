const gridContainer = document.querySelector('#grid-container')
const genGrid = document.querySelector('#gen-grid')
const clearGrid = document.querySelector('#clear-grid')


genGrid.addEventListener('click', (v) => {
    v = parseInt(prompt("What size grid would you like? (Max 100x100)"))
    if (v <= 100) {
        for (let i = 0; i < v; i++) {
            let row = document.createElement("div");
            row.className = "row";
            for (var j = 1; j <= v; j++) {
                let cell = document.createElement("div");
                cell.className = "grid-square";
                row.appendChild(cell);
                cell.addEventListener('click', () => {
                    cell.style.background = '#000000';
                    cell.style.borderColor = '#FFFFFF';
                })
            }
        gridContainer.append(row);
        }
    } else {
        alert("The maximum size is 100x100")
    }
})

clearGrid.addEventListener('click', () => {
    gridContainer.textContent = '';
})