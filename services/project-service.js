import { getAbsoluteURL } from "../common/util.js";

export function getAllProjectsData() {
    const url = getAbsoluteURL("assets/data.json");
    return fetch(url)
    .then((res) => res.json())
    .catch(err => []);
}