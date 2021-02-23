import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Input from '../forms/Input';
import Button from '../forms/Button';
import useForm from '../../hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api.js';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = localStorage.getItem('token');
    token && getUser(token);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const json = await response.json();
      localStorage.setItem('token', json.token);
    }
  }

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

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
