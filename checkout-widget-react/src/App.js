import "./App.css";

function App() {
  /**
   * Open modal checkout widget
   */
  const shouldOpen = async () => {
    // Initialize checkout
    const dunaCheckout = window.DeunaCheckout();
    // Configure checkout
    await dunaCheckout.configure({
      env: "staging",
      apiKey: process.env.DEUNA_PRIVATE_API_KEY,
      orderToken: "kpjh0zVDzfwHVGB8GXmsqVN1PyhuXfhjzQTcBF5",
    });
    await dunaCheckout.show();
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          id="button-checkout-deuna"
          className="purchase-btn"
          onClick={shouldOpen}
        >
          <img
            src="https://images.getduna.com/logo-full-deuna-D.svg"
            alt=" DEUNA"
          />
          Checkout
        </button>
      </header>
    </div>
  );
}

export default App;
