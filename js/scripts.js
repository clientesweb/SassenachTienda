// Seleccionamos todas las imágenes del carrusel
const carouselImages = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
let currentImageIndex = 0;

function showImage(index) {
    // Removemos la clase "active" de todas las imágenes
    carouselImages.forEach((img) => img.classList.remove('active'));
    
    // Solo mostramos la imagen actual
    carouselImages[index].classList.add('active');
}

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    showImage(currentImageIndex);
});

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentImageIndex);
});

// Mostrar la primera imagen al cargar la página
showImage(currentImageIndex);
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
