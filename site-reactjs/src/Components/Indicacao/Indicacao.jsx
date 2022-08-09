import React,{ useState, useEffect } from 'react';
import S from './Indicacao.module.css'
import Cards from '../Cards/Cards';
import { getIndicacoes } from '../../Service/api.js';
import { Link } from 'react-router-dom';


const Indicacao = () => {
  const [indicacoes, setIndicacoes] = useState([]);

  useEffect(() => {
    handleGetIndicacoes();
  }, []);

  async function handleGetIndicacoes() {
    const response = await getIndicacoes();
    setIndicacoes(response);
}

  return (
    <>
    <h2>Aqui estão alguns itens que você pode se interessar:</h2><br />
        {
            !!indicacoes && indicacoes.map((indicacao, index)=>{
            return (<Cards produto={indicacao} key={index}/>)
            })
        }
       <br />
       <Link className={S.BtnIrParaProdutos} to='/produtos'>Confira todos os produtos</Link>
          
    </>
  )
}

export default Indicacao