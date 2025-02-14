const container = document.querySelector(".container");


for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    container.appendChild(square);
    square.setAttribute("class", "square");  
}


const resizeBtn = document.querySelector(".size");
let gridSize = 0;

resizeBtn.addEventListener("click", () => {
    const size = prompt("Choose a size for the grid");
    if (size < 100) {
        gridSize = size;

        let squares = document.querySelectorAll(".square");
                
        squares.forEach(square => {
            container.removeChild(square);
        });
        
        let newWidth = 960 / gridSize;
        let newHeight = newWidth;

        for (let i = 0; i < gridSize * gridSize; i++) {
            const square = document.createElement("div");
            container.appendChild(square);
            square.setAttribute("class", "square");
            square.style.width = newWidth + "px";
            square.style.height = newHeight + "px";
        }

        squares = document.querySelectorAll(".square");

        squares.forEach(square => {
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "red";
            });
        });
    }

});

document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".square");
    
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "red";
        });
    });
});