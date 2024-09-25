// Seleccionamos todas las diapositivas del carrusel
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
let currentSlideIndex = 0;

// Función para mostrar la diapositiva actual
function showSlide(index) {
    // Eliminamos la clase "active" de todas las diapositivas
    slides.forEach((slide) => slide.classList.remove('active'));
    
    // Agregamos la clase "active" solo a la diapositiva actual
    slides[index].classList.add('active');
}

// Función para mostrar la siguiente diapositiva
nextButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
});

// Función para mostrar la diapositiva anterior
prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
});

// Mostramos la primera diapositiva al cargar la página
showSlide(currentSlideIndex);

// Slider de productos
const productosSlider = document.querySelector('.productos-slider');
const prevProdBtn = document.querySelector('.prev-prod');
const nextProdBtn = document.querySelector('.next-prod');
let scrollAmount = 0;

nextProdBtn.addEventListener('click', () => {
    productosSlider.scrollBy({ left: 300, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

    // Actualizar el ítem activo en el menú inferior
    bottomNavItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            bottomNavItems.forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');
        });
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

// Resto de tu código JavaScript existente...