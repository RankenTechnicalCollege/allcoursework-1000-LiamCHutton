"use strict";

const fahrenheit = parseInt(prompt("Enter Fahrenheit temperature")); //typed box;

const celsius = parseInt(fahrenheit - 32 * 5/9);

const html = `<p>${fahrenheit} F = ${celsius} C</p>`;
document.write(html);