// JavaScript per evitare che entrambe le navbar/offcanvas e search bar siano contemporaneaemente aperte
document.addEventListener('DOMContentLoaded', () => {
    // 1. Selezioniamo tutti gli switcher (Checkbox) in un'unica costante
    const allSwitchers = document.querySelectorAll(
        '#header__firstBlock__nav-menu-switcher, #header__thirdBlock__nav-menu-switcher, #header__fourthBlock__nav-menu-switcher'
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
                        const searchInput = document.querySelector('.header__fourthBlock__search-custom-topbar input');
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
    const btn = document.getElementById('showMoreButton');
    const extraContent = document.getElementById('extraContent');
    const wrapper = document.getElementById('showMoreContainer');

    if (btn) {
        btn.addEventListener('click', function() {
            extraContent.classList.remove('d-none');
            wrapper.classList.add('d-none');
        });
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.sixthBlock__eventsContainer__mainCenter');
    const btnLeft = document.getElementById('sixthBlock__sideBox__leftButton');
    const btnRight = document.getElementById('sixthBlock__sideBox__rightButton');

    // Funzione che calcola la larghezza visibile del blocco centrale
    const getScrollStep = () => {
        // slider.offsetWidth restituisce la larghezza esatta del div .main-center
        return slider ? slider.offsetWidth : 300;
    };

    btnRight.addEventListener('click', () => {
        // Sposta lo scroll a destra dell'intera larghezza visibile
        slider.scrollLeft += getScrollStep();
    });

    btnLeft.addEventListener('click', () => {
        // Sposta lo scroll a sinistra dell'intera larghezza visibile
        slider.scrollLeft -= getScrollStep();
    });
});


function updateVisibleDates() {
    const track = document.querySelector('.sixthblock__footer__datesContainer');
    const items = track.querySelectorAll('.sixthblock__footer__dateItem');

    // Larghezza totale disponibile nel contenitore
    const containerWidth = track.offsetWidth;
    let currentWidth = 0;

    items.forEach(item => {
        // Calcoliamo la larghezza dell'elemento incluso il margine/gap
        const itemWidth = item.offsetWidth;
        currentWidth += itemWidth;

        if (currentWidth > containerWidth) {
            // Se la somma supera il contenitore, nascondi l'elemento
            item.style.visibility = 'hidden';
            item.style.pointerEvents = 'none'; // Rende l'elemento non cliccabile
        } else {
            // Altrimenti mostralo
            item.style.visibility = 'visible';
            item.style.pointerEvents = 'auto';
        }
    });
}

// Esegui la funzione al caricamento e ogni volta che ridimensioni la finestra
window.addEventListener('load', updateVisibleDates);
window.addEventListener('resize', updateVisibleDates);




document.addEventListener('DOMContentLoaded', () => {
    // 1. Selezioniamo tutti i trigger (le icone/pulsanti)
    const triggers = document.querySelectorAll('.menu-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            // 2. Troviamo il contenitore padre più vicino (il div .footer-item)
            const parent = this.closest('.footerTop__first__collapseContainer');

            // 3. All'interno di quel padre, cerchiamo il menu e l'icona
            const menu = parent.querySelector('.customMenuContainer');
            const icon = this.querySelector('.collapse__icon');

            // 4. Toggle delle classi (Aggiunge se non c'è, toglie se c'è)
            menu.classList.toggle('is-open');
            icon.classList.toggle('is-open');
        });
    });
});


function closeContainer() {
    document.getElementById('footerContainer').classList.add('is-hidden');
}

