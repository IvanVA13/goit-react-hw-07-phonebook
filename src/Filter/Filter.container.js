import { connect } from 'react-redux';

import { filterContact } from '../redux/contacts/contacts-actions';
import { getFilter } from '../redux/contacts/contacts-selectors';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onFilter: e => dispatch(filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
