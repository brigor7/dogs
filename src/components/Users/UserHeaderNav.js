import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../assets/feed.svg';
import { ReactComponent as Estatistica } from '../../assets/estatisticas.svg';
import { ReactComponent as AdicionarFotos } from '../../assets/adicionar.svg';
import { ReactComponent as Sair } from '../../assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);

  const mobile = useMedia('(max-width:40rem)');
  console.log(mobile);
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end activeClassName={styles.active}>
        <MinhasFotos />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatistica" activeClassName={styles.active}>
        <Estatistica />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar" activeClassName={styles.active}>
        <AdicionarFotos />
        {mobile && 'Adicionar Foto'}
      </NavLink>

      <button onClick={userLogout}>
        <Sair />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
