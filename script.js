// target body and all divs so they share the same mode class
const darkModeTargets = document.querySelectorAll('body, body div');


/**
 * Adds the "dark" class to the element
 * Removes the "light" class from the element.
 */
function setDarkMode() {
  darkModeTargets.forEach(el => {
    el.classList.add('dark');
    el.classList.remove('light');
  });
}


/**
 * Adds the "light" class to the element
 * Removes the "dark" class from the element.
 */
function setLightMode() {
  darkModeTargets.forEach(el => {
    el.classList.add('light');
    el.classList.remove('dark');
  });
}


/**
 * Display a message containing the UserName and save to variable userName.
 */
function showMessage(event) {
  event.preventDefault(); // stop page refresh

  const input = document.getElementById('login');
  const submitButton = document.getElementById('submit-btn');
  const userName = input.value;

  alert(`Submitted: ${userName}`);
  console.log(userName);
  submitButton.style.backgroundColor = 'green'; // keeps the color change
}


/**
 * Function to expose the answer text in a box.
 */
function showMore(){
    const showAnswer = document.getElementById("showMore")
    console.log("JavaScript is a scripting or programming language that allows you to implement complex features on web pages");
    showAnswer.innerText="JavaScript is a scripting or programming language that allows you to implement complex features on web pages";
    showAnswer.style.color = "blue";
    showAnswer.style.fontStyle = "italic";
    showAnswer.style.border = "solid, 2px";
    showAnswer.style.padding = "5px";

}

/**
 * function to convert £ to EUR
 */
// Get the form by ID
const conversionForm = document.getElementById('conversion-form');

conversionForm.addEventListener('submit', function(event) {
  event.preventDefault(); // stop page refresh

// Get the amount entered
const amountEntered = document.getElementById("pounds-amount").value;
console.log(amountEntered);

// Calculate the EUR value
  const euros = amountEntered * 1.15;
  document.getElementById('result').textContent = `€${euros.toFixed(2)}`;
  });


  /**
   * Function to move Box
   */
  function move() {
    const blueBox = document.getElementById("blue-box");
    const redBox = document.getElementById("red-box");

    blueBox.style.left = "400px";
    blueBox.style.top = "100px";

  }


  /**
   * Function to wipe all html
   */
  const closeButton = document.getElementById("juhu");

  closeButton.addEventListener("click", function() {
    document.body.innerHTML = '';  // wipes everything
    document.body.innerHTML = '<h1>Job well done!!</h1>';
  });