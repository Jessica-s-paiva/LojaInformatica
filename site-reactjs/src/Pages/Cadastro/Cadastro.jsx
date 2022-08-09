import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import S from "./Cadastro.module.css";
import logo from "../../assets/preguica.png";

const Cadastro = () => {
  const [Nome, setNome] = useState("");
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("123");
  const [Verificacao, setVerificacao] = useState(0);

  function handleInputNome(target) {
    setNome(target.value);
  }

  function handleInputEmail(target) {
    setEmail(target.value);
  }

  function handleInputSenha(target) {
    setSenha(target.value);
  }

  function handleValidaNome() {
    if (Nome == 0) {
      setVerificacao(1);
      alert("Nome não informado");
    } else {
      setVerificacao(0);
    }
  }

  function handleValidaEmail() {
    if (Email.indexOf("@") > 3 && Email.indexOf(".com") > Email.indexOf("@")) {
      setVerificacao(2);
    } else {
      setVerificacao(0);
      alert("Email Inválido");
    }
  }

  function handleValidaSenha() {
    if (Senha == "123") {
      setVerificacao(3);
    } else {
      setVerificacao(0);
      alert("Senha Inválida");
    }
  }

  return (
    <div>
      <form>
        <fieldset>
          <label htmlFor="">Nome:</label>
          <input
            type="text"
            onChange={({ target }) => handleInputNome(target)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="">Email:</label>
          <input
            type="email"
            onChange={({ target }) => handleInputEmail(target)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="">Senha:</label>
          <input
            type="password"
            onChange={({ target }) => handleInputSenha(target)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="">Manter-me Logado:</label>
          <input type="checkbox" />
        </fieldset>

        <div
          onClick={(event) => {
            event.preventDefault();
            handleValidaNome();
            handleValidaEmail();
            handleValidaSenha();
          }}
        >
          <Botao text="Logar" />
        </div>
      </form>

      <section>
        <p>Ainda não tem conta?</p>
        <Link to="/home">Cadastre-se</Link>
      </section>
    </div>
  );
};

export default Cadastro;
