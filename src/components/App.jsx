import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout/Layout';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
  });

  const [filters, setFilters] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.filter(contact => contact.name === newContact.name).length !== 0
    ) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      setContacts(prevState => [...prevState, newContact]);
    }
  };

  const changeFilter = e => {
    setFilters(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
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
