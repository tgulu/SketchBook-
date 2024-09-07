const container = document.querySelector("#container");
const box = document.createElement("div");
// box.style.border = "1px solid black";
// box.style.backgroundColor = "pink";

// container.appendChild(box);

// creates random colors for the background
const newColor = () => {
  //   const newNum = () => Math.floor(Math.random() * 255);
  //   return `rgb(${newNum()},${newNum()},${newNum()})`;
  return `rgb(255, 69, 0)`;
};

const body = document.querySelector("body");
body.style.backgroundColor = newColor();

// const switcher = () => {
//   return setInterval(() => {
//     const body = document.querySelector("body");
//     body.style.backgroundColor = newColor();
//   }, 10000);
// };

// switcher();

// make a big box
// make a 4 bottons next to the box
