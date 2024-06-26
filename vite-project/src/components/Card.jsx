import { Link } from "react-router-dom";

import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import styles from "./Card.module.css";
import { productQuantity, shorten } from "../helper/helper";

import { useCard } from "../context/CardContext";

const Card = ({ data }) => {
  const { title, image, price, id } = data;

  const [state, dispatch] = useCard();

  const addHandler = (type) => {
    dispatch({ type, payload: data });
  };
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shorten(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {state.quantity === 1 && (
            <button onClick={() => addHandler("REMOVE_ITEM")}>
              <MdDeleteOutline />
            </button>
          )}
          {state.quantity > 1 && (
            <button onClick={() => addHandler("DECREASE")}>-</button>
          )}

          {!!state.quantity && <span>{state.quantity}</span>}

          {state.quantity === 0 ? (
            <button onClick={() => addHandler("ADD_ITEM")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => addHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
