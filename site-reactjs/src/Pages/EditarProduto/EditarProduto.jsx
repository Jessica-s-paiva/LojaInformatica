import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Form from '../../Components/Form/Form'
import S from './EditarProduto.module.css'
import { getProdutosById } from '../../Service/api'

const EditarProduto = () => {
  
  return (

    <div className={S.container}>
      <Form />
    </div>
  )
}

export default EditarProduto