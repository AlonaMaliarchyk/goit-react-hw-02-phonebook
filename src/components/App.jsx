import React, { Component } from 'react';
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from './FilterContacts';
import { nanoid } from 'nanoid';
import css from './App.module.css';
export default class App extends Component {
  
  state = {
      contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  

  formSubmitHandl = data => {
    const { name, number } = data;
    const isExists = this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (isExists) { 
      alert(data.name + ' is alredy in contacts');
      return;
    }
      
    this.setState(prevState => {
      const { contacts } = prevState
      const newContacts = {
        id: nanoid(),
        name: name,
        number: number,
      }
      return {contacts: [newContacts, ...contacts]}
    });
  }

  handelFilter = filterValue => {
    this.setState(prevState => {
      return { filter: filterValue }
    });
  }

  getFiltered = () => {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }

    return contacts.filter((contact) => 
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  deleteContact = id => {
    this.setState(({ contacts }) => {
      const result = contacts.filter((contact) => 
        contact.id !== id
    );
      return {contacts: result}
    });
  }

  render() {
    const contacts = this.getFiltered();
    return (
      <div className={css.wrap}>
        <h1>Phonebook</h1>
          <ContactForm onSubmit={ this.formSubmitHandl} />
        <h2>Contacts</h2>
        <Filter handelFilter={this.handelFilter} />
        <ContactList contacts={contacts} deleteHandler={this.deleteContact} />
        </div>
  );
  }
};
