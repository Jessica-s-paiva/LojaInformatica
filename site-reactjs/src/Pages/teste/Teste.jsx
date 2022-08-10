import React from 'react'
import S from './teste.module.css'
import {FaSearch } from 'react-icons/fa'

const Teste = () => {
  return (
    <div className={S.searchBox}>
    <input class={S.searchTxt} type="text" placeholder="Faça a sua pesquisa"/>
    <a class={S.serchBnt} heref="">
    <i className={S.faSearch}>
    <FaSearch />
    </i>
    </a>
  </div>
  )
}

export default Teste