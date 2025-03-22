import React from "react";

const Events = () => {
    const teste = (e) => {
        console.log("Testei a função externa");
    }

  return (
    <div>
      <button onClick={() => {console.log('cliquei')}}>Clique aqui</button>
      <button onClick={teste}>Agora, clique aqui</button>
    </div>
  );
};

export default Events;
