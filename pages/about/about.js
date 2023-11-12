import { getAbsoluteURL } from "../../common/util.js";

function createContactButton() {
    const container = document.getElementById("about-root")
    const button = document.createElement("button-primary");
    button.setAttribute("id", "contact-me-btn");
    button.setAttribute("type", "link");
    button.setAttribute("text", "Contact Me");
    button.setAttribute("url", getAbsoluteURL("/pages/contact-me/contact-me.html"));
    container.appendChild(button);
}


createContactButton();