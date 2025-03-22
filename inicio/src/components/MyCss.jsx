import React from 'react';
// import styles from './MyCss.module.css';
import theme from '../theme.module.css';

const MyCss = () => {
    return (
        <div>
            <h1 className={theme.smallFont}>
                Texto do component MyCss
            </h1>
        </div>
    );
}

export default MyCss;