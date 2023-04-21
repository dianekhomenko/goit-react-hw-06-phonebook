import React from "react";
import { Label } from "./Filter.styled";
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};