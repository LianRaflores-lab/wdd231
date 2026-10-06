import filipinoDishes from "../data/dishes.mjs";

const featureContainer = document.getElementById("featured-dishes");

// Make a copy of the dishes array
const shuffled = [...filipinoDishes];

// Shuffle the dishes
for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
}

// Select the first 3 dishes
const featured = shuffled.slice(0, 3);

// Display the 3 dishes
featured.forEach(dish => {
    featureContainer.innerHTML += `
        <article class="dish-card">
            <img src="${dish.image}" alt="${dish.name}">
            
            <div class="dish-info">
                <h2>${dish.name}</h2>
                <p>${dish.description}</p>
                <p><strong>Region:</strong> ${dish.region}</p>
                <p><strong>Origin:</strong> ${dish.origin}</p>
            </div>
        </article>
    `;
});