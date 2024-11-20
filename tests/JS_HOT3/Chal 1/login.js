document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const resultsContainer = document.getElementById('resultsContainer');
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let calculatedResult = '';
    let textStatus = '';

    if (emailInput.value === "admin@example.com" && passwordInput.value === "password") {
      calculatedResult = "Welcome back Admin!";
      textStatus = "text-success";
    } 
    else {
      calculatedResult = "That email and password doesn't seem to be right. Try again.";
      textStatus = "text-danger";
    }

    resultsContainer.innerHTML = `<p class= ${textStatus}>${calculatedResult}</p>`;
  });
});
