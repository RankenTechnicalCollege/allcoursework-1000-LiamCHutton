"use strict";

function calculateTax() {
  const taxIncome = document.getElementById('taxincome').value;

  if (taxIncome > 0 && taxIncome < 9875) {
    let taxExcess = taxIncome - 0;
    let taxResult = taxExcess * 0.10 + 0;
    document.getElementById('tax_owed').value = taxResult.toFixed(2);
  }
  else if (taxIncome > 9875 && taxIncome < 40125) {
    let taxExcess = taxIncome - 9875;
    let taxResult = taxExcess * 0.12 + 9875;
    document.getElementById('tax_owed').value = taxResult.toFixed(2);
  }
  else if (taxIncome > 40125 && taxIncome < 85525) {
    let taxExcess = taxIncome - 40125;
    let taxResult = taxExcess * 0.22 + 40125;
    document.getElementById('tax_owed').value = taxResult.toFixed(2);
  }
  else if (taxIncome > 85525 && taxIncome < 163300) {
    let taxExcess = taxIncome - 85525;
    let taxResult = taxExcess * 0.24 + 85525;
    document.getElementById('tax_owed').value = taxResult.toFixed(2);
  }
  else if (taxIncome > 163300 && taxIncome < 207350) {
    let taxExcess = taxIncome - 163300;
    let taxResult = taxExcess * 0.32 + 163300;
    document.getElementById('tax_owed').value = taxResult.toFixed(2);
  }
  else if (taxIncome > 207350 && taxIncome < 518400) {
    let taxExcess = taxIncome - 207350;
    let taxResult = taxExcess * 0.35 + 207350;
    document.getElementById('tax_owed').value = taxResult.toFixed(2);
  }
  else if (taxIncome > 518400) {
    let taxExcess = taxIncome - 518400;
    let taxResult = taxExcess * 0.37 + 518400;
    document.getElementById('tax_owed').value = taxResult.toFixed(2);
  }
  else {
    alert("Error, please try again.")
  }
};
// Button Event
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('calculate').addEventListener('click', calculateTax)
});