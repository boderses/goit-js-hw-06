
const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    return alert("Всі поля повинні бути заповнені!");
  } else {
    const userData = {
      email,
      password,
    };
    console.log(userData);
  }

  return form.reset();
};

form.addEventListener("submit", handleSubmit);