import React from 'react';

const Input = ({ label, type, name }) => {
  return (
    <div>
      <div>
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          className=""
          type={type}
          placeholder={`Informe ${label}`}
        />
      </div>
    </div>
  );
};

export default Input;
