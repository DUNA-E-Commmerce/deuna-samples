
const orderTokenReceive = "kpjh0zVDzfwHVGB8GXmsqVN1PyhuXfhjzQTcBF5";

/**
 * Order tokenization
 * @param object order - Order data
 * @return string token
 */
const getOrderToken = (order) => {
  //TODO tokenization
  /*fetch('').then(function (response) {
        console.log('success!', response);
    }).catch(function (err) {
        console.warn('Error', err);
    });*/
};

// Initialize checkout
const dunaCheckout = window.DeunaCheckout();

/**
 * Open modal checkout widget
 */
const shouldOpen = async () => {
  //getOrderToken(order);

  // Configure checkout
  await dunaCheckout.configure({
    env: "staging",
    apiKey: DEUNA_PRIVATE_API_KEY,
    orderToken: orderTokenReceive,
  });
  await dunaCheckout.show();
};
