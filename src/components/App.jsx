import React, { Component } from 'react';
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from './FilterContacts';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export default class App extends Component {
  contacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]

  state = {
      contacts: this.contacts,
      filter: '',
  };

  formSubmitHandl = data => {
    if (this.contacts.some(contact => contact.name.toLowerCase() === data.name.toLowerCase())) { 
      alert( data.name + ' is alredy in contacts')
    } else {
      data.id = nanoid();
    this.contacts.push(data)
    this.setState(prevState => ({
        contacts: this.contacts,
    }));
    this.handelFilter(this.state.filter);
    }
    
  }

  handelFilter = filterValue => {
    const filteredContacts = this.contacts.filter((contact) => 
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    this.setState(prevState => ({
      contacts: filteredContacts,
      filter: filterValue
    }));
  }

  deleteContact = id => {
      this.contacts = this.contacts.filter((contact) => 
        contact.id !== id
    );

    this.handelFilter(this.state.filter);
  }

  render() {
    return (
      <div className={css.wrap}>
        <h1>Phonebook</h1>
          <ContactForm onSubmit={ this.formSubmitHandl} />
        <h2>Contacts</h2>
        <Filter handelFilter={this.handelFilter} />
        <ContactList contacts={this.state.contacts} deleteHandler={this.deleteContact} />
        </div>
  );
  }
};
