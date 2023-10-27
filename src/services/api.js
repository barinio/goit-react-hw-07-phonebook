import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://653adf252e42fd0d54d48699.mockapi.io',
});

export const requestContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};
export const requestAddContact = async newContact => {
  const { data } = await contactsInstance.post('/contacts', newContact);
  return data;
};
export const requestDeleteContacts = async contactId => {
  const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
  return data;
};
