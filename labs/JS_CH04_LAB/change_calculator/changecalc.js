"use strict";

function makeChange() {
  const changeDue = document.getElementById('changedue').value;

  if (isNaN(changeDue) || changeDue < 0 || changeDue > 99) {
    alert("please enter a valid number between 0 and 99.");
    return;
  }

  let amount = parseInt(changeDue);

  const quarters = Math.floor(amount / 25);
  amount %= 25;

  const dimes = Math.floor(amount / 10);
  amount %= 10;

  const nickels = Math.floor(amount / 5);
  amount %= 5;

  const pennies = amount;

  document.getElementById('quarters').value = quarters;
  document.getElementById('dimes').value = dimes;
  document.getElementById('nickels').value = nickels;
  document.getElementById('pennies').value = pennies;

  console.log("Valid input:", changeDue)
}

// Button Event
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('calculate').addEventListener('click', makeChange)
});