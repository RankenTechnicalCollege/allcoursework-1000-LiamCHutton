"use strict";

const $ = selector => document.querySelector(selector);

const calculateTax = (subtotal, taxRate) => {
  const salesTax = subtotal * (taxRate / 100);
  const total = subtotal + salesTax;
  return { salesTax, total };
};

const processCalculation = () => {
  // Get values from input fields
  const subtotal = parseFloat($("#subtotal").value);
  const taxRate = parseFloat($("#taxrate").value);
  let errorMessage = "";

  // Validation checks for subtotal
  if (isNaN(subtotal) || subtotal <= 0 || subtotal > 10000) {
    errorMessage = "Subtotal must be greater than 0 and less than 10000.";
    $("#subtotal").focus();
  }
  // Validation checks for tax rate
  else if (isNaN(taxRate) || taxRate <= 0 || taxRate > 12) {
    errorMessage = "Tax Rate must be greater than 0 and less than 12.";
    $("#taxrate").focus();
  }

  // Display error message if validation fails
  if (errorMessage) {
    alert(errorMessage);
  }
  // If valid, calculate and display the sales tax and total
  else {
    const { salesTax, total } = calculateTax(subtotal, taxRate);
    $("#salestax").value = salesTax.toFixed(2);
    $("#total").value = total.toFixed(2);
  }

  // Move focus back to Subtotal field after calculation
  $("#subtotal").focus();
};

const clearFields = () => {
  // Clear all text boxes
  $("#subtotal").value = "";
  $("#taxrate").value = "";
  $("#salestax").value = "";
  $("#total").value = "";
  
  // Move focus back to Subtotal field
  $("#subtotal").focus();
};

// Handlers to clear data from text boxes on focus
const clearSubtotal = () => {
  $("#subtotal").value = "";
};

const clearTaxRate = () => {
  $("#taxrate").value = "";
};

// Attach event listeners on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processCalculation);
  $("#clear").addEventListener("click", clearFields);
  
  // Set initial focus on the Subtotal field
  $("#subtotal").focus();

  // Attach onfocus events to clear data when each field is focused
  $("#subtotal").addEventListener("focus", clearSubtotal);
  $("#taxrate").addEventListener("focus", clearTaxRate);
});
