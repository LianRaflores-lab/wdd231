async function getCompanies() {
    const response = await fetch("../data/companies.json");
    const datas = await response.json();
    displayMembers(data.members);

    const cards = document.querySelector("#cards");

    datas.array.forEach(data => {
        const card = document.createElement("section");

        card.innerHTML = `
            <h2>${data.name}</h2>
            <img class="info" src="images/${data.image}" alt="${data.name}">
            <div class="info">
                <p>Membership: <span id="${data.membership}><span>"
                <p>Phone: ${data.phone}<p>
                <p>Address: ${data.address}<p>
                <p>Website: ${data.website}<p>
            </div>
        `;

        cards.appendChild(card)
    });
};

getCompanies();