import React, { useState, useRef } from 'react';

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const inputRef = useRef();

  const types = {
    email: {
      regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      message: 'Preencha um e-mail válido',
    },
    password: {
      regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      message:
        'A senha precisa ter: Mínimo de 8 caracteres e composta por letra e número.',
    },
  };

  const validate = (value) => {
    if (type === false) {
      return true;
    }

    console.log(types[type]);
    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
    inputRef,
  };
};

export default useForm;
