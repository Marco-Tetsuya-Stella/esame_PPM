// Seleziona il bottone del menu
const menuToggle = document.getElementById('menu-toggle');

// Ascolta quando Bootstrap finisce di aprire l'offcanvas
document.getElementById('sidebarMenu').addEventListener('shown.bs.offcanvas', function () {
    menuToggle.classList.remove('collapsed'); // Rimuovi collapsed per mostrare la X
});

// Ascolta quando Bootstrap finisce di chiudere l'offcanvas
document.getElementById('sidebarMenu').addEventListener('hidden.bs.offcanvas', function () {
    menuToggle.classList.add('collapsed'); // Aggiungi collapsed per mostrare l'hamburger
});