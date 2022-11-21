import { URL_SERVICES } from "../config";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
const merchantServices = {
  tokenizeOrder: (order, orderId) => {
    return fetch(`${URL_SERVICES}/tokenizeOrder/${orderId}`, {
      method: "POST",
      body: JSON.stringify(order),
      headers,
    }).then((response) => response.json());
  },
  setFraudId: (data, orderId) => {
    return fetch(`${URL_SERVICES}/setFraudId/${orderId}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers,
    }).then((response) => response.json());
  },
  processPayment: (payload, orderId) => {
    return fetch(`${URL_SERVICES}/processPayment/${orderId}`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers,
    }).then((response) => response.json());
  },
};

export { merchantServices };
