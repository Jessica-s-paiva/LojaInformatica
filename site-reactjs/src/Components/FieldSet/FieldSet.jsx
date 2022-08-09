import React, {useEffect, useState} from 'react';

const FieldSet = ({texto, dadosFormulario, onchange, key}) => {
  console.log(dadosFormulario);
  return (
      <fieldset>
        <label htmlFor="">{texto}</label>
        <input type="text" value={dadosFormulario}  onChange={({ target })=>onchange(target,key)} placeholder={texto}/>
      </fieldset>   
  )
}

export default FieldSet