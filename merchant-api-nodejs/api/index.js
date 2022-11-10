const express = require("express");
const cors = require("cors");
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });
const merchantApi = require("./controller");
const response = require("../network/response");

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

// Get Tokenized Order
app.post("/tokenizeOrder", (req, res) => {
  merchantApi
    .getTokenizedOrder(req.body)
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
      //should return this structure
      res.status(200).send(orderWithShippingMethods);
    })
    .catch((err) => {
      response.error(req, res, err, 400);
    });
});

app.patch("/setShippingMethod/:orderId/:codeMethod", (req, res) => {
  merchantApi
    .setShippingMethod(req.params.orderId, req.params.codeMethod)
    .then((orderWithShippingMethods) => {
      //should return this structure
      res.status(200).send(orderWithShippingMethods);
    })
    .catch((err) => {
      response.error(req, res, err, 400);
    });
});

app.post("/applyCoupons/:orderId", (req, res) => {
  merchantApi
    .applyCoupon(req.params.orderId, req.body.coupon_code)
    .then((orderWithToken) => {
      //should return this structure
      res.status(200).send(orderWithToken);
    })
    .catch((err) => {
      response.error(req, res, err, 400);
    });
});

app.delete("/removeCoupons/:orderId/code/:couponCode", (req, res) => {
  merchantApi
    .removeCoupon(req.params.orderId, req.params.couponCode)
    .then((orderWithToken) => {
      //should return this structure
      res.status(200).send(orderWithToken);
    })
    .catch((err) => {
      response.error(req, res, err, 400);
    });
});

app.post("/notify", (req, res) => {
  merchantApi
    .notifyStatus(req.body.order)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      response.error(req, res, err, 400);
    });
});

app.listen(process.env.API_PORT, () => {
  console.log("Node server listening on the port:", process.env.API_PORT);
});
