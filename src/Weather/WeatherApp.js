// Functionality implemented:
    // Tell current weather
    // Hourly predictions for the next 2 days
    // Week-long daily forecast
    // User input for zip/city name
    // Allow for city name instead of zip code -NEXT STEP-
    // Toggle between hourly and daily weather data
    // Translate unix timestamps to standard date/time
    // Add icons for each weather -NEXT STEP-
    // Make it look prettier
// Functionality needed:
    // All functionality implemented!

import React, { useState, useContext } from "react";
import Current from "./Current";
import Hourly from "./Hourly";
import Weekly from "./Weekly";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { LocationContext } from "../Contexts/locationContext";

const API_KEY = process.env.REACT_APP_weather_api_key;

function App(props) {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [zip, setZip] = useState(null);
  const [city, setCity] = useState("");
  const [hourly, setHourly] = useState(true);
  const [daily, setDaily] = useState(false);
  const { ucCity } = useContext(LocationContext);

  console.log("weatherProps", props);
  console.log("weatherCity?", props.location.state.city);
  const handleRestaurantSearch = () => {
    setCity(ucCity);
    console.log("handleRestaurant City", city);
}

  const makeForecast = (lat, long) => {
    const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("lon", long);
    url.searchParams.append("lat", lat);
    url.searchParams.append("units", "imperial");
    url.searchParams.append("exclude", "current,minutely,alerts");
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        if (obj !== []) {
          setForecast(obj);
        } else {
          setForecast(false);
        }
      });
  };

  const getWeather = () => {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("appid", API_KEY);
    if (city) {
      url.searchParams.append("q", city);
    } else {
      url.searchParams.append("zip", zip); // insert a user zip here...
    }
    url.searchParams.append("units", "imperial");
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        // also important to check html error codes
        // 200 means no errors
        if (obj.cod === 200) {
          setWeather(obj);
          makeForecast(obj.coord.lat, obj.coord.lon);
        } else {
          console.log(obj);
          setWeather(false);
        }
      });
  };


  const handleZipSearch = (e) => {
    setZip(e.target.value);
    console.log(zip);
  }

  const handleCitySearch = (e) => {
    setCity(e.target.value);
  }

  const getHourly = () => {
    setHourly(true);
    setDaily(false);
  }

  const getWeekly = () => {
    setHourly(false);
    setDaily(true);
  }

  if (hourly) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <br />
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <TextField label="Search by Zip Code" variant="outlined" onChange={handleZipSearch} style={{ padding: "10px" }} />
          <Typography variant="h8"> OR </Typography>
          <TextField label="Search by City Name" variant="outlined" onChange={handleCitySearch} style={{ padding: "10px" }} />
        </div>
        <br />
        <Button variant = "contained" color = "secondary" style={{ display: "flex", flexDirection: "row", alignItems: "center" }} onClick={handleRestaurantSearch}> Click Here First if Searching from Restaurant Finder</Button>
        <br />
        <Button variant = "contained" color = "primary" style={{ display: "flex", flexDirection: "row", alignItems: "center" }} onClick={getWeather}>Get Weather</Button>

        <Current weather={weather} ></Current>

        <br />
        <div>
          <ButtonGroup variant = "text" color="secondary" aria-label="contained primary button group" size="large">
            <Button onClick={getHourly}>Hourly Forecast</Button>
            <Button onClick={getWeekly}>Weekly Forecast</Button>
          </ButtonGroup>
        </div>
        <br />
        <Typography variant="h4">Hourly Forecast</Typography>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Hourly forecast={forecast.hourly} displayToggle={hourly}></Hourly>
        </div>



      </div>
    )
  } else if (daily) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <br />
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <TextField label="Search by Zip Code" variant="outlined" onChange={handleZipSearch} style={{ padding: "10px" }} />
          <Typography variant="h8"> OR </Typography>
          <TextField label="Search by City Name" variant="outlined" onChange={handleCitySearch} style={{ padding: "10px" }} />
        </div>
        <br />
        <Button variant = "contained" color = "secondary" style={{ display: "flex", flexDirection: "row", alignItems: "center" }} onClick={handleRestaurantSearch}> Click Here First if Searching from Restaurant Finder</Button>
        <br />
        <Button variant = "contained" color = "primary" style={{ display: "flex", flexDirection: "row", alignItems: "center" }} onClick={getWeather}>Get Weather</Button>


        <Current weather={weather} ></Current>

        <br />
        <div>
          <ButtonGroup variant = "text" color="secondary" aria-label="contained primary button group" size="large">
            <Button onClick={getHourly}>Hourly Forecast</Button>
            <Button onClick={getWeekly}>Weekly Forecast</Button>
          </ButtonGroup>
        </div>
        <br />
        <Typography variant="h4">Weekly Forecast</Typography>
        <div style={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
          <Weekly forecast={forecast.daily} displayToggle={daily}></Weekly>
        </div>


      </div>

    )
  } else {
    return (
      "Error"
    )
  }
}
export default App;
