import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Oval } from 'react-loader-spinner';

import { FormContacts } from './components/FormContacts/FormContacts';
import { Section } from './components/Section/Section';
import { Filter } from './components/Filter/Filter';
import { ContactsList } from './components/ContactsList/ContactsList';
import { Notification } from 'components/Notification/Notification';

import {
  selectContacts,
  selectContactsIsLoading,
} from 'redux/contacts.selectors';

import { fetchAll } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  return (
    <>
      <Section title="Phonebook">
        <FormContacts />
      </Section>

      <Section title="Contacts">
        {contacts?.length ? (
          <>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <Notification message="There is no contacts!" />
        )}
        {isLoading && (
          <Oval
            height="50"
            width="50"
            color="violet"
            secondaryColor="blue"
            strokeWidth={3}
            strokeWidthSecondary={3}
          />
        )}
      </Section>
    </>
  );
};
