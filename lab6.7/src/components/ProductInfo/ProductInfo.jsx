import React, { useContext, createContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../App";
import ProductsPage from "../ProductsPage/ProductsPage";

export const ProductInfoData = createContext(null);

function ProductInfo() {
  const { idx } = useParams();
  const products = useContext(DataContext);

  const product = products[idx];
  const productData = {
    id: product.id,
    name: product.name,
    description:
      "Цей продукт був вирощений без біо добавок з використанням тільки природніх добрив. Продукт без концервантів, барвників та ГМО. Вирощений з любов'ю",
  };

  return (
    <ProductInfoData.Provider value={productData}>
      <ProductsPage />
    </ProductInfoData.Provider>
  );
}

export default ProductInfo;
