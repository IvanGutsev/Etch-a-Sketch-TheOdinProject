const DEFAULT_SIZE = 16;
const DEFAULT_COLOUR = "#333333";

const grid = document.querySelector(".container");
const colorPicker = document.querySelector("#colorPicker");

generateGrid(DEFAULT_SIZE);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function generateGrid(size) {
    for (let row = 0; row < size; row++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let pixel = 0; pixel < size; pixel++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("element");
            gridElement.addEventListener("mouseover", draw)
            row.appendChild(gridElement);
        }
        grid.appendChild(row);
    }
}

function draw(e) {
    if (mouseDown) {
        e.target.style.backgroundColor = colorPicker.value;
    }
}

console.log(mouseDown);