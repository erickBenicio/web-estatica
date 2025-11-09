 /*
    FALTA
    *CORREGIR BUG AL TODOS LOS SKINS DEL MISMO TIPO TIENEN LA MISMA ID, ENTONCES AL BORRAR UNO SE BORRAN TODOS
    *EL CARRITO NO ELIMINA TODOS LOS ITEMS DE MANERA VISUAL, SIEMPRE DEJA 1 VISIBLE AUNQUE EL LOCALSTORAGE ESTE VACIO
 
 */
function renderizarPaginaCarrito() {
    
    // 1. Seleccionar todos los contenedores
    const contCarritoLleno = document.querySelector('.carrito-lleno');
    const contCarritoVacio = document.querySelector('.carrito-vacio');
    const contColumnaItems = document.querySelector('.columnaItems'); 
    const contCalculos = document.querySelector('.cuerpoCalculosPrecio');

    // 2. Obtener los items del carritoLogica.js
    const carritoItems = Carrito.obtenerItems();

    // logica para saber si hay items o no
    if (carritoItems.length === 0) {
        // --- CARRITO VACÍO ---
        contCarritoLleno.classList.add('oculto');
        contCarritoVacio.classList.remove('oculto');
    } else {
        // --- CARRITO CON ITEMS ---
        contCarritoLleno.classList.remove('oculto');
        contCarritoVacio.classList.add('oculto');

        // seleccionar los items
        contColumnaItems.innerHTML = '';
        let subtotal = 0;

        // Recorro el array y creo el HTML para cada item
        carritoItems.forEach(item => {
            subtotal += item.precio;

          
            const cardHTML = `
                <div class="cardCarrito"> 
                    <div class= "imgYNombre"> 
                        <img src="${item.imagen}" alt="${item.titulo}" class="imagenArma">
                        <div class="nombre">${item.titulo}</div>
                    </div>
                    <div class="precio">${item.precio.toLocaleString()}$</div>
                    
                    <div class="botonQuitar" data-id="${item.id}">X</div>
                </div>
            `;
            
            contColumnaItems.innerHTML += cardHTML;

            
        });

    
        const elImpuesto = contCalculos.querySelector('.impuesto');
        const elTotal = contCalculos.querySelector('.totalMontoCompra');
        const impuesto = subtotal * 0.05;
        const totalFinal = subtotal + impuesto;

        elImpuesto.innerHTML = `Impuesto (5%): <span>${impuesto.toLocaleString()} coins</span>`;
        elTotal.innerHTML = `Total: <strong>${totalFinal.toLocaleString()} coins</strong>`;

        //  Asignar eventos a los botones CREADOS
        const botonesQuitar = document.querySelectorAll(".botonQuitar"); 
        botonesQuitar.forEach(boton => {
            boton.addEventListener('click', () => {
                const idParaQuitar = boton.dataset.id;
                
                
                Carrito.sacar(idParaQuitar);
                
               
                renderizarPaginaCarrito();
            });
        });
    }
} 

// -----------------------------------------------------------------
// CAMBIO 1 (Continuación):
// Ahora que la función está definida, SÓLO usamos
// el DOMContentLoaded para llamarla una vez.
// -----------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    renderizarPaginaCarrito();
});