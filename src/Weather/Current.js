import React, { useContext } from "react";
import GetIcon from "./GetIcon";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { LocationContext } from "../Contexts/locationContext";

function Current(weather) {
    const { ucLat, setUCLat, ucLon, setUCLon, ucCity } = useContext(LocationContext);
    console.log(ucCity);

    if (weather.weather != null) { // check to make sure you're not trying to access things that are undefined
        console.log("weather.weather", weather.weather); // want to send over weather.weather.coord.lat / lon
        setUCLat(weather.weather.coord.lat);
        setUCLon(weather.weather.coord.lon);
        console.log("UCLat/Lon: ", ucLat, ", ", ucLon);
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <br />
                <br />

                <Typography variant="h3" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>Weather for: {weather.weather.name}</Typography>
                <br />

                <Link to="/restaurants" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="secondary">Search for Restaurants Here</Button>
                </Link>
                <br />

                <Typography variant="h4">Current Weather</Typography>
                <br />

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "dotted",
                    borderColor: "darkslategray",
                    borderRadius: "10px",
                    flexWrap: "wrap",
                    backgroundColor: "darkgray",
                    padding: "5px",
                    margin: "4px",
                    width: "auto"
                }}>
                    <br />

                    {GetIcon(weather.weather.weather[0].icon)}
                    {weather.weather.weather[0].description}
                    <br />
                    
                    {weather.weather.main.temp} °F <br />
                    feels like:
                    {" " + weather.weather.main.feels_like} °F
                </div>
            </div>
        )
    }
    return (
        null
    )
}

export default Current;