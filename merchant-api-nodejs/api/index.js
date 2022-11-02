const express = require("express");
const order = require("./components/order/network");
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });

const app = express();

app.use(express.json());
app.use("/api/order", order);

app.listen(process.env.API_PORT, () => {
  console.log("Node server listening on the port:", process.env.API_PORT);
});
