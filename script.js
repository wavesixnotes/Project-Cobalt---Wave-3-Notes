const note = document.getElementById("note");
const status = document.getElementById("status");

// Load saved note when page opens
note.value = localStorage.getItem("savedNote") || "";

// Save note
function saveNote() {
  localStorage.setItem("savedNote", note.value);
  status.textContent = "Note saved!";
  setTimeout(() => status.textContent = "", 2000);
}

// Clear note
function clearNote() {
  if (confirm("Are you sure you want to clear the note?")) {
    note.value = "";
    localStorage.removeItem("savedNote");
    status.textContent = "Note cleared!";
    setTimeout(() => status.textContent = "", 2000);
  }
}
``
