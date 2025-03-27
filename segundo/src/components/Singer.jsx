import React from 'react';

const Singer = ( { id, nome, estilo, premiado }) => {
    return (
        <section>
            <h1>O cantor {nome}, </h1>
            <h2>contendo o id {id}, </h2>
            <h2>canta no estilo {estilo} e </h2>
            <h2>{premiado ? ('já foi premiado') : ('não foi premiado')}</h2>
        </section>
    );
}

export default Singer