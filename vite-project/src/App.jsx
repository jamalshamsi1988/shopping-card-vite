import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import PageNotFound from "./pages/404";
import ProductsProvider from "./context/ProductContext";
import CardProvider from "./context/CardContext";
import Layout from "./layout/Layout";
import ChechOutPage from "./pages/ChechOutPage";

function App() {
  return (
    <CardProvider>
      <ProductsProvider>
        <Layout>
        <Routes>
          <Route index element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/checkOut" element={<ChechOutPage />} />

          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        </Layout>
      </ProductsProvider>
    </CardProvider>
  );
}

export default App;
