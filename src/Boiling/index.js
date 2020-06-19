import React from "react";
import PropTypes from "prop-types";

import "./boiling.scss";

const Boiling = ({ isBoiling }) => (
  <div className="is-boilling">
    <p className="is-boilling__content">
      {isBoiling ? "L'eau est entrain de bouillir" : "L'eau ne bout pas"}
    </p>
  </div>
);

Boiling.propTypes = {
  isBoiling: PropTypes.bool.isRequired
};

export default Boiling;
