import React from 'react';
import S from './Home.module.css';
import Indicacao from '../../Components/Indicacao/Indicacao';

const Home = () => {
  return (
    <>
    <div className={S.entrada}>

    </div>
    <div className={S.produtos}>
      <Indicacao/>
    </div>
    </>
  )
}

export default Home