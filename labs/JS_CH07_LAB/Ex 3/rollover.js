"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    var image1 = $("#image1");
    var image2 = $("#image2");

    // preload images
    var links = $("#image_list").querySelectorAll("a");

    // attach mouseover and mouseout events for each image
    for ( let link of links) {
        const image = new Image();
        image.src = link.href;
    }
    
    // Function executes a block of code after a delay of 1 second (1000 milliseconds)
    setTimeout(() => {
        image1.src = "images/hero.jpg";
        image2.src = "images/deer.jpg";
    }, 1000);

    // Revert 
    setTimeout(() => {
        image1.src = "images/release.jpg";
        image2.src = "images/bison.jpg";
    }, 2000);

    for ( let link of links) {
        image1.addEventListener("mouseover", () => {
            image1.src = "images/hero.jpg";
        });
        image1.addEventListener("mouseout", () => {
            image1.src = "images/release.jpg"
        });
        image2.addEventListener("mouseover", () => {
            image2.src = "images/deer.jpg"
        });
        image2.addEventListener("mouseout", () => {
            image2.src = "images/bison.jpg"
        });           
    }
});
