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
    const contCalculoPrecios = document.querySelector('.cuerpoCalculosPrecio')
    const contCalculos = document.querySelector('.cuerpoCalculosPrecio');

    // 2. Obtener los items del carritoLogica.js
    const carritoItems = Carrito.obtenerItems();

    // logica para saber si hay items o no
    if (carritoItems.length === 0) {
        // --- CARRITO VACÍO ---
        contCarritoLleno.classList.add('oculto'); 
        contCalculoPrecios.classList.add('oculto'); //Si el carro esta vacio remuevo el calculo de precios
        contCarritoVacio.classList.remove('oculto');
    } else {
        // --- CARRITO CON ITEMS ---
        contCarritoLleno.classList.remove('oculto'); 
        contCalculoPrecios.classList.remove('oculto');//Si el carro tiene al menos un item agrego el calculo de precios
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


//Se llama a la renderizacion luego de cargar todo el HTML
document.addEventListener("DOMContentLoaded", () => {
    renderizarPaginaCarrito();
});