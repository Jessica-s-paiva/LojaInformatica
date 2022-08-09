import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getProdutosById } from '../../Service/api.js';
import { updateProduto } from '../../Service/api.js';
import S from './EditarProduto.module.css';
import Botao from '../../Components/Botao/Botao.jsx';
// import FieldSet from '../../Components/FieldSet/FieldSet';
import Cards from '../../Components/Cards/Cards';
import AddProduto from '../../Components/AddProduto/AddProduto';

const EditarProduto = () => {
  const params = useParams()
  const {id} = useParams();
  const [produtos, setProdutos] = useState('');
  useEffect(()=>{
    // handleGetProductsById();
    handleGetProductsById();
  }, [])

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
    <div>
        {/* <section>
          {
            !!produtos && produtos.map((product, index)=>{
              return (<Cards produto={product} key={index}/>)
            })
          }
        </section> */}
        <section>
          <h3>ID: {id}</h3>
          <AddProduto produto={produtos}/>
          <Botao text='Alterar' onclick={handleUpdate}/>
        </section>
        
    </div>
  )
}

export default EditarProduto