let itemsToRemove = document.getElementsByClassName("row");

//loop 256 times, create divs, adding them grid-item class and add them into the grid-container
function initGrid(numCells){
    const startBtn = document.querySelector("#start");
    startBtn.addEventListener("click", () => {
        if(itemsToRemove.length === 0){
            numCells = prompt("What should the width of the table be?");
            if (0 <= numCells <= 100){
                for(i = 0; i < numCells; i++){
                    const initGridItemRow = document.createElement("div");
                    const gridContainer = document.querySelector("#grid-container");
                        
                    initGridItemRow.classList.add("row");
                    gridContainer.appendChild(initGridItemRow);
                    for( let j = 0; j<numCells;j++){
                        const initGridItemCol = document.createElement("div");
                        initGridItemCol.classList.add("col");
                        initGridItemRow.appendChild(initGridItemCol);
                    }
                }
            }else alert("Enter a value between 0 and 100 please!") 
        }else {
            removeGrids();
            numCells = prompt("What should the width of the table be?");
            if(0 <= numCells <= 100){
                for(i = 0; i < numCells; i++){
                    const initGridItemRow = document.createElement("div");
                    const gridContainer = document.querySelector("#grid-container");
                            
                    initGridItemRow.classList.add("row");
                    gridContainer.appendChild(initGridItemRow);
                    for( let j = 0; j<numCells;j++){
                        const initGridItemCol = document.createElement("div");
                        initGridItemCol.classList.add("col");
                        initGridItemRow.appendChild(initGridItemCol);
                    }
                }
            }else{
                alert("Enter a value between 0 and 100 please!")
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


    




