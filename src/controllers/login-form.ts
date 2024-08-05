const container = document.querySelector(".container") as HTMLElement;
const btnSignIn = document.getElementById("btn-sign-in") as HTMLButtonElement;
const btnSignUp = document.getElementById("btn-sign-up") as HTMLButtonElement;

btnSignIn.addEventListener("click", () => {
    container.classList.remove("toggle");
});

btnSignUp.addEventListener("click", () => {
    container.classList.add("toggle");
});

/* Hide and show password */

function addListeners() {
     const toggleButtons = document.querySelectorAll(".toggle-button");

     toggleButtons.forEach((button: Element) => {
          button.addEventListener('click', togglePassword as EventListener);
     });
}

function togglePassword(event: MouseEvent) {
     const toggleButton = event.currentTarget as HTMLElement;
     const passwordField = toggleButton.previousElementSibling as HTMLInputElement;

     if (!passwordField || !toggleButton) {
          return;
     }

     toggleButton.classList.toggle("open");
     const isEyeOpen = toggleButton.classList.contains("open");
     passwordField.type = isEyeOpen ? "text" : "password";
}

document.addEventListener("DOMContentLoaded", addListeners);
