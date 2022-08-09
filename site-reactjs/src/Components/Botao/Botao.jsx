import React from 'react';
import S from './Botao.module.css';

const Botao = ({text, onclick}) => {
  return (
    <button type='submit' className={S.btn} onClick={onclick}>{text}</button>
  )
}

export default Botao