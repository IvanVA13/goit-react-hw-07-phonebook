import { connect } from 'react-redux';
import {
  delContact,
  fetchContacts,
} from '../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../redux/contacts/contacts-selectors';
import ContactList from './ContactList';

const mapStateToProps = state => ({ contacts: getVisibleContacts(state) });

const mapDispatchToProps = dispatch => ({
  handleDelContact: id => dispatch(delContact(id)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
