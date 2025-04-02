import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const InfoCard = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const voltarHome = () => {
        navigate('/home');
    };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>Infocard do cartão: {id}
        <button onClick={voltarHome}>Voltar</button>
    </div>
  )
}

export default InfoCard
