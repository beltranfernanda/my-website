import { getAbsoluteURL } from "../../common/util.js";

class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let props = this.validateComponentProps()
    this.component = `
    <div class="card">
        <div class="card__header">
            <img class="card__header__picture"  src="${getAbsoluteURL(props.imageURL)}" "card project picture">
        </div>
        <div class="card__content">
            <h2 class="card__content__title">${props.title}</h2>
            <p class="card__content__stack">${props.stack}</p>
            <p class="card__content__description">${props.description}</p>
        </div>
    </div>
    <style>
        @import url(${getAbsoluteURL("components/card-project/card-project.css")});
    </style>
    `;
    this.innerHTML = this.component;
  }

  validateComponentProps() {
    return {
        imageURL: this.hasAttribute("img-url") ? this.getAttribute("img-url") : "",
        title: this.hasAttribute("title") ? this.getAttribute("title") : "",
        stack: this.hasAttribute("stack") ? this.getAttribute("stack") : "",
        description: this.hasAttribute("description") ? this.getAttribute("description") : "",
    }
  }
}

customElements.define("card-project", Card);