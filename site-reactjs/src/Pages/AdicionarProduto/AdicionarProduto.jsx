import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Botao from '../../Components/Botao/Botao'
import S from './AdicionarProduto.module.css'
import { getProdutos } from '../../Service/api.js'
import AddProduto from '../../Components/AddProduto/AddProduto'
import Form from '../../Components/Form/Form'

const AdicionarProduto = () => {
  const params = useParams()
  const {id} = useParams();
  const [produtos, setProdutos] = useState('');
  async function handleGetProductsById() {
    const response = await getProdutosById(id);
    setProdutos(response);
    console.log(response);
  }

  function handleUpdate(e){
    e.preventDefault();
    updateProduto(id);
  }
  return (

    <div className={S.container}>
      <Form />
      
    </div>
  )
}

export default AdicionarProduto