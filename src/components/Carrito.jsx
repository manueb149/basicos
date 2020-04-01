import React from 'react';
import './carrito.css'
import Producto from './Producto';

const Carrito = ({carrito, setProducto}) => {
    return ( 
        <div className="carrito">
            <h2>Tu Carrito de compras</h2>

            {carrito.length === 0
                ?<p>No hay nada en el carrito</p>

                :carrito.map( producto => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                        carrito={carrito}
                        setProducto={setProducto}
                    />
                ))
            }
        </div>
    );
}
 
export default Carrito;