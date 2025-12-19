// target body and all divs so they share the same mode class
const darkModeTargets = document.querySelectorAll('body, body div');

function setDarkMode() {
  darkModeTargets.forEach(el => {
    el.classList.add('dark');
    el.classList.remove('light');
  });
}

function setLightMode() {
  darkModeTargets.forEach(el => {
    el.classList.add('light');
    el.classList.remove('dark');
  });
}

const submitButton = document.getElementById('submit-btn');
const form = document.querySelector('.input'); // the form

form.addEventListener('submit', event => {
  event.preventDefault();            // stop the page refresh
  submitButton.style.backgroundColor = 'green';
  userValue = document.getElementById("login").value;
  console.log(userValue);
  showMessage();
});

function showMessage() {
    alert(`You submitted "${userValue}!"`)
}