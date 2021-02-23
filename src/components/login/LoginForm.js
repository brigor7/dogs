import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Input from '../forms/Input';
import Button from '../forms/Button';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name={'usuario'} {...username} />
        <Input label="Senha" type="password" name={'password'} {...password} />
        <Button>Entrar</Button>
        {error && <p>{error}</p>}

        <Link to="/login/criar">Cadastro</Link>
        <Link to="/login/perdeu">Esqueci a senha</Link>
      </form>
    </section>
  );
};

export default LoginForm;
