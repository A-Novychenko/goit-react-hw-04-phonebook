import { Component } from 'react';
import { ContactForm } from 'components/ContactForm';
import { GlobalStyle } from 'constants/GlobalStyles';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Container, Wrap, MainTitle, Title, StyleArround } from './App.styled';

const INITIAL_STATE = {
  // contacts: [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ],
  contacts: [],
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts !== null) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevState.contacts;
    const nextContacts = this.state.contacts;
    if (prevContacts !== nextContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  handleChangeName = e => this.setState({ filter: e.currentTarget.value });

  handleChange = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  handleFilter = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(this.state.filter.toLowerCase().trim())
    );
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <Container>
        <Wrap>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm onChange={this.handleChange} contacts={contacts} />

          <Title>Contacts</Title>
          <Filter filter={filter} onChangeName={this.handleChangeName} />
          <ContactList
            filteredArr={this.handleFilter()}
            onDelete={this.handleDelete}
          />

          <GlobalStyle></GlobalStyle>
        </Wrap>
        <StyleArround />
      </Container>
    );
  }
}
