import './App.css';
import { Route, Switch } from 'react-router-dom'
import WeatherApp from "./Weather/WeatherApp";
import RestaurantApp from "./Restaurant/RestaurantApp";
import Home from "./Home"
import Navbar from "./Navbar"

function App() {
  return (
    <div style={{backgroundColor: "lightgray", marginLeft: "auto", marginRight: "auto"}}>
    <main style={{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "auto", marginRight: "auto"}}>
      <div style={{display: "flex", flexDirection: "column", backgroundColor: "darkgray", width: "100%", height: "70px", alignItems: "center", marginLeft: "auto", marginRight: "auto"}}>
      <Navbar/>
      </div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/weather" component={WeatherApp} />
        <Route path="/restaurants" component={RestaurantApp} />
        <Route component={Error} />
      </Switch>
    </main>
    </div>
  );
}

export default App;
