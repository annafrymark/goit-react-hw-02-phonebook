import React, { Component } from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
//import { nanoid } from 'nanoid';
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

  addNewContact = newContact => {
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  filter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ contact }) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // handleSubmit = event => {
  //   event.preventDefault();

  //   this.props.onSubmit({...this.state})
  // };

  deleteContact = match => {
    const deletedContact = this.state.contacts.find(
      ({ id }) => id === match
    ).name;
    this.setState(prevState => ({
      contact: prevState.contact.filter(contact => contact.id !== match),
    }));
    console.log(deletedContact);
    alert(`${deletedContact} was deleted from contacts.`);
  };

  
  render() {
    //const { name, number } = this.state;
    const value = this.state.filter;
    const filtredContacts = this.filterContacts;
   
    //const nameInputId = nanoid();

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form
          addNewContact={this.addNewContact}
          contacts={this.state.contacts}

          //onSubmit={this.handleSubmit}
        />{' '}
        <h2>Contacts</h2>
        <Filter
          value={value}
          onChange={this.filter}
          filtredContacts={this.filtredContacts}
        />
        <ContactList
          contacts={this.state.contacts}
          arrayFiltred={filtredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
