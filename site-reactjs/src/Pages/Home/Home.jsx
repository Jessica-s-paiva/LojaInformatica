import React,{ useState, useEffect } from 'react';
import Cards from '../../Components/Cards/Cards';
import {getProdutos} from '../../Service/api.js';
import pc from '../../assets/pc.jpg'
import { useParams } from 'react-router-dom'
import S from './Home.module.css';

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
    <div>
      <h1>Loja de Informatica</h1>
      
      <section>
        <picture>
          <img src={pc} alt="" />
        </picture>
      </section>
      
      <section>
          {
            !!products && products.map((product, index)=>{
            return (<Cards produto={product} key={index}/>)
            })
          }
        </section>
    </div>


  )
}

export default Home