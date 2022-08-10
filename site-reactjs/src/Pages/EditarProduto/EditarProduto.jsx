import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getProdutosById } from '../../Service/api.js';
import { updateProduto } from '../../Service/api.js';
import S from './EditarProduto.module.css';
import Botao from '../../Components/Botao/Botao.jsx';
// import FieldSet from '../../Components/FieldSet/FieldSet';
//import Cards from '../../Components/Cards/Cards';
import AddProduto from '../../Components/AddProduto/AddProduto';

const EditarProduto = () => {
  const params = useParams()
  const {id} = useParams();
  const [produtos, setProdutos] = useState('');
  const [dadosForm, setDadosForm] = useState({
    name: '',
    cor: '', 
    marca: '', 
    peso: '', 
    tamanho: '', 
    valor: '',
    descricao:'', 
    imagem:''
  })

function handleChange(target, nomeDaChave){
    const value = target.value;
    setDadosForm({...dadosForm, [nomeDaChave]: value})
    console.log(dadosForm);
}
  useEffect(()=>{
    // handleGetProductsById();
    handleGetProductsById();
  }, [])

  async function handleGetProductsById() {
    const response = await getProdutosById(id);
    setDadosForm(response);
    console.log(response);
  }

  function handleUpdate(e){
    e.preventDefault();
    updateProduto(id, dadosForm);
  }
  return (
    <div className={S.container}><br/>
        {/* <section>
          {
            !!produtos && produtos.map((product, index)=>{
              return (<Cards produto={product} key={index}/>)
            })
          }
        </section> */}
        <section >
          <h3>ID: {id}</h3>
          <AddProduto dadosForm={dadosForm} handleChange={handleChange}/><br/>
          <Botao text='Alterar' onclick={handleUpdate}/>
        </section>
    </div>
  )
}

export default EditarProduto