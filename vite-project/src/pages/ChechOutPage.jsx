import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
// import { useCard } from "../context/CardContext";
import styles from "./ChechOutPage.module.css";

const ChechOutPage = () => {
  // const [state, dispatch] = useCard();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  // if (!state.itemsCounter) {
  //   return (
  //     <div className={styles.container}>
  //       <h2>Empty</h2>
  //     </div>
  //   );
  // }

  return (
    <div className={styles.container}>
      {/* <BasketSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ChechOutPage;
