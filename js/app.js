// Declare global student table (outside the function)
let studentTable = [];

// Add Student function
function addStudent(studentName, studentID, middleName, lastName) {
    // Push new student into the array
    studentTable.push({
        id: studentID,
        first: studentName,
        middle: middleName,
        last: lastName
    });

    // Update the HTML table
    renderStudentTable();
}

// Render the student table in HTML
function renderStudentTable() {
    let tableContent = document.getElementById("table-content");
    tableContent.innerHTML = ""; // clear existing rows

    studentTable.forEach(student => {
        let row = `
            <tr>
                <td>${student.id}</td>
                <td>${student.first}</td>
                <td>${student.middle}</td>
                <td>${student.last}</td>
            </tr>
        `;
        tableContent.innerHTML += row;
    });
}

// Event Listener for button
document.getElementById("addStudentButton").addEventListener("click", function () {
    let idNumber = document.getElementById("idNumber").value.trim();
    let firstName = document.getElementById("firstName").value.trim();
    let middleName = document.getElementById("middleName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();

    if (idNumber === "" || firstName === "" || lastName === "") {
        alert("Please fill in ID Number, Firstname, and Lastname.");
        return;
    }

    addStudent(firstName, idNumber, middleName, lastName);

    // Clear form
    document.getElementById("studentForm").reset();
});
