document.addEventListener("DOMContentLoaded", () => {
    const sectionCuchillos = document.getElementById('seccion-cuchillos');
    const sectionRifles = document.getElementById('seccion-rifles');
    const sectionAwps = document.getElementById('seccion-awps');

    fetch('./data/skins.json')
        .then(res => res.json())

        .then(data => {
            const cuchillos = data.filter(skin => skin.tipo === 'knife');
            const rifles = data.filter(skin => skin.tipo === 'rifle');
            const awps = data.filter(skin => skin.tipo === 'awp');
            cargarCuchillos(cuchillos);
            cargarRifles(rifles);
            cargarAWPs(awps);

            console.log(cuchillos, rifles, awps);
        })
        .catch(err => {
            console.error(err);
            sectionCuchillos.innerHTML = '<p>Error al cargar las skins.</p>';
            sectionRifles.innerHTML = '<p>Error al cargar las skins.</p>';
            sectionAwps.innerHTML = '<p>Error al cargar las skins.</p>';
        });

        function cargarCuchillos(cuchillos) {
            let indice = 0;
            
            const grid = sectionCuchillos.querySelector('.grid');
            cuchillos.forEach(skin => {
                const card = document.createElement('article');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${skin.imagen}" alt="${skin.titulo}" class="imagen">
                    <h3 class="titulo-card">${skin.titulo}</h3>
                    <p class="precio-card">${skin.precio.toLocaleString()} coins</p>
                `;
                grid.appendChild(card);
            })
        }

        function cargarRifles(rifles) {
            const grid = sectionRifles.querySelector('.grid');
            rifles.forEach(skin => {
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

        function cargarAWPs(awps) { 
            const grid = sectionAwps.querySelector('.grid');    
            awps.forEach(skin => {
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
});