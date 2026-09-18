export function setTitle(course) {
    document.querySelector("h1").textContent =
        `${course.code}: ${course.name}`;
}

export function renderSections(sections) {
    const sectionTable = document.querySelector("#sections");

    sectionTable.innerHTML = "";

    sections.forEach((section) => {
        const row = document.createElement("tr");

        const sectionCell = document.createElement("td");
        sectionCell.textContent = section.sectionNum;

        const enrolledCell = document.createElement("td");
        enrolledCell.textContent = section.enrolled;

        const instructorCell = document.createElement("td");
        instructorCell.textContent = section.instructor;

        row.appendChild(sectionCell);
        row.appendChild(enrolledCell);
        row.appendChild(instructorCell);

        sectionTable.appendChild(row);
    });
}