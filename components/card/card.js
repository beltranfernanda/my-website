import { getAbsoluteURL } from "../../common/util.js";

class Card extends HTMLElement {
  constructor() {
    super();
    this.component = `
        <div class="card">
            <div class="card__header">
                <img class="card__header__picture"  src="${getAbsoluteURL("assets/golang-project.png")}" "card project picture">
            </div>
            <div class="card__content">
                <h2 class="card__content__title">Project</h2>
                <p class="card__content__date">05 October 2023</p>
                <p class="card__content__description">Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod.</p>
            </div>
        </div>
        <style>
            @import url(${getAbsoluteURL("components/card/card.css")});
        </style>
        `;
    this.innerHTML = this.component;
  }
}

customElements.define("card-project", Card);