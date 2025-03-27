import React from 'react'
import { Link } from 'react-router-dom'

const PaginaErro = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      padding: '30px'
    }}>
      <Link to="/home" style={{
        backgroundColor: 'white',
        padding: '10px',
        boxShadow: '0px 0px 4px black',
        borderRadius: '0.4rem',
      }}>Voltar</Link>
    </div>
  )
}

export default PaginaErro
