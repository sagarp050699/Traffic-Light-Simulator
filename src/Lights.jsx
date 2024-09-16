import React from "react";

const Light = ({ color, isActive }) => {
  return <div className={`light ${color} ${isActive ? "active" : ""}`}></div>;
};

const GreenLight = ({ isActive }) => (
  <Light color="green" isActive={isActive} />
);
const YellowLight = ({ isActive }) => (
  <Light color="yellow" isActive={isActive} />
);
const RedLight = ({ isActive }) => <Light color="red" isActive={isActive} />;

export { GreenLight, YellowLight, RedLight };
