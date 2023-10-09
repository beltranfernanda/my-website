import { getAbsoluteURL } from "../../common/util.js";

class Button extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
    
        let button;
    
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
    
        const style = document.createElement("style");
        style.textContent = `@import url(${getAbsoluteURL("components/button/button.css")});`
    
        shadow.appendChild(style)
        shadow.appendChild(button)
      }
  }
  
  customElements.define("button-primary", Button);
  
  