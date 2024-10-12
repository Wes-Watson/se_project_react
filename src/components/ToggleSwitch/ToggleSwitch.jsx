import React, { useContext, useState } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  // const [currentTepmUnit, handleToggleChange] = useState("F");

  //const handleChange = (e) => {
  //if (currentTepmUnit === "C") handleToggleChange("F");
  //if (currentTepmUnit === "F") handleToggleChange("C");
  //};
  //console.log(currentTepmUnit);
  const { currentTemperatureUnit, handleToggleChange } = useContext(
    CurrentTemperatureUnitContext
  );
  console.log(currentTemperatureUnit);
  return (
    <label className="toggle">
      <input
        type="checkbox"
        className="toggle__box"
        onChange={handleToggleChange}
      />
      <span
        className={
          currentTemperatureUnit === "C"
            ? "toggle__slider toggle__slider-F"
            : "toggle__slider toggle__slider-C"
        }
      ></span>
      <p
        className={`toggle__temp-F ${
          currentTemperatureUnit === "F" ? "toggle__active" : "toggle__inactive"
        }`}
      >
        F
      </p>
      <p
        className={`toggle__temp-C ${
          currentTemperatureUnit === "C" ? "toggle__active" : "toggle__inactive"
        }`}
      >
        C
      </p>
    </label>
  );
};
export default ToggleSwitch;
