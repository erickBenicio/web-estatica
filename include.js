function includeHTML() {
    const includes = document.querySelectorAll('[data-include]');

    includes.forEach(el => {
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(response => response.text())
            .then(data => {
                el.innerHTML = data;
            })
            .catch(err => console.error("Error cargando include:", err));
    });
}

// Llama a la función cuando se cargue la página
document.addEventListener("DOMContentLoaded", includeHTML);