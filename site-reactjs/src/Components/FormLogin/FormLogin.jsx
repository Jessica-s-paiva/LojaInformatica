
import React, {useEffect, useState} from 'react'


const FormLogin = () => {

  const [Email, setEmail] = useState('')
  const [Senha, setSenha]= useState('123')

  function handleInputEmail(target){
    setEmail(target.value)
  }
  
  function handleInputSenha(target){
    setSenha(target.value)
  }

  function validaEmail(){
    if(Email.indexOf('@') > 3 && Email.indexOf('.com') > Email.indexOf('@')){
      alert("Email Válido")
    }else{
      alert("Email Inválido")
    }
  }

  return (
    <div>
        <form>
        <fieldset>
          <label htmlFor="" >Email:</label>
          <input type="email" onChange={({target})=>handleInputEmail(target)}/>
        </fieldset>

        <fieldset>
          <label htmlFor="">Senha:</label>
          <input type="password"/>
        </fieldset>

        <fieldset>
          <label htmlFor="">Manter-me Logado:</label>
          <input type="checkbox"/>
        </fieldset>

        <button onClick={(event)=>{
          event.preventDefault()
          validaEmail()
          }}>Logar</button>
        </form>

        <section>
            <p>Ainda não tem conta?</p>
            <button>Cadastre-se</button>
        </section>
    </div>

  )
}

export default FormLogin