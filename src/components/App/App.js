import { useState, useEffect } from 'react';
import { ContactForm } from 'components/ContactForm';
import { GlobalStyle } from 'constants/GlobalStyles';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Container, Wrap, MainTitle, Title, StyleArround } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeName = e => setFilter(e.currentTarget.value);

  const handleChange = contact => {
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const handleFilter = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );

  const handleDelete = id =>
    setContacts(prevState => prevState.filter(contact => contact.id !== id));

  return (
    <Container>
      <Wrap>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onChange={handleChange} contacts={contacts} />

        <Title>Contacts</Title>
        <Filter filter={filter} onChangeName={handleChangeName} />
        <ContactList filteredArr={handleFilter()} onDelete={handleDelete} />

        <GlobalStyle></GlobalStyle>
      </Wrap>
      <StyleArround />
    </Container>
  );
};
