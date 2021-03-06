import { useState, useContext } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import './Map.css';
import { LocationContext } from "../../Contexts/locationContext";
const API_KEY = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
//Bug: can't update map focus. Not sure how to fix.
function DisplayMap(props) {

    const [viewport, setViewport] = useState({
        latitude: props.latitude,
        longitude: props.longitude,
        width: "50vw",
        height: "50vh",
        zoom: 13
    });

    const { ucLat, ucLon } = useContext(LocationContext);

    let lat = "";
    let lon = "";

    if (ucLat && ucLon){
        lat = ucLat;
        lon = ucLon;
    } else {
        lat = props.latitude;
        lon = props.longitude;
    }


    const [selected, setSelected] = useState(null);


    if (props.restaurants === null) {
        return null;
    }
    console.log("latitude", props.latitude);
    console.log("longitude", props.longitude);
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  Note: Small bug, map doesn't change focal point on updating search location. You will have to manually scroll to the new area.
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={API_KEY}
                mapStyle="mapbox://styles/lazioli/ckp26219g4p5x17o0ug8tcbj2"
                width="100%"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                {props.restaurants.map((restaurant) => (
                    <Marker key={restaurant.place_id} latitude={restaurant.geometry.location.lat} longitude={restaurant.geometry.location.lng}>
                        <button className="marker-btn" onClick={(e) => {
                            e.preventDefault();
                            setSelected(restaurant);
                        }}>
                            <img src={restaurant.icon} alt="Restaurant Icon" />
                        </button>
                    </Marker>
                ))}
                {selected ? (
                    <Popup latitude={selected.geometry.location.lat} longitude={selected.geometry.location.lng} onClose={() => { setSelected(null) }}>
                        <div>
                            <li>{selected.name}</li>
                            <li>{selected.vicinity}</li>
                            <li>{selected.rating != null ? selected.rating + " / 5" : "Rating data not available."}</li>
                            <li>{selected.price_level != null ? "$".repeat(selected.price_level) : "Price data not available."}</li>
                            <li><a href={"https://www.google.com/maps/dir/?api=1&origin=" + lat + "," + lon + "&destination=" + selected.geometry.location.lat + "," + selected.geometry.location.lng} target="_blank" rel="noreferrer">Get Directions</a></li>
                        </div>
                    </Popup>
                ) : null}
            </ReactMapGL>

        </div>
    );
}

export default DisplayMap;