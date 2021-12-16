import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';

const Statistics = ({ options }) => {
  return (
    <ul className={styles.List}>
      {options.map((item, idx) => (
        <li key={idx} className={styles.Item}>
          <p className={styles.Label}>{item[0]}:</p>
          <p className={styles.Amount}>{item[1]}</p>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.array),
};

export default Statistics;
