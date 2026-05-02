/*=======================================================================
    GESTIONE IMPEDIMENTO DI APERURA CONTEMPORANEA DEI NAVBAR E SEARCH BAR
========================================================================*/
document.addEventListener('DOMContentLoaded', () => {
    const allSwitchers = document.querySelectorAll(
        '#header__firstBlock__nav-menu-switcher, #header__thirdBlock__nav-menu-switcher, #header__fourthBlock__nav-menu-switcher'
    );

    allSwitchers.forEach(sw => {
        sw.addEventListener('change', function() {
            if (this.checked) {
                allSwitchers.forEach(other => {
                    if (other !== this) {
                        other.checked = false;
                    }
                });
                if (this.id === 'search-top-switcher') {
                    setTimeout(() => {
                        const searchInput = document.querySelector('.header__fourthBlock__search-custom-topbar input');
                        if (searchInput) searchInput.focus();
                    }, 300);
                }
            }
        });
    });
});

/*======================================================
    GESTIONE CHIUSURA CON BACKDROP
=======================================================*/
document.addEventListener('DOMContentLoaded', () => {
    const backdrop = document.getElementById('leftSidebarBackdrop');
    const switcher = document.getElementById('header__firstBlock__nav-menu-switcher');

    if (backdrop && switcher) {
        backdrop.addEventListener('click', () => {
            switcher.checked = false;
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const backdrop = document.getElementById('rightSidebarBackdrop');
    const switcher = document.getElementById('header__thirdBlock__nav-menu-switcher');

    if (backdrop && switcher) {
        backdrop.addEventListener('click', () => {
            switcher.checked = false;
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const searchBackdrop = document.getElementById('searchBackdrop');
    const menuSwitcher = document.getElementById('header__fourthBlock__nav-menu-switcher');

    if (searchBackdrop && menuSwitcher) {
        searchBackdrop.addEventListener('click', () => {
            menuSwitcher.checked = false;
        });
    }
});

/*===============================================================================================================
    GESTIONE headerContainer__disappearingContainer PER LA SCOMPARSA QUANDO SCENDO SOTTO I 64PX SULLA SCROLL BAR
================================================================================================================*/
function handleHeaderVisibility() {
    const header = document.querySelector('.header__sticky-part');
    const headerDisappearing = document.getElementById('headerContainer__disappearingContainer');
    const navbarTitle = document.getElementById('navbar-title-first-row');

    if (!header || !headerDisappearing) return;

    const isDesktop = window.innerWidth >= 1040;
    const currentScroll = window.scrollY;

    if (currentScroll > 54) {
        header.classList.add('is-sticky');
    } else {
        header.classList.remove('is-sticky');
    }

    if (currentScroll > 54) {
        if (!headerDisappearing.classList.contains('d-none-scroll')) {
            headerDisappearing.classList.add('d-none-scroll');

            if (isDesktop && navbarTitle) {
                navbarTitle.classList.add('force-show');
            }
        }
    }
    else if (currentScroll <= 54) {
        if (headerDisappearing.classList.contains('d-none-scroll')) {
            headerDisappearing.classList.remove('d-none-scroll');

            if (navbarTitle) {
                navbarTitle.classList.remove('force-show');
            }
        }
    }
}

window.addEventListener('scroll', handleHeaderVisibility);
window.addEventListener('resize', handleHeaderVisibility);
document.addEventListener('DOMContentLoaded', handleHeaderVisibility);

/*=================================================================
    GESTIONE APERTURA DI EXSTRA CONTENT NE FOURTH BLOCK
====================================================================*/
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


/*====================================================================================
    GESTIONE SPOSTAMENTO CON BOTTONI NEL UPCOMING EVENTS DEL SIXTH BLOCK
=====================================================================================*/
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.sixthBlock__eventsContainer__mainCenter');
    const btnLeft = document.getElementById('sixthBlock__sideBox__leftButton');
    const btnRight = document.getElementById('sixthBlock__sideBox__rightButton');

    const getScrollStep = () => {
        return slider ? slider.offsetWidth : 300;
    };

    btnRight.addEventListener('click', () => {
        slider.scrollLeft += getScrollStep();
    });

    btnLeft.addEventListener('click', () => {
        slider.scrollLeft -= getScrollStep();
    });
});

/*====================================================================================
    GESTIONE DATE VISIBILI NEL UPCOMING EVENTS DEL SIXTH BLOCK
=====================================================================================*/
function updateVisibleDates() {
    const track = document.querySelector('.sixthblock__footer__datesContainer');
    const items = track.querySelectorAll('.sixthblock__footer__dateItem');

    const containerWidth = track.offsetWidth;
    let currentWidth = 0;

    items.forEach(item => {
        const itemWidth = item.offsetWidth;
        currentWidth += itemWidth;
        if (currentWidth > containerWidth) {
            item.style.visibility = 'hidden';
            item.style.pointerEvents = 'none';
        } else {
            item.style.visibility = 'visible';
            item.style.pointerEvents = 'auto';
        }
    });
}

window.addEventListener('load', updateVisibleDates);
window.addEventListener('resize', updateVisibleDates);


/*====================================================================
    GESTIONE DEL COLLAPSE CONTAINER NEL FOOTER TOP
===========================================================================*/

document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.menu-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const parent = this.closest('.footerTop__first__collapseContainer');
            const menu = parent.querySelector('.customMenuContainer');
            const icon = this.querySelector('.collapse__icon');

            menu.classList.toggle('is-open');
            icon.classList.toggle('is-open');
        });
    });
});

/*================================================================================
    CHIUSURA MAIN TOP BANNER E FOOTER BOTTOM CONTAINER
=================================================================================*/

document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('footerContainer');
    const closeFooterBtn = document.getElementById('closeFooterButton');

    if (footerContainer && closeFooterBtn) {
        closeFooterBtn.addEventListener('click', () => {
            footerContainer.classList.add('is-hidden');
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('topBanner');
    const closeBtn = document.getElementById('closeBannerButton');

    if (banner && closeBtn) {
        closeBtn.addEventListener('click', () => {
            banner.classList.add('is-hidden');
        });
    }
});