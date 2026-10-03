import discoverPlaces from '../data/discover.mjs';

const discoverContainer = document.getElementById('discover-container');

discoverPlaces.forEach(place => {
    const card = document.createElement("article");

    card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
            <img 
                src="${place.image}" 
                alt="${place.name}"
                loading="lazy"
            >
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button type="button">Learn More</button>
    `;

    discoverContainer.appendChild(card);
});


const visitMessage = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const difference = currentVisit - Number(lastVisit);

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (days < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        visitMessage.textContent = `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
    }
}

localStorage.setItem("lastVisit", currentVisit);