const express = require("express");
const cors = require("cors");
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });
const response = require("../network/response");
const checkoutSDK = require("./controller");

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

// Set FraudId and orderId
app.post("/setFraudId/:orderId", (req, res) => {
  checkoutSDK
    .setFraudId(req.body, req.params.orderId)
    .then((fraudId) => {
      response.success(req, res, fraudId, 200);
    })
    .catch((err) => {
      console.log("error", err);
      response.error(req, res, err, 400);
    });
});

// Get Tokenized Order
app.post("/tokenizeOrder/:orderId", (req, res) => {
  checkoutSDK
    .getTokenizedOrder(req.body, req.params.orderId)
    .then((tokenizedOrder) => {
      response.success(req, res, tokenizedOrder, 200);
    })
    .catch((err) => {
      response.error(req, res, err, 400);
    });
});

//process pay
app.post("/processPayment/:orderId", (req, res) => {
  checkoutSDK
    .processPayment(req.body, req.params.orderId)
    .then((fraudId) => {
      response.success(req, res, fraudId, 200);
    })
    .catch((err) => {
      response.error(req, res, err, 400);
    });
});

app.listen(process.env.API_PORT, () => {
  console.log("Node server listening on the port:", process.env.API_PORT);
});
