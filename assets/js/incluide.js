document.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll("[data-include]");

    includes.forEach(el => {
        const file = el.getAttribute("data-include");

        fetch(file)
            .then(res => res.text())
            .then(html => {
                // Crear un contenedor temporal
                const temp = document.createElement("div");
                temp.innerHTML = html;

                // Reemplazar el elemento original por el contenido del archivo
                el.replaceWith(...temp.childNodes);
            })
            .catch(err =>
                console.error("Error cargando componente:", file, err)
            );
    });
});
