import React from 'react';
import { Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/redusers';

export const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(state => state.filter);
  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <Label>
      Find contacts by name
      <input type="text" value={value} onChange={changeFilter} />
    </Label>
  );
};
