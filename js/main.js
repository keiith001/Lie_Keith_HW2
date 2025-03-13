console.log("JS is Connected");

import {Gryffindor, Hufflepuff, Ravenclaw, Slytherin} from "./houses.js";
import { bounceTransition } from "./bounce.js";


const houses = [new Gryffindor(), new Hufflepuff(), new Ravenclaw(), new Slytherin()];

const housesList = document.querySelector("#houses-list");

houses.forEach((house) => {
    const li = document.createElement("li");
    li.classList.add("houses-item");

    const crest = house.generateCrest();
    li.appendChild(crest);

    // Detail Content
    const details = document.createElement("div");
    details.classList.add("houses-details");
    details.innerHTML = house.generateDetails();
    details.style.display = "none";

    li.appendChild(details);

    // Add click event to show details
    crest.addEventListener("click", (e) => {
        const housesItems = document.querySelectorAll(".houses-item");
        e.stopPropagation();

        // Remove bounce class from all items
        housesItems.forEach(item => {
            item.classList.remove("bounce");
        });

        // Add Bounce when click
        li.classList.add("bounce");

        if (details.style.display === "none") {
            details.style.display = "block";
            bounceTransition(crest);
        } else {
            details.style.display = "none";
        }
    });

    housesList.appendChild(li);
});

