import React, {useEffect, useState} from 'react';
import Item from '../../Components/Item/Item';
import {getProdutos} from '../../Service/api.js';
import { getProdutosById } from '../../Service/api.js';
import S from './Administrador.module.css';
import {Link} from 'react-router-dom';
import Logo from '../../Images/image-animation.png';

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
      <picture>
        <img className={S.logo} src={Logo} alt="" />
      </picture>
        <div className={S.titulo}>
          <h2>Área do Administrador</h2>
        </div>
        <section className={S.sectionB}>
          <input className={S.input} type="text" placeholder='Digite o ID do produto'
            value={valorInput}
            onChange={({ target }) => handleSetInput(target)}/>
          <button className={S.btn} onClick={handleGetProductsById}>Buscar produto</button>
          <Link className={S.link} to={`/adicionarProduto`}>Adicionar produto</Link>
        </section>
        <section className={S.section}>
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