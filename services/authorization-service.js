import { config } from "../config/config.js";

export  async function getToken(path, origin) {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(config.apiKey);
    const data = `${path}&${origin}`;
    const key = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(data));
    return  btoa(String.fromCharCode(...new Uint8Array(signature)));
}