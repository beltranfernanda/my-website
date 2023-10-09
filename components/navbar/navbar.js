import { getAbsoluteURL } from "../../common/util.js";

class Navbar extends HTMLElement {

  linksMap = {
    about: "about-link",
    portfolio: "portfolio-link",
    blog: "blog-link",
    contact: "contact-link"
  }

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
                        <a  id="about-link" class= "aside__menu__list__link" href="${getAbsoluteURL(
                          "pages/about/about.html"
                        )}">About</a>
                    </li>
                    <li class="aside__menu__list__item">
                        <a id="portfolio-link" class= "aside__menu__list__link" href="${getAbsoluteURL(
                          "pages/portfolio/portfolio.html"
                        )}">Portfolio</a>
                    </li>
                    <li class="aside__menu__list__item">
                        <a  id="blog-link" class= "aside__menu__list__link" href="${getAbsoluteURL(
                          "pages/blog/blog.html"
                        )}">Blog</a>
                    </li>
                    <li class="aside__menu__list__item">
                        <a id="contact-link" class= "aside__menu__list__link" href="${getAbsoluteURL(
                          "pages/contact-me/contact-me.html"
                        )}">Contact me</a>
                    </li>
                </ul>
            </nav>
            <div class="aside__icons">
                <a href="https://www.linkedin.com/in/beltranfernanda" target="_blank" class="aside__icons__link">
                    <img src="${getAbsoluteURL(
                      "assets/linkedin-logo.svg"
                    )}"alt="linkedin icon" class="aside__icons__link__linkedin">
                </a>
                <a href="https://www.instagram.com/beltranmafe" target="_blank" class="aside__icons__link">
                    <img src="${getAbsoluteURL(
                      "assets/instagram.svg"
                    )}" alt="instagram icon" class="aside__icons__insta">
                </a>
                <a href="https://github.com/beltranfernanda" target="_blank" class="aside__icons__link">
                    <img src="${getAbsoluteURL(
                      "assets/github-mark.svg"
                    )}" alt="github icon" class="aside__icons__github">
                </a>
                <a href="mailto:velandiafernanda17@gmail.com" class="aside__icons__link">
                    <img src="${getAbsoluteURL(
                      "assets/mail.svg"
                    )}" alt="mail icon" class="aside__icons__mail">
                </a>
            </div>
        </aside>
        <style>
            @import url(${getAbsoluteURL("components/navbar/navbar.css")});
        </style>
        `;
    this.innerHTML = this.component;
  }

  connectedCallback() {
    if (this.hasAttribute("tab-active")){
      let active = this.getAttribute("tab-active")
      let id = this.linksMap[active]
      this.querySelector("#" + id).classList.add("active")
    }
  }
  
}

customElements.define("aside-navbar", Navbar);
