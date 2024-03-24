import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCard } from "../context/CardContext";

import styles from "./Layout.module.css";
const Layout = ({ children }) => {
  const [state] = useCard();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Shopping Page</Link>
        <Link to="/checkOut">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Jamal Shamsi</p>
      </footer>
    </>
  );
};

export default Layout;
