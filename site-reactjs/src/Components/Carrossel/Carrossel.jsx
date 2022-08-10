import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Form from '../../Components/Form/Form'
import S from './Carrossel.module.css'
import { getProdutosById } from '../../Service/api'

const  Carrossel = () => {

  return (

    <div className={S.container}>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="..." alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Carrossel
