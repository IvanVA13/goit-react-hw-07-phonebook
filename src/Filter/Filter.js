import PropTypes from 'prop-types';

import styles from './Filter.module.scss';

const Filter = props => {
  const { value, onFilter } = props;
  return (
    <div className={styles['input-layout']}>
      <label className={styles.title}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
