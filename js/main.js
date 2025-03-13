console.log("JS is Connected");

import {Gryffindor, Hufflepuff, Ravenclaw, Slytherin} from "./houses.js";

const houses = [new Gryffindor(), new Hufflepuff(), new Ravenclaw(), new Slytherin()];

const housesList = document.querySelector("#houses-list");
const housesDetails = document.querySelector("#houses-details");

houses.forEach((house) => {
    const li = document.createElement("li");
    li.appendChild(house.generateCrest());
    li.classList.add("house-item");

    // Add click event to show details
    li.addEventListener("click", () => {
        housesDetails.innerHTML = house.generateDetails();
    });

    housesList.appendChild(li);
});

