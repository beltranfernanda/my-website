export function getAbsoluteURL(path) {
  const hostName = window.location.origin;
  return `${hostName}/${path}`;
}
