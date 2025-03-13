console.log("JS is Connected");

import {Gryffindor, Hufflepuff, Ravenclaw, Slytherin} from "./houses.js";

const houses = [new Gryffindor(), new Hufflepuff(), new Ravenclaw(), new Slytherin()];

const housesList = document.querySelector("#houses-list");
const housesDetails = document.querySelector("#houses-details");

houses.forEach((house) => {
    const li = document.createElement("li");
    li.classList.add("house-item");

    const crest = house.generateCrest();
    li.appendChild(crest);

    // Detail Content
    const details = document.createElement("div");
    details.classList.add("houses-details");
    details.innerHTML = house.generateDetails();
    details.style.display = "none";

    li.appendChild(details);

    // Add click event to show details
    crest.addEventListener("click", () => {
        const visible = details.style.display === "block";
        details.style.display = visible ? "none" : "block";
    });

    housesList.appendChild(li);
});

