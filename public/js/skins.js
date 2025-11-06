// Archivo: skins.js
       //Codigo filtro para el market

    document.addEventListener("DOMContentLoaded", () => {
        const contenedor = document.getElementById("contenedor-skins");
        const filtroRareza = document.getElementById("filtro-rareza");
        let skinsData = [];  // para almacenar el JSON completo
        const contenedorNoti = document.getElementById("contenedor-notificaciones");

    fetch('./data/skins.json')
        .then(res => res.json())
        .then(data => {
            skinsData = data;  // guardo todos los datos
            mostrarSkins(skinsData);  // muestro todas al inicio
        })
        .catch(err => {
            console.error("Error al cargar skins:", err);
            contenedor.innerHTML = "<p>No se pueden mostrar skins.</p>";
        });

        filtroRareza.addEventListener("change", () => {
            const seleccion = filtroRareza.value;
            let filtradas;
            if (seleccion === "todas") {
                filtradas = skinsData;
            } else {
                filtradas = skinsData.filter(skin => skin.rareza === seleccion);
            }
            mostrarSkins(filtradas);
        });

        function mostrarSkins(lista) {
            contenedor.innerHTML = "";  // limpio el contenedor
            lista.forEach(skin => {  // ← CAMBIO CLAVE
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                <img src="${skin.imagen}" alt="${skin.titulo}">
                <div class="title">${skin.titulo}</div>
                <div class="price">${skin.precio.toLocaleString()} coins</div>
                <div class="details">${skin.detalle}</div>
                <div class="tag ${skin.rareza}">
                ${skin.rareza.charAt(0).toUpperCase() + skin.rareza.slice(1)}
                </div>
                `;

                card.addEventListener("click", () => {
                    const mensaje = document.createElement("div");
                    mensaje.textContent = `Agregada con exito`;
                    mensaje.classList.add("notificacion");
                    contenedorNoti.appendChild(mensaje);
                    setTimeout(() => {
                        mensaje.remove();
                    },2000);
                })

                contenedor.appendChild(card);
            })
            
        }});



       