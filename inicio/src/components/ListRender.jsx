import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListItem from "./ListItem";

const ListRender = ( {numbers, onListItemClick } ) => {

  // const [list, setList] = useState(["alberto", "beto", "carlos", "daniel"]);

  // const [users] = useState([
  //   {
  //     id: 1,
  //     name: "Jesus",
  //     number: 25,
  //   },
  //   {
  //     id: 7,
  //     name: "Cristiano Ronaldo",
  //     number: 7,
  //   },
  //   {
  //     id: 10,
  //     name: "Neymar Jr",
  //     number: 10,
  //   },
  // ]);

  return (
    <div>
      <div>
        <h1>Números</h1>
        <ul>
          {
            numbers.map( (n) => {
              return <ListItem key={uuidv4()} value={n} onClick={onListItemClick}/>
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default ListRender;
