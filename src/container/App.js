import React,{useState} from 'react';
import './App.css';
import Nav from '../componentes/Nav';
import { Route } from 'react-router-dom';
import Cards from '../componentes/Cards';
import About from '../componentes/About';
import Ciudad from '../componentes/Ciudad'
import Error404 from '../componentes/Error404';
import { Switch } from 'react-router-dom';

function App() {
  const[ciudades,setCiudades]=useState([]);
  const apiKey=process.env.REACT_APP_API;
  function search(ciudad){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(res=>res.json())
    .then((data)=>{
      if(data.main!==undefined){
        const ciudad={
          min:Math.round(data.main.temp_min),
          max:Math.round(data.main.temp_max),
          img:data.weather[0].icon,
          id:data.id,
          wind: data.wind.speed,
          temp: data.main.temp,
          name: data.name,
          weather: data.weather[0].main,
          clouds: data.clouds.all,
          latitud: data.coord.lat,
          longitud: data.coord.lon
        };
        setCiudades(oldCities=>{
          if(oldCities.some(city =>city.name===ciudad.name)){
            alert("Ya se encuentra esta cuidad")
            return oldCities;
          }else{
            return [...oldCities,ciudad];
          }
        })
      }else{
        alert("Ciudad no encontrada");
      }
    })
  }

  function onClose(id){
    setCiudades(oldCities=>oldCities.filter(city=>city.id!==id))
  }

  function onFilter(cityid){
    const ciudad=ciudades.find(city=>city.id===parseInt(cityid))
    console.log(ciudad)
    return ciudad
  }

  return (
    <div className="App">
      <Nav onSearch={search}/>
      <Switch>
      <Route exact path="/">
        <Cards ciudades={ciudades} onClose={onClose}/>
      </Route >
      <Route exact path='/ciudad/:id' render={({match})=><Ciudad city={onFilter(match.params.id)} match={match}/>}/>
      <Route exact path='/about' component={About}/>
      <Route path='*' component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
