
import React, {useEffect, useState} from 'react'
//import Botao from '../Botao/Botao'
import {Link} from 'react-router-dom'
import S from './FormLogin.module.css'
import logo from '../../assets/preguica.png'



const FormLogin = () => {

  const [Email, setEmail] = useState('')
  const [Senha, setSenha]= useState('123')
  const [Verificacao, setVerificacao]= useState(0)

  function handleInputEmail(target){
    setEmail(target.value)
  }
  
  function handleInputSenha(target){
    setSenha(target.value)
  }

  function handleValidaEmail(){
    if(Email.indexOf('@') > 3 && Email.indexOf('.com') > Email.indexOf('@')){
      setVerificacao(1)
    }else{
      setVerificacao( 0)
      alert("Email Inválido")
    }
  }

  function handleValidaSenha(){
    if(Senha == "123"){
      setVerificacao( 2)
      }else{
        setVerificacao(0)
        alert("Senha Inválida")
      }
  }

  
  return (
    <div>
    <div className={S.container}>
    <div className={S.containerLogin}>
      <div className={S.wrapLogin}>
        <form className={S.loginForm}>
          <span className={S.loginFormTitle}></span>

          <span className={S.loginFormTitle}>
              <img src={logo} alt="preguiça" />
            </span>

          <div className={S.wrapInput}>
            <input  className={S.input} type="email" onChange={({target})=>handleInputEmail(target)} />
            <span className={S.focusInput} data-placeholder='Email'></span>
          </div>

          <div className={S.wrapInput}>
            <input className={S.input} type="password" onChange={({target})=>handleInputSenha(target)} />
            <span className= {S.focusInput} data-placeholder='Senha'></span>
          </div>

         
          <div className={S.textCenter}>
            <span className={S.txt1}>Não possui conta?</span>

            <Link className={S.txt2}  to='/cadastro'>Cadastrar-se</Link>
          </div>

          <div  onClick={(event)=>{
          event.preventDefault()
          handleValidaEmail()
          handleValidaSenha()
          }}>
            <Link className={S.loginFormBtn}  to={Verificacao > 0 ? '/administrador':''}>Logar</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
    
  )
}

export default FormLogin