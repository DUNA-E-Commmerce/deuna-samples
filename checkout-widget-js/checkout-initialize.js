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
  try {
    const response = await fetch("http://localhost:3000/tokenizeOrder", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(editor.get()),
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
