import React, { useState } from "react";
import { Checkout } from "@deuna/checkout-sdk"; // Adjust this import as needed
import {
  buttonStyle,
  container,
  containerStyle,
  headingStyle,
  inputStyle,
} from "./styles";

const App = () => {
  const [cardCVV, setCardCVV] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSDKTest = async () => {
    try {
      const checkout = await Checkout.newInstance({
        apiKey: import.meta.env.VITE_DEUNA_PUBLIC_API_KEY,
        orderToken: import.meta.env.VITE_DEUNA_ORDER_TOKEN,
        env: import.meta.env.VITE_ENVIRONMENT,
        authToken: "",
      });

      const { data: paymentMethods } = await checkout.getPaymentMethods();
      const order = checkout.getCurrentOrder();

      console.log(order.getOrder(), "order");

      console.log(paymentMethods, "paymentMethods");
      order.setCreditCard({
        card_cvv: "123",
        card_holder: "carlos padilla",
        expiry_month: "01",
        expiry_year: "2024",
        card_number: "36545400000008",
      });

      order.setGuestEmail("cpadilla@getduna.com");

      order.setPaymentMethod(paymentMethods.data[0]);

      await order.verifyPaymentWithOTP({ otpCode: "123456" });

      console.log(order.getOrder(), "order");
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Test SDK Component</h1>
      <div style={container}>
        <label style={inputStyle}>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </label>
        <label style={inputStyle}>
          Card Holder:
          <input
            type="text"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
          />
        </label>
        <label style={inputStyle}>
          Expiry Month:
          <input
            type="text"
            value={expiryMonth}
            onChange={(e) => setExpiryMonth(e.target.value)}
          />
        </label>
        <label style={inputStyle}>
          Expiry Year:
          <input
            type="text"
            value={expiryYear}
            onChange={(e) => setExpiryYear(e.target.value)}
          />
        </label>
        <label style={inputStyle}>
          CVV:
          <input
            type="text"
            value={cardCVV}
            onChange={(e) => setCardCVV(e.target.value)}
          />
        </label>
        <label style={inputStyle}>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button onClick={handleSDKTest} style={buttonStyle}>
          Test SDK
        </button>
      </div>
    </div>
  );
};

export default App;
