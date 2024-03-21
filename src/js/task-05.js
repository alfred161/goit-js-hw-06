const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

const setName = (event) => {
  nameOutput.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
};

nameInput.setAttribute("autocomplete", "off");
nameInput.focus();
nameInput.addEventListener("keyup", setName);
