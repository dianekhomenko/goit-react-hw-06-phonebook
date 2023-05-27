import { createSlice } from '@reduxjs/toolkit';

function initialContacts() {
  let savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts(),
  reducers: {
    setContacts(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const filterReducer = filterSlice.reducer;

export const { setContacts, deleteContact } = contactSlice.actions;
export const { setFilter } = filterSlice.actions;
