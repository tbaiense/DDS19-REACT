import "./App.css";
import Events from "./components/Events";
import FirstComponent from "./components/FirstComponent";
import JustDoIt from "./components/JustDoIt";
import TemplateExpressions from "./components/TemplateExpressions";
import Images from "./components/Images";
import MeuCss from "./components/MeuCss";
import MyCss from "./components/MyCss";
import Varia from "./components/Varia";
import ListRender from "./components/ListRender";
import ListControl from "./components/ListControl";
import { useState } from "react";

function App() {
  const [numbers, setNumber] = useState([]);

  return (
    <>
      {/* <MyCss />
      <MeuCss />
      <Images />
      <FirstComponent />
      <JustDoIt />
      <Events />
      <TemplateExpressions nome="Maria" /> */}
      {/* <Varia /> */}
      <ListControl list={numbers} setList={setNumber} />
      <ListRender numbers={numbers} onListItemClick={
        (e) => {
          const li = e.target.parentNode;
          li.parentNode.remove(li);
        }
      } />
    </>
  );
}

export default App;
