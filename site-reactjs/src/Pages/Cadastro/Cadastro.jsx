
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import S from './Cadastro.module.css'
import logo from '../../assets/preguica.png'

const Cadastro = () => {


  const [Nome, setNome]= useState('')
  const [Email, setEmail] = useState('')
  const [Senha, setSenha]= useState('123')
  const [Verificacao, setVerificacao]= useState(0)

  function handleInputNome(target){
    setNome(target.value)
  }

  function handleInputEmail(target) {
    setEmail(target.value);
  }

  function handleValidaNome(){
    if(Nome == 0){
      setVerificacao(1)
      alert("Nome não informado")
    }else{
      setVerificacao( 0)
    }
  }

  function handleValidaEmail(){
    if(Email.indexOf('@') > 3 && Email.indexOf('.com') > Email.indexOf('@')){
      setVerificacao(2)
    }else{
      setVerificacao( 0)
      alert("Email Inválido")
    }
  }

  function handleValidaSenha(){
    if(Senha == "123"){
      setVerificacao( 3)
      }else{
        setVerificacao(0)
        alert("Senha Inválida")
      }
  }

  return (
    <div className={S.container}>
    <div className={S.containerLogin}>
      <div className={S.wrapLogin}>
        <form className={S.loginForm}>
          <span className={S.loginFormTitle}></span>

          <span className={S.loginFormTitle}>
              <img src={logo} alt="Preguiça" />
            </span>

          <div className={S.wrapInput}>
            <input  className={S.input} type="text" onChange={({target})=>handleInputNome(target)} />
            <span className={S.focusInput} data-placeholder='Nome'></span>
          </div>

          <div className={S.wrapInput}>
            <input  className={S.input} type="email" onChange={({target})=>handleInputEmail(target)} />
            <span className={S.focusInput} data-placeholder='Email'></span>
          </div>

          <div className={S.wrapInput}>
            <input className={S.input} type="password" onChange={({target})=>handleInputSenha(target)} />
            <span className= {S.focusInput} data-placeholder='Senha'></span>
          </div>

              <div  onClick={(event)=>{
          event.preventDefault()
          handleValidaNome()
          handleValidaEmail()
          handleValidaSenha()
          }}>
             <Link className={S.loginFormBtn}  to={Verificacao > 0 ? '/administracao':''}>Logar</Link>
          </div>

        </form>
      </div>
    </div>
  </div>

        )
}


export default Cadastro;
