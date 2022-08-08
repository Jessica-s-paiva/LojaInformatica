
import React, {useEffect, useState} from 'react'
import Botao from '../../Components/Botao/Botao'
import {Link} from 'react-router-dom'

const Cadastro = () => {

  const [Nome, setNome]= useState('')
  const [Email, setEmail] = useState('')
  const [Senha, setSenha]= useState('123')

  function handleInputNome(target){
    setNome(target.value)
  }

  function handleInputEmail(target){
    setEmail(target.value)
  }
  
  function handleInputSenha(target){
    setSenha(target.value)
  }

  function handleValidaNome(){
    if(Nome == 0){
        alert("Nome Não informado")
      }else{
        alert("Nome válido")
      }
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
          <label htmlFor="" >Nome:</label>
          <input type="text" onChange={({target})=>handleInputNome(target)}/>
        </fieldset>

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

          <div  onClick={(event)=>{
          event.preventDefault()
          handleValidaNome()
          handleValidaEmail()
          handleValidaSenha()
          }}>
            <Botao
            text="Logar"/>
          </div>
        </form>

        <section>
            <p>Ainda não tem conta?</p>
            <Link to='/home'>Cadastre-se</Link>
        </section>
    </div>

  )
}

export default Cadastro