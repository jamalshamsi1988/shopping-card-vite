import BasketCard from "../components/BasketCard";
import { useCard } from "../context/CardContext"

const ChechOutPage = () => {
  const [state,dispatch]=useCard();

  const clickHandler=(type,payload)=> dispatch({type,payload})

  return (
    <div>
      <div>
        {
          state.selectedItems.map(product => (<BasketCard key={product.id} data={product} clickHandler={clickHandler} />))
        }
      </div>
    </div>
  )
}

export default ChechOutPage
