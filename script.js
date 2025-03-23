const container = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.style.backgroundColor = "pink";
    square.classList.add("square");
    container.appendChild(square);
}

const allSquares = document.querySelectorAll(".square");

allSquares.forEach(square => {
    square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "purple";
    });
});

