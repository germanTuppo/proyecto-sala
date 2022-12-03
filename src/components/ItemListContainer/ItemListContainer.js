import React from 'react';
import "./ItemListContainer.css";
import Item from '../Item/Item.js';


const ItemListContainer= () => {


  const item = {
    titulo: "Hora sala roja",
    detalle: "Hora en la sala roja. No incluye platos de batería.",
    precio: "1500",
    cantidad: "2",
  }; 


  return (
    <div>
        <h1>Esto va a ser la lista de productos y servicios</h1>
    
        <Item titulo={item.titulo} detalle={item.detalle} precio={item.precio} cantidad={item.cantidad}/>

    </div>
  );
};

export default ItemListContainer;