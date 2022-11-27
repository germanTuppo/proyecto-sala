import React from 'react';
import compra from '../../assets/img/compra.png'
import "./CardWidget.css";


const CardWidget = () => {
  return (
    <div>
        <img src={compra} className = "carro" alt="carrito" />
    </div>
  );
};

export default CardWidget;