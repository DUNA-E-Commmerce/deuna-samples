const request = require("request");
const shippingMethods = require("../mock/shippingMethods");
const coupons = require("../mock/coupons");
const store = require("../store/db");
// Merchant API URL

function merchantApi() {
  async function getTokenizedOrder(orderPayload) {
    const urlTokenizedOrder = `${process.env.URL_BASE}/merchants/orders`;

    const response = await req("POST", urlTokenizedOrder, orderPayload);
    //example to save data in DB
    store.push("orders", {
      token: response.token,
      orderId: response.order.order_id,
    });
    return response;
  }

  async function getShippingMethods(orderId) {
    const { order, token } = await getOrderWithToken(orderId);

    // example to set shipping cost and modify total cost in order
    order["shipping_amount"] = shippingMethods[0].cost;
    order["sub_total"] = order["items_total_amount"] + order["shipping_amount"];
    order["total_amount"] = order["sub_total"] + order["tax_amount"];

    //should return this structure
    return {
      order: order,
      token: token,
      shipping_methods: shippingMethods,
    };
  }

  async function setShippingMethod(orderId, codeMethod) {
    const { order, token } = await getOrderWithToken(orderId);

    //example to modify shipping cost according new shipping method
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

    //should return this structure
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
    order["sub_total"] = order["sub_total"] - couponSelected.amount;
    order["total_amount"] =
      order["sub_total"] + order["shipping_amount"] + order["tax_amount"];
    //set coupon structure
    order["discounts"] = [couponSelected];

    //should return this structure
    return {
      order: order,
      token: token,
    };
  }

  async function removeCoupon(orderId, couponCode) {
    const { order, token } = await getOrderWithToken(orderId);

    //example to validate coupon is available
    const couponSelected = coupons.find((coupon) => coupon.code === couponCode);
    if (!couponSelected) {
      throw new Error("coupon not exist");
    }

    //modify costs
    order["sub_total"] = order["sub_total"] + couponSelected.amount;
    order["total_amount"] =
      order["sub_total"] + order["shipping_amount"] + order["tax_amount"];
    //remove discounts
    order["discounts"] = [];

    //should return this structure
    return {
      order: order,
      token: token,
    };
  }

  // notify order:
  async function notifyStatus(order) {
    const status = order.status;
    const orderId = order.order_id;
    return {
      status,
      data: {
        order_id: orderId,
      },
    };
  }

  //Helper to get order from Merchant API
  async function getOrderWithToken(orderId) {
    //get token from DB
    const result = await store.get("orders", orderId);
    if (!result) {
      throw new Error("Data not found");
    }
    const token = result.token;
    // get order from Merchant API
    const urlOrderWithToken = `${process.env.URL_BASE}/merchants/orders/${token}`;
    const response = await req("GET", urlOrderWithToken);
    if (response.error) {
      throw new Error("Error internal");
    }
    return response;
  }

  // Helper to request
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
    notifyStatus,
  };
}

module.exports = merchantApi();
