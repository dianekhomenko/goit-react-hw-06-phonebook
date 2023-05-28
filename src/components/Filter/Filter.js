import React from "react";
import { Label } from "./Filter.styled";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const Filter = ({ onChange }) => {
const value = useSelector(state => state.filter);
  return (
    <Label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </Label>
  )
};

Filter.propTypes = {
  onChange: PropTypes.func,
};