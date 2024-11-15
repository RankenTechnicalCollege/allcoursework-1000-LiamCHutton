document.addEventListener('DOMContentLoaded', function () {
  // Select elements for radio buttons, labels, input fields, and the convert button
  const fahToCelRadio = document.getElementById('fah_to_cel');
  const celToFahRadio = document.getElementById('cel_to_fah');
  const fahrenheitLabel = document.querySelector('label[for="fahrenheit"]');
  const celsiusLabel = document.querySelector('label[for="celsius"]');
  const fahrenheitInput = document.getElementById('fahrenheit');
  const celsiusInput = document.getElementById('celsius');
  const convertButton = document.getElementById('convert');

  // Function to update the input and output labels based on the selected conversion option
  function updateLabels() {
    if (fahToCelRadio.checked) {
      // If Fahrenheit to Celsius is selected
      fahrenheitLabel.textContent = 'Enter F degrees:';     // Label the input for Fahrenheit
      celsiusLabel.textContent = 'Degrees Celsius:';        // Label the output for Celsius
    } else {
      // If Celsius to Fahrenheit is selected
      fahrenheitLabel.textContent = 'Enter C degrees:';     // Label the input for Celsius
      celsiusLabel.textContent = 'Degrees Fahrenheit:';     // Label the output for Fahrenheit
    }
    fahrenheitInput.value = '';    // Clear input field
    celsiusInput.value = '';       // Clear output field
    celsiusInput.disabled = true;  // Ensure output field is always disabled
    removeError();                 // Clear any existing error message
  }

  // Function to remove any existing error message
  function removeError() {
    const errorMsg = document.querySelector('.error-message');
    if (errorMsg) {
      errorMsg.remove();
    }
  }

  // Function to display an error message
  function displayError(message) {
    removeError();  // Remove any previous error messages
    const error = document.createElement('div');  // Create a new error message element
    error.className = 'error-message';
    error.textContent = message;
    document.querySelector('main').appendChild(error);  // Append error message to the main section
  }

  // Function to convert the temperature based on the selected option
  function convertTemperature() {
    let value, result;

    // Get input value and check for valid number input
    value = parseFloat(fahrenheitInput.value);
    if (isNaN(value)) {
      displayError('Please enter a valid temperature.');  // Display error if input is invalid
      return;
    }

    // Perform conversion based on the selected radio button
    if (fahToCelRadio.checked) {
      result = ((value - 32) * 5) / 9;            // Fahrenheit to Celsius formula
      celsiusInput.value = result.toFixed(2);      // Display result in Celsius output field
    } else {
      result = (value * 9) / 5 + 32;               // Celsius to Fahrenheit formula
      celsiusInput.value = result.toFixed(2);      // Display result in Fahrenheit output field
    }
  }

  // Event listeners for radio buttons to update labels on change
  fahToCelRadio.addEventListener('change', updateLabels);
  celToFahRadio.addEventListener('change', updateLabels);
  
  // Event listener for the convert button to trigger the temperature conversion
  convertButton.addEventListener('click', convertTemperature);

  // Initialize labels and field states on page load
  updateLabels();
});
