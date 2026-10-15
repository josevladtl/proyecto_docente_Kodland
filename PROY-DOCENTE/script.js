
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FUNCIONALIDAD MENÚ DESPLEGABLE 
    const menuToggle = document.getElementById('menuToggle');
    const heroMenu = document.getElementById('heroMenu');

    if (menuToggle && heroMenu) {
        menuToggle.addEventListener('click', () => {
            
            heroMenu.classList.toggle('hero__menu--open');
        });
    }

    // BOTONES DE COMPRA
    
    const botonesComprar = document.querySelectorAll('.btn-buy, .product-card__button, .hero__button');
    
    botonesComprar.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            
            const tarjetaProducto = e.target.closest('.product-card');
            let nombreProducto = "Pop It Premium";
            
            if (tarjetaProducto) {
                nombreProducto = tarjetaProducto.querySelector('.product-card__name').textContent;
            }

            
            const textoOriginal = boton.textContent;
            boton.textContent = "PROCESANDO...";
            boton.disabled = true;
            boton.style.opacity = "0.7";

            setTimeout(() => {
                
                boton.textContent = "¡AÑADIDO! ✓";
                boton.style.backgroundColor = "#a8e6cf"; 
                boton.style.color = "#333";
                boton.style.opacity = "1";
                
                
                console.log(`[Carrito]: El producto "${nombreProducto}" ha sido enviado al sistema de checkout.`);
                
                // Restaura el botón a su estado original en 4 segundos
                setTimeout(() => {
                    boton.textContent = textoOriginal;
                    boton.style.backgroundColor = "";
                    boton.style.color = "";
                    boton.disabled = false;
                    boton.style.opacity = "";
                }, 4000);

            }, 1000);
        });
    });
});
