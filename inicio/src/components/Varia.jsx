import React from "react";
import { useState } from "react"; // Importação do hook

const Varia = () => {
  const [number, setNumber] = useState(10);
  return (
    <div>
      <p>Minha variável {number} </p>
      <button
        type="button"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Alterar
      </button>
      <button onClick={() => {setNumber(number -1);}}>
        Diminuir
      </button>
      <button onClick={() => {setNumber(0);}}>
        Zerar
      </button>
    </div>
  );
};

export default Varia;
