import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';


export const App = () => {

  const { contacts, filters } = useSelector((state) => state) 
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
      dispatch({ type: 'setContacts', payload: newContact });
    }
  };

  const changeFilter = e => {
    dispatch({ type: 'setFilters', payload: e.currentTarget.value })
  };

  const deleteContact = contactId => {
    dispatch({type: 'deleteContact', payload: contactId})
  };

  const filteredContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filters.toLowerCase())
      ),
    [filters, contacts]
  );

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSave={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter value={filters} onChange={changeFilter} />
      ) : (
        <p>There is no contacts</p>
      )}
      <Contacts items={filteredContacts} onDelete={deleteContact} />
    </Layout>
  );
};
