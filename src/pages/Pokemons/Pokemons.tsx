import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import { fetchPokemons } from "../../api/fetchPokemons";
import { Pokemon } from "../../types";

const Pokemons = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);
  useEffect(() => {
    const fetchAllPokemons = async () => {
      setLoading(true);
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setLoading(false);
    };
    fetchAllPokemons();
  }, []);

  const filterPokemons = pokemons
    .slice(0, 251)
    .filter((pokemon) => pokemon.name.toLowerCase().match(query));

  return (
    <div className={styles.container}>
      <Header query={query} setQuery={setQuery} />
      {loading ? (
        <Spinner />
      ) : (
        <main className={styles.pokemonList}>
          <nav className={styles.nav}>
            {filterPokemons.map((pokemon) => (
              <Link
                key={pokemon.id}
                to={`/pokemons/${pokemon.name}`}
                className={styles.listItem}
              >
                <img
                  src={pokemon.imgSrc}
                  alt={pokemon.name}
                  className={styles.listItemIcon}
                />
                <div className={styles.listItemText}>
                  <span>{pokemon.name}</span>
                  <span>{pokemon.id}</span>
                </div>
              </Link>
            ))}
          </nav>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Pokemons;
