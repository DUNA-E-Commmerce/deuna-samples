const request = require("request");

const URL_BASE = "https://staging-apigw.getduna.com"; // Merchant API

function merchantApi() {
  function getTokenizedOrder(orderPayload) {
    return req("POST", orderPayload);
  }

  // Function to Request
  function req(method, orderPayload) {
    const urlTokenizedOrder = `${URL_BASE}/merchants/orders`;

    return new Promise((resolve, reject) => {
      request(
        {
          method,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-API-KEY": process.env.DEUNA_PRIVATE_API_KEY,
          },
          url: urlTokenizedOrder,
          json: true,
          body: orderPayload,
        },
        (err, req, body) => {
          if (err) {
            return reject(err.message);
          }

          return resolve(body);
        }
      );
    });
  }
  return {
    getTokenizedOrder,
  };
}

module.exports = merchantApi();
