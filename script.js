const container = document.querySelector("#container");
const newGrid = document.querySelector("#new");
const clearGrid = document.querySelector("#clear");

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.style.backgroundColor = "white";
    square.classList.add("square");
    container.appendChild(square);
}

const allSquares = document.querySelectorAll(".square");

allSquares.forEach(square => {
    square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "purple";
    });
});

newGrid.addEventListener("click", () => {
    let count = prompt("Please enter new desired Grid Size! (Up to 100)");
    if (count > 0 && count <= 100) {
        newGridSize(count);
    }
    else {
        alert("Please re-enter a valid sizing");
    }
});

function newGridSize(count) {
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
    }

    const allNewSquares = document.querySelectorAll(".square");

    allNewSquares.forEach(square => {
        square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "purple";
        });
    });
}

function resetGrid() {
    newGridSize(16);
}

clearGrid.addEventListener("click", () => {
    resetGrid();
});




