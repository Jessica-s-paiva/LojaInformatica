import React, {useEffect, useState} from 'react';
import FieldSet from '../FieldSet/FieldSet'
import Botao from '../Botao/Botao'
const AddProduto = ({dadosForm, handleChange}) => {

    return (
    <>
    <input type="text" value={!!dadosForm && dadosForm.name} onChange={({ target})=> handleChange(target, 'name')}/>
        <FieldSet texto='imagem' dadosFormulario={!!dadosForm && dadosForm.imagem} onchange={handleChange} nomeDaChave='imagem'/>
        <FieldSet texto='Nome:' dadosFormulario={!!dadosForm && dadosForm.name} onchange={handleChange} nomeDaChave='name'/>
        <FieldSet texto='Cor:' dadosFormulario={!!dadosForm && dadosForm.cor} onchange={handleChange} nomeDaChave='cor'/>
        <FieldSet texto='Marca:' dadosFormulario={!!dadosForm && dadosForm.marca} onchange={handleChange} nomeDaChave='marca'/>
        <FieldSet texto='Peso:' dadosFormulario={!!dadosForm && dadosForm.peso} onchange={handleChange} nomeDaChave='peso'/>
        <FieldSet texto='Tamanho:' dadosFormulario={!!dadosForm && dadosForm.tamanho} oonchange={handleChange} nomeDaChave='tamanho'/>
        <FieldSet texto='Valor:' dadosFormulario={!!dadosForm && dadosForm.valor} onchange={handleChange} nomeDaChave='valor'/>
        <FieldSet texto='Descrição:' dadosFormulario={!!dadosForm && dadosForm.descricao}  onchange={handleChange} nomeDaChave='descricao'/>
    </>
    )
}

export default AddProduto