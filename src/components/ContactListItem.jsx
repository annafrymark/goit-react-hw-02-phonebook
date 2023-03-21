import css from './app.module.css';

function ContactListItem({ name, number, onDelete }) {
  return (
    <li className={css.contactListItem}>
      {name} : {number}
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default ContactListItem;
