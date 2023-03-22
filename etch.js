let itemsToRemove = document.getElementsByClassName("row");

//loop X times, create divs, adding them grid-item class and add them into the grid-container
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
//function for removing grids
function removeGrids(){ 
    let item;
    while(item = itemsToRemove[0]){
        item.parentNode.removeChild(item);
        
    }    
}

//coloring divs

let toggleRainbow = false;
const allGridItem = document.querySelectorAll("div");

allGridItem.forEach((grid) => {
    grid.addEventListener("mouseover", e => {
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);

        if(toggleRainbow === false){
            e.target.style.backgroundColor = "black";  
            
        } else{
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            
        }   
    })
});
//button to toggle random colors
const rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", () =>{
    rainbowButton.style.backgroundColor="yellow";
    console.log(toggleRainbow); 
    if (toggleRainbow === false){
        toggleRainbow = true;
        rainbowButton.style.backgroundColor="yellow";
    }else{
        toggleRainbow = false;
        rainbowButton.style.backgroundColor="rgb(166, 241, 247)";    
    }
})

//remove grid
const removeButton = document.querySelector("#clear");

removeButton.addEventListener("click", () =>{
    removeGrids();
})

const showGridButton = document.querySelector("#grid");
let toGridItems = document.getElementsByClassName("col");
let isGridToggle = false;
showGridButton.addEventListener("click",()=>{
    if(isGridToggle === false){
        isGridToggle = true;
        showGridButton.style.backgroundColor="yellow";
        for(let e of toGridItems){
            e.setAttribute("style","border: 1px solid black");
        }
    }else {
        isGridToggle = false;
        showGridButton.style.backgroundColor="rgb(166, 241, 247)";
        for(let e of toGridItems){
            e.setAttribute("style","border: none");
        }
    }
    
    
        
})


    




