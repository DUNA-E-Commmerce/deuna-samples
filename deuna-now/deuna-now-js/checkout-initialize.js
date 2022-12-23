document.addEventListener("DOMContentLoaded", function(event) {
	//document is fully loaded 
  const popupModal = document.querySelector('.popup-modal')
  const bodyBlackout = document.querySelector('.body-blackout')    
  popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
      popupModal.classList.remove('is--visible')
      bodyBlackout.classList.remove('is-blacked-out')
  })

  bodyBlackout.addEventListener('click', () => {
    popupModal.classList.remove('is--visible')
    bodyBlackout.classList.remove('is-blacked-out')
  })
})

/**
 * Open modal checkout widget
 */
let tokenUser;
let tokenOrder;
const shouldOpen = async () => {
  const data = editor.get();
  try {
    const response = await fetch(`https://api.stg.deuna.io/merchants/orders`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': DEUNA_PUBLIC_API_KEY
      },
      body: JSON.stringify(data),
    });
    const newResponse = await response.json();
    // Configure checkout
    tokenOrder = newResponse.token;
    await window.DeunaPay.default.configure({
      apiKey: DEUNA_PUBLIC_API_KEY,
      orderToken: newResponse.token,
      env: ENVIRONMENT,
    });
    
    await window.DeunaPay.default.renderWidget({ target: "#root" });
    const bodyBlackout = document.querySelector('.body-blackout')
    const popupModal = document.querySelector('.popup-modal')

    popupModal.classList.add('is--visible')
    bodyBlackout.classList.add('is-blacked-out')

  } catch (error) {
    alert(error);
  }
};

/**
 * pay
 */
const handlePay = async () => {
  const { data, error } = await window.DeunaPay.default.pay();
  const message = document.querySelector('.message')

  if (error) {
    message.innerHTML = 'Hubo un error al pagar';
    message.classList.add('error')
    return;
  }

  message.innerHTML = 'Se realizó el pago satisfactoriamente';
  message.classList.add('success')
};
