const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

const changeColor = (event) => {
  const backgroundColor = getRandomHexColor();
  body.style.backgroundColor = backgroundColor;
  colorValue.textContent = backgroundColor;
};

changeColorBtn.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
