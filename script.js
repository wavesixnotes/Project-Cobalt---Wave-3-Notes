const notepad = document.getElementById("notepad");

// Load saved note
notepad.value = localStorage.getItem("note") || "";

function saveNote() {
  localStorage.setItem("note", notepad.value);
  alert("Note saved!");
}
