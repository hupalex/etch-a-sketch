function initGrid(){
    for(i = 1; i <= 256; i++){
        const gridItem = document.createElement("div");
        const gridContainer = document.querySelector("#grid-container");
        
        gridItem.classList.add("grid-item");
        
        gridContainer.appendChild(gridItem);
    }

    

        

}
initGrid();