const validationInput = document.getElementById("validation-input");

const validate = (event) => {
  if (validationInput.value.length == 6) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
};

validationInput.setAttribute("autocomplete", "off");
validationInput.focus();
validationInput.addEventListener("blur", validate);
