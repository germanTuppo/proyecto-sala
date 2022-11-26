import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting(){
  return <div>
    <h1>Esto es un componente</h1>
  </div>
}

root.render(
  <div>
    <h1>hola mundo</h1>
    <Greeting />
  </div>

  
  
);
