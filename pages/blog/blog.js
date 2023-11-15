import { getAllBlogsData } from "../../services/blog-service.js";


async function renderBlogCards(){
    const data = await getAllBlogsData();
    let rootContainer = document.getElementById("blog-root");

    data.forEach((item) => {
        let cardBlog = document.createElement("card-blog");
        cardBlog.setAttribute("title", item.title);
        cardBlog.setAttribute("img-url", item.imageURL);
        cardBlog.setAttribute("date", item.date);
        cardBlog.setAttribute("description", item.description);
        cardBlog.setAttribute("redirect", item.redirect);
        rootContainer.appendChild(cardBlog);
    })
}

renderBlogCards()