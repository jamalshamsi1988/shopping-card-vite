import { useDispatch } from "react-redux";
import { GoChecklist } from "react-icons/go";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";

import styles from "./BasketSidebard.module.css";

const BasketSidebar = ({ state,clickHandler }) => {
  return (
    <div className={styles.siderbar}>
      <div>
        <GoChecklist />
        <p>Total:</p>
        <span>{state.total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!state.status && "Pending..."}</span>
      </div>
      <button onClick={() => clickHandler("CHECKOUT")}>Checkout</button>
    </div>
  );
};

export default BasketSidebar;
