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

prevProdBtn.addEventListener('click', () => {
    productosSlider.scrollBy({ left: -300, behavior: 'smooth' });
});
const menuToggle = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});