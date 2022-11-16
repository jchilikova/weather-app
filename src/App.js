import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Search/>
    </div>
  );
}

export default App;