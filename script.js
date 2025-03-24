let isDrawing = false;

const container = document.querySelector("#container");
const newGrid = document.querySelector("#new");
const clearGrid = document.querySelector("#clear");

document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);

createGrid(16);

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
            e.target.style.backgroundColor = "purple";
        });
    
        square.addEventListener("mouseover", (e) => {
            if (isDrawing) {
                e.target.style.backgroundColor = "purple";
            }
        });

        container.appendChild(square);
    } 
}







