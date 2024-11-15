document.addEventListener('DOMContentLoaded', function () {

  const fahToCelRadio = document.getElementById('fah_to_cel');
  const celToFahRadio = document.getElementById('cel_to_fah');
  const fahrenheitLabel = document.querySelector('label[for="fahrenheit"]');
  const celsiusLabel = document.querySelector('label[for="celsius"]');
  const fahrenheitInput = document.getElementById('fahrenheit');
  const celsiusInput = document.getElementById('celsius');
  const convertButton = document.getElementById('convert');

  function updateLabels() {
    if (fahToCelRadio.checked) {
      fahrenheitLabel.textContent = 'Enter F degrees:';
      celsiusLabel.textContent = 'Degrees Celsius:';
    } else {
      fahrenheitLabel.textContent = 'Enter C degrees:';
      celsiusLabel.textContent = 'Degrees Fahrenheit:';
    }
    fahrenheitInput.value = '';
    celsiusInput.value = '';
    celsiusInput.disabled = true;
    removeError();
  }

  function removeError() {
    const errorMsg = document.querySelector('.error-message');
    if (errorMsg) {
      errorMsg.remove();
    }
  }

  function displayError(message) {
    removeError();
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    document.querySelector('main').appendChild(error);
  }

  function convertTemperature() {
    let value, result;

    value = parseFloat(fahrenheitInput.value);
    if (isNaN(value)) {
      displayError('Please enter a valid temperature.');
      return;
    }

    if (fahToCelRadio.checked) {
      result = ((value - 32) * 5) / 9;
      celsiusInput.value = result.toFixed(2);
    } else {
      result = (value * 9) / 5 + 32;
      celsiusInput.value = result.toFixed(2);
    }
  }

  fahToCelRadio.addEventListener('change', updateLabels);
  celToFahRadio.addEventListener('change', updateLabels);
  
  convertButton.addEventListener('click', convertTemperature);

  updateLabels();
});
