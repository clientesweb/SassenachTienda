// Funcionalidad del carrusel
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % 3;  // Suponemos que hay 3 slides
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + 3) % 3;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
});

// Slider de productos
const productosSlider = document.querySelector('.productos-slider');
productosSlider.addEventListener('wheel', (e) => {
    e.preventDefault();
    productosSlider.scrollLeft += e.deltaY * 10;  // Desplazamiento horizontal con el scroll
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        this.classList.toggle('active');

        if (this.classList.contains('active')) {
            this.setAttribute('aria-expanded', 'true');
        } else {
            this.setAttribute('aria-expanded', 'false');
        }
    });

    // Cerrar el menú al hacer clic en un enlace (para móviles)
    const navLinks = document.querySelectorAll('.navbar a, .bottom-nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navbar.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Actualizar el ítem activo en el menú inferior
    bottomNavItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            bottomNavItems.forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Manejar cambios de tamaño de ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navbar.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Manejar el desplazamiento para resaltar el ítem activo en el menú inferior
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const correspondingNavItem = document.querySelector(`.bottom-nav-item[href="#${section.id}"]`);
                if (correspondingNavItem) {
                    bottomNavItems.forEach(item => item.classList.remove('active'));
                    correspondingNavItem.classList.add('active');
                }
            }
        });
    });

    // Aquí puedes agregar el código existente para el carrusel y el slider de productos
});

// Resto de tu código JavaScript existente..