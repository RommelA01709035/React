import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Table from './Table';

const players = [
  {
    userName: "midudev",
    name: "C. Summerville",
    nationalityFlag: "ruta_a_bandera.jpg",
    position: "MI MD",
    age: 21,
    currentRating: 76,
    potentialRating: 84,
    teamLogo: "ruta_a_logo_equipo.jpg",
    teamName: "Leeds United",
    contract: "2020 ~ 2026",
  },
  {
    userName: "jorgecuenca",
    name: "Jorge Cuenca",
    nationalityFlag: "ruta_a_bandera_españa.jpg",
    position: "DF LI",
    age: 23,
    currentRating: 74,
    potentialRating: 80,
    teamLogo: "ruta_a_logo_villarreal.jpg",
    teamName: "Villarreal",
    contract: "2020 ~ 2025",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Table players={players} />
    </>
  );
}

export default App;
