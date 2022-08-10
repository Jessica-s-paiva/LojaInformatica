import React,{ useState, useEffect } from 'react';
import S from './Indicacao.module.css'
import Cards from '../Cards/Cards';
import { getIndicacoes } from '../../Service/api.js';
import { Link } from 'react-router-dom';
import { getProdutos } from '../../Service/api.js';

const Indicacao = () => {
  const [indicacoes, setIndicacoes] = useState([]);
  const [produtos, setProdutos] = useState('');

  useEffect(() => {
    handleGetIndicacoes();
    handleRequisicao();
  }, []);

  async function handleGetIndicacoes() {
    const response = await getIndicacoes();
    setIndicacoes(response);
   
  }

  async function handleRequisicao(){
    const response = await getProdutos();
    setProdutos(response);
    console.log(response);
  }

  return (
    <div className={S.container}>
        <h2>Aqui estão alguns itens que você pode se interessar:</h2>
        <section className={S.cards}>
          {
              !!indicacoes && indicacoes.map((indicacao, index)=>{
              return (<Cards produto={indicacao} key={index}/>)
              })
          }
        </section>
       <br />
       <Link className={S.BtnIrParaProdutos} to='/produtos'>Confira todos os produtos</Link>   
    </div>
  )
}

export default Indicacao