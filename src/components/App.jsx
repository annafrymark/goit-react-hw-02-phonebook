import React, { Component } from 'react';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { nanoid } from 'nanoid';
import css from './app.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    //this.props.onSubmit({...this.state})
  };

  render() {
    const { name, number } = this.state;

    console.log({ name, number });
    const nameInputId = nanoid();

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form contacts={contacts} onSubmit={this.handleSubmit} />{' '}
        <h2>Contacts</h2>
        <Filter
          value={filter}
          //value={value}
          onChange={this.filter}
          filtredContacts={this.filtredContacts}
        />
        <ContactList
          contacts={filtredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
