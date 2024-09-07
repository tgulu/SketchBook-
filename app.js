const container = document.querySelector("#container");
const box = document.createElement("div");
const rbgbtn = document.createElement("button");
const btn = document.createElement("button");

// Style the big box
box.style.border = "1px solid black";
box.style.height = "900px";
box.style.width = "900px";
box.style.position = "absolute";
box.style.top = "200px";
box.style.right = "650px";

// Create button names and buttons dynamically
const btnNames = ["Grid", "Black", "RGB", "Eraser"];
const buttons = [];

btnNames.forEach((name, index) => {
  const btn = document.createElement("button");
  btn.textContent = name;

  // Style each button
  btn.style.border = "1px solid black";
  btn.style.height = "50px";
  btn.style.width = "200px";
  btn.style.position = "absolute";
  btn.style.borderRadius = "20px";
  btn.style.right = "1600px";
  btn.style.top = `${300 + index * 60}px`; // Position the buttons below each other

  container.append(btn);
  buttons.push(btn);
});

// Function to generate random colors
const newColor = () => {
  const newNum = () => Math.floor(Math.random() * 255);
  return `rgb(${newNum()},${newNum()},${newNum()})`;
};

// Set the initial background color of the body
const body = document.querySelector("body");
body.style.backgroundColor = "rgb(255, 69, 40)";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "RGB") {
      box.style.backgroundColor = newColor();
      setInterval(() => {
        box.style.backgroundColor = newColor();
      }, 1000);
    } else if ((btn, (textContent = "Blakc"))) {
      box.style.backgroundColor = "black";
    } else if (btn.textContent === "Eraser") {
      box.style.backgroundColor = "white";
    }
  });
});

// Function to switch box colors every 10 seconds
const switcher = () => {
  return setInterval(() => {
    box.style.backgroundColor = newColor();
  }, 100000);
};

// Event listener for RGB button to change the box's background color
rbgbtn.addEventListener("click", function (e) {
  box.style.backgroundColor = newColor();
  switcher();
});

// Append the big box and RGB button to the container
container.appendChild(box);
container.appendChild(rbgbtn);

// function to take user input and make size of grind using:

// box.style.backgroundImage =
//      box.style.backgroundImage =
// "linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)";
// box.style.backgroundSize = "20px 20px";
// box.style.backgroundSize = `${size} ${size}`
