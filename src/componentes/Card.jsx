import React from 'react';
import './Card.css';
import despejadoClima from '../img/despejadoClima01d.gif';
import despejadoNocturno from '../img/despejadoNocturno01n.gif';
import climaNubes from '../img/climaNubes02d.gif';
import climaNubesNoche from '../img/climaNubesNoche02n.gif'
import nubosoDia from '../img/nubosodia03d.gif';
import nubosoNoche from '../img/nubosoNoche03n.gif';
import nubesBroken from '../img/nubesBroken04d.gif'
import nubesBrokenNoche from '../img/nubesBrokenNoche04n.gif';
import relampagos01 from '../img/relanpagos11d.gif';
import relampagos02 from '../img/relanpagos11n.gif';
import neblina01 from '../img/neblina50d.gif'
import neblina02 from '../img/niebla50n.gif'
import nevada01 from '../img/nevada13d.gif';
import nevada02 from '../img/nevada13n.gif';
import lluvia1 from '../img/lluvia09d.gif';
import lluvia2 from '../img/lluvia09n.gif';
import rain01 from '../img/rain10d.gif';
import rain02 from '../img/rain10n.gif';
import { Link } from 'react-router-dom';

export default function Card({min, max, name, img, onClose, id}) {
  
  let background='';
  let color = 'black';

  switch (img) {
    case '01d':
      background = despejadoClima
      color = 'white'
    break;
    case '01n':
      background = despejadoNocturno
      color = 'white'
    break;
    case '02d':
      background = climaNubes
      color = 'black'
    break;  
    case '02n':
      background = climaNubesNoche
      color = 'white'
    break;
    case '03d':
      background = nubosoDia
      color = 'black'
    break;
    case '03n':
      background = nubosoNoche
      color = 'white'
    break;
    case '04d':
      background = nubesBroken
      color = 'white'
    break;
    case '04n':
      background = nubesBrokenNoche
      color = 'white'
    break;
    case '09d':
      background = lluvia1
      color = 'white'
    break;
    case '09n':
      background = lluvia2
      color = 'white'
    break;
    case '10d':
      background = rain01
      color = 'white'
    break;
    case '10n':
      background = rain02
      color = 'white'
    break;
    case '11d':
      background = relampagos01
    break;
    case '11n':
      background = relampagos02
      color = 'white'
    break;
    case '13d':
      background = nevada01
    break;
    case '13n':
      background = nevada02
      color = 'white'
    break;
    case '50d':
      background = neblina01
      color = 'black'
    break;
    case '50n':
      background = neblina02
      color = 'black'
    break;      
    default:
      break;
  }
  
  return (
    <div className="card" style={{'background-image': `url(${background})`, 'color': color}}>
    <div id="closeIcon" className="row">
        <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
    </div>
    <div className="card-body">
      <Link to={`/ciudad/${id}`}className="card-title" style={{'color': color}}>{name}</Link>
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4">
          <p className="min">Min</p>
          <p className="numberMin">{min}°</p>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <p className="min">Max</p>
          <p className="numberMin">{max}°</p>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}
