async function getCompanies() {
    const response = await fetch("data/members.json");
    const datas = await response.json();

    const cards = document.querySelector("#cards");

    function getMembershipLevel(membership) {
        if (membership === 1) {
            return "Member";
        } else if (membership === 2) {
            return "⭐⭐ Silver";
        } else if (membership === 3) {
            return "⭐⭐⭐ Gold";
        }
    }

    datas.forEach(data => {
        const card = document.createElement("div");

        card.innerHTML = `
            <div class="info-box">
                <h2>${data.name}</h2>
                <img class="info" src="images/${data.image}" alt="${data.name}">
                <div class="info">
                    <p>Membership: ${getMembershipLevel(data.membership)}</span></p>
                    <p>Phone: ${data.phone}</p>
                    <p>Address: ${data.address}</p>
                    <p>Website: ${data.website}</p>
                </div>
            </div>
        `;

        cards.appendChild(card)
    });
};

getCompanies();

const gridViewBtn = document.getElementById("grid-view");
const listViewBtn = document.getElementById("list-view");

const directory = document.getElementById("cards");

gridViewBtn.addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");
});

listViewBtn.addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
});