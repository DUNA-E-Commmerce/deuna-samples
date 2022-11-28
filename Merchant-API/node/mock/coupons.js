const coupons = [
  {
    amount: -50,
    code: "CUPON1",
    reference: "Descuento al total de la orden",
    description: "Descuento al total de la orden",
    free_shipping: {
      is_free_shipping: false,
      maximum_cost_allowed: -250,
    },
    discount_category: "Descuentos",
  },
  {
    amount: -100,
    code: "CUPON2",
    reference: "Descuento al total de la orden",
    description: "Descuento al total de la orden",
    free_shipping: {
      is_free_shipping: false,
      maximum_cost_allowed: -250,
    },
    discount_category: "Descuentos",
  },
];

module.exports = coupons;
