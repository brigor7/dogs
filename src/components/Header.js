import React, { useContext } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../assets/dogs.svg';
import { UserContext } from '../UserContext';
const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={`${styles.logo}`} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            Bem vindo(a) {data.nome.toUpperCase()}
          </Link>
        ) : (
          <Link className={styles.login} to="/logincreate">
            Login/Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
