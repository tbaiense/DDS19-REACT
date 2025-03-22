import React from 'react';
import './MeuCss.css';

const MeuCss = () => {
    return (
        <div>
            <h1>Meu título do componente</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, repudiandae itaque. Similique officiis quas laboriosam quis accusamus ea delectus rerum reiciendis unde, saepe doloribus. Quae aut alias dolorem magni quidem.</p>
            <p className='azul'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui quibusdam rerum amet repudiandae veritatis eum minima reprehenderit voluptatum quia voluptates culpa eaque, error ipsum iusto odio, omnis voluptate nostrum.</p>
            <p style={{backgroundColor: 'initial', color: 'green', fontWeight: 100}}>aaaaaaaaaa</p>
        </div>
    );
}

export default MeuCss;