"use strict";

const $ = selector => document.querySelector(selector);

const getMilesErrorMsg = () => "Miles driven must be a valid number greater than zero.";
const getGallonsErrorMsg = () => "Gallons of gas used must be a valid number greater than zero."

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles) || miles <= 0) {
        alert(getMilesErrorMsg());
        focusAndSelect("#miles");
    } 
    else if (isNaN(gallons) || gallons <= 0) {
        alert(getGallonsErrorMsg());
        focusAndSelect("#gallons");
    } 
    else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#miles").focus();
});