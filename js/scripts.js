document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);
    setInterval(nextSlide, 5000);
});

    // Slider de Productos
    const productSlider = document.querySelector('.productos-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    productSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - productSlider.offsetLeft;
        scrollLeft = productSlider.scrollLeft;
    });

    productSlider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    productSlider.addEventListener('mouseup', () => {
        isDown = false;
    });

    productSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - productSlider.offsetLeft;
        const walk = (x - startX) * 2;
        productSlider.scrollLeft = scrollLeft - walk;
    });

    // Scroll suave para dispositivos táctiles
    productSlider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - productSlider.offsetLeft;
        scrollLeft = productSlider.scrollLeft;
    });

    productSlider.addEventListener('touchmove', (e) => {
        if (!startX) return;
        const x = e.touches[0].pageX - productSlider.offsetLeft;
        const walk = (x - startX) * 2;
        productSlider.scrollLeft = scrollLeft - walk;
    });

    // ... (código posterior sin cambios) ...
});

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