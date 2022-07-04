const form = document.querySelector(".login-form");
const message = "Всі поля повинні бути заповнені!"


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert(message);
    }

    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}
