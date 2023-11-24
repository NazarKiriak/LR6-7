import React, { useState } from "react";
import styles from "./Body.module.css";
import ProductInfoButton from "../ProductInfoButton/ProductInfoButton";
import { CSSTransition } from "react-transition-group";

const Body = (props) => {
  const [showInUSD, setShowInUSD] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const getSelectedProducts = () => {
    return props.products.filter((product) => product.selected);
  };

  const convertToUSD = (priceInUAH) => {
    if (props.convertToUSD) {
      return props.convertToUSD(priceInUAH);
    }
    return priceInUAH;
  };

  const toggleCurrencyDisplay = () => {
    setShowInUSD((prevShowInUSD) => !prevShowInUSD);
  };

  const selectedProducts = getSelectedProducts();
  const selectedProductsNames = selectedProducts.map((product) => product.name);

  const currencyButtonText = showInUSD ? "Ціна в гривнях" : "Ціна в доларах";

  return (
    <div className={styles.body}>
      <h2>Body</h2>
      <h2>Список товарів</h2>
      <div className={styles.goods}>
        <ol>
          {props.products.map((product, idx) => (
            <>
              <li key={product.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={product.selected}
                    onChange={() => props.onProductSelect(product.id)}
                  />
                  {product.name}, ціна:{" "}
                  {showInUSD
                    ? convertToUSD(product.price) + " USD"
                    : product.price + " грн"}{" "}
                  кг.
                </label>
                <span className={styles.bodyContent}>
                  <ProductInfoButton
                    idx={idx}
                    name={product.name}
                  ></ProductInfoButton>
                </span>
              </li>
            </>
          ))}
        </ol>
      </div>

      <div className={styles.selected_products}>
        <h2>
          Вибрані товари: <span>{selectedProductsNames.join(", ")}</span>
        </h2>
        <h2>
          Кількість обраних товарів: <span>{props.selectedProductsCount}</span>
        </h2>
      </div>
      <div className={styles.productInfo_currency}>
        <button onClick={toggleCurrencyDisplay}>{currencyButtonText}</button>
      </div>
      <div className={styles.dialog_gallery}>
        <button onClick={openDialog}>Діалогове вікно</button>
        <CSSTransition
          in={isDialogOpen}
          timeout={500}
          classNames={styles.dialog}
          unmountOnExit
          mountOnEnter
        >
          <div className={styles.dialog}>
            <h2>Повідомлення</h2>
            <p>
              Це повідомлення саме для тебе
            </p>
            <p>
              Зроби 10 замовлень протягом місяця та отримай знижку 10%
            </p>
            <button onClick={closeDialog}>Закрити</button>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Body;
