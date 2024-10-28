function toggleCreditCardField() {
  const donationType = document.getElementById("donationType").value;
  const creditCardField = document.getElementById("creditCardField");
  if (donationType === "monetary") {
    creditCardField.style.display = "block";
  } else {
    creditCardField.style.display = "none";
  }
}