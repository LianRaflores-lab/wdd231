
import {getDishes} from "./dishes.js";

const filipinoDishes = await getDishes();

const dishContainer = document.querySelector("#dish-container");
const regionButtons = document.querySelectorAll(".region-btn");

// Display dishes
function displayDishes(dishList) {
    dishContainer.innerHTML = "";

    if (dishList.length === 0) {
        dishContainer.innerHTML =
            "<p>No dishes found in this region.</p>";
        return;
    }

    dishList.forEach((dish, index) => {
        const card = document.createElement("article");
        card.classList.add("dishes-card");
        card.style.animationDelay = `${index * 0.1}s`;

        const isFirst = index === 0;

        card.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}" loading="${isFirst ? 'eager' : 'lazy'}"
            ${isFirst ? 'fetchpriority="high"' : ''}>
            <div class="dish-info">
                <h3>${dish.name}</h3>
                <p>${dish.description}</p>
                <p><strong>Region:</strong> ${dish.region}</p>
            </div>
        `;

        dishContainer.appendChild(card);
    });
}

// Filter and display a selected region
function selectRegion(region) {
    const selectedRegion = region || "All";

    const filteredDishes = selectedRegion === "All"
        ? filipinoDishes
        : filipinoDishes.filter(
            dish => dish.region === selectedRegion
        );

    // Highlight the selected button
    regionButtons.forEach(button => {
        const isActive = button.dataset.region === selectedRegion;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    displayDishes(filteredDishes);
}

// Read the region from the URL
const params = new URLSearchParams(window.location.search);
const requestedRegion = params.get("region");

const validRegions = ["Luzon", "Visayas", "Mindanao"];
const initialRegion = validRegions.includes(requestedRegion)
    ? requestedRegion
    : "All";

// Set the initial dishes based on the URL
selectRegion(initialRegion);

// Allow users to change regions on the dishes page
regionButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectRegion(button.dataset.region);
    });
});