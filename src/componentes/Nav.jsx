import React from 'react'
import {Link} from 'react-router-dom';
import imgLogo from '../img/imagenLogo.png';
import SearchBar from './SearchBar';
import "./Nav.css"

export default function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-primary">
        <Link to="/" className="navbar-brand" >
          <img src={imgLogo}  width="30px" height="30px" className="img"  />
          WeatherApp
        </Link>
        <Link to='/about'>
          <span className="about">🙋‍♂️</span>
        </Link>
        <SearchBar className="search" onSearch={onSearch}/>
    </nav>
  )
}
