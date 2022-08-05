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
        <h2>Administrador</h2>
        {
          !!produtos && produtos.map((product, index)=>{
            return (<Lista nome={product.name} cor={product.cor} marca={product.marca} peso={product.peso} tamanho={product.tamanho} valor={product.valor} descricao={product.descricao} imagem={product.imagem}   key={index}/>)
          })
        }
        
    </section>
  )
}

export default Administrador