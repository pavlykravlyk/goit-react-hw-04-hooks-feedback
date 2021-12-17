import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.List}>
      {options.map((label, idx) => (
        <li key={idx} className={styles.Item}>
          <button
            className={styles.Btn}
            type="button"
            onClick={() => onLeaveFeedback(label)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
