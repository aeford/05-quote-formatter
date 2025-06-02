// Get references to the form and output area. We use 'const' because these variables won't be reassigned.
const form = document.getElementById('quote-form');
const adjectiveInput = document.getElementById('adjective');
const nounInput = document.getElementById('noun');
const verbInput = document.getElementById('verb');
const output = document.getElementById('output');

// Listen for the form submission
form.addEventListener('submit', function(event) {
  // Prevent the page from reloading when the form is submitted
  event.preventDefault();

  // Get the values from the inputs
  var adjective = adjectiveInput.value;
  var noun = nounInput.value;
  var verb = verbInput.value;

  // Use template literals for easier string formatting (uses backticks and ${} for variables)
  var sentence = `${verb}ing ${adjective} ${noun} is the real test of character. #LifeRules`;

  // Capitalize the first letter of the sentence
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

  // Display the sentence
  output.textContent = sentence;
});
