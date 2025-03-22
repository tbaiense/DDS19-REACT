import React from 'react';

const ListItem = ( {key, value, onClick} ) => {
    return (
        <li key={key}>
            <span>{value}</span>
            <button onClick={onClick}>Apagar</button>
        </li>
    );
};

export default ListItem;