import {Link} from 'react-router-dom'
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";

import styles from "./Card.module.css";
import { shorten } from '../helper/helper';

const Card = ({ data }) => {
  const { title, image, price, id } = data;
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
        <button>
          <TbShoppingBagCheck />
        </button>
      </div>
      </div>
    </div>
  );
};

export default Card;
