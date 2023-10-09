import { getAbsoluteURL } from "../../common/util.js";

class CardBlog extends HTMLElement {
  constructor() {
    super();
    this.component = `
        <div class="card-blog">
            <div class="card-blog__header">
                <img class="card-blog__header__picture"  src="${getAbsoluteURL("assets/java-blog.png")}" "card project picture">
            </div>
            <div class="card-blog__content">
                <h2 class="card-blog__content__title">Web Design templates Selection</h2>
                <p class="card-blog__content__description">Minim dolor in amet nulla laboris enim dolore consequat.
                Minim dolor in amet nulla laboris enim dolore consequat.</p>
            </div>
            <div class="card-blog__footer">
                <button-primary type="link" text="View more"></button-primary>
            </div>
        </div>
        <style>
            @import url(${getAbsoluteURL("components/card-blog/card-blog.css")});
        </style>
        `;
    this.innerHTML = this.component;
  }
}

customElements.define("card-blog", CardBlog);