document.addEventListener("DOMContentLoaded", function (event) {
  const paymentLinkButton = document.getElementById(
    "deuna_payment-link-button"
  );
  paymentLinkButton.addEventListener("click", shouldOpen);
});

/**
 * Tokenize a payment_link order
 */
const shouldOpen = async () => {
  const paymentLink = document.getElementById("deuna_payment-link-button");
  paymentLink.classList.add("loading");

  const data = editor.get();
  try {
    const response = await fetch(`https://api.stg.deuna.io/merchants/orders`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-api-key": DEUNA_PUBLIC_API_KEY,
      },
      body: JSON.stringify(data),
    });
    const newResponse = await response.json();

    openPaymentLink(newResponse.order.payment_link);
  } catch (error) {
    alert(error);
  }
};

// /**
//  * Open payment link
//  */

async function openPaymentLink(paymentLink) {
  window.location.href = paymentLink;
}
