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
    postProduto(dadosForm);
  }
  return (
    <div>
      <section>
        <picture>
          <img src={dadosForm.url} alt="" />
        </picture>
      </section>
      <form className={S.forms} action="">
        
        <fieldset>
          <label htmlFor="">Nome abreviado</label>
          <input type="text" value={dadosForm.nomeAbreviado}  onChange={({ target }) => handleChange(target,'nomeAbreviado')}/>
        </fieldset>
        <fieldset>
          <label htmlFor="">url</label>
          <input type="text" value={dadosForm.url}  onChange={({ target }) => handleChange(target,'url')}/>
        </fieldset>
        <fieldset>
          <label htmlFor="">Categoria</label>
          <input type="text" value={dadosForm.nomeAbreviado}  onChange={({ target }) => handleChange(target,'nomeAbreviado')}/>
        </fieldset>
        <fieldset>
          <label htmlFor="">Marca</label>
          <input type="text" value={dadosForm.nomeAbreviado}  onChange={({ target }) => handleChange(target,'nomeAbreviado')}/>
        </fieldset>
        <fieldset>
          <label htmlFor="">Quantidade</label>
          <input type="text" value={dadosForm.nomeAbreviado}  onChange={({ target }) => handleChange(target,'nomeAbreviado')}/>
        </fieldset>
        <fieldset>
          <label htmlFor="">Cor</label>
          <input type="text" value={dadosForm.nomeAbreviado}  onChange={({ target }) => handleChange(target,'nomeAbreviado')}/>
        </fieldset>
        <fieldset>
          <label htmlFor="">Preço</label>
          <input type="text" value={dadosForm.nomeAbreviado}  onChange={({ target }) => handleChange(target,'nomeAbreviado')}/>
        </fieldset>
        <fieldset>
          <label htmlFor="">Porcentagem de desconto</label>
          <input type="text" value={dadosForm.nomeAbreviado}  onChange={({ target }) => handleChange(target,'nomeAbreviado')}/>
        </fieldset>
        <fieldset>
          <label htmlFor="">Descrição</label>
          <input type="text" value={dadosForm.nomeAbreviado}  onChange={({ target }) => handleChange(target,'nomeAbreviado')}/>
        </fieldset>
      </form>
      <section>
        <Botao text="salvar" onclick/>
      </section>
    </div>
  )
}

export default Form