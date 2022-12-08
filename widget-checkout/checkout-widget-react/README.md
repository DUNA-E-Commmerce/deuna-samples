<br />
<p align="center">
  <a href="https://deuna.com/">
    <img src="https://files.readme.io/e32846c-small-logodeve.png" width="318px" alt="deuna logo" />
  </a>
</p>

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

* [NodeJS](https://nodejs.org/en/) >=14.19.1 <=18.x.x
* [ReactJS](https://reactjs.org/) =18.x
* [NPM](https://nodejs.org/en/) >=6.x
* [Yarn](https://yarnpkg.com/) >= 1.22.x

# Estructura del proyecto


```
project
│___README.md
│
└───widget-checkout
    └───checkout-widget-react
        └───public           
        └───src
            └───assets
            └───App.js            # interfaz principal
            └───mockData.json     # payload de ejemplo   
        └───.env                  # archivo con variables
```

# Implementar widget con reactJS

## Requerimientos

- Api key

## Como ejecutar

1. Obten tu llave privada [Documentación](https://docs.deuna.com/docs/api-key)
2. Agrega la variable `DEUNA_PRIVATE_API_KEY` en el archivo .env 
3. Agrega la variable `ENVIRONMENT` al archivo .env 
4. Agrega la variable `BASE_URL` al archivo .env 
5. Ejecutar `npm install` o `yarn install` 
6. Ejecutar `npm start`, ejecutará la aplicación en modo desarrollador.
Abrir http://localhost:3000 en el navegador.

Asegurate de configurar estas variables en `.env` que deberá encontrarse en la raiz del proyecto. Debería incluir las siguientes variables:

```yaml
# DEUNA API keys - see https://docs.deuna.com/docs/api-key
DEUNA_PRIVATE_API_KEY=""00cdd7f62063c..."
ENVIRONMENT= "Staging..."
BASE_URL= "https://localhost:3000..."
```
