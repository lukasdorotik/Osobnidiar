function addEvent() {
  var eventInput = document.getElementById("event");
  var dateInput = document.getElementById("date");

  var event = eventInput.value;
  var date = dateInput.value;

  if (event.trim() === "" || date.trim() === "") {
    alert("Prosím vyplňte všechna pole.");
    return;
  }

  var eventsList = document.getElementById("events-list");

  var li = document.createElement("li");
  li.className = "event-item";
  li.textContent = event + " - " + date;

  var deleteButton = document.createElement("button");
  deleteButton.className = "button-24"; // Přidání třídy "button-24"
  deleteButton.textContent = "Odebrat";
  deleteButton.onclick = function () {
    li.remove();
  };
  li.appendChild(deleteButton);

  eventsList.appendChild(li);

  eventInput.value = "";
  dateInput.value = "";
}
