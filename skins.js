// Archivo: skins.js
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-skins");
    const contenedorNoti = document.getElementById("contenedor-notificaciones");

    fetch("skins.json")
        .then(response => {
            if (!response.ok) throw new Error("Error al cargar el archivo JSON");
            return response.json();
        })
        .then(data => {
            console.log("Datos cargados:", data); // Para verificar
            data.forEach(skin => {  // ← CAMBIO CLAVE
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
                <div class= "botonComprar">Comprar</div>
                `;

                //Esta constante tendra al elemento boton que luego se le asignara un evento
                const boton = card.querySelector(".botonComprar");

                //A boton se le da la funcionalidad de poder agregar ese articulo al futuro carrito
                boton.addEventListener("click", () => {
                    Carrito.agregarItem(skin);
                    const mensaje = document.createElement("div");
                    mensaje.textContent = `Agregada con exito`;
                    mensaje.classList.add("notificacion");
                    contenedorNoti.appendChild(mensaje);
                    setTimeout(() => {
                        mensaje.remove();
                    },2000);
                })

                contenedor.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error al cargar las skins:", error);
            contenedor.innerHTML = "<p>No se pudieron cargar las skins.</p>";
        });
});


       