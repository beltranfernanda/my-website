import { getAbsoluteURL } from "../../common/util.js";

function changeURLButton() {
    const button = document.getElementById("button-root")
    button.setAttribute("url", getAbsoluteURL("/pages/contact-me/contact-me.html"));
}


changeURLButton();