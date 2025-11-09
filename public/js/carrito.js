class Carrito{
    // Clave para guardar en localStorage
    static CLAVE_CARRITO = "carrito_de_skins";

    // 1. Obtiene los items del localStorage
    static obtenerItems() {
        // Si no hay nada, devuelve un array vacío
        const items = localStorage.getItem(Carrito.CLAVE_CARRITO);
        return items ? JSON.parse(items) : [];
    }

    // 2. Agrega un item
    static agregarItem(itemNuevo) {
        const carrito = Carrito.obtenerItems();

        

        carrito.push(itemNuevo);
        Carrito.guardar(carrito);
    }

    // 3. Guarda el carrito en localStorage
    static guardar(carrito) {
        localStorage.setItem(Carrito.CLAVE_CARRITO, JSON.stringify(carrito));
    }

    static sacar(id){
        const carrito = Carrito.obtenerItems();
        const idNumerico= parseInt(id);
        const nuevoCarrito = carrito.filter(item => item.id !== idNumerico);
        Carrito.guardar(nuevoCarrito);
    }
}