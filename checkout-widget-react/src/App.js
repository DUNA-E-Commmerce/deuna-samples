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
      const response = await fetch("http://localhost:3000/tokenizeOrder", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.token) return;

      // Configure checkout
      await dunaCheckout.configure({
        env: "staging",
        apiKey: process.env.DEUNA_PRIVATE_API_KEY,
        orderToken: response.json().token,
      });

      await dunaCheckout.show();
    } catch (error) {}
  };

  return (
    <div className="App">
      <JSONInput
        id="a_unique_id"
        placeholder={data}
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

        {/**  Open button checkout widget */}
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
