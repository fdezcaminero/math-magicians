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

Inputfunction.defaultProps = {
  inputvalue: 0,
};

export default Inputfunction;
