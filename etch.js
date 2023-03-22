//loop 256 times, create divs, adding them grid-item class and add them into the grid-container
function initGrid(numCells){
    const startBtn = document.querySelector("#start");
    startBtn.addEventListener("click", () => {
        numCells = prompt("What should the width of the table be?");
        for(i = 1; i <= numCells; i++){
            const initGridItem = document.createElement("div");
            const gridContainer = document.querySelector("#grid-container");
                
            initGridItem.classList.add("grid-item");
            gridContainer.appendChild(initGridItem);
        }
    })
}
initGrid();

const allGridItem = document.querySelectorAll("div");
    
allGridItem.forEach((grid) => {
    grid.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "grey";
    })
})


    




