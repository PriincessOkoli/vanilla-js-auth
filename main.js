const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const error = document.getElementById("error");
const pageOne = document.getElementById("page_one");
const pageTwo = document.getElementById("page_two");
let isLoggedIn = false;

function ValidateUser() {
  error.textContent = "";
  const uppercaseAlpha = /[A-Z]+/;
  const specialCharacters = /[!@#$%^&*?]+/;
  if (!email.value) {
    error.textContent = "please valid email address";
  } else if (!password.value) {
    error.textContent = "password required";
  } else if (!uppercaseAlpha.test(password.value)) {
    error.textContent = "Password must contain at least one uppercase letter";
    return;
  } else if (!specialCharacters.test(password.value)) {
    error.textContent = "Password must contain at least one special character";
    return;
  } else if (!confirmPassword.value) {
    error.textContent = "confirmation password required";
  } else if (password.value !== confirmPassword.value) {
    error.textContent = "passwords must be the same";
  } else {
    isLoggedIn = true;
    error.textContent = "";
  }
  error.textContent = "";
  localStorage.setItem("isLoggedIn", isLoggedIn);
}
// B@

document.getElementById("button").addEventListener("click", (event) => {
  event.preventDefault();
  ValidateUser();
  HandleLogin()
});
document.getElementById("logout_button").addEventListener("click", (event) => {
  isLoggedIn = false;
  localStorage.setItem("isLoggedIn", isLoggedIn);
  HandleLogin()
});
function HandleLogin(){
  const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
  if (storedIsLoggedIn === "true") {
    pageOne.style.display = "none";
    pageTwo.style.display = "block";
  } else {
    pageOne.style.display = "block";
    pageTwo.style.display = "none";
  }
}
HandleLogin()

