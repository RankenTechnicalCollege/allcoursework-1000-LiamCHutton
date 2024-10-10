"use strict";

let burgerPrice = 1;
let friesPrice = 2;
let sodaPrice = 2.50;

const processEntries = () => {
  const burgers = parseFloat($("#burgers").value)
  const fries = parseFloat($("#fries").value)
  const sodas = parseFloat($("#sodas").value)

  const burgerTotal = burgers * burgerPrice;
  const friesTotal = fries * friesPrice;
  const sodaTotal = sodas * sodaPrice;
  let total = burgerTotal + friesTotal + sodaTotal;
};

document.getElementById("totalDisplay").innerText = `Total: ${total}`;