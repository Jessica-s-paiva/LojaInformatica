import React from 'react'

const FormLogin = () => {
  return (
    <div>
        <form>
        <fieldset>
          <label htmlFor="">Email:</label>
          <input type="email"/>
        </fieldset>

        <fieldset>
          <label htmlFor="">Senha:</label>
          <input type="password"/>
        </fieldset>

        <fieldset>
          <label htmlFor="">Manter-me Logado:</label>
          <input type="checkbox"/>
        </fieldset>

        <button>Logar</button>
        </form>

        <section>
            <p>Ainda não tem conta?</p>
            <button>Cadastre-se</button>
        </section>
    </div>

  )
}

export default FormLogin