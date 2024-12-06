const form = document.getElementById("medicineForm");
const tableBody = document
  .getElementById("medicineTable")
  .getElementsByTagName("tbody")[0];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("medicineName").value;
  20;
  const description = document.getElementById("medicineDescription").value;
  const price = document.getElementById("medicinePrice").value;
  const stock = document.getElementById("medicineStock").value;
  const expirationDate = document.getElementById(
    "medicineExpirationDate"
  ).value;
  const newRow = tableBody.insertRow();
  newRow.insertCell(0).textContent = name;
  newRow.insertCell(1).textContent = description;
  newRow.insertCell(2).textContent = price;
  newRow.insertCell(3).textContent = stock;
  newRow.insertCell(4).textContent = expirationDate;
  const actionsCell = newRow.insertCell(5);
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit");
  editButton.onclick = () =>
    editMedicine(newRow, name, description, price, stock, expirationDate);
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");
  deleteButton.onclick = () => deleteMedicine(newRow);
  actionsCell.appendChild(editButton);
  actionsCell.appendChild(deleteButton);
  form.reset();
});
function editMedicine(row, name, description, price, stock, expirationDate) {
  document.getElementById("medicineName").value = name;
  document.getElementById("medicineDescription").value = description;
  document.getElementById("medicinePrice").value = price;
  document.getElementById("medicineStock").value = stock;
  document.getElementById("medicineExpirationDate").value = expirationDate;
  row.remove();
}
function deleteMedicine(row) {
  row.remove();
}
