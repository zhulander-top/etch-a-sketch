const container = document.querySelector(".container");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    let size = prompt("Please enter a new grid size(At most 100)");
    size = parseInt(size);
    while (!Number.isInteger(size) || size > 100){
        size = parseInt(prompt("Invalid, try again"));

    }
    makeGrid(size);
});


makeGrid(16);
function makeGrid(size){
    container.innerHTML = "";
    const cellSize = 100/ size;
    for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.style.width = `${cellSize}%`;
    cell.style.height = `${cellSize}%`;
    cell.dataset.hoverCount = "0";
    cell.dataset.color = "";
    cell.addEventListener("mouseover", () => {
        let count = parseInt(cell.dataset.hoverCount);
        count = Math.min(count + 1, 10); 
        cell.dataset.hoverCount = count;
  
        if (!cell.dataset.color) {
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
          cell.dataset.color = `rgb(${r}, ${g}, ${b})`;
        }
  
        const baseColor = cell.dataset.color;
        const opacity = count / 10;
        cell.style.backgroundColor = baseColor.replace("rgb", "rgba").replace(")", `, ${opacity})`);
      });
    container.appendChild(cell);
    }
}