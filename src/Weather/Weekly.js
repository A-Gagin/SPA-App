import React, { } from "react";
import DateConverter from "./DateConverter"
import GetIcon from "./GetIcon"

function Weekly(forecast, displayToggle) {
    if (forecast.forecast != null && displayToggle) {
        return (
            <div style={{ display: "flex", height: "1000px", flexDirection: "column", alignContent: "center" }}>

                <div style={{ display: "flex", height: "100px", flexDirection: "row", alignItems: "center", flexWrap: "wrap", padding: "20px", marginLeft: "10px"}}>
                    {
                        forecast.forecast.map((day) => (
                            <div style={{ display: "flex", height: "250px", width: "150px", flexDirection: "column", alignItems: "center", border: "dotted", borderColor: "darkslategray", flexWrap: "wrap", backgroundColor: "darkgray", padding: "10px", margin: "4px", borderRadius: "10px"}}>
                                <h5>{DateConverter(day.dt)[0] + ", " + DateConverter(day.dt)[1] + " " + DateConverter(day.dt)[2]}</h5>
                                {GetIcon(day.weather[0].icon)}
                                {day.weather[0].description}<br />
                                {"high: " + day.temp.max + " °F"}<br />
                                {"low: " + day.temp.min + " °F"}
                            </div>

                        ))
                    }
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default Weekly;