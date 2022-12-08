<br />
<p align="center">
  <a href="https://deuna.com/">
    <img src="https://uploads-ssl.webflow.com/62e806ed6cc7b20ca6dc2b93/62fca876ea0f2668b1c21b8b_deuna.png" width="318px" alt="deuna logo" />
  </a>
</p>
<br />

<hr />

<h3 align="center">UNA INTEGRACIÓN QUE ACCEDE A TODO EL ECOSISTEMA</h3>
<p align="center">Todas las integraciones que tu e-commerce necesita unificadas en DEUNA Checkout (Pagos crédito/débito, pagos alternativos, analítica, fraude y mucho más).</p>
<br />

<p align="center" style="background: #fff;">
  <a href="https://docs.deuna.com/">
    <img src="https://images.getduna.com/nuevo-banner-homepage-docs.png" alt="DEUNA Checkout" class="img-fluid mb-3">
  </a>
</p>

<p align="center">
Este repositorio es solamente para nuestra  <a href="https://docs.deuna.com/" style="color: #f50;">documentación</a>.👌
</p>
<br />

# Requisitos para documentación
Se requiere lo siguiente si estas revisando documentación y plantillas de prueba para la integración con nuestros productos:

* [NodeJS](https://nodejs.org/en/) >=14.19.1 <=18.x.x
* [ReactJS](https://reactjs.org/) =18.x
* [NPM](https://nodejs.org/en/) >=6.x
* [Yarn](https://yarnpkg.com/) >= 1.22.x


# Nuestros productos
## Sdk
El SDK es un de kit desarrollo para poder integrar tu comercio con la plataforma de DEUNA y de esta forma gestionar al usuario en sus pagos, direcciones, tarjetas mucho mas.

## Widget checkout
Es una interfaz ya programada con todo lo necesario para ser usada de manera inmediata.


## Merchant api
on un conjunto de API REST de tipo POST, PATCH, y DELETE que permitirá comunicar bidireccionalmente tu servidor del comercio donde está el modelo de negocio con el servidor de DEUNA donde están guardadas las configuraciones previamente realizadas en el Admin del comercio.

# Estructura del proyecto


```
project
│___README.md
│
└───merchant-api
│   └───node
│
└───sdk
│   └───v.2.0.0
│       └───example-1-order-processor-backend
│       └───example-2-order-processor-frontend
│
└───widget-checkout
    └───checkout-widget-js
    └───checkout-widget-react
    └───checkout-widget-react-ts
```
