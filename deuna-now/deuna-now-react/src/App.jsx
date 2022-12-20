import { useEffect, useState } from "react";

import "./App.css";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import listProducts from "./assets/products.png";
import closeIcon from "./assets/closeIcon.png";
import { DEUNA_PUBLIC_API_KEY, ENVIRONMENT } from "./config";
import jsonPayload from "./payload.json";

function App() {
  const [payload, setPayload] = useState(jsonPayload);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    status: "",
  });

  useEffect(() => {
    setRequestStatus({
      message: "",
      status: "",
    });
  }, [payload]);

  //should tokenized order and open modal
  const openModal = async () => {
    try {
      // tokenize order
      setLoading(true);
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
      //save  token
      const newResponse = await response.json();
      const token = newResponse.token;
      if (!token) {
        setRequestStatus({
          message: "Error al tokenizar la orden",
          status: "error",
        });
        return;
      }

      //show modal
      setShowModal(true);

      // config checkout
      await window.DeunaPay.default.configure({
        apiKey: DEUNA_PUBLIC_API_KEY,
        orderToken: token,
        env: ENVIRONMENT,
      });

      // render widget-payment
      await window.DeunaPay.default.renderWidget({ target: "#widget" });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // process pay
  const processPay = async () => {
    const { error } = await window.DeunaPay.default.pay({});

    //error
    if (error) {
      setRequestStatus({ message: "Hubo un error al pagar", status: "error" });
      return;
    }

    //success
    setRequestStatus({
      message: "Se realizó el pago satisfactoriamente",
      status: "success",
    });
  };

  const changeOrderPayload = (v) => {
    const val = v.json;
    const data = JSON.parse(val);
    setPayload(data);
  };

  const closeModal = () => {
    setRequestStatus({
      message: "",
      status: "",
    });
    setShowModal(false);
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
        <img src={listProducts} alt="cart" className="cart-list" />
        <button
          id="button-checkout-deuna"
          className="purchase-btn"
          onClick={openModal}
        >
          <img
            src="https://images.getduna.com/logo-full-deuna-D.svg"
            alt=" DEUNA"
          />
          Deuna-now
        </button>
        {requestStatus.status === "error" && (
          <span className="error-message">{requestStatus.message}</span>
        )}
        {showModal && (
          <>
            <div className="modal">
              <div className="icon-container" onClick={closeModal}>
                <img src={closeIcon} alt="close icon" width="25px" />
              </div>
              {loading && (
                <span className="loading-message">
                  Cargando métodos de pago ...
                </span>
              )}
              {requestStatus.status !== "success" && (
                <div style={{ height: "70vh" }} id="widget"></div>
              )}

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
                <span className="error-message">{requestStatus.message}</span>
              )}
              {requestStatus.status === "success" && (
                <span className="success-message">{requestStatus.message}</span>
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
