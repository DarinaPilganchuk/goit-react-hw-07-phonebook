// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Form } from '../Form/Form';
import { PhoneBook, Container, PhoneContacts } from './App.styled';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <PhoneBook>PhoneBook</PhoneBook>
      <Form />
      <PhoneContacts>Contacts</PhoneContacts>
      <Filter></Filter>
      {<ContactList />}
    </Container>
  );
}
