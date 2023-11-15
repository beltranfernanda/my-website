import { getAbsoluteURL } from "../common/util.js";


export async function getAllBlogsData() {
    const url = getAbsoluteURL("assets/data-blog.json");
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (err) {
        return [];
    }
}