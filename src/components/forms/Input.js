import React from 'react';
import styles from './input.module.css';

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
  inputRef,
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        ref={inputRef}
        type={type}
        placeholder={`Informe ${label}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
