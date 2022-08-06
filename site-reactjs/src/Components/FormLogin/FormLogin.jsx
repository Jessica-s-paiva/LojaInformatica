
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

  function handleValidaEmail(){
    if(Email.indexOf('@') > 3 && Email.indexOf('.com') > Email.indexOf('@')){
      alert("Email Válido")
    }else{
      alert("Email Inválido")
    }
  }

  function handleValidaSenha(){
    if(Senha == "123"){
        alert("Senha Válida")
      }else{
        alert("Senha Inválida")
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
          <input type="password" onChange={({target})=>handleInputSenha(target)} />
        </fieldset>

        <fieldset>
          <label htmlFor="">Manter-me Logado:</label>
          <input type="checkbox"/>
        </fieldset>

        <button onClick={(event)=>{
          event.preventDefault()
          handleValidaEmail()
          handleValidaSenha()
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