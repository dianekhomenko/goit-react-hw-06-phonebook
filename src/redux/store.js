import { createStore } from 'redux';

const reduser = ( state, action ) => {
    switch (action.type) {
        case 'setContacts':
            return {
                ...state,
                contacts: [...state.contacts, { ...action.payload }],
            }
        case 'setFilter': 
            return {
                ...state,
                filter: action.payload,
            }
        case 'deleteContact':
            return {
              ...state,
              contacts: state.contacts.filter(
                contact => contact.id !== action.payload
              ),
            };
        default:
            return state
    }
}

function initialContacts()  {
    let savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
}


export const store = createStore(reduser, {
  contacts: initialContacts(),
  filter: '',
});
