import React, { StrictMode } from 'react';
import S from './Header.module.css';
import { Link } from 'react-router-dom';
import preguica from '../../assets/preguica.png';
const Header = ({titulo}) => {
  return (
    <header className={S.container}>
      <picture>
        <img className={S.img} src={preguica} alt="" />
      </picture>
        <h4>{titulo}</h4>
        <nav>
          <Link className={S.link} to='/'>Home</Link>
          <Link className={S.link} to='/produtos'>Produtos</Link>
          <Link className={S.link} to='/login'>Login</Link>
        </nav>
    </header>
  )
}

export default Header