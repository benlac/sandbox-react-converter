import React, { useState } from "react";
import "./styles.scss";

import TemperatureInput from "./Celcius";
import Boiling from "./Boiling";

export default function App() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const convertCelciusToFahrenheit = temperature => {
    return (temperature * 9) / 5 + 32;
  };

  const convertFahrenheitToCelcius = temperature => {
    return ((temperature - 32) * 5) / 9;
  };

  const handleCelciusChange = temperature => {
    setTemperature(temperature);
    setScale("c");
  };

  const handleFahrenheitChange = temperature => {
    setTemperature(temperature);
    setScale("f");
  };

  const tryConvert = (temp, convert) => {
    const input = parseFloat(temp);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 100) / 100;
    return rounded.toString();
  };

  const isBoiling = () => {
    if (temperature >= 100) {
      return true;
    }
    return false;
  };

  const celcius =
    scale === "c"
      ? temperature
      : tryConvert(temperature, convertCelciusToFahrenheit);
  const farhreinheit =
    scale === "f"
      ? temperature
      : tryConvert(temperature, convertFahrenheitToCelcius);
  return (
    <>
      <TemperatureInput
        value={celcius}
        scale={"c"}
        handleChange={handleCelciusChange}
      />
      <TemperatureInput
        value={farhreinheit}
        scale={"f"}
        handleChange={handleFahrenheitChange}
      />
      <Boiling isBoiling={isBoiling()} />
    </>
  );
}
