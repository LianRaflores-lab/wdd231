
const regionInfo = {
    Luzon: {
        title: "Luzon — A Blend of Tradition and Bold Flavors",
        description:
            "Luzon's cuisine reflects a rich blend of indigenous traditions, local ingredients, and centuries of cultural influences. Its recipes are shaped by the region's fertile farmlands, coastal communities, and diverse landscapes. In the north, Ilocano cooking is known for its resourcefulness, fresh vegetables, and savory specialties like pinakbet and bagnet. Central Luzon is celebrated for its flavorful meat dishes, while Bicol is famous for its bold use of coconut milk and chili peppers. What makes Luzon unique is its incredible variety—from simple, earthy home-cooked meals to rich, spicy dishes that showcase the creativity and heritage of its communities.",
    },
    Visayas: {
        title: "Visayas — The Heart of Seafood and Celebrations",
        description:
            "Visayan cuisine draws inspiration from the islands' abundant seas, local farms, and lively community celebrations. With fishing deeply connected to everyday life, seafood plays an important role in many traditional recipes. The region is also known for its flavorful grilled dishes, including Bacolod's chicken inasal, and Cebu's celebrated lechon, prepared with carefully chosen seasonings and cooking techniques passed down through generations. Trade and cultural exchanges have also influenced the ingredients and flavors found across the islands. What makes Visayan food special is its balance of fresh, smoky, savory, and sometimes sweet flavors, reflecting a culture where food brings families and communities together.",
    },
    Mindanao: {
        title: "Mindanao — A Heritage of Spices and Cultural Diversity",
        description:
            "Mindanao's cuisine tells the story of diverse communities, ancestral traditions, and centuries of cultural exchange. Its recipes are inspired by local agriculture, tropical ingredients, and the culinary heritage of Indigenous peoples and Muslim Filipino communities, including the Maranao, Maguindanaon, and Tausug. Dishes such as Maranao piaparan, made with chicken and a rich blend of spices and coconut, and Tausug tiyula itum, a distinctive dark beef soup, showcase the region's unique cooking traditions. Influences from neighboring Southeast Asian communities have also contributed to its use of aromatic spices and complex flavors. Mindanao stands out for its deeply rooted food heritage, distinctive spice blends, and recipes that preserve the identity and traditions of its many cultures.",
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
