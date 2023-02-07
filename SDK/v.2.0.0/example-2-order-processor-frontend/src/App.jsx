import { useState } from "react";

import "./App.css";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import MockOrder from "./mocks/mockOrder.json";
import MockPayment from "./mocks/mockPayment.json";
import ListProducts from "./assets/products.png";
import { Checkout } from "@deuna/checkout-sdk";
import { CircleWithCheckIcon } from "./assets/check.icon";
import { CircleWithErrorIcon } from "./assets/error.icon";

function App() {
  const [orderData, setOrderData] = useState(MockOrder);
  const [paymentData, setPaymentData] = useState(MockPayment);
  const [showCheckTokenizedOrder, setShowCheckTokenizedOrder] = useState(false);
  const [showCheckPaymentProcessed, setShowCheckPaymentProcessed] =
    useState(false);
  /**
   * Open modal checkout widget
   */
  const shouldOpen = async () => {
    // Initialize checkout
    try {
      const response = await fetch(import.meta.env.VITE_BASE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-API-KEY": import.meta.env.VITE_DEUNA_PUBLIC_API_KEY,
        },
        body: JSON.stringify(orderData),
      });
      const newResponse = await response.json();

      if (!newResponse.token) return;
      setShowCheckTokenizedOrder(true);
      const checkout = await Checkout.init({
        publicApiKey: import.meta.env.VITE_DEUNA_PUBLIC_API_KEY,
        env: import.meta.env.VITE_ENVIRONMENT,
        orderToken: newResponse.token,
      });

      await checkout.getPaymentMethods();

      checkout.pay(paymentData).then((res) => console.log(res));
      setShowCheckPaymentProcessed(true);
    } catch (error) {
      console.error(error);
    }
  };

  const changeOrderPayload = (e) => {
    setOrderData(e.jsObject);
    setShowCheckPaymentProcessed(false);
    setShowCheckTokenizedOrder(false);
  };

  const changePayPayload = (e) => {
    setPaymentData(e.jsObject);
    setShowCheckPaymentProcessed(false);
    setShowCheckTokenizedOrder(false);
  };

  return (
    <div className="App">
      <div className="column-left">
        <p className="title">Payload order</p>
        <JSONInput
          id="1"
          placeholder={orderData}
          onChange={(event) => changeOrderPayload(event)}
          locale={locale}
          height="43vh"
          width="100%"
        />
        <p className="title">Payload payment</p>
        <JSONInput
          id="2"
          placeholder={paymentData}
          onChange={(event) => changePayPayload(event)}
          locale={locale}
          height="43vh"
          width="100%"
        />
      </div>
      <div className="shopping-cart">
        <img
          className="brand"
          src="https://uploads-ssl.webflow.com/62e806ed6cc7b20ca6dc2b93/62fca876ea0f2668b1c21b8b_deuna.png"
          alt=" DEUNA"
        />
        <img src={ListProducts} alt="cart" className="cart-list" />

        <button
          id="button-checkout-deuna"
          className="purchase-btn"
          onClick={shouldOpen}
        >
          <img
            src="https://images.getduna.com/logo-full-deuna-D.svg"
            alt=" DEUNA"
          />
          Checkout
        </button>
        <div className="container-information">
          {showCheckTokenizedOrder ? (
            <CircleWithCheckIcon />
          ) : (
            <CircleWithErrorIcon />
          )}
          <p className="text"> Get tokenized order</p>
        </div>
        <div className="container-information">
          {showCheckPaymentProcessed ? (
            <CircleWithCheckIcon />
          ) : (
            <CircleWithErrorIcon />
          )}
          <p className="text"> Payment processed</p>
        </div>
      </div>
    </div>
  );
}

export default App;
