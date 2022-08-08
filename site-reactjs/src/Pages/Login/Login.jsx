import React from 'react'
import {Link} from 'react-router-dom'
import FormLogin from '../../Components/FormLogin/FormLogin'
//import Teste from '../../Components/Teste/Teste'
const Login = () => {
  return (
    <div>
      <FormLogin />
      {/* <Teste /> */}
      <div>
        <Link to='/administrador'>Entrar</Link>
      </div>
    </div>
  )
}

export default Login