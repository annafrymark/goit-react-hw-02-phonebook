import { Component } from 'react';
import ContactListItem from './ContactListItem';
import css from './app.module.css';
import PropTypes from 'prop-types';

class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;
