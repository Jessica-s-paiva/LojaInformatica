import React, {useEffect, useState} from 'react'
import { postProduto } from '../../Service/api';
import Botao from '../Botao/Botao';
import S from './Form.module.css'
import { useParams } from 'react-router-dom'

const Form = () => {
  const params = useParams()
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

  function handleSave(e){
    e.preventDefault();
    postProduto(dadosForm)
  }
  async function handleGetProductsById() {
    const response = await getProdutosById(valorInput);
    setProducts([response]);
  }
  return (
    <div>
      <section>
        <picture className={S.imageForm}>
          <img  src={dadosForm.imagem} alt="" />
        </picture>
      </section>
      <form className={S.forms} action="">
        <fieldset>
          <label htmlFor="">Imagem do produto: </label>
          <input type="text" value={dadosForm.imagem}  onChange={({ target }) => handleChange(target,'imagem')} placeholder={dadosForm.imagem}/>
        </fieldset>
        <fieldset>
          <label htmlFor="">Nome: </label>
          <input type="text" value={dadosForm.name}  onChange={({ target }) => handleChange(target,'name')} placeholder={dadosForm.name}/>
        </fieldset>
        <fieldset>
          <label htmlFor="">Cor: </label>
          <input type="text" value={dadosForm.cor}  onChange={({ target }) => handleChange(target,'cor')}/>
        </fieldset>
        <fieldset>
        <fieldset>
          <label htmlFor="">Marca: </label>
          <input type="text" value={dadosForm.marca}  onChange={({ target }) => handleChange(target,'marca')}/>
        </fieldset>
          <label htmlFor="">Peso: </label>
          <input type="text" value={dadosForm.peso}  onChange={({ target }) => handleChange(target,'peso')}/>
        </fieldset>
        
        <fieldset>
          <label htmlFor="">Tamanho: </label>
          <input type="text" value={dadosForm.tamanho}  onChange={({ target }) => handleChange(target,'tamanho')}/>
        </fieldset>
        <fieldset>
          <label htmlFor="">Valor: </label>
          <input type="text" value={dadosForm.valor}  onChange={({ target }) => handleChange(target,'valor')}/>
        </fieldset>
        <fieldset>
          <label htmlFor="">Descrição: </label>
          <input type="text" value={dadosForm.descricao}  onChange={({ target }) => handleChange(target,'descricao')}/>
        </fieldset>
        <section>
          <Botao text="salvar" onclick={handleSave}/>
        </section>
      </form>
      
    </div>
  )
}