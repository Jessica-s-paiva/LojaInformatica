import React, {useEffect, useState} from 'react';

const FieldSet = ({texto, dadosFormulario, onchange}) => {
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


  return (
    <fieldset>
      <label htmlFor="">{texto}</label>
      <input type="text" value={dadosFormulario}  onChange={onchange} placeholder={dadosFormulario}/>
    </fieldset>
  )
}

export default FieldSet