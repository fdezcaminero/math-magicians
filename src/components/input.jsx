import React from 'react';
import PropTypes from 'prop-types';

const Inputfunction = ({ inputvalue }) => (
  <div className="minus1margin inputStyle">
    {inputvalue}
  </div>
);

Inputfunction.propTypes = {
  inputvalue: PropTypes.string.isRequired,
};

export default Inputfunction;
