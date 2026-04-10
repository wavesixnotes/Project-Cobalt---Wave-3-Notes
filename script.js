const note = document.getElementById("note");
const status = document.getElementById("status");

// Load saved note when page opens
note.value = localStorage.getItem("savedNote") || "";

function saveNote() {
  localStorage.setItem("savedNote", note.value);
  status.textContent = "Note saved!";
  setTimeout(() => status.textContent = "", 2000);
}

function clearNote() {
  if (confirm("Clear the note?")) {
    note.value = "";
    localStorage.removeItem("savedNote");
    status.textContent = "Note cleared!";
    setTimeout(() => status.textContent = "", 2000);
  }
}
