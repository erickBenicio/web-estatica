
    document.addEventListener("DOMContentLoaded", () => {
        //guardo en variables cada elemento que voy a usar del HTML
        const contenedor = document.getElementById("contenedor-skins");
        const filtroRareza = document.getElementById("filtro-rareza");
        let skinsData = [];  // para almacenar el JSON completo
        const contenedorNoti = document.getElementById("contenedor-notificaciones");

    fetch('api/v1/skins')// fetch inicia una peticion para buscar el archivo skins.json

        .then(res => res.json())//Cuando la peticion termine, convierte el el texto recibido a un .json
        .then(data => {
            skinsData = data;  
            mostrarSkins(skinsData);  
        })
        .catch(err => {
            console.error("Error al cargar skins:", err);
            contenedor.innerHTML = "<p>No se pueden mostrar skins.</p>";
        });

        //Agrego la funcionalidad al filtrado por rareza
        filtroRareza.addEventListener("change", () => {
            const seleccion = filtroRareza.value;//Recupero la rareza deseada
            let filtradas;
            if (seleccion === "todas") {
                filtradas = skinsData; //Si la rareza son todas, muestro normal
            } else {
                filtradas = skinsData.filter(skin => skin.rareza === seleccion); //Sino agrupo a las que cumplen la cond.
            }
            mostrarSkins(filtradas);//muestro a todas las que cumplieron la cond. 
        });

        //mostrarSkins muestra las tarjetas en el html, lista sera el .json con las skins solicitadas a mostrar
        function mostrarSkins(lista) {
            contenedor.innerHTML = "";  
            lista.forEach(skin => {  //bucle para recorrer cada skins de la lista
                const card = document.createElement("div"); //creo un nuevo div en memoria
                card.classList.add("card"); //le agrego el estilo CSS card

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
                
                 //boton contiene al elemento botonComprar de cada tarjeta
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
            })
            
        }});



       