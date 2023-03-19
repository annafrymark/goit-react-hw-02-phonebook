import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './app.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    this.props.onSubmit({ name, number });

    form.reset();
  };

  render() {
    // const { contacts, name } = this.state;

    const nameInputId = nanoid();

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <label htmlFor={nameInputId}>Name</label>
          <input
            id={nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required

          />
          <label htmlFor="number">Number</label>
          <input
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
        <h2>Contacts</h2>
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

export default App;
