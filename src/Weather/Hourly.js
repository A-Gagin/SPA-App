import React, { } from "react";
import DateConverter from "./DateConverter"
import GetIcon from "./GetIcon"

function Hourly(forecast, displayToggle) {
    if (forecast.forecast != null && displayToggle) {
        return (
            <div style={{ display: "flex", height: "1000px", flexDirection: "column", alignContent: "center" }}>

                <div style={{ display: "flex", height: "100px", flexDirection: "row", alignItems: "center", flexWrap: "wrap", padding: "20px", marginLeft: "10px" }}>
                    {
                        forecast.forecast.map((hour) => (
                            <div style={{ display: "flex", height: "250px", width: "150px", flexDirection: "column", alignItems: "center", border: "dotted", borderColor: "darkslategray", flexWrap: "wrap", backgroundColor: "darkgray", padding: "10px", margin: "4px", borderRadius: "10px"}}>
                                <h5>{DateConverter(hour.dt)[0] + ", " + DateConverter(hour.dt)[1] + " " + DateConverter(hour.dt)[2]}</h5>
                                <h6 style={{ marginTop: "-8px", padding: "-10px" }}>{DateConverter(hour.dt)[3]}</h6>
                                {GetIcon(hour.weather[0].icon)}
                                {hour.weather[0].description}<br />
                                {hour.temp + " °F"}
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

export default Hourly;