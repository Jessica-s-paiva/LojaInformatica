import React from 'react'
import S from './Home.module.css'
import promocao from '/Users/Ebanx/Desktop/loja-mod5/LojaInformatica/site-reactjs/src/assets/promocao30.png'

const Home = () => {
  return (
    <><div className={S.entrada}>
          <img className={S.foto} src={promocao} alt="desconto de 30% em produtos selecionados" />
      <p>aqui entra a barra de pesquisa, meio opcional</p>
    </div>
    <div className={S.produtos}>
    </div></>
  )
}

export default Home