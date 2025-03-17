// import React from 'react' // Desnecessária em novas versões

const FirstComponent = () => {
    return (
        <div>FirstComponent</div>
        /*
        Equivalente a
            const div = document.createElement('div');
            div.textContent = 'FirstComponent';

            return div;
        */
    )
}

export default FirstComponent