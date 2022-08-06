import React from 'react'
import {Link} from 'react-router-dom'
import FormLogin from '../../Components/FormLogin/FormLogin'
const Login = () => {
  return (
    <div>
      <FormLogin />
      <div>
        <Link to='/administrador'>Entrar</Link>
      </div>
    </div>
  )
}

export default Login