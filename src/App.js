import logo from "./logo.svg";
import "./App.css";

const App = () => {
  //   API  INFORMATION

  const APP_ID = "bffe99d7";
  const APP_KEY = "6ac5f49f082f606ca659d80285fe2641";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <h1>React App</h1>
    </div>
  );
};

export default App;
