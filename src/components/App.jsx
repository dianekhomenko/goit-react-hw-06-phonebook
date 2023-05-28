import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { useEffect } from 'react';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts, deleteContact, setFilter } from 'redux/redusers';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.filter(contact => contact.name === newContact.name).length !== 0
    ) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(setContacts(newContact));
    }
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const deleteContacts = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSave={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter onChange={changeFilter} />
      ) : (
        <p>There is no contacts</p>
      )}
      <Contacts onDelete={deleteContacts} />
    </Layout>
  );
};
