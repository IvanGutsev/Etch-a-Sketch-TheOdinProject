const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "#333333";

const grid = document.querySelector(".container");
const colorPicker = document.querySelector("#colorPicker");

let size = DEFAULT_SIZE;
const size16 = document.querySelector("#btn16");
const size32 = document.querySelector("#btn32");
const size64 = document.querySelector("#btn64");
size16.addEventListener("click", () => { size = 16; changeSize(size)})
size32.addEventListener("click", () => { size = 32; changeSize(size)})
size64.addEventListener("click", () => { size = 64; changeSize(size)})

generateGrid(size);

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

function changeSize(size) {
    resetGrid();
    generateGrid(size);
}

function resetGrid() {
    grid.innerHTML = "";
}

