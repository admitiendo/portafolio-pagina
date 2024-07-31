(function () {
    "use strict";
    window.addEventListener('load', () => {
        document.body.style.overflow = 'hidden';
        const loadingText = document.getElementById('loading-text');
        const text = 'Cargando la informacion...';
        let index = 0;
        const writeText = () => {
            if (index < text.length) {
                loadingText.textContent += text[index];
                index++;
                setTimeout(writeText, 50);
            }
        };
        writeText();
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.style.overflow = '';
            }, 250);
        }, 2500);
    });
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)

        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }
    const scrollto = (el) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });
            let portfolioFilters = select('#portfolio-flters li', true);
            on('click', '#portfolio-flters li', function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');
                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
            }, true);
            let filterWeb = select('#portfolio-flters li[data-filter=".filter-web"]');
            if (filterWeb) {
                filterWeb.click();
            }
        }
    });
})()

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

const boton = document.getElementById('button-discord');
boton.addEventListener('click', function () {
    Swal.fire({
        icon: 'success',
        title: 'ID COPIADA',
        color: "#ff6a77",
        background: "rgb(30,30,30)",
        confirmButtonColor: "#ff6a77",
        width: 300,
    })
});