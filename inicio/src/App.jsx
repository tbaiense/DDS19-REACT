import "./App.css";
import FirstComponent from "./components/FirstComponent";
import JustDoIt from "./components/JustDoIt";
import TemplateExpressions from "./components/TemplateExpressions";
function App() {
  return (
    <>
      <FirstComponent />
      <JustDoIt />
      <TemplateExpressions nome="Maria" />
    </>
  );
}

export default App;
