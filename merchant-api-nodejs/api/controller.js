const request = require("request");
const shippingMethods = require("../mock/shippingMethods");
const coupons = require("../mock/coupons");
const store = require("../store/db");

const URL_BASE = "https://staging-apigw.getduna.com"; // Merchant API

function merchantApi() {
  async function getTokenizedOrder(orderPayload) {
    const urlTokenizedOrder = `${URL_BASE}/merchants/orders`;

    const response = await req("POST", urlTokenizedOrder, orderPayload);
    //save data in DB
    store.push("orders", {
      token: response.token,
      orderId: response.order.order_id,
    });
    return response;
  }

  async function getShippingMethods(orderId) {
    const { order, token } = await getOrderWithToken(orderId);

    // set shipping cost and modify total cost in order
    order["shipping_amount"] = shippingMethods[0].cost;
    order["sub_total"] = order["items_total_amount"] + order["shipping_amount"];
    order["total_amount"] = order["sub_total"] + order["tax_amount"];

    return {
      order: order,
      token: token,
      shipping_methods: shippingMethods,
    };
  }

  async function setShippingMethod(orderId, codeMethod) {
    const { order, token } = await getOrderWithToken(orderId);

    //modify shipping cost according new shipping method
    let newShippingCost = 0;
    for (const method in shippingMethods) {
      const code = shippingMethods[method].code;
      if (code === codeMethod) {
        newShippingCost = shippingMethods[method].cost;
      }
    }
    order["shipping_amount"] = newShippingCost;
    order["sub_total"] = order["items_total_amount"] + newShippingCost;
    order["total_amount"] = order["sub_total"] + order["tax_amount"];

    return {
      order: order,
      token: token,
    };
  }

  async function applyCoupon(orderId, couponCode) {
    const { order, token } = await getOrderWithToken(orderId);

    //validate coupon is available
    const couponSelected = coupons.find((coupon) => coupon.code === couponCode);
    if (!couponSelected) {
      throw new Error("coupon not exist");
    }

    //apply  discount
    order["sub_total"] = order["items_total_amount"] - couponSelected.amount;
    order["total_amount"] =
      order["sub_total"] + order["shipping_amount"] + order["tax_amount"];
    //set coupon structure
    order["discounts"] = couponSelected;

    return {
      order: order,
      token: token,
    };
  }

  async function removeCoupon(orderId, couponCode) {
    const { order, token } = await getOrderWithToken(orderId);

    //validate coupon is available
    const couponSelected = coupons.find((coupon) => coupon.code === couponCode);
    if (!couponSelected) {
      throw new Error("coupon not exist");
    }

    //modify costs
    order["sub_total"] = order["items_total_amount"] + couponSelected.amount;
    order["total_amount"] =
      order["sub_total"] + order["shipping_amount"] + order["tax_amount"];
    //remove discounts
    order["discounts"] = [];

    return {
      order: order,
      token: token,
    };
  }

  //get Order from Merchant API
  async function getOrderWithToken(orderId) {
    //get token from DB
    const result = await store.get("orders", orderId);
    console.log("result", result);
    if (!result) {
      throw new Error("Data not found");
    }
    const token = result.token;
    // get order from Merchant API
    const urlOrderWithToken = `${URL_BASE}/merchants/orders/${token}`;
    const response = await req("GET", urlOrderWithToken);
    if (response.error) {
      throw new Error("Error internal");
    }
    return response;
  }

  // Function to Request
  function req(method, url, orderPayload) {
    return new Promise((resolve, reject) => {
      request(
        {
          method,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-API-KEY": process.env.DEUNA_PRIVATE_API_KEY,
          },
          url,
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
    getShippingMethods,
    setShippingMethod,
    applyCoupon,
    removeCoupon,
  };
}

module.exports = merchantApi();
