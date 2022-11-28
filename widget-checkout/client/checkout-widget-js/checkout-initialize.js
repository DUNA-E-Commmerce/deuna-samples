/**
 * Order tokenization
 * @param object order - Order data
 * @return string token
 */

// Initialize checkout
const dunaCheckout = window.DeunaCheckout();

/**
 * Open modal checkout widget
 */
const shouldOpen = async () => {
  const data = editor.get();
  try {
    const response = await fetch(`${BASE_URL}/tokenizeOrder`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    const newResponse = await response.json();
    // Configure checkout
    await dunaCheckout.configure({
      env: ENVIRONMENT,
      apiKey: DEUNA_PRIVATE_API_KEY,
      orderToken: newResponse.body.token,
    });
    await dunaCheckout.show();
  } catch (error) {
    alert(error);
  }
};
