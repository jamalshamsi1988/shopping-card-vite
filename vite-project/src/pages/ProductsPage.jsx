import { useEffect, useState } from 'react';
import {ImSearch} from 'react-icons/im'
import {FaListUl} from 'react-icons/fa'

import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext"
import styles from './ProductsPage.module.css'
import { filterProducts, searchProducts } from '../helper/helper';

const ProductsPage = () => {
  const products=useProducts();
  const [displayed,setDisplayed]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState({});

  useEffect(()=>{
    setDisplayed(products)
  },[products])

  useEffect(()=>{
    let finalProducts= searchProducts(products , query.search);
    finalProducts=filterProducts(finalProducts , query.category)
    setDisplayed(finalProducts);
  },[query])
  const searchHandler=()=>{
    setQuery(query => ({...query , search}))
  }

const categoryHandler=(e)=>{
  const {tagName}=e.target;
const category = e.target.innerText.toLowerCase();

  if(tagName !== "LI") return;
  setQuery(query => ({...query , category}))
}
  return (
    <>
    <div>
      <input type='text' placeholder='Search ...' value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())} />
   <button onClick={searchHandler}><ImSearch /></button>
    </div>
    <div className={styles.container}>
      {
        !displayed.length && <Loader />
      }
      <div className={styles.products}>
        {
          displayed.map(p => <Card key={p.id} data={p} />)
        }
      </div>
      <div>
        <div><FaListUl />
        <p>Categories</p>
        </div>
        <ul onClick={categoryHandler}>
          <li>All</li>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>Men's Clothing</li>
          <li>Women's Clothing</li>

        </ul>
      </div>

    </div>
    </>
  )
}

export default ProductsPage
