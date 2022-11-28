const shippingMethods = [
  {
    code: "100B2", // Commerce's identifier
    name: "Simple", // Shipping method's name, this will be displayed in checkout
    cost: 250, //Shipping cost
    tax_amount: 40, // Shipping cost tax
  },
  {
    code: "C10B2",
    name: "Premium",
    cost: 350,
    tax_amount: 960,
  },
];

module.exports = shippingMethods;
