import { useState } from 'react';
import './App.css'
import ShowUserName from './components/ShowUserName';
import Time from './components/Time';
import SingerList from './components/SingerList';

function AppDois() {
  const nj = 10;
  const titulo = false;

  const nome = "Cris";
  const [name] = useState('Ney')
  const [lista] = useState([
    {
      id: 1,
      nome: 'roberto carlos',
      estilo: 'não sei',
      premiado: true,
    },
    {
      id: 2,
      nome: 'marijá',
      estilo: 'bossa nova',
      premiado: false,
    },
    {
      id: 3,
      nome: 'carlos antonio',
      estilo: 'rock',
      premiado: false,
    },
    {
      id: 4,
      nome: 'marina roberta',
      estilo: 'pop',
      premiado: true,
    },
  ]);
  return (
    <>
     {/* <ShowUserName name={nome} shirt="7"/>
    <Time nome="São Paulo" estado="SP" posicao={1} campeao={true}/>
    <Time nome="Real Madrid" estado="MD" posicao={2} campeao={true}/>
    <Time nome="Vasco da Gama" estado="RJ" posicao={100} campeao={false}/> */}
    <SingerList list={lista}/>

    <h2 style={nj > 5 ? ({
      color: 'green',
      backgroundColor: 'yellow',
    }) : ({
      color: 'red',
      backgroundColor: 'blue',
      fontSize: '30px',
    })}>
      Este CSS é dinâmico
      </h2>
    <h2>
      Este CSS também é dinâmico
      </h2>

      <h1 className={titulo ? "tituloIncrivel" : "texto-paia"}>
        Título incrível pra teste
        </h1>
    </>
  )
}

export default AppDois