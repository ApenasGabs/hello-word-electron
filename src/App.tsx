import "./App.css";
import reactLogo from "./assets/react.svg";
import electronLogo from "/electron.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.electronjs.org/" target="_blank">
          <img src={electronLogo} className="logo react" alt="Electron logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + Electron + React</h1>
    </>
  );
}

export default App;
