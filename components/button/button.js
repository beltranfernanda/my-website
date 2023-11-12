import { getAbsoluteURL } from "../../common/util.js";

class Button extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }


    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    static get observedAttributes() {
        return ['url', 'type', 'text'];
    }

    render() {    
        const button = this.createButton();
        const style = document.createElement("style");
        style.textContent = `@import url(${getAbsoluteURL("components/button/button.css")});`;

        const shadow = this.shadowRoot;
        shadow.innerHTML = '';
        shadow.appendChild(style);
        shadow.appendChild(button);
    }

    createButton() {
        let button

        if (this.hasAttribute("type") && this.getAttribute("type")=="link"){
            button = document.createElement("a")
            button.setAttribute("href",this.hasAttribute("url") ? this.getAttribute("url") : "#")
        } else {
            button = document.createElement("button")
            button.setAttribute("id",this.hasAttribute("id") ? this.getAttribute("id") : "default")
        }
        
        button.textContent = this.hasAttribute("text") ? this.getAttribute("text") : "default"
        button.setAttribute("class", "button button-primary")
        button.setAttribute("type", "submit")

        return button
    }
  }
  
  customElements.define("button-primary", Button);
  
  