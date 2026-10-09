
const params = new URLSearchParams(window.location.search);

const fields = {
  "confirm-name": "name",
  "confirm-region": "region",
  "confirm-origin": "origin",
  "confirm-description": "description"
};

Object.entries(fields).forEach(([elementId, paramName]) => {
  const element = document.getElementById(elementId);

  if (element) {
    element.textContent = params.get(paramName) || "Not provided";
  }
});

const imageURL = params.get("image");
const imageContainer = document.getElementById("confirm-image-container");
const image = document.getElementById("confirm-image");

if (imageURL && imageContainer && image) {
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
