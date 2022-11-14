import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App'
 

/* children, props son palabras reservadas
function Commponente({titulo, children}){
  
  const titulo = props.titulo;
  const contenido = props.contenido;
  

  // const { titulo, children } = props;

  return (
    <div>
      <h1>{ titulo }</h1>
      <div>{ children }</div>
    </div>
  );
}
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Commponente titulo = "My title ez">Este  es el cuerpo</Commponente>
  < App />
);
