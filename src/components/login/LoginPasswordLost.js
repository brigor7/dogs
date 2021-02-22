import React, { useState } from 'react';

const LoginPasswordLost = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h1>Login Perdeu</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          valuer={username}
          onChange={({ target }) => setUsername(target.value)}
          placeholder="Username"
        />
        <input
          type="passoword"
          valuer={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="Senha"
        />
        <button>Entrar</button>
      </form>
    </section>
  );
};

export default LoginPasswordLost;
