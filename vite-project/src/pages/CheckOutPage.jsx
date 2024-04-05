import { useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
// import { useCard } from "../context/CardContext";
import styles from "./CheckOutPage.module.css";

const CheckOutPage = () => {
  // const [state, dispatch] = useCard();
  const state = useSelector((store) => store.cart);


  // const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemCounter) {
    return (
      <div className={styles.container}>
        <h2>Empty</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSidebar
        state={state}
        // clickHandler={clickHandler}
      />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            // clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckOutPage;
