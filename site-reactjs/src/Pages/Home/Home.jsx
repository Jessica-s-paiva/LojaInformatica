import React,{ useState, useEffect } from 'react';
import Cards from '../../Components/Cards/Cards';
import {getProdutos} from '../../Service/api.js';
import pc from '../../assets/pc.jpg';
import preguica from '../../Images/image-animation.png';
import { useParams } from 'react-router-dom'
import S from './Home.module.css';
import Indicacao from '../../Components/Indicacao/Indicacao'
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    handleGetProducts();
  }, []);
  async function handleGetProducts() {
    const response = await getProdutos();
    setProducts(response);
}
  return (
    <div className={S.container}>
      <section className={S.titulo}>
        <h1>InfoStore</h1>
        <h2>A Loja de Informática do Dev</h2>
      </section> 
      <picture>
        <img className={S.img} src={preguica} alt="" />
      </picture>
      <Indicacao/>
    </div>


  )
}

export default Home