import React, {useEffect, useState} from 'react'
import { postProduto } from '../../Service/api';
import Botao from '../Botao/Botao';
import S from './Form.module.css'

const Form = () => {
  const [dadosForm, setDadosForm] = useState({
    nome_completo: '',
    url: '',
    nome_abreviado: '',
    categoria: '',
    marca: '',
    avaliacao: '',
    cor: '',
    preco: '',
    porcentagem_desconto: '',
    descricao:''
  })

  function handleChange(target, nomeDaChave){
    const value = target.value;
    setDadosForm({...dadosForm, [nomeDaChave]: value})
  }

  function handleSave(){
    postProduto(dadosForm)
  }
  async function handleGetProductsById() {
    const response = await getProdutosById(valorInput);
    setProducts([response]);
  }
  return (
    <div>
      <section>
        <picture>
          <img src={dadosForm.imagem} alt="" />
        </picture>
      </section>
      <form className={S.forms} action="">
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
        

      </form>
      <section>
        <Botao text="salvar" onclick={handleGetProductsById}/>
      </section>
    </div>
  )
}

export default Form