document.addEventListener("DOMContentLoaded", () => {
    function activateCurrentLink() {
        const current = location.pathname.split("/").pop();
        const links = document.querySelectorAll("nav a");

        links.forEach(link => {
            const href = link.getAttribute("href");
            if (href === current) {
                link.classList.add("active");
            }
        });
    }

    // Le damos un delay para asegurar que los componentes ya están cargados
    setTimeout(activateCurrentLink, 50);
});
