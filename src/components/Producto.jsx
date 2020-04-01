import React from 'react';

const Producto = ({producto, productos, setProducto, carrito}) => {

    const {id, nombre, precio} = producto;

    // Agregar producto al carrito
    const selectProduct = (id) => {
        const producto = productos.filter(producto => producto.id === id)[0];
        setProducto([
            ...carrito,
            producto
        ]);
    }

    // Quitar producto del carrito
    const quitProduct = (id) => {
        const newCarrito = carrito.filter(producto => producto.id !== id);
        setProducto(
            newCarrito
        );
    }

    return(
        <div>
            <h3>{nombre}</h3>
            <h5>${precio}</h5>
            {productos
                ?
                    <button
                        type='button'
                        onClick={ () => selectProduct(id) }
                    >Comprar</button>
                :
                    <button
                        type='button'
                        onClick={ () => quitProduct(id) }
                    >Eliminar</button>
            }
        </div>
    
    );
}

export default Producto;