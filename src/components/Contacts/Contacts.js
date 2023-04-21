import { Contact } from "./Contacts.styled";
import PropTypes from 'prop-types';

export const Contacts = ({ items, onDelete }) => {
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
  items: PropTypes.array,
  onDelete: PropTypes.func,
};