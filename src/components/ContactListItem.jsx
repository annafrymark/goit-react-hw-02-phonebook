import { Component } from 'react';
import css from './app.module.css';

class ContactListItem extends Component {
  //console.log(contact);
  render() {
    const { contacts, deleteContact } = this.props;
    return contacts.map(contact => (
      <li key={contact.id} className={css.contactListItem}>
        {contact.name} : {contact.number}
        <button
          className={css.deleteButton}
          type="button"
          onClick={deleteContact()}
        >
          Delete
        </button>
      </li>
    ));

    //   <li className={css.contactListItem}>
    //     {name} : {number}
    //     <button
    //       className={css.deleteButton}
    //       type="button"
    //       onClick={deleteContact()}
    //     >
    //       Delete
    //     </button>
    //   </li>
  }
}
export default ContactListItem;
