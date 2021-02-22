import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../forms/Input';
import Button from '../forms/Button';
import useForm from '../../hooks/useForm';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(username.value, password.value),
      })
        .then((response) => response.json())
        .then((json) => {
          //localStorage.setItem('token', token);
          console.log(json);
        })
        .catch((err) =>
          console.log('Ocorreu um erro durante o fetch - motivo: ' + err)
        );
    }
  };

  return (
    <section className="container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name={'usuario'} {...username} />
        <Input label="Senha" type="password" name={'password'} {...password} />
        <Button>Entrar</Button>

        <Link to="/login/criar">Cadastro</Link>
        <Link to="/login/perdeu">Esqueci a senha</Link>
      </form>
    </section>
  );
};

export default LoginForm;
