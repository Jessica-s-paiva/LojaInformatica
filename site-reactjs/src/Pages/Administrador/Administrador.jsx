import React, {useEffect, useState} from 'react'
import Lista from '../../Components/Lista/Lista'
import { getProdutos } from '../../Service/api.js'

const Administrador = () => {
  const [produtos, setProdutos] = useState('');
  
  async function handleRequisicao(){
    const response = await getProdutos();
    setProdutos(response);
  }
  useEffect(()=>{
    handleRequisicao();
  }, [])
  return (
    <section >
        {
          !!produtos && produtos.map((product, index)=>{
            return (<Lista nome={product.nome_abreviado} preco={product.preco} categoria={product.categoria} key={index}/>)
          })
        }
        
    </section>
  )
}

export default Administrador