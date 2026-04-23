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



/*-------------------------------------------------------------------------------------------------------------
    GESTIONE headerContainer__disappearingContainer PER LA SCOMPARSA QUANDO SCENDO SOTTO I 64PX SULLA SCROLL BAR
 -------------------------------------------------------------------------------------------------------------*/
/**
 * Gestione visibilità Header Secondario
 * Scompare dopo 64px di scroll o sotto i 1040px di larghezza
 */
let isTransitioning = false;

function handleHeaderVisibility() {
    const headerDisappearing = document.getElementById('headerContainer__disappearingContainer');
    const navbarTitle = document.getElementById('navbar-title-first-row');

    if (!headerDisappearing || isTransitioning) return;

    const isDesktop = window.innerWidth >= 1040;
    const currentScroll = window.scrollY;

    // SCENDIAMO: Nascondiamo il container grande e MOSTRIAMO il titolo piccolo
    if (currentScroll > 120) {
        if (!headerDisappearing.classList.contains('d-none-scroll')) {
            isTransitioning = true;
            headerDisappearing.classList.add('d-none-scroll');

            // Su desktop, mostriamo il titolo piccolo
            if (isDesktop && navbarTitle) {
                navbarTitle.classList.add('force-show');
            }

            setTimeout(() => { isTransitioning = false; }, 350);
        }
    }
    // RISALIAMO: Mostriamo il container grande e NASCONDIAMO il titolo piccolo
    else if (currentScroll < 10) {
        if (headerDisappearing.classList.contains('d-none-scroll')) {
            isTransitioning = true;
            headerDisappearing.classList.remove('d-none-scroll');

            // Rimuoviamo la classe "forza mostra" per farlo tornare al comportamento CSS
            if (navbarTitle) {
                navbarTitle.classList.remove('force-show');
            }

            setTimeout(() => { isTransitioning = false; }, 350);
        }
    }
}

// Ascolta lo scorrimento della pagina
window.addEventListener('scroll', handleHeaderVisibility);

// Ascolta il cambio di dimensione della finestra
window.addEventListener('resize', handleHeaderVisibility);

// Esegui al caricamento per impostare lo stato iniziale corretto
document.addEventListener('DOMContentLoaded', handleHeaderVisibility);










document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('loadMoreBtn');
    const extraContent = document.getElementById('extraContent');
    const wrapper = document.getElementById('showMoreWrapper');

    if (btn) {
        btn.addEventListener('click', function() {
            extraContent.classList.remove('d-none');
            wrapper.classList.add('d-none');
        });
    }
});







