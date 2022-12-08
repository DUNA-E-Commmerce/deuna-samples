<br />
<p align="center">
  <a href="https://deuna.com/">
    <img src="https://files.readme.io/e32846c-small-logodeve.png" width="318px" alt="deuna logo" />
  </a>
</p>
<br />

<hr />

<h2 align="center">Widget checkout</h2>
<p align="center">Es una interfaz ya programada con todo lo necesario para ser usada de manera inmediata.</p>
<br />

<p align="center" style="background: white;">
  <a href="https://docs.deuna.com/docs/primeros-pasos-widget">
    <img src="https://files.readme.io/6d58d77-Group_10.svg" alt="DEUNA Checkout" class="img-fluid mb-3">
  </a>
</p>

<p align="center">
Este repositorio es solamente para nuestra  <a href="https://docs.deuna.com/" style="color: #f50;">documentación</a>.👌
</p>
<br />

# ¿Qué controla el widget?
* Toda la experiencia de compra final del cliente.
* Integra nuestros servicios de procesamiento de pago.
* Medidas anti fraude.
* Tokenización de orden.
* Notificación de estados mediante Webhook.
* Comunicación directa con tu servidor mediante el Merchant API.
# Requisitos para documentación
Se requiere lo siguiente si estas revisando documentación y plantillas de prueba para la integración con widget:

* jsonEditor
* [Jquery](https://jquery.com/) =3.3.1

# Estructura del proyecto


```
project
│___README.md
│
└───widget-checkout
    └───checkout-widget-js
        └───dist           # recursos para ejecutar el proyecto
        └───images
        └───index.html     # archivo a ejecutar
        └───config.js      # archivo de cofiguración
```

# Implementar widget con vanillaJS

## Requerimientos

- Api key

## Como ejecutar

1. Obten tu llave privada [Documentación](https://docs.deuna.com/docs/api-key)
2. Agrega la variable `DEUNA_PRIVATE_API_KEY` en el archivo config.js 
3. Agrega la variable `ENVIRONMENT` al archivo config.js 
4. Agrega la variable `BASE_URL` al archivo config.js 
5. Abrir el archivo `index.html` en el navegador

Asegurate de configurar estas variables en `config.js` que se  encuentra en la raiz del proyecto. Debería incluir las siguientes variables:

```yaml
# DEUNA API keys - see https://docs.deuna.com/docs/api-key
DEUNA_PRIVATE_API_KEY=""00cdd7f62063c..."
ENVIRONMENT= "Staging..."
BASE_URL= "https://localhost:3000..."
```
