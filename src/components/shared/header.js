import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { CartIcon } from "../icons";
import styles from "./header.module.scss";

const Header = () => {
  const { itemCount } = useContext(CartContext);

  return (
    <header className={styles.header}>
      <Link to="/">
        <h5>Inicio</h5>
      </Link>
      <Link to="/about">
        <h5 class="sobre-mi">Sobre mí</h5>
      </Link>
      <Link to="/cart">
        <h5>
          {" "}
          <CartIcon /> ({itemCount})
        </h5>
      </Link>
    </header>
  );
};

export default Header;
