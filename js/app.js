// Array to store subjects
let subjects = [];

// Handle Add Subject button click
document.getElementById("addSubject").addEventListener("click", function () {
    let subjectCode = document.getElementById("subjectCode").value.trim();
    let subjectName = document.getElementById("subjectName").value.trim();
    let units = document.getElementById("units").value.trim();

    // Basic validation
    if (subjectCode === "" || subjectName === "" || units === "") {
        alert("Please fill in all fields (Code, Name, Units).");
        return;
    }

    // Create subject object
    let subject = {
        code: subjectCode,
        name: subjectName,
        units: units
    };

    // Add to array
    subjects.push(subject);

    // Update the table
    renderSubjectTable();

    // Clear form
    document.getElementById("subjectForm").reset();
});

// Function to render subjects in the table
function renderSubjectTable() {
    let tableContent = document.getElementById("table-content");
    tableContent.innerHTML = ""; // clear old rows

    subjects.forEach(subject => {
        let row = `
            <tr>
                <td>${subject.code}</td>
                <td>${subject.name}</td>
                <td>${subject.units}</td>
            </tr>
        `;
        tableContent.innerHTML += row;
    });
}
