import { routes } from "../config/routes.js";
import { config } from "../config/config.js";
import { getToken } from "./authorization-service.js";

export async function sendEmail(data) {
    const token = await getToken(routes.emailService.sendEmail, config.origin);
    const url = routes.emailService.hostname + routes.emailService.sendEmail;
    const options = {
        method: "POST",
        headers: {
            "Authorization": token,
            "x-origin": config.origin,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    try {
        const res = await fetch(url, options);
        const data = await res.json();
        return mapResponse(res.status, data.message);
    } catch (err) {
       return mapResponse(500, "")
    };
}

async function mapResponse(status, message) {
    switch (status) {
        case 200:
            return {
                message: message,
                type: "SUCCESS"
            }
        case 400:
        case 401:
        case 403:
            return {
                message: message,
                type: "ERROR"
            }
        default:
            return {
                message: "Unexpected error sending email",
                type: "ERROR"
            }
    }
}