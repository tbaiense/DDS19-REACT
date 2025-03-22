import React from 'react'
import Duck from '../assets/duck.jpg'; // Importanto a imagem de assets

const Images = () => {
  return (
    <>
        <h1>Imagens</h1>
        <img src="./tower.jpg" style={ {display: 'block', width: '80%'}} />
        <img src={Duck} />
    </>
    );
}

export default Images
