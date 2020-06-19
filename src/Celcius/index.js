import React from "react";
import PropTypes from "prop-types";

import "./temperatureInput.scss";

const TemperatureInput = ({ value, scale, handleChange }) => (
  <>
    <label htmlFor="celcius" className="temperature__label">
      {`${
        scale === "f" ? "Temperature en fahreinheit" : "Temperature en celcius"
      }`}
    </label>
    <input
      className="temperature__input"
      id="celcius"
      placeholder={scale}
      type="text"
      value={value}
      onChange={e => {
        handleChange(e.target.value);
      }}
    />
  </>
);

TemperatureInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TemperatureInput;
