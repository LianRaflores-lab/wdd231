
const form = document.querySelector("#add-dish-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const params = new URLSearchParams();

  params.set("name", formData.get("name") || "");
  params.set("region", formData.get("region") || "");
  params.set("origin", formData.get("origin") || "");
  params.set("description", formData.get("description") || "");
  params.set("image", formData.get("image") || "");

  window.location.href =
    `form-confirmation.html?${params.toString()}`;
});
