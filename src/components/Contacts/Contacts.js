import { Contact } from "./Contacts.styled";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const Contacts = ({ onDelete }) => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
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
                <button onClick={() => onDelete(item.id)}>x</button>
              </Contact>
            );
        })}
      </ul>
    );
};

Contacts.propTypes = {
  onDelete: PropTypes.func,
};