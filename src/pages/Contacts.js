import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { GlobalStyle } from '../components/GlobalStyle';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { selectIsLoading } from 'redux/contacts/contactsSlice';
import styled from 'styled-components';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const Title = styled.h1`
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    color: #e57373;
    padding: 20px 0;
  `;

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {isLoading && <b>Request in progress...</b>}
      <ContactList />
      <GlobalStyle />
    </>
  );
}
