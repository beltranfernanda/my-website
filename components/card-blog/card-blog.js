import { getAbsoluteURL } from "../../common/util.js";

class CardBlog extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let props = this.validateComponentProps()
    this.component = `
        <div class="card-blog">
            <div class="card-blog__header">
                <img class="card-blog__header__picture"  src="${getAbsoluteURL(props.imageURL)}" "card project picture">
            </div>
            <div class="card-blog__content">
                <h2 class="card-blog__content__title">${props.title}</h2>
                <p class="card-blog__content__date">${props.date}</p>
                <p class="card-blog__content__description">${props.description}</p>
            </div>
            <div class="card-blog__footer">
                <button-primary type="link" target="_blank" url="${props.redirect}" text="View more"></button-primary>
            </div>
        </div>
        <style>
            @import url(${getAbsoluteURL("components/card-blog/card-blog.css")});
        </style>
    `;
    this.innerHTML = this.component;
  }

  validateComponentProps() {
    return {
        imageURL: this.hasAttribute("img-url") ? this.getAttribute("img-url") : "",
        title: this.hasAttribute("title") ? this.getAttribute("title") : "",
        date: this.hasAttribute("date") ? this.getAttribute("date") : "",
        description: this.hasAttribute("description") ? this.getAttribute("description") : "",
        redirect: this.hasAttribute("redirect") ? this.getAttribute("redirect") : "",
    }
  }
}

customElements.define("card-blog", CardBlog);