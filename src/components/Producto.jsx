import React from 'react';

const Producto = ({producto}) => {

    const {nombre, precio} = producto;

    return(
        <div>
            <h3>{nombre}</h3>
            <h5>${precio}</h5>

        </div>
    
    );
}

export default Producto;