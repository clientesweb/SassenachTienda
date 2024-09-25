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
// Funcionalidad para "Añadir al Carrito"
const botonesComprar = document.querySelectorAll('.btn-comprar');

botonesComprar.forEach(boton => {
    boton.addEventListener('click', () => {
        alert('Producto añadido al carrito');
        // Aquí puedes añadir más lógica para gestionar el carrito.
    });
});
// Menú hamburguesa
const mobileMenu = document.querySelector('#mobile-menu');
const navbarMenu = document.querySelector('.navbar ul');

mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
});