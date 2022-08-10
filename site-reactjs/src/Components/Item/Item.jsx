import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Link, Navigate} from 'react-router-dom';
import S from './Item.module.css';
import Botao from '../Botao/Botao';
import { deleteProduto } from '../../Service/api';
const Item = ({produto}) => {
  const {id} = useParams();
  function handleDelete(){
   deleteProduto(produto._id);
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
        <Link to={`/produtos/${produto._id}`}>editar</Link>
        <Botao text='Excluir' onclick={handleDelete}/>
        {/* <Navigate to="/editarProduto" replace={true} />       */}
        </section>
      </section> 
    </section>
  )
}

export default Item