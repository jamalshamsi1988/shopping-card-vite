import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import styles from "./Card.module.css";
import { productQuantity, shorten } from "../helper/helper";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../features/cart/cartSlice";
// import { useCard } from "../context/CardContext";

const Card = ({ data }) => {
  const { title, image, price, id } = data;

  // const [state, dispatch] = useCard();

  const state = useSelector((store) => store.cart);
console.log(state)
  const dispatch = useDispatch();
  const quantity = productQuantity(state, id);

  // const addHandler = (type) => {
  //   // dispatch({ type, payload: data });
  // };
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
          {quantity === 1 && (
            // <button onClick={() => addHandler("REMOVE_ITEM")}>
            <button onClick={() => dispatch(removeItem(data))}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            // <button onClick={() => addHandler("DECREASE")}>
            <button onClick={() => dispatch(decrease(data))}> -</button>
          )}

          {!!quantity && <span>{quantity}</span>}

          {quantity === 0 ? (
            // <button onClick={() => addHandler("ADD_ITEM")}>
            <button onClick={() => dispatch(addItem(data))}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            // <button onClick={() => addHandler("INCREASE")}>
            <button onClick={() => dispatch(increase(data))}>+</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
