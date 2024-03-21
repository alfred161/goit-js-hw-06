const control = document.getElementById("font-size-control");
const text = document.getElementById("text");

const setFontSize = (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
};

control.value = 16;
control.addEventListener("change", setFontSize);
