function addParticipantToTable(participant) {
  let table = document.getElementById("participant-table");
  let row = table.insertRow(-1);
 
  let cell = {};
  
  cell = row.insertCell(0);
  cell.textContent = participant.fullName;
  cell = row.insertCell(1);
  cell.textContent = participant.category;
  cell = row.insertCell(2);
  cell.textContent = participant.size;
}

function validateParticipant (participant) {
  let isValidInput = true;
  if (participant.firstName == "") {
    console.log("First name is empty");
    isValidInput = false;
  }

  if (participant.lastName == "") {
    console.log("Last name is empty");
    isValidInput = false;
  }

  if (participant.age == 0) {
    console.log("Age is empty");
    isValidInput = false;
  }

  if (participant.size == "") {
    console.log("Shirt size is empty");
    isValidInput = false;
  }

  return isValidInput;
}

function addAgeCategory(participant) {
  if (participant.age < 18) {
    participant.category = "Youth";
  } else if (participant.age < 30) {
    participant.category = "Adult";
  } else if (participant.age < 55) {
    participant.category = "Older Adult";
  } else  {
    participant.category = "Silver";
  }

}

function addParticipant() {
  // Get user input from page.
  let participant = {};
  participant.firstName = document.getElementById("first-name").value;
  participant.lastName = document.getElementById("last-name").value;
  participant.fullName = participant.firstName + " " + participant.lastName;
  participant.age = Number(document.getElementById("age").value);
  participant.size = document.getElementById("shirt-size").value;

  // Validate input.
  if (!validateParticipant(participant)) {
    console.log("Not adding participant");
    return;
  }

  // Assign an age category.
  addAgeCategory(participant);

  // Add participant to the table.
  addParticipantToTable(participant);
}