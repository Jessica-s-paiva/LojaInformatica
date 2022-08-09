import React,{ useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Item from '../Item/Item'
import S from './Lista.module.css'
import { getProdutosById } from '../../Service/api.js';
import {getProdutos} from '../../Service/api.js';
import Cards from '../../Components/Cards/Cards';

const Lista = ({id, nome, cor, marca, peso, tamanho, valor, descricao, imagem}) => {
    const [produtos, setProdutos] = useState('');
  
    async function handleRequisicao(){
      const response = await getProdutos();
      setProdutos(response);
      console.log(response);
    }

    async function handleGetProductsById() {
        const response = await getProdutosById();
        setProdutos([response]);
      }
  
    // async function handleGetNome() {
    //   const response = await getNome(produtos.nome);
    //   setProdutos([response]);
    //   console.log(response);
    // }
    useEffect(()=>{
      handleRequisicao();
    }, [])
return (
    <section className={S.container}>
        <section className={S.sectionA}>
          {
            !!produtos && produtos.map((product, index)=>{
            return (<Cards produto={product} key={index}/>)
            })
          }
        </section>
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
            <small className={S.produto}>ID: {id}</small>
        </div>
        <div className={S.lista}>
            <Link to={`/editarProduto`} className={S.editar}><button onClick={handleGetProductsById}>Editar</button> </Link>
        </div>
    </section>
  )
}

export default Lista