import { useState } from "react";

import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import jsonOrderPayload from "./mock/orderPayload.json";
import jsonPaymentPayload from "./mock/paymenPayload.json";

import { Checkout } from "@deuna/checkout-sdk";
import { merchantServices } from "./services/merchant";
import { CircleWithCheckIcon } from "./assets/check.icon";
import { CircleWithErrorIcon } from "./assets/error.icon";

import "./App.css";

function App() {
  const [orderPayload, setOrderPayload] = useState(jsonOrderPayload);
  const [paymentPayload, setPaymentPayload] = useState(jsonPaymentPayload);
  const [showCheckFraudId, setShowCheckFraudId] = useState(false);
  const [showCheckTokenizedOrder, setShowCheckTokenizedOrder] = useState(false);
  const [showCheckPaymentProcessed, setShowCheckPaymentProcessed] =
    useState(false);

  const initCheckout = async () => {
    //checkout  initialize
    await Checkout.init({
      publicApiKey: `${process.env.REACT_APP_PUBLIC_API_KEY_DEUNA}`,
      env: "staging",
    });

    //get fraudId credentials
    const response = await Checkout.getFraudCredentials({
      publicApiKey: `${process.env.REACT_APP_PUBLIC_API_KEY_DEUNA}`,
      env: "staging",
    });

    const fraudId = {
      sessionId: response.data.sessionId,
      deviceId: response.data.deviceId,
    };

    try {
      // send fraudId and  orderId
      const orderId = orderPayload.order.order_id;
      const { error } = await merchantServices.setFraudId(fraudId, orderId);
      setShowCheckFraudId(!error);

      // get tokenized order
      const { error: tokenizeError } = await merchantServices.tokenizeOrder(
        orderPayload,
        orderId
      );
      setShowCheckTokenizedOrder(!tokenizeError);
    } catch (e) {
      throw new Error(e);
    }
  };

  const processPayment = async () => {
    // process payment
    const orderId = orderPayload.order.order_id;
    const { error } = await merchantServices.processPayment(
      paymentPayload,
      orderId
    );
    setShowCheckPaymentProcessed(!error);
  };

  const changeOrderPayload = (v) => {
    const val = v.json;
    const data = JSON.parse(val);
    setOrderPayload(data);
  };

  const changePayPayload = (v) => {
    const val = v.json;
    const data = JSON.parse(val);
    setPaymentPayload(data);
  };
  return (
    <div className="App">
      <div className="containerPayload">
        <p className="text">Payload Order:</p>
        {/* <JSONWidget json={dataOrderPayload} changeData={changeData} /> */}
        <JSONInput
          placeholder={orderPayload}
          locale={locale}
          height="50vh"
          width="70vw"
          confirmGood={true}
          onKeyPressUpdate={true}
          onChange={(v) => changeOrderPayload(v)}
        />
        <p className="text"> Payload to process pay" </p>
        <JSONInput
          placeholder={paymentPayload}
          locale={locale}
          height="50vh"
          width="70vw"
          confirmGood={true}
          onKeyPressUpdate={true}
          onChange={(v) => changePayPayload(v)}
        />
      </div>
      <div className="shopping-cart">
        <img
          className="brand"
          src="https://uploads-ssl.webflow.com/62e806ed6cc7b20ca6dc2b93/62fca876ea0f2668b1c21b8b_deuna.png"
          alt=" DEUNA"
        />

        <button
          id="button-checkout-deuna"
          className="purchase-btn"
          onClick={initCheckout}
        >
          Initial setup
        </button>
        <div className="container-information">
          {showCheckFraudId ? <CircleWithCheckIcon /> : <CircleWithErrorIcon />}
          <p className="text"> Set fraud credentials</p>
        </div>
        <div className="container-information">
          {showCheckTokenizedOrder ? (
            <CircleWithCheckIcon />
          ) : (
            <CircleWithErrorIcon />
          )}
          <p className="text"> Get tokenized order</p>
        </div>
        <button
          id="button-checkout-deuna"
          className="purchase-btn"
          onClick={processPayment}
        >
          Process payment
        </button>
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
