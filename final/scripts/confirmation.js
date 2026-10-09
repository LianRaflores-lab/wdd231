
const params = new URLSearchParams(window.location.search);

const fields = {
    "confirm-name": "name",
    "confirm-region": "region",
    "confirm-origin": "origin",
    "confirm-description": "description"
};

// Display the submitted text safely
for (const [elementId, paramName] of Object.entries(fields)) {
    const element = document.getElementById(elementId);
    const value = params.get(paramName);

    element.textContent = value || "Not provided";
}

// Display the image if the user entered a valid HTTP(S) URL
const imageURL = params.get("image");
const imageContainer = document.getElementById("confirm-image-container");
const image = document.getElementById("confirm-image");

if (imageURL) {
    try {
        const url = new URL(imageURL);

        if (url.protocol === "https:" || url.protocol === "http:") {
            image.src = url.href;
            imageContainer.hidden = false;

            image.addEventListener("error", () => {
                imageContainer.hidden = true;
            });
        }
    } catch {
        imageContainer.hidden = true;
    }
}
