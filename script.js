// -------------------------------------------------------------------
// SCRIPT.JS - FUNCIONALIDADES PARA EVEREST METAL FABRICATIONS LTD
// Incluye manejo de modales para galería y promoción.
// -------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {

    // Función auxiliar para crear y mostrar el modal de manera dinámica
    const showModal = (modalClass, contentHTML) => {
        const modal = document.createElement('div');
        // El modalClass puede ser 'modal' (galería) o 'coupon-modal' (promoción)
        modal.className = modalClass;
        modal.innerHTML = contentHTML;
        
        // Cierra el modal al hacer clic en el fondo oscuro
        modal.addEventListener('click', e => {
            // Se asegura de que solo se cierre si el clic es directamente en el fondo del modal, no en el contenido (coupon-content o la imagen grande)
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        document.body.appendChild(modal);
    };

    // 🔹 1. Galería interactiva (Ampliar imagen al hacer clic)
    document.querySelectorAll('.gallery-grid img').forEach(img => {
        img.addEventListener('click', () => {
            // El contenido del modal es solo la imagen clickeada
            const content = `<img src="${img.src}" alt="${img.alt}">`;
            showModal('modal', content);
        });
    });

    // 🔹 2. Botón de promoción (Mostrar modal de cupón)
    const promoButton = document.getElementById('promoButton');
    if (promoButton) {
        promoButton.addEventListener('click', () => {
            // Contenido del cupón actualizado al inglés y con dos imágenes
            const couponContent = `
                <div class="coupon-content">
                    <!-- Imagen Izquierda (gato1) -->
                    <img src="img/gato1.jpg" onerror="this.onerror=null;this.src='https://placehold.co/100x100/9c27b0/fff?text=🎁+Discount'" alt="Promotional Image 1">
                    
                    <div class="coupon-text">
                        <h2>🐾 Thanks for visiting our page! 🐾</h2>
                        <p>For your visit, we give you a <strong>7% discount</strong> on your first service.</p>
                        <div class="coupon-code">Coupon: <span>EVEREST7</span></div>
                    </div>
                    
                    <!-- Imagen Derecha (gato2) -->
                    <img src="img/gato2.jpg" onerror="this.onerror=null;this.src='https://placehold.co/100x100/9c27b0/fff?text=⭐+Deal'" alt="Promotional Image 2">
                </div>
            `;
            showModal('coupon-modal', couponContent);
        });
    }
});
