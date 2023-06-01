import logo from './logo.svg';
import './App.css';
import MadeBy from "./components/MadeBy";
import Game from "./components/Game";

function App() {
  const userInfo = {
    nombre: "José Gulmanelli",
    edad: 21
  }
  return (
    <div className="App">
      <header className="App-header">
        <MadeBy userInfo={userInfo}></MadeBy>
        <img src={logo} className="App-logo" alt="logo" />
        <Game></Game>
      </header>
    </div>
  );
}

export default App;