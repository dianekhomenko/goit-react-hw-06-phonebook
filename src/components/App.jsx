import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Component } from 'react';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout/Layout';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    if (
      this.state.contacts.filter(contact => contact.name === newContact.name)
        .length !== 0
    ) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSave={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts items={filteredContacts} />
      </Layout>
    );
  }
}
