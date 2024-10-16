"use strict";

const $ = selector => document.querySelector(selector);
const burgerPrice = 1;
const friesPrice = 2;
const sodaPrice = 2.50;

document.getElementById('calculate').onclick = () => {
  const burgers = $("#burgers").value;
  const fries = $("#fries").value;
  const sodas = $("#sodas").value;

  const burgerTotal = burgers * burgerPrice;
  const friesTotal = fries * friesPrice;
  const sodaTotal = sodas * sodaPrice;
  let total = burgerTotal + friesTotal + sodaTotal;

  document.getElementById("totalDisplay").innerText = `Total: $${total}`;
};