import React, { useState } from 'react';
import { URL_JWT } from './constantes.js';

const UserPost = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const fetchToken = () => {
    fetch(URL_JWT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((json) => {
        setToken(json.token);
        localStorage.setItem('token', token);
      })
      .catch((err) =>
        console.log('Ocorreu um erro durante o fetch - motivo: ' + err)
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchToken();
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

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default UserPost;
