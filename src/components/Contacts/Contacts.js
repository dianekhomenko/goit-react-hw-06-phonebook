import { Contact } from './Contacts.styled';
import { deleteContact } from 'redux/redusers';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContacts = contactId => {
    dispatch(deleteContact(contactId));
  };
  const items = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {items.map(item => {
        return (
          <Contact key={item.id}>
            <p>{item.name}:</p>
            <p>{item.phone}</p>
            <button onClick={() => deleteContacts(item.id)}>x</button>
          </Contact>
        );
      })}
    </ul>
  );
};
