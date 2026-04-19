// JavaScript per evitare che entrambe le navbar/offcanvas e search bar siano contemporaneaemente aperte
document.addEventListener('DOMContentLoaded', () => {
    // 1. Selezioniamo tutti gli switcher (Checkbox) in un'unica costante
    const allSwitchers = document.querySelectorAll(
        '#leftNav-menu-switcher, #navRight-menu-switcher, #search-top-switcher'
    );

    allSwitchers.forEach(sw => {
        sw.addEventListener('change', function() {
            // Se l'utente ha appena attivato (checked) questo switcher
            if (this.checked) {
                // Cicliamo su TUTTI e spegniamo quelli che NON sono quello attuale
                allSwitchers.forEach(other => {
                    if (other !== this) {
                        other.checked = false;
                    }
                });

                // Gestione specifica per la Search Bar: Focus automatico
                if (this.id === 'search-top-switcher') {
                    // Usiamo un delay per attendere l'animazione CSS (0.3s)
                    setTimeout(() => {
                        const searchInput = document.querySelector('.search-custom-topbar input');
                        if (searchInput) searchInput.focus();
                    }, 300);
                }
            }
        });
    });
});