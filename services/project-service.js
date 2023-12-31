import { getAbsoluteURL } from "../common/util.js";

export async function getAllProjectsData() {
    const url = getAbsoluteURL("assets/data-portfolio.json");
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (err) {
        return [];
    }
}