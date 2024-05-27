const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSSNAME = 'hidden';
const username_key = 'username';

function onLoginsubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSSNAME);
    const username = loginInput.value;
    localStorage.setItem(username_key, username);
    paintingGreeting(username);
}

function paintingGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSSNAME);
}

const checkusername = localStorage.getItem(username_key);

if (checkusername === null) {
    loginForm.classList.remove(HIDDEN_CLASSSNAME);
    loginForm.addEventListener('submit', onLoginsubmit);
} else {
    paintingGreeting(checkusername);
}
