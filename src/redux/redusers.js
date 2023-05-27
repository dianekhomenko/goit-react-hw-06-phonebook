import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
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
