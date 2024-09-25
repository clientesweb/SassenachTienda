// Funcionalidad para "Añadir al Carrito"
const botonesComprar = document.querySelectorAll('.btn-comprar');

botonesComprar.forEach(boton => {
    boton.addEventListener('click', () => {
        alert('Producto añadido al carrito');
        // Aquí puedes añadir más lógica para gestionar el carrito.
    });
});
