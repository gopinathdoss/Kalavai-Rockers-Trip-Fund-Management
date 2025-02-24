let members = [];

function addMember() {
    const name = document.getElementById("member-name").value;
    const savings = document.getElementById("member-savings").value;

    if (name === "" || savings === "") {
        alert("Please enter all fields.");
        return;
    }

    members.push({ name, savings });
    updateTable();
}

function updateTable() {
    const tableBody = document.getElementById("members-list");
    tableBody.innerHTML = "";

    members.forEach(member => {
        const row = `<tr><td>${member.name}</td><td>₹${member.savings}</td></tr>`;
        tableBody.innerHTML += row;
    });
}
