"use strict";

const $ = selector => document.querySelector(selector);

const calculateFV = (investment, rate, years) => {
  const futureValue = investment * (1 + rate / 100) ** years;
  return futureValue.toFixed(2);
};

const processEntries = () => {
  const investment = parseFloat($("#investment").value);
  const rate = parseFloat($("#rate").value);
  const years = parseFloat($("#years").value);
  let errorMessage = "";

  if (isNaN(investment) || investment <= 0 || investment > 100000) {
    errorMessage = "Investment must be a number greater than 0 and less than or equal to 100,000.";
    $("#investment").focus();
  }
  else if (isNaN(rate) || rate <= 0 || rate > 15) {
    errorMessage = "Interest rate must be a number greater than 0 and less than or equal to 15.";
    $("#rate").focus();
  }
  else if (isNaN(years) || years <= 0 || years > 50) {
    errorMessage = "Years must be a number greater than 0 and less than or equal to 50.";
    $("#years").focus();
  }

  if (errorMessage) {
    alert(errorMessage);
  }
  else {
    $("#future_value").value = calculateFV(investment, rate, years);
  }
};

const displayFutureValue = () => {
  const { investment, rate, years } = processEntries();
  $("#future_value").value = calculateFV(investment, rate, years);
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", displayFutureValue);
  $("investment").focus();
});