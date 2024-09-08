// Select the container and body elements
const container = document.querySelector("#container");
const body = document.querySelector("body");
body.style.backgroundColor = "rgb(255, 69, 40)";

// Create the box element
const box = document.createElement("div");
box.className = "box";
container.appendChild(box); // Append the box to the container initially

const resize = (numBox) => {
  // Calculate container dimensions

  const containerHeight = container.clientHeight;
  const containerWidth = container.clientWidth;

  // Calculate the margins and dimensions for the squares
  const minibox = document.querySelector(".minibox");
  if (minibox) {
    const miniboxOuterWidth =
      minibox.offsetWidth +
      (parseFloat(getComputedStyle(minibox).marginLeft) +
        parseFloat(getComputedStyle(minibox).marginRight));

    let miniboxMargins = miniboxOuterWidth * numBox;
    let miniboxHeight = (containerHeight - miniboxMargins) / numBox;
    let miniboxWidth = (containerWidth - miniboxMargins) / numBox;

    // Set the height and width of each square
    document.querySelectorAll(".minibox").forEach(function (minibox) {
      minibox.style.height = miniboxHeight + "px";
      minibox.style.width = miniboxWidth + "px";
    });
  }
};

// Function to create boxes
function createBoxes(numBox) {
  box.innerHTML = ""; // Clear previous grid content
  for (let i = 0; i < numBox; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < numBox; j++) {
      const square = document.createElement("div");
      square.className = "minibox";
      row.appendChild(square);
    }
    box.appendChild(row);
  }
  resize(numBox); // Call resize after creating the boxes
}

const userButton = document.createElement("button");
userButton.className = "button";
userButton.innerText = "Create Grid";

// Add an event listener for the button click
userButton.addEventListener("click", () => {
  let userInput;

  // Use a while loop to keep asking for valid input
  while (true) {
    userInput = prompt(
      "How many squares do you want for the grid? Pick between 1 and 28."
    );
    userInput = parseInt(userInput);

    // Check if the input is valid
    if (!isNaN(userInput) && userInput >= 1 && userInput <= 28) {
      console.log(`You selected ${userInput} squares.`);
      createBoxes(userInput); // Create grid with valid userInput
      break; // Exit the loop once valid input is received
    } else {
      alert("Please enter a valid number between 1 and 28.");
    }
  }
});

document.body.append(userButton);
