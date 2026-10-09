
const regionInfo = {
    Luzon: {
        title: "Discover Luzon",
        description:
            "Explore the diverse flavors of Luzon, from savory adobo and Ilocano specialties to the spicy dishes of Bicol.",
    },
    Visayas: {
        title: "Discover Visayas",
        description:
            "Discover the food traditions of the Visayas, including Cebu lechon, chicken inasal, seafood, and regional delicacies.",
    },
    Mindanao: {
        title: "Discover Mindanao",
        description:
            "Learn about Mindanao's diverse culinary traditions, including piaparan, tiyula itum, and other regional specialties.",
    },
};

const regionModal = document.querySelector("#region-modal");
const regionTitle = document.querySelector("#region-modal-title");
const regionDescription = document.querySelector(
    "#region-modal-description"
);
const regionDishesLink = document.querySelector("#region-dishes-link");
const closeRegionModal = document.querySelector("#close-region-modal");

document.querySelectorAll(".explore-region-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const region = button.dataset.exploreRegion;
        const info = regionInfo[region];

        if (!info) return;

        regionTitle.textContent = info.title;
        regionDescription.textContent = info.description;
        regionDishesLink.href =
            `dishes.html?region=${encodeURIComponent(region)}`;

        regionModal.showModal();
    });
});

closeRegionModal.addEventListener("click", () => {
    regionModal.close();
});

regionModal.addEventListener("click", (event) => {
    if (event.target === regionModal) {
        regionModal.close();
    }
});
