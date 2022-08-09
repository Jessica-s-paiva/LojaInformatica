import React from "react";
import S from './Animation.module.css';
import Logo from './image-animation.png'
import LoadingGif from './loading-gif.gif'

const Animation = () => {
    return (
      <div className={S.FullScreen}>
        <img className={S.Logo} src={Logo}/>
        <img className={S.Loading} src={LoadingGif}/>
      </div>
    )
  }

export default Animation