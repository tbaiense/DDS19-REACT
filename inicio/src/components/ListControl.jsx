import React from "react";
import { v4 as uuidv4 } from "uuid";

const ListControl = ({ list, setList }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          const value =
            e.target.parentNode.querySelector("#number_input").value;

          setList(list.concat([{ key: uuidv4(), number: value }]));
        }}
      >
        Adicionar
      </button>
      <input type="text" id="number_input" />
      <button
        onClick={(e) => {
          setList([]);
        }}
      >
        Resetar
      </button>
    </div>
  );
};

export default ListControl;
