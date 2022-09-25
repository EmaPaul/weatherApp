import React,{useState} from "react";
import { useParams,Link } from "react-router-dom";
import './Ciudad.css';

export default function Ciudad({city}) {
    const {id} = useParams()
    const [infoCity,setInfoCity]=useState({})
    const api=process.env.REACT_APP_API
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${api}&units=metric`)
    .then(res=>res.json())
    .then((info)=>{
        const objetoCiudad={
            name:info.name,
            img:info.weather[0].icon,
            temp:info.main.temp,
            weather:info.weather[0].main,
            wind:info.wind.speed,
            clouds:info.clouds.all,
            latitud:info.coord.lat,
            longitud:info.coord.lon,
        }
        setInfoCity(objetoCiudad)
    })

    if(city){
        return (
            <div className="ciudad">
                <br/>
                    <div className="container">
                        <h2 className="titless">{city.name}</h2>
                        <img className="iconoClimb" src={"http://openweathermap.org/img/wn/"+city.img+"@2x.png"} width="80" height="80" alt="" />
                        <div className="info">
                            <div>Temperatura: {city.temp} ºC</div>
                            <div>Clima: {city.weather}</div>
                            <div>Viento: {city.wind} km/h</div>
                            <div>Cantidad de nubes: {city.clouds}</div>
                            <div>Latitud: {city.latitud}º</div>
                            <div>Longitud: {city.longitud}º</div>
                        </div>
                        <Link to='/'>
                            <button className="button-19">Regresar</button>
                        </Link>
                </div>
            </div>
        )
    }else if(infoCity){
        return(
            <div className="ciudad">
            <br/>
                <div className="container">
                    <h2 className="titless">{infoCity.name}</h2>
                    <img className="iconoClimb" src={"http://openweathermap.org/img/wn/"+infoCity.img+"@2x.png"} width="80" height="80" alt="" />
                    <div className="info">
                        <div>Temperatura: {infoCity.temp} ºC</div>
                        <div>Clima: {infoCity.weather}</div>
                        <div>Viento: {infoCity.wind} km/h</div>
                        <div>Cantidad de nubes: {infoCity.clouds}</div>
                        <div>Latitud: {infoCity.latitud}º</div>
                        <div>Longitud: {infoCity.longitud}º</div>
                    </div>
                    <Link to='/'>
                        <button className="button-19">Regresar</button>
                    </Link>
            </div>
        </div>
        )
    }
}