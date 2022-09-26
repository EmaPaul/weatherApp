import React from 'react';
import './About.css';
import lk from '../img/linkedin_icon_2.png';
import gt from '../img/github.png';
import fl from '../img/folder.png';
import ins from '../img/Instagram_icon_2.png';
import { Link } from 'react-router-dom';
export default function About() {
  return (
    <div className="Container">
      <h1 className="title">Mis Redes!!</h1>
     <div className="Redes">
      <a href="https://www.linkedin.com/in/emmanuel-pa%C3%BAl-carrillo-carpio/" target="_blank">
        <img src={lk} id="linkedin" height="80px"/>
      </a>
      <a href="https://github.com/EmaPaul" target="_blank">
        <img src={gt} id="github" height="80px"/>
      </a>
      <a href="https://portafolio-ema-paul.vercel.app/" target="_blank">
        <img src={fl} id="portafolio" height="80px"/>
      </a>
      <a href="https://www.instagram.com/ema_paul6/" target="_blank">
        <img src={ins} id="instagram" height="80px"/>
      </a>
     </div>
     <Link to='/'>
        <button className="btn-19">Regresar</button>
      </Link>
    </div>
  )
}
