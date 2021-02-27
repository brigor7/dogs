import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../assets/feed.svg';
import { ReactComponent as Estatistica } from '../../assets/estatisticas.svg';
import { ReactComponent as AdicionarFotos } from '../../assets/adicionar.svg';
import { ReactComponent as Sair } from '../../assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);

  const isMobile = useMedia('(max-width:40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {isMobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${isMobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end activeClassName={styles.active}>
          <MinhasFotos />
          {isMobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatistica" activeClassName={styles.active}>
          <Estatistica />
          {isMobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar" activeClassName={styles.active}>
          <AdicionarFotos />
          {isMobile && 'Adicionar Foto'}
        </NavLink>

        <button onClick={userLogout}>
          <Sair />
          {isMobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
