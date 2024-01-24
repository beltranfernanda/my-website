import { sendEmail } from "../../services/contact-service.js";
import { openLoader } from "../../services/loader-service.js";

function initForm() {
    const element = document.getElementById("submit-button");
    element.addEventListener("click", sendForm);
}

async function sendForm() {
    const form = document.getElementById("contact-form");
    const data = {
        name: form.elements['name'].value || undefined,
        email: form.elements['email'].value || undefined,
        phone: form.elements['phone'].value || undefined,
        message: form.elements['message'].value || undefined,
    }
    const ref = openLoader()
    const response = await sendEmail(data);
    displayModal(response);
    ref.close();
}

function displayModal(response) {
    Swal.fire({
        text: response.message,
        icon: response.type.toLowerCase(),
        confirmButtonColor: "var(--brand-primary-color)",
      });
}

initForm();