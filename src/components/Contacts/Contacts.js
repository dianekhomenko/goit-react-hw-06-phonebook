export const Contacts = ({ items }) => {
    return (
      <ul>
        {items.map(item => {
            return (
              <li key={item.id}>
                <p>{item.name}:</p>
                <p>{item.phone}</p>
              </li>
            );
        })}
      </ul>
    );
};
