import { getAbsoluteURL } from "../../common/util.js";

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.component = `
        <aside class="aside">
            <div class="aside__profile">
                <img src="${getAbsoluteURL(
                  "assets/profile-photo.png"
                )}" class="image aside__profile__image" alt="">
            </div>
            <div class="aside__description">
                <h1 class="aside__description__title">Maria Fernanda Velandia Beltran</h1>
                <p class="aside__description__paragraph">Hi, I’m Fernanda and this is information about me. Hi, I’m Fernanda and this is information about me. Hi, I’m Fernanda and this is information about me.</p>
            </div>
            <nav class="aside__menu">
                <ul class="aside__menu__list">
                    <li class="aside__menu__list__item">
                        <a  class= "aside__menu__list__link" href="${getAbsoluteURL(
                          "pages/about/about.html"
                        )}">About</a>
                    </li>
                    <li class="aside__menu__list__item">
                        <a class= "aside__menu__list__link active" href="${getAbsoluteURL(
                          "pages/portfolio/portfolio.html"
                        )}">Portfolio</a>
                    </li>
                    <li class="aside__menu__list__item">
                        <a class= "aside__menu__list__link" href="${getAbsoluteURL(
                          "pages/blog/blog.html"
                        )}">Blog</a>
                    </li>
                    <li class="aside__menu__list__item">
                        <a class= "aside__menu__list__link" href="${getAbsoluteURL(
                          "pages/contact-me/contact-me.html"
                        )}">Contact me</a>
                    </li>
                </ul>
            </nav>
            <div class="aside__icons">
                <a href="" class="aside__icons__link">
                    <img src="${getAbsoluteURL(
                      "assets/linkedin-logo.svg"
                    )}"alt="" class="aside__icons__link__linkedin">
                </a>
                <a href="" class="aside__icons__link">
                    <img src="${getAbsoluteURL(
                      "assets/instagram.svg"
                    )}" alt="" class="aside__icons__insta">
                </a>
                <a href="" class="aside__icons__link">
                    <img src="${getAbsoluteURL(
                      "assets/github-mark.svg"
                    )}" alt="" class="aside__icons__github">
                </a>
                <a href="" class="aside__icons__link">
                    <img src="${getAbsoluteURL(
                      "assets/mail.svg"
                    )}" alt="" class="aside__icons__mail">
                </a>
            </div>
        </aside>
        <style>
            @import url(${getAbsoluteURL("components/navbar/navbar.css")});
        </style>
        `;
    this.innerHTML = this.component;
  }
}

customElements.define("aside-navbar", Navbar);
