import React, {useEffect, useState} from 'react';
import { postProduto } from '../../Service/api.js';
import Botao from '../Botao/Botao';
import S from './Form.module.css';
import { useParams } from 'react-router-dom';
import FieldSet from '../FieldSet/FieldSet';

const Form = () => {
  const params = useParams();
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
  function handleSave(e){
    e.preventDefault();
    postProduto(dadosForm)
  }
  async function handleGetProductsById() {
    const response = await getProdutosById(valorInput);
    setProducts([response]);
  }

  function handleChange(target, nomeDaChave){
    const value = target.value;
    setDadosForm({...dadosForm, [nomeDaChave]: value})
    console.log(dadosForm);
  }
  return (
    <div>
      <section>
        <picture className={S.imageForm}>
          <img  src={dadosForm.imagem} alt="" />
        </picture>
      </section>
      <form className={S.forms} action="">
        <FieldSet texto='Imagem do produto:' dadosFormulario={dadosForm.imagem} onchange={({ target }) => handleChange(target,'imagem')}/>
        <FieldSet texto='Nome:' dadosFormulario={dadosForm.nome} onchange={({ target }) => handleChange(target,'nome')}/>
        <FieldSet texto='Cor:' dadosFormulario={dadosForm.cor} onchange={({ target }) => handleChange(target,'cor')}/>
        <FieldSet texto='Marca:' dadosFormulario={dadosForm.marca} onchange={({ target }) => handleChange(target,'marca')}/>
        <FieldSet texto='Peso:' dadosFormulario={dadosForm.peso} onchange={({ target }) => handleChange(target,'peso')}/>
        <FieldSet texto='Tamanho:' dadosFormulario={dadosForm.tamanho} onchange={({ target }) => handleChange(target,'tamanho')}/>
        <FieldSet texto='Valor:' dadosFormulario={dadosForm.valor} onchange={({ target }) => handleChange(target,'valor')}/>
        <FieldSet texto='Descrição:' dadosFormulario={dadosForm.descricao}  onchange={({ target }) => handleChange(target,'descricao')}/>
        <section>
          <Botao text="salvar" onclick={handleSave}/>
        </section>
      </form>
      
    </div>
  )
}

export default Form