async function getSpotlights() {
    const response = await fetch("data/members.json");
    const members = await response.json();

    const qualifiedMembers = members.filter(member =>
        member.membership === 3 || member.membership === 2
    );

    qualifiedMembers.sort(() => Math.random() - 0.5);

    const spotlights = qualifiedMembers.slice(0, 3);

    displaySpotlights(spotlights);
}


function displaySpotlights(members) {
    const container = document.querySelector("#spotlight-container");

    members.forEach(member => {
        const card = document.createElement("article");

        card.classList.add("spotlight-card");

        card.innerHTML = `
            <img src="images/${member.image}" 
                 alt="${member.name} logo">

            <h3>${member.name}</h3>

            <p>${member.description}</p>

            <p><strong>Phone:</strong> ${member.phone}</p>

            <p><strong>Address:</strong> ${member.address}</p>

            <p><strong>Membership:</strong> 
                ${member.membership === 3 ? "Gold" : "Silver"}
            </p>

            <a href="${member.website}" target="_blank">
                Visit Website
            </a>
        `;

        container.appendChild(card);
    });
}

getSpotlights();