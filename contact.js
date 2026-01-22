document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");
  const email = document.getElementById("email");
  const nameInput = document.getElementById("name");
  const message = document.getElementById("message");
  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");
  const chars = document.getElementById("chars");

  message.addEventListener("input", () => {
    const length = message.value.length;
    chars.innerText = length;

    if (length > 100) {
      errorMsg.innerText = "Το μήνυμα δεν μπορεί να ξεπερνά τους 100 χαρακτήρες.";
    } else {
      errorMsg.innerText = "";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
      email.value.trim() === "" ||
      nameInput.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      errorMsg.innerText = "Παρακαλώ συμπληρώστε όλα τα πεδία.";
      return;
    }

    if (message.value.length > 100) {
      errorMsg.innerText = "Το μήνυμα δεν μπορεί να ξεπερνά τους 100 χαρακτήρες.";
      return;
    }

    form.style.display = "none";
    successMsg.style.display = "block";
  });

});
