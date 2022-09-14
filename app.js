const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

loginButton.addEventListener("submit", onLoginSubmit);