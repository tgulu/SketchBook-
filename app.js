const container = document.querySelector("#container");
const box = document.createElement("div");
box.style.border = "1px solid black";
box.style.backgroundColor = "pink";
box.style.height = "900px";
box.style.width = "900px";
box.style.position = "absolute";
box.style.top = "200px";
box.style.right = "650px";

container.appendChild(box);

// creates random colors for the background
const newColor = () => {
  const newNum = () => Math.floor(Math.random() * 255);
  return `rgb(${newNum()},${newNum()},${newNum()})`;
};

const body = document.querySelector("body");
body.style.backgroundColor = "rgb(255, 69, 0)";

const switcher = () => {
  return setInterval(() => {
    const body = document.querySelector("body");
    body.style.backgroundColor = newColor();
  }, 1000);
};

// switcher();

// make a big box
// make a 4 bottons next to the box
