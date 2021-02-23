import React, { createContext, useState, useEffect } from 'react';
import { TOKEN_POST, USER_GET } from './api';

export const UserContext = createContext();
export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem('token');
      if (token) {
        getUser(token);
      }
    }

    autoLogin();
  }, []);

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const response = await fetch(url, options);
    const json = await response.json();
    localStorage.setItem('token', json.token);
    getUser(json.token);
  }

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    console.log(json);
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};
