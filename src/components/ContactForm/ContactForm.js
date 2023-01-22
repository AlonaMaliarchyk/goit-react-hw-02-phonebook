import React, { Component } from 'react';
import css from './ContactForm.module.css'

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    
    handlChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handlSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }

    render() {
        return (
        <form onSubmit={this.handlSubmit}>
            <label>Name </label>
                    <input className={css.input}
                    type="text"
                    value={this.state.name}
                    onChange={this.handlChange}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                
                <label>
                    Number
                </label>
                    <input className={css.input}
                    type="tel"
                    value={this.state.number}
                    onChange={this.handlChange}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                <button className={css.addBtn} type="submit">Add contact</button>
        </form>
    )
    }
}
