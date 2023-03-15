import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectContacts, selectContactsFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectContactsFilter).toLowerCase().trim();
  console.log(contacts.items);
  console.log(contacts);

  const visibleContacts = contacts.items.filter(item => {
    return item.name.toLowerCase().includes(filterValue);
  });
  console.log(visibleContacts);

  return (
    <ul>
      {visibleContacts.length > 0 &&
        visibleContacts.map(({ id, name, number }) => (
          <li key={id}>
            <ContactItem name={name} number={number} id={id} />
          </li>
        ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};
