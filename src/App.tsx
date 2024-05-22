import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Pokemons, PokemonDetail, Items } from "./pages";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/" element={<Pokemons />} />
          <Route path="/pokemons/:name" element={<PokemonDetail />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
