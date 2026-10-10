export async function getDishes() {
    try {
        const response = await fetch("data/dishes.json");
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Could not load dishes:", error);
        const container =
            document.querySelector("#dish-container") ||
            document.querySelector("#featured-dishes");
        if (container) {
            container.innerHTML =
                "<p>Sorry, the dishes could not be loaded right now.</p>";
        }
        return [];
    }
}