import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Notification/Notification.module.css';

const Notification = ({ message }) => (
  <h2 className={styles.Title}>{message}</h2>
);

Notification.propTypes = { message: PropTypes.string.isRequired };

export default Notification;
