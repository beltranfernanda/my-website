import { config } from "../config.js";

export function getAbsoluteURL(path) {
  const hostName = window.location.origin;
  const urlPrefix = config.production ? `/${config.urlPrefix}` : '';
  return `${hostName}${urlPrefix}/${path}`;
}
