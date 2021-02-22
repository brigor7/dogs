import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PhotoPost from '../../api/PhotoPost';
import Input from '../forms/Input';
import Button from '../forms/Button';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((json) => {
        setToken(json.token);
        //localStorage.setItem('token', token);
        console.log(json);
      })
      .catch((err) =>
        console.log('Ocorreu um erro durante o fetch - motivo: ' + err)
      );
  };

  return (
    <section className="container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name={'usuario'} />
        <Input label="Senha" type="password" name={'password'} />
        <Button>Entrar</Button>

        <Link to="/login/criar">Cadastro</Link>
        <Link to="/login/perdeu">Esqueci a senha</Link>
      </form>
    </section>
  );
};

export default LoginForm;
