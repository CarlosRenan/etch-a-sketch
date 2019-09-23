const gridProperties = document.getElementById("sketch");
const grid = document.querySelector(".container");
const gridSizeRows = gridProperties.offsetHeight-6;
const gridSizeColumns = gridProperties.offsetWidth-6;
let size = 20;

//button functions

function backToDefaults() {
    size = 20;
    clearGrid();
    createDivs(gridSizeRows, gridSizeColumns, size);
    justBlack(gridSizeRows, gridSizeColumns, size) //change when setup the other styles
    document.getElementById("style1").checked = true; 
};

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    };
}

function resetGrid() {
    clearGrid();
    createDivs(gridSizeRows, gridSizeColumns, size);
    radioButtonChecker(); //change when setup the other styles
    
};

function changeSize() {
    let oldSize = size;
    size = prompt('Please inform a even number between 8 and 100 to change the pixel size:');
    if (size == oldSize || size == null) {
        alert("Nothing will change, the new size is the same as the old or you didn't type any number.");
        size = oldSize;
    } else if (size > 100 || size < 8) {
        alert("The new pixel size must be a number between 8 and 100! Please Try again.");
        size = oldSize;
    } else {
        clearGrid();
        createDivs(gridSizeRows, gridSizeColumns, size);
        radioButtonChecker();
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
            newDiv.id = "dot" + i + "-" + j;
            newDiv.className = "childs";
            newDiv.style.backgroundColor = "rgba(226, 224, 224, 1)";
            newDiv.style.gridRowStart = i;
            newDiv.style.gridRowEnd = i;
            newDiv.style.gridColumnStart = j;
            newDiv.style.gridColumnEnd = j;
            toAdd.appendChild(newDiv);   
        };
    };
    grid.append(toAdd);
};

// pixel styles
function justBlack(x, y, z) {
    clearGrid();
    createDivs(gridSizeRows, gridSizeColumns, size);
    for (let i = 1; i <= x/z; i++) {
        for (let j = 1; j <= y/z; j++) {
            let getDiv = document.getElementById("dot" + i + "-" + j);
            getDiv.addEventListener('mouseover', (e) => {
                getDiv.style.backgroundColor = "rgba(0, 0, 0, 1)";
                getDiv.classList.remove("childsop");
            });
        };
    };
};

function gradualBlack(x, y, z) {
    clearGrid();
    createDivs(gridSizeRows, gridSizeColumns, size);
    for (let i = 1; i <= x/z; i++) {
        for (let j = 1; j <= y/z; j++) {
            let getDiv = document.getElementById("dot" + i + "-" + j);
            getDiv.addEventListener('mouseover', (e) => {
                getDiv.style.backgroundColor = "rgba(0, 0, 0, 1)";
                getDiv.className = "childsop";
                let opacity = getDiv.style.opacity;
                getDiv.style.opacity = opacity ? (parseFloat(opacity) + 0.1) : 0.2;
            });
        };
    };
};

function getRandomColor(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColors(x, y, z) {
    clearGrid();
    createDivs(gridSizeRows, gridSizeColumns, size);
    for (let i = 1; i <= x/z; i++) {
        for (let j = 1; j <= y/z; j++) {
            let getDiv = document.getElementById("dot" + i + "-" + j);
            let r = getRandomColor(0, 255);
            let g = getRandomColor(0, 255);
            let b = getRandomColor(0, 255);
            getDiv.addEventListener('mouseover', (e) => {
                getDiv.style.backgroundColor = "rgba(" + r + "," + g + "," + b + ", 1)";
                getDiv.className = "childs";
            });
        };
    };
};

function radioButtonChecker() {
    if (document.getElementById("style1").checked) {
        justBlack(gridSizeRows, gridSizeColumns, size);
    } else if (document.getElementById("style2").checked) {
        gradualBlack(gridSizeRows, gridSizeColumns, size);
    } else if (document.getElementById("style3").checked) {
        randomColors(gridSizeRows, gridSizeColumns, size);
    };
};

createDivs(gridSizeRows, gridSizeColumns, size);
justBlack(gridSizeRows, gridSizeColumns, size);