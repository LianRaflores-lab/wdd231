
const form = document.querySelector("#add-dish-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the values entered by the user
    const formData = new FormData(form);

    const dish = {
        name: formData.get("name").trim(),
        region: formData.get("region"),
        origin: formData.get("origin").trim(),
        description: formData.get("description").trim(),
        image: formData.get("image").trim()
    };

    // Add the form values to the URL
    const params = new URLSearchParams(dish);

    // Navigate to the confirmation page
    window.location.href =
        `form-confirmation.html?${params.toString()}`;
});
