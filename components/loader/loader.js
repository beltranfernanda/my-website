import { getAbsoluteURL } from "../../common/util.js";

class Loader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.component = `
    <div class="overlay">
        <div class="container">
            <div class="spinner"></div>
        </div>
    </div>
    <style>
        @import url(${getAbsoluteURL("components/loader/loader.css")});
    </style>
    `;
    this.innerHTML = this.component;
  }
}

customElements.define("loader-modal", Loader);