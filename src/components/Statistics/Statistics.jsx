import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ options }) => {
  return (
    <ul className={styles.List}>
      {options.map(([label, value], idx) => (
        <li key={idx} className={styles.Item}>
          <p className={styles.Label}>{label}:</p>
          <p className={styles.Amount}>{value}</p>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.array),
};

export default Statistics;
