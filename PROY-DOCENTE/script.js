// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionar todos los botones de compra del sitio
    const botonesComprar = document.querySelectorAll('button');

    botonesComprar.forEach((boton) => {
        boton.addEventListener('click', () => {
            alert('¡Gracias por tu interés! Este Pop It se ha añadido a tu carrito.');
        });
    });
});