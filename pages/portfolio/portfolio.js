import { getAllProjectsData } from "../../services/project-service.js";

async function renderPortfolioCards(){
    const data = await getAllProjectsData();
    let rootContainer = document.getElementById("portfolio-root");

    data.forEach((item) => {
        let cardProject = document.createElement("card-project");
        cardProject.setAttribute("title", item.title);
        cardProject.setAttribute("img-url", item.imageURL);
        cardProject.setAttribute("stack", item.stack.join(" | "));
        cardProject.setAttribute("description", item.description);
        cardProject.classList.add("card-project")
        cardProject.addEventListener("click", () => {
            window.open(item.redirect, "_blank")
        })
        rootContainer.appendChild(cardProject);
    })
}

renderPortfolioCards()