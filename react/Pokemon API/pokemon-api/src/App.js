import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
      axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      setPokemonList(response.data.results);
    });
  }, []);

  return (
    <div className="App">
      <h1>Pokemons list of names</h1>

      <ul>
        {pokemonList.length > 0 &&
          pokemonList.map((pokemon, index) => {
            return <li key={index}>{pokemon.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
