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