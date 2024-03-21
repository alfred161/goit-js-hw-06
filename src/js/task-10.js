const boxes = document.getElementById("boxes");
const inputAmount = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

const handleCreate = (event) => {
  const amount = parseInt(inputAmount.value);
  if (amount > 0) {
    createBoxes(parseInt(inputAmount.value));
  } else {
    alert("Please enter amount");
    inputAmount.focus();
  }
};

const destroyBoxes = (event) => {
  boxes.innerHTML = "";
  inputAmount.value = null;
  inputAmount.focus();
};

function createBoxes(amount) {
  const boxCount = boxes.childElementCount;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.style.marginTop = "5px";
    box.style.width = `${30 * (i + boxCount + 1)}px`;
    box.style.height = `${30 * (i + boxCount + 1)}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.append(box);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

inputAmount.focus();
createBtn.addEventListener("click", handleCreate);
destroyBtn.addEventListener("click", destroyBoxes);
