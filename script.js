    const gridProperties = document.getElementById("sketch");
    const grid = document.querySelector(".container");
    let gridSizeRows = gridProperties.offsetHeight;
    let gridSizeColumns = gridProperties.offsetWidth;
    let gridSizeDot = 20;
    grid.style["grid-auto-rows"] = gridSizeDot + "px";
    grid.style["grid-auto-columns"] = gridSizeDot + "px";

    /*function changeSize() {
        let newSize = prompt('Please inform a even number between 8 and 100 to change the pixel size:');
        if (newSize == gridSizeDot || newSize == null) {
            alert("Nothing will change, the new size is the same as the old or you didn't type any number.");
        } else if (newSize > 100 || newSize < 8) {
            alert("The new pixel size must be a number between 8 and 100! Please Try again.");
        } else {
            resetGrid();
            gridSizeDot = newSize;
            recreateDivs(gridSizeRows, gridSizeColumns, gridSizeDot);
        };
    };*/
    
    function resetGrid() {
        for (let i = 1; i < gridSizeRows/gridSizeDot; i++) {
            for (let j = 1; j < gridSizeColumns/gridSizeDot; j++) {
                let selectedDiv = document.getElementById("dot" + i + "-" + j);
                selectedDiv.className = 'childs';
            };
        };
    };

    const toAdd = document.createDocumentFragment();
    function createDivs(rowValue, columnValue, divider){
        for (let i = 1; i < rowValue/divider; i++) {
            for (let j = 1; j < columnValue/divider; j++) {
                let newDiv = document.createElement('div');
                newDiv.className = "childs";
                newDiv.id = "dot" + i + "-" + j;
                newDiv.style.gridRowStart = i;
                newDiv.style.gridRowEnd = i;
                newDiv.style.gridColumnStart = j;
                newDiv.style.gridColumnEnd = j;
                newDiv.addEventListener('mouseover', (e) => {
                    newDiv.className = "childsblack";
                });
                toAdd.appendChild(newDiv);
                
            };
        };
        grid.append(toAdd);
    };
    createDivs(gridSizeRows, gridSizeColumns, gridSizeDot);
