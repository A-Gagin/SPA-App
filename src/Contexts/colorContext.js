import React, { createContext, useState } from "react";

const ColorContext = createContext();

function ColorProvider({ children }) {
  const [background, setBackground] = useState("lightgray");
  const [secondary, setSecondary] = useState("darkgray");
  const [text, setText] = useState("black");
  const [isNight, setNight] = useState("false");

  return (
    <LocationContext.Provider value={{
        background, setBackground, secondary, setSecondary, text, setText, isNight, setNight}}>
      {children}
    </LocationContext.Provider>
  );
}

export default ColorProvider;
export { ColorContext };