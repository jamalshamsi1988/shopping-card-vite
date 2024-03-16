import {Link} from 'react-router-dom'
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";

import styles from "./Card.module.css";
import { shorten } from '../helper/helper';
import { useCard } from '../context/CardContext';

const Card = ({ data }) => {
  const { title, image, price, id } = data;

  const [state,dispatch]=useCard();

  const addHandler=()=>{
    dispatch({type:"add" ,payload:data})

  }
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
        <button onClick={addHandler}>
          <TbShoppingBagCheck />
        </button>
      </div>
      </div>
    </div>
  );
};

export default Card;
