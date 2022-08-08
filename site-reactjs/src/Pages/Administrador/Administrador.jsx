import React, {useEffect, useState} from 'react';
import Item from '../../Components/Item/Item';
import Lista from '../../Components/Lista/Lista';
import {getProdutos} from '../../Service/api.js';
import { getProdutosById } from '../../Service/api.js';
import S from './Administrador.module.css';
import {Link, Navigate} from 'react-router-dom';

const Administrador = () => {
  const [produtos, setProdutos] = useState('');
  const [valorInput, setValorInput] = useState('');

  async function handleRequisicao(){
    const response = await getProdutos();
    setProdutos(response);
  }

  useEffect(()=>{
    handleRequisicao();
  }, [])

  async function handleGetProductsById() {
    const response = await getProdutosById(valorInput);
    setProdutos([response]);
    console.log(response);
  }

  function handleSetInput(target) {
    setValorInput(target.value);
    console.log(target.value);
  }

  return (
    <section className={S.container}>
        <h2>Administrador</h2>
        <section className={S.sectionB}>
          <input type="text" placeholder='Digite o ID do produto'
            value={valorInput}
            onChange={({ target }) => handleSetInput(target)}/>
          <button onClick={handleGetProductsById}>Buscar produto por ID</button>
          <Link to={`/adicionarProduto`}><button >Adicionar produto</button> </Link>
        </section>
        <section>
          {
            !!produtos && produtos.map((product, index)=>{
              return (<Item produto={product}  key={index}/>)
            })
          }
        </section>   
    </section>
  )
}

export default Administrador