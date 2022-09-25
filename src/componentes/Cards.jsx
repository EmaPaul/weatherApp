import React from 'react';
import './Cards.css';
import Card from './Card';

export default function Cards({ciudades, onClose}) {
  return (
    <div className="cards">
        {ciudades.map(c => <Card
          key={c.id}
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  )
}
