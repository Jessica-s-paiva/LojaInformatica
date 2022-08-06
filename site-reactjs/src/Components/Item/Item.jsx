import React,{ useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import S from './Item.module.css'
const Item = ({produto}) => {

  async function handleGetProductsById() {
    const response = await getProdutosById(valorInput);
    setProducts([response]);
    console.log(response._id);
  }
  
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
        <Link to={`/editarProduto`}><button >Editar</button> </Link>      
        </section>
      </section> 
    </section>
  )
}

export default Item