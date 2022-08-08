import React from 'react'
import { useParams } from 'react-router-dom'

const EditarProduto = () => {
  const {id} = useParams();
  return (
    <div>{id}</div>
  )
}

export default EditarProduto