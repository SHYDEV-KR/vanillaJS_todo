const welcomeMsg = document.querySelector("#loginContainer #welcomeMsg");
const loginForm = document.querySelector("#loginContainer #loginForm");
const loginInput = document.querySelector("#loginContainer #loginForm input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function init() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);

    if (savedUsername) {
        paintWelcomeMsg(savedUsername);
    } else {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", handleLogin);
    }
}

function handleLogin(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintWelcomeMsg(username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

function paintWelcomeMsg(username) {
    welcomeMsg.innerHTML = `Hi, ${username}`
    welcomeMsg.classList.remove(HIDDEN_CLASSNAME);
    welcomeMsg.nextElementSibling.classList.remove(HIDDEN_CLASSNAME);
}

init();