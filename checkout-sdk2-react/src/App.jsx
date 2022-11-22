import { useState } from "react";

import "./App.css";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import MockOrder from "./mocks/mockOrder.json";
import MockPayment from "./mocks/mockPayment.json";
import ListProducts from "./assets/products.png";
import { Checkout } from "@deuna/checkout-sdk"

function App() {
 
  const [orderData, setOrderData] = useState(MockOrder);
  const [paymentData, setPaymentData] = useState(MockPayment);
  /**
   * Open modal checkout widget
   */
  const shouldOpen = async () => {
    // Initialize checkout
    console.log(orderData)
    try {
      const response = await fetch(`${process.env.BASE_URL}/tokenizeOrder`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const newResponse = await response.json();

      if (!newResponse.body.token) return;

      const checkout = await Checkout.init({
       publicApiKey: process.env.DEUNA_PUBLIC_API_KEY,
        env: process.env.ENVIRONMENT,
        orderToken: newResponse.body.token,
      })

      await checkout.getPaymentMethods();
      
      checkout.pay(paymentData).then(res=> console.log(res))

    } catch (error) {console.error(error)}
  };

  return (
    <div className="App">
      <div className="column-left">
        <p className="title">Payload order</p>
        <JSONInput
          id="1"
          placeholder={orderData}
          onChange={(event) => setOrderData(event.jsObject)}
          locale={locale}
          height="43vh"
          width="100%"
        />
        <p className="title">Payload payment</p>
        <JSONInput
          id="2"
          placeholder={paymentData}
          onChange={(event) => setPaymentData(event.jsObject)}
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
      </div>
    </div>
  );
}

export default App;
