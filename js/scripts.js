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