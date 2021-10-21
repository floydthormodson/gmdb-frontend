import './App.css';
import NavBar from './Components/NavBar'
import Home from "./Components/Home"

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Home/>
      </div>
    </div>
  );
}

export default App;
