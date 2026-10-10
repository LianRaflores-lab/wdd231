import { getDishes } from "./dishes.js";

const featureContainer = document.getElementById("featured-dishes");
const filipinoDishes = await getDishes();

// Only render if the data loaded (otherwise keep the error message)
if (filipinoDishes.length > 0) {
    const shuffled = [...filipinoDishes];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const featured = shuffled.slice(0, 3);

    featureContainer.innerHTML = featured.map(dish => `
        <article class="dish-card">
            <img src="${dish.image}"
            srcset="
                ${dish.imageSmall} 300w,
                ${dish.image} 450w
            "
            sizes="(max-width: 650px) 100vw, 450px"
            width="450" height="300"
            alt="${dish.name}" loading="lazy">

            <div class="dish-info">
                <h2>${dish.name}</h2>
                <p>${dish.description}</p>
                <p><strong>Region:</strong> ${dish.region}</p>
                <p><strong>Origin:</strong> ${dish.origin}</p>
            </div>
        </article>
    `).join("");
}