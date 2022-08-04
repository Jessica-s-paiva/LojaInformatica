import React from 'react'
import {Link} from 'react-router-dom'
import S from './Lista.module.css'

const Lista = ({nome, categoria, preco}) => {
  return (
    <section className={S.container}>
        <div className={S.lista}>
            <small>Nome: </small>
            <p>{nome}</p>
        </div>
        <div className={S.lista}>
            <small>Preço: </small>
            <p>{preco}</p>
        </div>
        <div className={S.lista}>
            <small>Categoria: </small>
            <p>{categoria}</p>
        </div>
        <div className={S.lista}>
            <Link to='/editarProduto' className={S.editar}>Editar</Link>
        </div>
    </section>
  )
}

export default Lista