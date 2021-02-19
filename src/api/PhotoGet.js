import React, { useState, useEffect } from 'react';
import { URL_PHOTO } from './constantes.js';

const PhotoGet = () => {
  const [id, setId] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [token]);

  const fetchToken = () => {
    fetch(URL_PHOTO + `${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return json;
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
      <h1>Photo Get</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Id"
          value={id}
          onChange={({ target }) => setId(target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PhotoGet;
