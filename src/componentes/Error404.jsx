import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

export default function Error404() {
  return (
    <div className="Contenido">
      <h2>ERROR 404</h2>
      <p>NOT FOUND</p>
      <Link to='/'>
        <button className="btn18">Regresar 🏠</button>
      </Link>
    </div>
  )
}
