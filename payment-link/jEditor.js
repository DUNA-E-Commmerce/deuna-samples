const editor = new JsonEditor("#json-display", {
  order_type: "PAYMENT_LINK",
  checkout_modules: [
    {
      name: "LoginPattern",
    },
    // {
    //   name: "LoginWithEmailOrderPattern",
    // },
    {
      name: "OrderDetailPattern",
    },
    {
      name: "CouponPattern",
    },
  ],
  order: {
    order_id: "0854df1a-28d1-4e96-9090-583e0f6db5fdsfdsf30",
    currency: "MXN",
    timezone: "America/Mexico_City",
    tax_amount: 3000,
    shipping_amount: 3000,
    items_total_amount: 3000,
    sub_total: 3000,
    processor_name: "all",
    total_amount: 3000,
    store_code: "all",
    webhook_urls: {
      notify_order: "https://staging-kfc-ec.deuna.io/api/v1/orders/notify",
      apply_coupon:
        "https://staging-kfc-ec.deuna.io/api/v1/orders/{order_token}/coupons",
      remove_coupon:
        "https://staging-kfc-ec.deuna.io/api/v1/orders/{order_token}/coupons/{coupon_code}",
      get_shipping_methods: "",
      update_shipping_method: "",
      shipping_rate:
        "https://staging-kfc-ec.deuna.io/api/v1/orders/{order_token}/shipping",
    },
    items: [
      {
        id: "79",
        name: "10 ALITAS VOLANTE",
        description: "10 alitas picantes",
        options: "string option",
        total_amount: {
          amount: 1200,
          currency: "USD",
          currency_symbol: "$",
        },
        unit_price: {
          amount: 850,
          currency: "USD",
          currency_symbol: "$",
        },
        tax_amount: {
          amount: 100,
          currency: "USD",
          currency_symbol: "$",
        },
        quantity: 1,
        uom: "string",
        upc: "string",
        sku: "SKU-11021",
        isbn: "12-345-678-90123",
        brand: "Bolt Swagstore",
        manufacturer: "Bolt Factory",
        category: "hats",
        color: "Red",
        size: "XXL",
        weight: {
          weight: 22,
          unit: "kg",
        },
        image_url: "https://boltswagstore.com/inventory/hats/red-hat.png",
        details_url: "https://boltswagstore.com/inventory/hats/red-hat.png",
        type: "physical",
        taxable: true,
      },
    ],
    discounts: [
      {
        amount: 500,
        code: "SUMMERFUN15",
        reference: "SUMMERFUN15",
        description: "",
        details_url: "https://boltswagstore.com/discounts/#12345",
        free_shipping: {
          is_free_shipping: false,
          maximum_cost_allowed: 100,
        },
        discount_category: "coupon",
      },
    ],
    shipping_options: {
      type: "pickup",
      details: {
        store_name: "Store Name",
        address: "6 Rotermanni 11343 Talinn",
        address_coordinates: {
          lat: 4.721245,
          lng: -74.04673,
        },
        contact: {
          name: "jhon snow",
          phone: "972514910",
        },
        additional_details: {
          pickup_time: "2021-11-03T22:09:09.086990957Z",
          stock_location: "",
        },
      },
    },
    user_instructions: "This item is a gift.",
    metadata: {
      key1: "value1",
      key2: "value2",
    },
    redirect_urls: {
      success: "http://domian.success.com",
      pending: "http://domian.pending.com",
      error: "http://domian.error.com",
    },
  },
});
