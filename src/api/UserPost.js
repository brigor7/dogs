import React, { useState } from 'react';
import { URL_USER } from './constantes.js';

const UserPost = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const dados = { username, password, email };
    fetch(URL_USER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return json;
      });
    console.log(dados);
  };

  return (
    <div>
      <h1>username Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default UserPost;
