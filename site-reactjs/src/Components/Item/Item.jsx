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
    // <section className={S.container}>
      <section className={S.dados}>
          <small>{produto.name}</small>
          <small >{produto.cor}</small>
          <small >{produto.marca}</small> 
          <small>{produto.peso}</small>
          <small >{produto.tamanho}</small>
          <small >{produto.valor}</small>
          <small >{produto._id}</small>
        <section className={S.edit}>
          <Link className={S.link} to={`/produtos/${produto._id}`}>Editar</Link>
        {/* <Botao className={S.btn} text='Excluir' onclick={handleDelete}/> */}
         <button className={S.btn} onClick={handleDelete}>Excluir</button>
        </section>
      </section> 
    // </section>
  )
}

export default Item