import React, { StrictMode } from 'react';
import S from './Header.module.css';
import { Link } from 'react-router-dom';
import zebra from '../../Images/zebra.jpg';
const Header = ({titulo}) => {
  return (
    <header className={S.container}>
      <picture>
        <img className={S.img} src={zebra} alt="" />
      </picture>
        <nav>
          <Link className={S.link} to='/'>Home</Link>
          <Link className={S.link} to='/produtos'>Produtos</Link>
          <Link className={S.link} to='/login'>Login</Link>
        </nav>
    </header>
  )
}

export default Header