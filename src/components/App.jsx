import { ContactForm } from 'components/ContactForm/ContactForm'
import {Contacts} from 'components/Contacts/Contacts'
import { Component } from 'react'

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [ ...prevState.contacts, newContact ],
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <ContactForm onSave={this.addContact} />
        <Contacts items={this.state.contacts} />
      </div>
    );
  }
};
