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
    const response = await fetch("http://localhost:3000/tokenizeOrder", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    // Configure checkout
    await dunaCheckout.configure({
      env: "staging",
      apiKey: DEUNA_PRIVATE_API_KEY,
      orderToken:
        response.json().token || "kpjh0zVDzfwHVGB8GXmsqVN1PyhuXfhjzQTcBF5",
    });
    await dunaCheckout.show();
  } catch (error) {}
};
