import React, { createContext, useState } from "react";

const LocationContext = createContext();

function LocProvider({ children }) {
  const [ucCity, setUCCity] = useState("");
  const [ucLat, setUCLat] = useState(0);
  const [ucLon, setUCLon] = useState(0);
  return (
    <LocationContext.Provider value={{ ucCity, setUCCity, ucLat, setUCLat, ucLon, setUCLon}}>
      {children}
    </LocationContext.Provider>
  );
}

export default LocProvider;
export { LocationContext };