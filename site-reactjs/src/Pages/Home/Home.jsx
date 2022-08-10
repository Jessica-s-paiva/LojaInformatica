import React,{ useState, useEffect } from 'react';
import Cards from '../../Components/Cards/Cards';
import {getProdutos} from '../../Service/api.js';
import pc from '../../assets/pc.jpg';
import preguica from '../../Images/image-animation.png';
import preguica1 from '../../assets/preguica.png';
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
    <>
      <div className={S.sectionA}>
        <picture>
          <img className={S.img1} src={preguica} alt="" />
        </picture>
        <section className={S.titulo}>
          <h1>InfoStore</h1>
          <h2>A Loja de Informática do Dev</h2>
          <picture>
            <img className={S.img2} src="https://m.media-amazon.com/images/I/61XEbzaBcKL._AC_SL1000_.jpg" alt="" />
            <img className={S.img2} src="https://m.media-amazon.com/images/I/51GqHrxFv2S._AC_SL1000_.jpg" alt="" />
            <img className={S.img2} src="https://m.media-amazon.com/images/I/61XEbzaBcKL._AC_SL1000_.jpg" alt="" />
          </picture>
        </section>
        
        <picture>
          <img className={S.img} src={preguica1} alt="" />
        </picture>
      </div>      
      <Indicacao/>
    </>
  )
}

export default Home