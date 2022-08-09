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
    useEffect(
        ()=>{
            setDadosForm(produto);
        },[produto])
      console.log(dadosForm);

    function handleChange(target, nomeDaChave){
        const value = target.value;
        setDadosForm({...dadosForm, [nomeDaChave]: value})
        console.log(value);
    }

    return (
    <>
        <FieldSet texto='imagem' dadosFormulario={dadosForm.imagem} onchange={handleChange} key='imagem'/>
        <FieldSet texto='Nome:' dadosFormulario={dadosForm.name} onchange={handleChange} key='name'/>
        <FieldSet texto='Cor:' dadosFormulario={produto.cor} onchange={handleChange} key='cor'/>
        <FieldSet texto='Marca:' dadosFormulario={produto.marca} onchange={handleChange} key='marca'/>
        <FieldSet texto='Peso:' dadosFormulario={produto.peso} onchange={handleChange} key='peso'/>
        <FieldSet texto='Tamanho:' dadosFormulario={produto.tamanho} oonchange={handleChange} key='tamanho'/>
        <FieldSet texto='Valor:' dadosFormulario={produto.valor} onchange={handleChange} key='valor'/>
        <FieldSet texto='Descrição:' dadosFormulario={produto.descricao}  onchange={handleChange} key='descricao'/>
    </>
    )
}

export default AddProduto