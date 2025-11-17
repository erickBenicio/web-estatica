class Carrito{
    // Clave para guardar en localStorage
    static CLAVE_CARRITO = "carrito_de_skins";

    // 1. Obtiene los items del localStorage
    static obtenerItems() {
        // Si no hay nada, devuelve un array vacío
        const items = localStorage.getItem(Carrito.CLAVE_CARRITO);
        //Si no es vacia devuelvo un array de items, sino devuelvo un array vacio
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
        //JSON.stringify es usado ya que el localStorage solo acepta texto, entonces esta funcion convierte el array a String
    }

    //4. Elimina del carrito un item
    static sacar(id){
        const carrito = Carrito.obtenerItems();
        //parseInt para asegurar que el id se lea como un numero y no texto que aveces puede suceder al sacarlo del HTML
        const idNumerico= parseInt(id);
        
        //defino a .filter como una funcion que solo agregara a la nueva lista a los items que no sean iguales en id a idNumerico
        const nuevoCarrito = carrito.filter(item => item.id !== idNumerico);
        Carrito.guardar(nuevoCarrito);
    }
}