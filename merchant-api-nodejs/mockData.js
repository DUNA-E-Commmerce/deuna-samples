// this file is provisional
const orderPayload = {
  order: {
    order_id: "13222",
    currency: "USD",
    store_code: "all",
    timezone: "America/Mexico_City",
    items_total_amount: 3682,
    tax_amount: 132,
    sub_total: 3550,
    shipping_amount: 0,
    total_amount: 3770,
    items: [
      {
        id: "001",
        name: "Papa Fritas",
        description: "Papa Fritas",
        total_amount: {
          amount: 594,
          currency: "USD",
          currency_symbol: "$",
        },
        unit_price: {
          amount: 550,
          currency: "USD",
          currency_symbol: "$",
        },
        tax_amount: {
          amount: 44,
          currency: "USD",
          currency_symbol: "$",
        },
        quantity: 1,
        image_url:
          "https://images-staging.getduna.com/95463fb5-6279-4ec3-8ff9-fe07aacd2142/cd928351d12c6b96_domicilio_316_744x744.png?d=600x600",
      },
      {
        id: "002",
        name: "Hamburguesa",
        description: "Hamburguesa ",
        total_amount: {
          amount: 3088,
          currency: "USD",
          currency_symbol: "$",
        },
        unit_price: {
          amount: 1500,
          currency: "USD",
          currency_symbol: "$",
        },
        tax_amount: {
          amount: 88,
          currency: "USD",
          currency_symbol: "$",
        },
        quantity: 2,
        image_url:
          "https://images-staging.getduna.com/95463fb5-6279-4ec3-8ff9-fe07aacd2142/cd928351d12c6b96_domicilio_51330_744x744_1646338877.png?d=600x600",
      },
    ],
    shipping_options: {
      type: "delivery",
      details: {
        store_name: "Store Name",
        address: "6 Rotermanni 11343 Talinn",
        address_coordinates: {
          lat: 4.721245,
          lng: -74.04673,
        },
        contact: {
          name: "jhon snow",
          phone: "+9999999999",
        },
        additional_details: {
          address_notes: "first floor",
        },
      },
    },
    user_instructions: "NO REQUERIDO",
    metadata: {
      key1: "NO REQUERIDO",
      key2: "NO REQUERIDO",
    },
  },
};

module.exports = orderPayload;
