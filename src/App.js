import mj from "./componenets/mj";
import "./App.css";
import Component1 from "./components/Component1";

function App() {
  return (
    <div className="App">
      {/* react app */}
      <mj/>
      <div>div</div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        div
        <Component1 />
      </div>
    </div>
  );
}

export default App;
