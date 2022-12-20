import { useState } from "react";

import "./App.css";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import ListProducts from "./assets/products.png";
import { DEUNA_PUBLIC_API_KEY } from "./config";
import jsonPayload from "./payload.json";
//import jsonPayload from "./payloadComplete.json";
import "reactjs-popup/dist/index.css";

function App() {
  const [payload, setPayload] = useState(jsonPayload);
  const [showModal, setShowModal] = useState(false);
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    status: "idle",
  });
  /**
   * Open modal checkout widget
   */
  const shouldOpen = async () => {
    console.log("TOKENIZAR ORDEN");
    try {
      // tokenize order
      const response = await fetch(
        `https://api.stg.deuna.io/merchants/orders`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-api-key": DEUNA_PUBLIC_API_KEY,
          },
          body: JSON.stringify(payload),
        }
      );
      const newResponse = await response.json();
      console.log("response", newResponse);

      const token = newResponse.token;
      if (!token) return;
      setShowModal(true);
      // config checkout
      await window.DeunaPay.default.configure({
        apiKey: DEUNA_PUBLIC_API_KEY,
        orderToken: token,
        env: "staging",
      });

      // render widget-payment
      await window.DeunaPay.default.renderWidget({ target: "#widget" });
    } catch (error) {
      console.error(error);
    }
  };

  const changeOrderPayload = (v) => {
    const val = v.json;
    const data = JSON.parse(val);
    setPayload(data);
  };

  const processPay = async () => {
    //const { error } = await window.DeunaPay.default.

    const { error } = await window.DeunaPay.default.pay({});

    if (error) {
      setRequestStatus({ message: "Hubo un error al pagar", status: "error" });
      return;
    }

    setRequestStatus({
      message: "Se realizó el pago satisfactoriamente",
      status: "success",
    });
  };
  return (
    <div className="App">
      <JSONInput
        id={1}
        placeholder={payload}
        onChange={(v) => changeOrderPayload(v)}
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
          Deuna-now
        </button>
        {showModal && (
          <>
            <div className="modal">
              <div style={{ height: "85vh" }} id="widget"></div>
              <button
                id="button-checkout-deuna"
                className="purchase-btn"
                onClick={processPay}
              >
                <img
                  src="https://images.getduna.com/logo-full-deuna-D.svg"
                  alt=" DEUNA"
                />
                Pagar
              </button>
              {requestStatus.status === "error" && (
                <span style={{ color: "red" }}>{requestStatus.message}</span>
              )}
              {requestStatus.status === "success" && (
                <span style={{ color: "green" }}>{requestStatus.message}</span>
              )}
            </div>
            <div className="over-modal"></div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
