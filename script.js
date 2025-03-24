const container = document.querySelector("#container");
const colorPicker = document.querySelector("#colorPicker");
const colorMode = document.querySelector("#color");
const rainbowMode = document.querySelector("#rainbow");
const newGrid = document.querySelector("#new");
const clearGrid = document.querySelector("#clear");

let isDrawing = false;
let curMode = "color";
setActiveColor(colorMode);
let currentColor = colorPicker.value;

document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);
colorMode.addEventListener("click", () => {
    curMode = "color";
    setActiveColor(colorMode);
});
rainbowMode.addEventListener("click", () => { 
    curMode = "rainbow";
    setActiveColor(rainbowMode);
});

createGrid(16);

colorPicker.addEventListener("input", (e) => {
    currentColor = e.target.value;
});

newGrid.addEventListener("click", () => {
    let count = prompt("Please enter new desired Grid Size! (Up to 100)");
    if (count > 0 && count <= 100) {
        createGrid(count);
    }
    else {
        alert("Please re-enter a valid sizing");
    }
});

clearGrid.addEventListener("click", () => {
    createGrid(16);
});

function setActiveColor(activeBtn) {
    const buttons = [colorMode, rainbowMode];
    buttons.forEach(btn => {
        btn.style.color = btn == activeBtn ? "red" : "white";
    });
}

function getColor() {
    if (curMode === "color") {
        return currentColor;
    } else if (curMode === "rainbow") {
        return getRandomColor();
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(count) {
    container.innerHTML = "";

    const containerSize = 560;
    const squareSize = containerSize / count;

    for (let i = 0; i < count * count; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.backgroundColor = "white";
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    
        square.addEventListener("mousedown", (e) => {
            e.target.style.backgroundColor = getColor();
        });
    
        square.addEventListener("mouseover", (e) => {
            if (isDrawing) {
                e.target.style.backgroundColor = getColor();
            }
        });

        container.appendChild(square);
    } 
}








