 const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const imgs = document.querySelectorAll('.zoomable');

    imgs.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
        });
    });

    // Cerrar al hacer clic fuera de la imagen
    modal.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
