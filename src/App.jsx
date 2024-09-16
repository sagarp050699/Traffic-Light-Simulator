import React from "react";
import { TrafficLightProvider } from "./TrafficLightContext";
import TrafficLight from "./TrafficLight";
import "./Styles.css";

const App = () => {
  return (
    <TrafficLightProvider>
      <TrafficLight />
    </TrafficLightProvider>
  );
};

export default App;
