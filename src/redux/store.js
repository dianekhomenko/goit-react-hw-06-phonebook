import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, filterReducer } from './redusers';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  }
});