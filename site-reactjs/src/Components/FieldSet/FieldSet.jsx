import React, {useEffect, useState} from 'react';

const FieldSet = ({texto, dadosFormulario, onchange, nomeDaChave}) => {
  console.log(dadosFormulario);
  return (
      <fieldset>
        <label htmlFor="">{texto}</label>
        <input type="text" value={dadosFormulario}  onChange={({ target })=>onchange(target,nomeDaChave)} placeholder={texto}/>
      </fieldset>   
  )
}

export default FieldSet