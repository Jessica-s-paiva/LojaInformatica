import React, {useEffect, useState} from 'react';
import S from './FieldSet.module.css'


const FieldSet = ({texto, dadosFormulario, onchange, nomeDaChave}) => {
  console.log(dadosFormulario);
  return (
      <fieldset>
        <label htmlFor="">{texto}</label>
        <input  type="text" value={dadosFormulario}  onChange={({ target })=>onchange(target,nomeDaChave)} placeholder={texto}/><br/>
      </fieldset>   
  )
}

export default FieldSet