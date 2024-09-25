document.addEventListener('DOMContentLoaded', function() {
    // Carrusel
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000); // Cambia de slide cada 5 segundos
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopSlideshow();
        startSlideshow();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopSlideshow();
        startSlideshow();
    });

    startSlideshow();

    // Slider de Productos
    const productSlider = document.querySelector('.productos-slider');
    const prevProdBtn = document.querySelector('.prev-prod');
    const nextProdBtn = document.querySelector('.next-prod');
    let slidePosition = 0;

    function moveSlider(direction) {
        const slideWidth = document.querySelector('.producto').offsetWidth + 20; // Ancho del producto + gap
        const maxSlidePosition = productSlider.scrollWidth - productSlider.clientWidth;

        if (direction === 'next') {
            slidePosition = Math.min(slidePosition + slideWidth, maxSlidePosition);
        } else {
            slidePosition = Math.max(slidePosition - slideWidth, 0);
        }

        productSlider.style.transform = `translateX(-${slidePosition}px)`;
    }

    prevProdBtn.addEventListener('click', () => moveSlider('prev'));
    nextProdBtn.addEventListener('click', () => moveSlider('next'));

    // Menú inferior
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

    bottomNavItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            bottomNavItems.forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');
            
            // Desplazamiento suave a la sección correspondiente
            const targetId = item.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Actualizar ítem activo del menú inferior al hacer scroll
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
});