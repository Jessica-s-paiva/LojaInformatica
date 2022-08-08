import React,{ useState, useEffect } from 'react';
import {Link, Navigate} from 'react-router-dom'
import S from './Item.module.css'
const Item = ({produto}) => {
  
  return (
    <section className={S.container}>
      <section className={S.dados}>
          <small>Nome: {produto.name}</small>
          <small >Cor: {produto.cor}</small>
          <small >Marca: {produto.marca}</small> 
          <small>Peso: {produto.peso}</small>
          <small >Tamanho: {produto.tamanho}</small>
          <small >Valor: {produto.valor}</small>
          <small >Id: {produto._id}</small>
        <section className={S.edit}>
        <Link to={`/editar/${produto._id}`}>editar</Link>
        {/* <Navigate to="/editarProduto" replace={true} />       */}
        </section>
      </section> 
    </section>
  )
}

export default Item