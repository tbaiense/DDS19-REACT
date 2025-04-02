import React from 'react'
import { Link } from 'react-router-dom';

const Sobre = () => {
  return (
    <div style={{
      display: 'flex',
      flexFlow: 'column wrap',
      justifyContent: 'space-around',
      alignContent: 'center',
      alignItems: 'stretch',
    }}>
      <h1>Sobre</h1>
      <Link to="/informacao/1">Infocard 1</Link>
      <Link to="/informacao/2">Infocard 2</Link>
      <Link to="/informacao/3">Infocard 3</Link>
    </div>
  )
}

export default Sobre
