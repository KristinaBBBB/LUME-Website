const dialog = document.getElementById("development-dialog");
const dialogTitle = document.getElementById("dialog-title");

document.querySelectorAll(".link-wrapper").forEach(link => {
    link.setAttribute("aria-haspopup", "dialog");
    link.setAttribute("aria-controls", "development-dialog");

    link.addEventListener("click", event => {
        event.preventDefault(); // Temporarily stop navigation
        dialogTitle.textContent = link.querySelector("h2").textContent;
        dialog.showModal();
    });
});

document.getElementById("close-dialog").addEventListener("click", () => {
    dialog.close();
});

dialog.addEventListener("click", event => {
    const rect = dialog.getBoundingClientRect();

    const clickedOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

    if (clickedOutside){
        dialog.close();
    }
});