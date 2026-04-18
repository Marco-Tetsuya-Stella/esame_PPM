// JavaScript per evitare che entrambe le navbar/offcanvas siano contemporaneaemente aperte

const switchers = document.querySelectorAll('#leftNav-menu-switcher, #navRight-menu-switcher');

switchers.forEach(sw => {
    sw.addEventListener('change', function() {
        if (this.checked) {
            // Se accendo questo, spengo tutti gli altri
            switchers.forEach(other => {
                if (other !== this) other.checked = false;
            });
        }
    });
})