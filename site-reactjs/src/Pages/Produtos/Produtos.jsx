import React,{ useState, useEffect } from 'react';
import S from './Produtos.module.css';
import Cards from '../../Components/Cards/Cards';
import {getProdutos} from '../../Service/api.js';
import { getProdutosById } from '../../Service/api.js';
import { useParams } from 'react-router-dom'
const Produtos = () => {
  const params = useParams()
  const [products, setProducts] = useState([]);
  const [valorInput, setValorInput] = useState('')

  useEffect(() => {
    handleGetProducts();
  }, []);

  // async function handleGetProductsById() {
  //     const response = await getProdutosById(params.valorInput)
  //     setProducts([response]);
   
  //}
  async function handleGetProducts() {
    const response = await getProdutos();
    setProducts(response);
}
  async function handleGetProductsById() {
    const response = await getProdutosById(valorInput);
    setProducts([response]);
  }
  
  function handleSetInput(target) {
    setValorInput(target.value)
    console.log(target.value);
  }

  return (
    <>
      <section className={S.sectionCards}>
        <section className={S.sectionA}>
          {
            !!products && products.map((product, index)=>{
            return (<Cards produto={product} key={index}/>)
            })
          }
        </section>
        <section className={S.sectionB}>
          <input className={S.texto} type="text" placeholder='Digite o ID do produto'
            value={valorInput}
            onChange={({ target }) => handleSetInput(target)}/>
          <button onClick={handleGetProductsById}>Buscar produto por ID</button>
        </section>
        
      </section>
      <section>
        {/* <Cards produto={products.name}/> */}
      </section>
    </>
  )
}

export default Produtos