// Select the container and body elements
const container = document.querySelector("#container");
const body = document.querySelector("body");
body.style.backgroundColor = "rgb(255, 69, 40)";

// Create the box element
const box = document.createElement("div");
box.className = "box";
// box.style.border = "1px solid black";
// box.style.height = "900px";
// box.style.width = "900px";
// box.style.position = "absolute";
// box.style.top = "200px";
// box.style.right = "650px";

// Append the box to the container
container.appendChild(box);

// Function to create boxes
function createBoxes(numBox) {
  for (let i = 0; i < numBox; i++) {
    let row = document.createElement("div");
    for (let j = 0; j < numBox; j++) {
      let square = document.createElement("div");
      square.className = "minibox";
      row.appendChild(square);
    }
    box.appendChild(row);
  }
}

// Ensure the boxes are created once the DOM is loaded
window.onload = function () {
  createBoxes(4); // Creates 50 boxes
};
