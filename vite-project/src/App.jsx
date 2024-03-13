import {Routes,Route, Navigate} from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import DetailsPage from "./pages/DetailsPage"
import PageNotFound from "./pages/404"



function App() {

  return (
 <Routes>
  <Route index element={<Navigate to="/products" replace /> } />
  <Route path="/products" element={<ProductsPage />} />
  <Route path="/products/:id" element={<DetailsPage />} />
  <Route path="/*" element={<PageNotFound />} />

 </Routes>
  )
}

export default App
