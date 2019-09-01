const gridProperties = document.getElementById("sketch");
const grid = document.querySelector(".container");
let gridSizeRows = gridProperties.offsetHeight-6;
let gridSizeColumns = gridProperties.offsetWidth-6;
let size = 20;

//button functions

function backToDefaults() {
    size = 20;
    resetGrid();
    createDivs(gridSizeRows, gridSizeColumns, size);
    document.getElementById("style1").checked = true; 
};

function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    };
    createDivs(gridSizeRows, gridSizeColumns, size);
};

function changeSize() {
    let oldSize = size;
    size = prompt('Please inform a even number between 8 and 100 to change the pixel size:');
    if (size == oldSize || size == null) {
        alert("Nothing will change, the new size is the same as the old or you didn't type any number.");
    } else if (size > 100 || size < 8) {
        alert("The new pixel size must be a number between 8 and 100! Please Try again.");
    } else {
        resetGrid()
        createDivs(gridSizeRows, gridSizeColumns, size);
    };
};
  
// end of button functions

// grid pad creation

const toAdd = document.createDocumentFragment();
function createDivs(rowValue, columnValue, size){
    for (let i = 1; i <= rowValue/size; i++) {
        for (let j = 1; j <= columnValue/size; j++) {
            let newDiv = document.createElement('div');
            grid.style["grid-template-rows"] = size + "px";
            grid.style["grid-template-columns"] = size + "px";
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
createDivs(gridSizeRows, gridSizeColumns, size);

// pad styles