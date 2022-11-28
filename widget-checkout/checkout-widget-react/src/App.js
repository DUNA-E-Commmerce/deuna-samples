import { useState } from "react";

import "./App.css";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import Data from "./mockData.json";
import ListProducts from "./assets/products.png";

function App() {
  const [data, setData] = useState(Data);
  /**
   * Open modal checkout widget
   */
  const shouldOpen = async () => {
    // Initialize checkout
   const dunaCheckout = window.DeunaCheckout();
    try {
      const response = await fetch(`${process.env.BASE_URL}/tokenizeOrder`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const newResponse = await response.json();

      if (!newResponse.body.token) return;

      // Configure checkout
      await dunaCheckout.configure({
        env: process.env.ENVIRONMENT,
        apiKey: process.env.DEUNA_PRIVATE_API_KEY,
        orderToken: newResponse.body.token,
      });

      await dunaCheckout.show();
    } catch (error) {console.error(error)}
  };

  return (
    <div className="App">
    <JSONInput
      id={1}
      placeholder={data}
      onChange={(event) => setData(event.jsObject)}
      locale={locale}
      height="100vh"
      width="70vw"
    />
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
