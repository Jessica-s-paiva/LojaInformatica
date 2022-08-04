import React from 'react'
import {Link} from 'react-router-dom'
import Item from '../Item/Item'
import S from './Lista.module.css'

const Lista = ({nome, cor, marca, peso, tamanho, valor, descricao, imagem}) => {
return (
    <section className={S.container}>
        <div className={S.itens}>
        <div className={S.lista}>
            <small className={S.produto}>Nome: {nome}</small>
        </div>
        <div className={S.lista}>
            <small className={S.produto}>Cor: {cor}</small>
        </div>
        <div className={S.lista}>
            <small className={S.produto}>Marca: {marca}</small>
        </div>
        <div className={S.lista}>
            <small className={S.produto}>Peso: {peso}</small>
        </div>
        <div className={S.lista}>
            <small className={S.produto}>Tamanho: {tamanho}</small>
        </div>
        <div className={S.lista}>
            <small className={S.produto}>Valor: {valor}</small>
        </div>
        <div className={S.lista}>
            <small className={S.produto}>Descricao: {descricao}</small>
        </div>
        <div className={S.lista}>
            <small className={S.produto}>Imagem: {imagem}</small>
        </div>
        </div>
        <div className={S.lista}>
            <Link to='/editarProduto' className={S.editar}>Editar</Link>
        </div>
    </section>
  )
}

export default Lista