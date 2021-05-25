import './App.css';
import React, { useState } from "react";
import FindRestaurants from "./Components/FindRestaurants";
import DisplayRestaurants from "./Components/DisplayRestaurants";
import SortRestaurants from "./Components/SortRestaurants"
import DisplayMap from "./Components/DisplayMap";

function App(props) {
  const [restaurants, setRestaurants] = useState(null);
  const [latitude, setLatitude] = useState(38.0293); //default 38.0293
  const [longitude, setLongitude] = useState(-78.4767); //default -78.4767
  //const [radius, setRadius] = useState(0);
  //console.log("useHistory check", props.location.state.lat, props.location.state.lon);

  console.log("restaurants API call", restaurants); // testing
  console.log("latitude",latitude)
  console.log("longitude",longitude);

  let weatherLat = "";
  let weatherLon = "";
  if (props.location.state.lat != null && props.location.state.lon != null){
      weatherLat = props.location.state.lat;
      weatherLon = props.location.state.lon;
  } else {
    weatherLat = "";
    weatherLon = "";
  }


  return (
    <div style={{ backgroundColor: "lightgray"}}>
      <FindRestaurants setRestaurants={setRestaurants} setLatitude={setLatitude} setLongitude={setLongitude} latitude = {latitude} longitude = {longitude} weatherLat={weatherLat} weatherLon={weatherLon} />
      <DisplayMap restaurants={restaurants} latitude={latitude} longitude={longitude} weatherLat={weatherLat} weatherLon={weatherLon}/>
      <br/>
      <SortRestaurants restaurants={restaurants} setRestaurants={setRestaurants} />
      <div style={{width: "500px", marginLeft: "auto", marginRight:"auto"}}>
      <DisplayRestaurants restaurants={restaurants} latitude={latitude} longitude={longitude} weatherLat={weatherLat} weatherLon={weatherLon}/>
      </div>
    </div>
  );
}

export default App;