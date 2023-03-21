import { Component } from 'react';
import css from './app.module.css';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  //opcja
  // handleChange = (key, value) => {
  //     this.setState({
  //         [key]: value,
  //     });
  // }

  handleChange = event => {
    //console.log(event)
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      //name: event.target.value
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { contacts, addNewContact } = this.props;
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    let contactExist = false;

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === newContact.name.toLowerCase()) {
        alert(`${contact.name} is already in contacts.`);
        contactExist = true;
      }
    });

    if (!contactExist) {
      addNewContact(newContact);
    }

    this.reset();
    // onSubmit({ id: nanoid(), name, number });
    // setName
    // setNumber
  };

  render() {
   // const { name, number } = this.state;

    //console.log({ name, number });
    const nameInputId = nanoid();

    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label htmlFor={nameInputId}>Name</label>
        <input
          value={this.state.name}
          onChange={this.handleChange}
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <input
          value={this.state.number}
          onChange={this.handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button
          type="submit"
          className={css.button}
          //disabled={!isActive}
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
