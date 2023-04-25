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

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contact !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

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

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
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
        {(this.state.contacts.length > 0) ? <Filter value={filter} onChange={this.changeFilter} /> : <p>There is no contacts</p>}
        <Contacts items={filteredContacts} onDelete={this.deleteContact} />
      </Layout>
    );
  }
}
