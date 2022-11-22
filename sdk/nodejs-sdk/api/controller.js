const request = require("request");
const store = require("../store/db");
const { Checkout } = require("@deuna/checkout-sdk");

function checkoutSDK() {
  let checkout;

  // set fraudId and OrderId in store
  async function setFraudId(fraudId, orderId) {
    //save data in DB
    store.push("fraudIds", {
      orderId,
      fraudId,
    });

    return {
      orderId,
      fraudId,
    };
  }

  //get tokenized order
  async function getTokenizedOrder(orderPayload, orderId) {
    //get fraudId
    const orderDB = await store.get("fraudIds", orderId);
    if (!orderDB) {
      throw new Error("Data not found");
    }
    const fraudId = orderDB.fraudId;

    // instance checkout
    checkout = await Checkout.newInstance({
      privateApiKey: process.env.DEUNA_PRIVATE_API_KEY,
      publicApiKey: process.env.DEUNA_PUBLIC_API_KEY,
      env: "staging",
      sessionId: fraudId.sessionId,
      deviceId: fraudId.deviceId,
    });

    //get tokenized order
    const {
      data: { token, order },
      error,
    } = await checkout.requestOrderToken(orderPayload);

    //save data in DB
    store.push("orders", {
      token: token,
      orderId: order.order_id,
    });

    return {
      token,
      order,
    };
  }

  //process payment
  async function processPayment(payload, orderId) {
    //get Order
    const orderDB = await store.get("orders", orderId);
    if (!orderDB) {
      throw new Error("Data not found");
    }

    await checkout.getPaymentMethods();

    const { data, error } = await checkout.pay(payload.order);

    if (error) {
      throw new Error(error);
    }
    const order = data.order;
    return {
      order,
    };
  }

  return {
    getTokenizedOrder,
    setFraudId,
    processPayment,
  };
}

module.exports = checkoutSDK();
