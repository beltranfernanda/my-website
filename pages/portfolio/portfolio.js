import { getAllProjectsData } from "../../services/project-service.js";

async function renderPortfolioCards(){
    const data = await getAllProjectsData();
    let rootContainer = document.getElementById("portfolio-root");
    data.forEach((item) => {
        let cardProject = document.createElement("card-project");
        cardProject.setAttribute("title", item.title);
        cardProject.setAttribute("img-url", item.imageURL);
        cardProject.setAttribute("date", item.date);
        cardProject.setAttribute("description", item.description);
        cardProject.setAttribute("redirect", item.redirect);
        rootContainer.appendChild(cardProject);
    })
}

renderPortfolioCards()