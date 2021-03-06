import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  // Crear productos
  const [ productos, saveProductos ] = useState([
    {id:1, nombre:'Camisa ReactJS', precio:50},
    {id:2, nombre:'Termo ReactJS', precio:75},
    {id:3, nombre:'Pantalon ReactJS', precio:100},
    {id:4, nombre:'Gorra ReactJS', precio:30},
    {id:5, nombre:'Poster ReactJS', precio:10}
  ]);

  // State para carrito de compras
  const [ carrito, setProducto ] = useState([]);

  // Obtener fecha
  const date = new Date().getFullYear();

  return(
    <Fragment>
      <Header 
        title='Tienda Virtual' 
      />

      <h1>Lista de Productos</h1>
      {productos.map( producto => (
          <Producto 
            key={producto.id}
            producto={producto}
            productos={productos}
            setProducto={setProducto}
            carrito={carrito}
          />
      ))}

      <Carrito 
        carrito={carrito}
        setProducto={setProducto}
      />

      <Footer
        date = {date}
      />
    </Fragment>
  );
}

export default App;
