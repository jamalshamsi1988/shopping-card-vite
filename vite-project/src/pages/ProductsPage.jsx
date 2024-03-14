import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext"
import styles from './ProductsPage.module.css'

const ProductsPage = () => {
  const products=useProducts();
  console.log(products)
  return (
    <div className={styles.container}>
      {
        !products.length && <Loader />
      }
      <div className={styles.products}>
        {
          products.map(p => <Card key={p.id} data={p} />)
        }
      </div>
      <div>SideBar</div>

    </div>
  )
}

export default ProductsPage
