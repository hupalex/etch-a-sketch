let itemsToRemove = document.getElementsByClassName("grid-item");

//loop 256 times, create divs, adding them grid-item class and add them into the grid-container
function initGrid(numCells){
    const startBtn = document.querySelector("#start");
    startBtn.addEventListener("click", () => {
        console.log(itemsToRemove);

        if(itemsToRemove.length === 0){
            numCells = prompt("What should the width of the table be?");
 
            for(i = 0; i <= numCells * numCells; i++){
                const initGridItem = document.createElement("div");
                const gridContainer = document.querySelector("#grid-container");
                    
                initGridItem.classList.add("grid-item");
                gridContainer.appendChild(initGridItem);
            }
        }else {
            removeGrids();
            numCells = prompt("What should the width of the table be?");
            for(i = 0; i <= numCells*numCells; i++){
                const initGridItem = document.createElement("div");
                const gridContainer = document.querySelector("#grid-container");
                    
                initGridItem.classList.add("grid-item");
                gridContainer.appendChild(initGridItem);
            }
        }       
    })
    
}
initGrid();

function removeGrids(){ 
    let item;
    while(item = itemsToRemove[0]){
        item.parentNode.removeChild(item);
        
    }    
}

const allGridItem = document.querySelectorAll("div");

allGridItem.forEach((grid) => {
    grid.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "grey";
    })
});


    




