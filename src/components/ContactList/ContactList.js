// import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { MdPermContactCalendar } from 'react-icons/md';
import {
  ButtonDelete,
  ContactItem,
  List,
  WrapperIcon,
} from './ContactList.styled';
import { selectContacts } from '../../redux/contacts/contactsSlice';
import { selectFilters } from 'redux/contacts/filtersSlice';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);
  const contacts = useSelector(selectContacts);
  // console.log(contacts);

  const getVizibleContact = () => {
    return filter
      ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
      : contacts;
  };
  const vizibleContact = getVizibleContact();
  // console.log(vizibleContact);

  return (
    <List>
      {vizibleContact.map(contact => (
        <ContactItem key={contact.id}>
          <WrapperIcon>
            <IconContext.Provider value={{ color: '#e6b0aa', size: 30 }}>
              <MdPermContactCalendar />
            </IconContext.Provider>
            {contact.name}: {contact.number}
          </WrapperIcon>

          <ButtonDelete
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </ButtonDelete>
        </ContactItem>
      ))}
    </List>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };
