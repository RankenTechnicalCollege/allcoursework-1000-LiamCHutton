"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const clock = document.getElementById("clock");

    const updateClock = () => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        const ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        clock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    };

    setInterval(updateClock, 1000);

    updateClock();
});