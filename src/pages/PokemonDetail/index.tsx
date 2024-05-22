import { useParams, useNavigate } from "react-router-dom";
import PokeballImg from "../../assets/pokeball.png";

import styles from "./styles.module.css";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { fetchPokemon } from "../../api/fetchPokemon";
import { PokemonDetail } from "../../types";
import Spinner from "../../components/Spinner";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonDetail>();
  const [loading, setLoading] = useState(false);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPokemon = async () => {
      setLoading(true);
      const fetchedPokemon = await fetchPokemon(name as string);
      console.log(fetchedPokemon);
      setPokemon(fetchedPokemon);
      setLoading(false);
    };
    getPokemon();
  }, [name]);
  return (
    <>
      <button className={styles.pokeballButton} onClick={() => navigate("/")}>
        <img className={styles.pokeballImg} src={PokeballImg} alt="pokemon" />{" "}
        Go Back
      </button>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.pokemon}>
          <main className={styles.pokemonInfo}>
            <span className={styles.pokemonTitle}>{name?.toUpperCase()}</span>
            <span>N. {pokemon?.id}</span>
            <div>
              <img
                src={pokemon?.imgSrc}
                alt=""
                className={styles.pokemonInfoImg}
              />
            </div>
            <span>HP: {pokemon?.hp}</span>
            <span>Attack: {pokemon?.attack}</span>
            <span>Defense: {pokemon?.defense}</span>
          </main>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Pokemon;
