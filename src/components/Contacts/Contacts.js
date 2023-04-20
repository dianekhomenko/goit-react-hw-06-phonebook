import { Contact } from "./Contacts.styled";

export const Contacts = ({ items }) => {
    return (
      <ul>
        {items.map(item => {
            return (
              <Contact key={item.id}>
                <p>{item.name}:</p>
                <p>{item.phone}</p>
              </Contact>
            );
        })}
      </ul>
    );
};
