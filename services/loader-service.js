export function openLoader() {
    const loader = document.createElement("loader-modal");
    document.body.appendChild(loader);
    document.body.classList.add("no-scroll");
    return {
        close: () => {
            document.body.removeChild(loader);
            document.body.classList.remove("no-scroll");
        }
    }
}
