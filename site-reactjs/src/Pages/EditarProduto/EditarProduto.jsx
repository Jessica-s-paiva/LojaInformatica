import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Form from '../../Components/Form/Form'
import S from './EditarProduto.module.css'
import { getProdutosById } from '../../Service/api'
import { getProdutos } from '../../Service/api.js'

const EditarProduto = () => {
  const [produtos, setProdutos] = useState('');
  
  async function handleRequisicao(){
    const response = await getProdutos();git 
    setProdutos(response);
  }

  // async function handleGetProductsById() {
  //   const response = await getProdutosById(valorInput);
  //   setProdutos([response]);
  // }
  useEffect(()=>{
    // handleGetProductsById();
    handleRequisicao();
  }, [])
  return (

    <div className={S.container}>
      <Form />
    </div>
  )
}

export default EditarProduto