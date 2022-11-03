const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://db-ecommerce-a062c-default-rtdb.firebaseio.com/",
});

const db = admin.database();
const Orders = db.ref("orders");
module.exports = Orders;
