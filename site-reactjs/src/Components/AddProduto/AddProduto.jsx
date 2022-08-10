import React, {useEffect, useState} from 'react';
import FieldSet from '../FieldSet/FieldSet'

const AddProduto = ({dadosForm, handleChange}) => {

    return (
    <>
    <input type="text" value={!!dadosForm && dadosForm.name} onChange={({ target})=> handleChange(target, 'name')}/><br/>
        <FieldSet texto='imagem' dadosFormulario={!!dadosForm && dadosForm.imagem} onchange={handleChange} nomeDaChave='imagem'/><br/>
        <FieldSet texto='Nome:' dadosFormulario={!!dadosForm && dadosForm.name} onchange={handleChange} nomeDaChave='name'/><br/>
        <FieldSet texto='Cor:' dadosFormulario={!!dadosForm && dadosForm.cor} onchange={handleChange} nomeDaChave='cor'/><br/>
        <FieldSet texto='Marca:' dadosFormulario={!!dadosForm && dadosForm.marca} onchange={handleChange} nomeDaChave='marca'/><br/>
        <FieldSet texto='Peso:' dadosFormulario={!!dadosForm && dadosForm.peso} onchange={handleChange} nomeDaChave='peso'/><br/>
        <FieldSet texto='Tamanho:' dadosFormulario={!!dadosForm && dadosForm.tamanho} oonchange={handleChange} nomeDaChave='tamanho'/><br/>
        <FieldSet texto='Valor:' dadosFormulario={!!dadosForm && dadosForm.valor} onchange={handleChange} nomeDaChave='valor'/><br/>
        <FieldSet texto='Descrição:' dadosFormulario={!!dadosForm && dadosForm.descricao}  onchange={handleChange} nomeDaChave='descricao'/>
    </>
    )
}

export default AddProduto