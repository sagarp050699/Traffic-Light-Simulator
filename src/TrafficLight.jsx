import React from "react";
import { GreenLight, YellowLight, RedLight } from "./Lights";
import { useTrafficLightContext } from "./TrafficLightContext";

const TrafficLight = () => {
  const { state, dispatch } = useTrafficLightContext();

  const requestCrossing = () => {
    dispatch({ type: "REQUEST_CROSSING" });
  };

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <RedLight isActive={state.currentLight === "red"} />
        <YellowLight isActive={state.currentLight === "yellow"} />
        <GreenLight isActive={state.currentLight === "green"} />
      </div>
      <button onClick={requestCrossing} className="pedestrian-button">
        Pedestrian Crossing
      </button>
      <div className="countdown">Time remaining: {state.countdown} sec</div>
    </div>
  );
};

export default TrafficLight;
