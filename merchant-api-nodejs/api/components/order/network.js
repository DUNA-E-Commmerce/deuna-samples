const express = require("express");
const merchantApi = require("./controller");
const response = require("../../../network/response");
const orderPayload = require("../../../mockData"); //it will be deleted

const router = express.Router();

//setup routes
//Get Tokenized order
router.post("/", (req, res) => {
  merchantApi
    .getTokenizedOrder(orderPayload)
    .then((tokenizedOrder) => {
      response.success(req, res, tokenizedOrder, 200);
    })
    .catch((err) => {
      response.error(req, res, err, 400);
    });
});

module.exports = router;
