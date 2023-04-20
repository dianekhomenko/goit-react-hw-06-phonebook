import { Contact } from "./Contacts.styled";

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
