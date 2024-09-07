const container = document.querySelector("#container");
const box = document.createElement("div");
const rbgbtn = document.createElement("button");
const btn = document.createElement("button");

box.style.border = "1px solid black";
box.style.height = "900px";
box.style.width = "900px";
box.style.position = "absolute";
box.style.top = "200px";
box.style.right = "650px";

const btnNames = ["Grid", "Black", "RGB", "Eraser"];
const buttons = [];

btnNames.forEach((name, index) => {
  const btn = document.createElement("button");
  btn.textContent = name;

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

// creates random colors for the background
const newColor = () => {
  const newNum = () => Math.floor(Math.random() * 255);
  return `rgb(${newNum()},${newNum()},${newNum()})`;
};

const body = document.querySelector("body");
body.style.backgroundColor = "rgb(255, 69, 0)";

const switcher = () => {
  return setInterval(() => {
    box.style.backgroundColor = newColor();
  }, 100000);
};

rbgbtn.addEventListener("click", function (e) {
  btnNames[3].style.backgroundColor = newColor();
  switcher();
});

container.appendChild(box);
container.appendChild(rbgbtn);

// make a big box
// make a 4 bottons next to the box
