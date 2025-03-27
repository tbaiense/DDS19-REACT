import React from 'react';
import Singer from './Singer';

const SingerList = ( {list} ) => {
    return (
        <>
            {list.map((i) => {
                return <Singer 
                    key={i.id} 
                    id={i.id} 
                    nome={i.nome} 
                    estilo={i.estilo} 
                    premiado={i.premiado}/>
            })}
        </>
    )
}

export default SingerList;