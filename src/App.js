import logo from './logo.svg';
import './App.css';
import ComponenteTipoA from './components/container/componenteA';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteTipoA></ComponenteTipoA>
      </header>
    </div>
  );
}

export default App;
