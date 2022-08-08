import React, {useEffect, useState} from 'react';
import FieldSet from '../FieldSet/FieldSet'
import Botao from '../Botao/Botao'
const AddProduto = ({produto}) => {
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

    

    return (
    <>
        <FieldSet texto='Imagem do produto:' dadosFormulario={produto.imagem} onchange={({ target }) => handleChange(target,'imagem')}/>
        <FieldSet texto='Nome:' dadosFormulario={produto.name} onchange={({ target }) => handleChange(target,'name')}/>
        <FieldSet texto='Cor:' dadosFormulario={produto.cor} onchange={({ target }) => handleChange(target,'cor')}/>
        <FieldSet texto='Marca:' dadosFormulario={produto.marca} onchange={({ target }) => handleChange(target,'marca')}/>
        <FieldSet texto='Peso:' dadosFormulario={produto.peso} onchange={({ target }) => handleChange(target,'peso')}/>
        <FieldSet texto='Tamanho:' dadosFormulario={produto.tamanho} onchange={({ target }) => handleChange(target,'tamanho')}/>
        <FieldSet texto='Valor:' dadosFormulario={produto.valor} onchange={({ target }) => handleChange(target,'valor')}/>
        <FieldSet texto='Descrição:' dadosFormulario={produto.descricao}  onchange={({ target }) => handleChange(target,'descricao')}/>
    </>
    )
}

export default AddProduto