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
const prevProdBtn = document.querySelector('.prev-prod');
const nextProdBtn = document.querySelector('.next-prod');
let scrollAmount = 0;

nextProdBtn.addEventListener('click', () => {
    productosSlider.scrollBy({ left: 300, behavior: 'smooth' });
});

prevProdBtn.addEventListener('click', () => {
    productosSlider.scrollBy({ left: -300, behavior: 'smooth' });
});
// Menú hamburguesa
const mobileMenu = document.querySelector('#mobile-menu');
const navbarMenu = document.querySelector('.navbar ul');

mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
});