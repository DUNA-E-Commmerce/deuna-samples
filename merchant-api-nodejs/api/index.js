const express = require("express");
const cors = require("cors");
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });
const merchantApi = require("./controller");
const response = require("../network/response");
const orderPayload = require("../mock/orderPayload");

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

// Get Tokenized Order
app.post("/tokenizeOrder", (req, res) => {
  merchantApi
    .getTokenizedOrder(orderPayload)
    .then(async (tokenizedOrder) => {
      response.success(req, res, tokenizedOrder, 200);
    })
    .catch((err) => {
      response.error(req, res, err, 400);
    });
});

// Set ShippingMethods to Order
app.post("/getShippingMethods/:orderId", (req, res) => {
  merchantApi
    .getShippingMethods(req.params.orderId)
    .then((orderWithShippingMethods) => {
      response.success(req, res, orderWithShippingMethods, 200);
    })
    .catch((err) => {
      response.error(req, res, err, 400);
    });
});

app.listen(process.env.API_PORT, () => {
  console.log("Node server listening on the port:", process.env.API_PORT);
});
