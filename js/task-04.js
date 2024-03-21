const incButton = document.querySelector('[data-action="increment"]');
const decButton = document.querySelector('[data-action="decrement"]');
const value = document.getElementById("value");

let counterValue = 0;

const incValue = (event) => {
  value.innerText = ++counterValue;
};

const decValue = (event) => {
  if (counterValue > 0) {
    value.innerText = --counterValue;
  }
};

incButton.addEventListener("click", incValue);
decButton.addEventListener("click", decValue);
