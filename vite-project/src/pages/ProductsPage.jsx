import { useContext } from "react"
import { useProducts } from "../context/ProductContext"

const ProductsPage = () => {
  const products=useProducts();
  console.log(products)
  return (
    <div>
      Prodacts
    </div>
  )
}

export default ProductsPage
