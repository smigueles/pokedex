import PokemonIcon from "../../assets/pikachu.png";
import ItemsIcon from "../../assets/pokeball.png";
import LocationIcon from "../../assets/pointer.png";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.footerLink} to="/pokemons">
        <img className={styles.footerIcon} src={PokemonIcon} alt="pikachu" />
      </Link>
      <Link
        className={`${styles.footerLink} ${styles.disabledLink}`}
        to="/items"
      >
        <img className={styles.footerIcon} src={ItemsIcon} alt="pokeball" />
      </Link>
      <Link
        className={`${styles.footerLink} ${styles.disabledLink}`}
        to="/locations"
      >
        <img className={styles.footerIcon} src={LocationIcon} alt="pointer" />
      </Link>
    </footer>
  );
};

export default Footer;
