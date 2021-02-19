import React, { useState, useEffect } from 'react';
import { URL_PHOTO } from './constantes.js';

const PhotoPost = () => {
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [idade, setIdade] = useState('');
  const [img, setImg] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', img);
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);

    const dados = { nome, peso, img };
    fetch(URL_PHOTO, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer' + token,
      },
      body: formData,
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
      <h1>Photo Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="token"
          value={token}
          onChange={({ target }) => setToken(target.value)}
        />
        <input
          type="nome"
          placeholder="nome"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
        <input
          type="peso"
          placeholder="Peso"
          value={peso}
          onChange={({ target }) => setPeso(target.value)}
        />
        <input
          type="idade"
          placeholder="Idade"
          value={idade}
          onChange={({ target }) => setIdade(target.value)}
        />
        <input type="file" onChange={({ target }) => setImg(target.files[0])} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PhotoPost;
