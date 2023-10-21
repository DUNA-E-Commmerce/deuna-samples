// Inicialización del widget de pago
async function initializePaymentWidget() {
  const paymentWidget = new window.DeunaPay();
  const configs = {
      orderToken: 'orderToken',
      apiKey: 'apiKey',
      env: 'staging',  // Cambia a 'production' para ambiente de producción
      target: 'payment-widget'
  };

  try {
      await paymentWidget.configure(configs);
      return paymentWidget;
  } catch (error) {
      console.error('Error configurando el widget de pago:', error);
  }
}

// Manejo del evento click
async function handleClick() {
  const paymentWidget = await initializePaymentWidget();
  if (!paymentWidget) return;

  const params = {
      callbacks: {
          onPaymentSuccess: data => {
            console.log('onPaymentSucess', data);
            window.location.replace('thankyou-page.html');
          },
          onClose: error => {
              console.log('onClose', error);
              document.getElementById('loader').style.display = 'none';  // Oculta el loader
          },
          onError: error => {
            console.log('onError', error)
          }
      }
  };

  document.getElementById('show-button').style.display = 'none';  // Oculta el botón
  document.getElementById('loader').style.display = 'block';  // Muestra el loader

  try {
      paymentWidget.show(params);
  } catch (error) {
      console.error('Error mostrando el widget de pago:', error);
      // Restaurar la UI en caso de error
      document.getElementById('show-button').style.display = 'block';
      document.getElementById('loader').style.display = 'none';
  }
}

// Configuración inicial una vez que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('show-button').addEventListener('click', handleClick);
});
