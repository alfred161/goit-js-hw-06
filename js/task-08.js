const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
    return;
  }

  console.log(`Login: ${email}, Password: ${password}`);
  form.reset();
};

form.addEventListener("submit", handleSubmit);
