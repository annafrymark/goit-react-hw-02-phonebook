import { Component } from 'react';
import css from './app.module.css';
import PropTypes from 'prop-types';

class ContactListItem extends Component {
  handleOnClick = event => {
    this.props.deleteContact(this.props.contact.id);
  };

  render() {
    const contact = this.props.contact;

    return (
      <li className={css.contactListItem}>
        {contact.name} : {contact.number}
        <button
          className={css.deleteButton}
          type="button"
          onClick={this.handleOnClick}
          data-id={contact.id}
        >
          Delete
        </button>
      </li>
    );
  }
}

ContactListItem.propTypes = {
  contact: optionalObjectWithShape({
    id: PropTypes.number,
    name: PropTypes.string,
    number: PropTypes.number,
  }),
};

export default ContactListItem;
