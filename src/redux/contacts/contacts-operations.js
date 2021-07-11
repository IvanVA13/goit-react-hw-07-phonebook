import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  delContactError,
  delContactRequest,
  delContactSuccess,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
} from './contacts-actions';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040';

export const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const delContact = id => dispatch => {
  dispatch(delContactRequest());

  try {
    axios.delete(`/contacts/${id}`);
    dispatch(delContactSuccess(id));
  } catch (error) {
    dispatch(delContactError(error));
  }
};

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};
