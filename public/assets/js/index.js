document.addEventListener("DOMContentLoaded", () => {
    const sectionCuchillos = document.getElementById('seccion-cuchillos');
    const sectionRifles = document.getElementById('seccion-rifles');
    const sectionAwps = document.getElementById('seccion-awps');

    function cargarSkins(seccionElement, skinsArray) {
        const skinsLimit = skinsArray.slice(0, 4);

        const grid = seccionElement.querySelector('.grid');
        grid.innerHTML = ''; 

        skinsLimit.forEach(skin => {
            const card = document.createElement('article');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${skin.imagen}" alt="${skin.titulo}" class="imagen">
                <h3 class="titulo-card">${skin.titulo}</h3>
                <p class="precio-card">${skin.precio.toLocaleString()} coins</p>
            `;
            grid.appendChild(card);
        });
    }

    fetch('/api/v1/skins')
        .then(res => res.json())

        .then(data => {
            const cuchillos = data.filter(skin => skin.tipo === 'knife');
            const rifles = data.filter(skin => skin.tipo === 'rifle');
            const awps = data.filter(skin => skin.tipo === 'awp');
            cargarSkins(sectionCuchillos, cuchillos);
            cargarSkins(sectionRifles, rifles);
            cargarSkins(sectionAwps, awps);
        })
        .catch(err => {
            console.error(err);
            sectionCuchillos.innerHTML = '<p>Error al cargar las skins.</p>';
        });
});