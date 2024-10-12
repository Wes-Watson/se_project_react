import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTermperatureUnit: "",
  handleToggleChange: () => {},
});

export { CurrentTemperatureUnitContext };
