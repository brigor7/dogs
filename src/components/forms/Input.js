import React from 'react';
import styles from './input.module.css';

const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        type={type}
        placeholder={`Informe ${label}`}
      />
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;
