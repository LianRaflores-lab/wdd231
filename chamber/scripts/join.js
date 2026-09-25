const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");

if (menuButton && mainNav) {

    menuButton.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", isOpen);

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

}


const timestamp = document.querySelector("#timestamp");

if (timestamp) {

    const now = new Date();

    timestamp.value = now.toISOString();

}


const modalButtons = document.querySelectorAll(".modal-button");

modalButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const modalId = button.dataset.modal;
        const modal = document.querySelector(`#${modalId}`);

        if (modal) {
            modal.showModal();
        }

    });

});


const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const modal = button.closest("dialog");

        if (modal) {
            modal.close();
        }

    });

});


const modals = document.querySelectorAll("dialog");

modals.forEach((modal) => {

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {
            modal.close();
        }

    });

});


const params = new URLSearchParams(window.location.search);

        const applicationInformation =
            document.querySelector("#application-information");


        const firstName = params.get("firstName") || "";
        const lastName = params.get("lastName") || "";
        const email = params.get("email") || "";
        const phone = params.get("phone") || "";
        const organization = params.get("organization") || "";
        const timeStamp = params.get("timestamp") || "";


        const information = document.createElement("div");

        information.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>

            <p><strong>Last Name:</strong> ${lastName}</p>

            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Mobile Phone:</strong> ${phone}</p>

            <p><strong>Business / Organization:</strong> ${organization}</p>

            <p><strong>Application Date:</strong> ${timeStamp}</p>
        `;


        applicationInformation.appendChild(information);


        document.querySelector("#current-year").textContent =
            new Date().getFullYear();


        document.querySelector("#last-modified").textContent =
            `Last Modification: ${document.lastModified}`;