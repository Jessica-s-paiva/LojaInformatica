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
    postProduto(dadosForm);
    console.log(dadosForm);
  }

  function handleChange(target, nomeDaChave){
    const value = target.value;
    setDadosForm({...dadosForm, [nomeDaChave]: value})
    console.log(dadosForm);
  }
  return (
    <>
      <section>
        <picture className={S.imageForm}>
          <img  src={dadosForm.imagem} alt="" />
        </picture>
      </section>
      <form className={S.forms} action="">
      <FieldSet texto='imagem' dadosFormulario={!!dadosForm && dadosForm.imagem} onchange={handleChange} nomeDaChave='imagem'/><br/>
        <FieldSet texto='Nome:' dadosFormulario={!!dadosForm && dadosForm.name} onchange={handleChange} nomeDaChave='name'/><br/>
        <FieldSet texto='Cor:' dadosFormulario={!!dadosForm && dadosForm.cor} onchange={handleChange} nomeDaChave='cor'/><br/>
        <FieldSet texto='Marca:' dadosFormulario={!!dadosForm && dadosForm.marca} onchange={handleChange} nomeDaChave='marca'/><br/>
        <FieldSet texto='Peso:' dadosFormulario={!!dadosForm && dadosForm.peso} onchange={handleChange} nomeDaChave='peso'/><br/>
        <FieldSet texto='Tamanho:' dadosFormulario={!!dadosForm && dadosForm.tamanho} oonchange={handleChange} nomeDaChave='tamanho'/><br/>
        <FieldSet texto='Valor:' dadosFormulario={!!dadosForm && dadosForm.valor} onchange={handleChange} nomeDaChave='valor'/><br/>
        <FieldSet texto='Descrição:' dadosFormulario={!!dadosForm && dadosForm.descricao}  onchange={handleChange} nomeDaChave='descricao'/>
        < Botao 
        oncliclk={handleSave} />
      </form>
      
    </>
  )
}

export default Form