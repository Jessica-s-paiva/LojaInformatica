import React from "react";
import S from "./Cards.module.css";

const Cards = ({ produto }) => {
  return (
    <section className={S.container}>
        <picture className={S.contentFoto}>
            <img src={produto.imagem} className={S.foto} />
        </picture>
        <section>
          <h4>{produto.name}</h4>
          <section className={S.textos}>
          <p>{produto.cor}</p>
          <p>{produto.marca}</p> 
          <p>{produto.peso}</p>
          <p>{produto.tamanho}</p>
          <p>{produto.valor}</p>
          <p>{produto._id}</p>

          </section>
        </section>
        
        
    </section>
  );
};

export default Cards;
