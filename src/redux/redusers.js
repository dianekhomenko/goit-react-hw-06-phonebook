import { createSlice } from '@reduxjs/toolkit';

// function initialContacts() {
//   let savedContacts = localStorage.getItem('contacts');
//   if (savedContacts !== null) {
//     return JSON.parse(savedContacts);
//   }
// }

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    setContacts(state, action) {
      return [...state, action.payload];
    },
    deleteContact(state, action) {
      return state.filter(items => items.id !== action.payload);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const filterReducer = filterSlice.reducer;

export const { setContacts, deleteContact } = contactSlice.actions;
export const { setFilter } = filterSlice.actions;
