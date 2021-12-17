import logo from './WORLD CINEMA LOGO.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="World Cinema logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>
          I am attemptting to convert an html page into react code. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <a
          className="App-link"
          href="http://127.0.0.1:5500/HTML/DARK%20THEME/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my Neumorphic themed Resume here!
        </a>      
        </header>
    </div>
  );
}

export default App;
