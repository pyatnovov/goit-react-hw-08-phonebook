import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter).toLowerCase();
  const handleDelete = e => {
    dispatch(deleteContact(e.target.name));
  };
  const getVisibleContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterValue);
    });
  };
  const visibleContact = getVisibleContacts();
  return (
    <ul>
      {visibleContact.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" name={contact.id} onClick={handleDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;