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


