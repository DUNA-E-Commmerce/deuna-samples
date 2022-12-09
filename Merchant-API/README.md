<br />
<p align="center">
  <a href="https://deuna.com/">
    <img src="https://uploads-ssl.webflow.com/62e806ed6cc7b20ca6dc2b93/62fca876ea0f2668b1c21b8b_deuna.png" width="318px" alt="deuna logo" />
  </a>
</p>
<br />

# MERCHANT API
Son un conjunto de API REST de tipo POST, PATCH, y DELETE que permitirá comunicar bidireccionalmente tu servidor del comercio donde está el modelo de negocio con el servidor de DEUNA donde están guardadas las configuraciones previamente realizadas en el Admin del comercio.

## Funcionalidades

Provee 6 endpoints:

1. `/tokenizeOrder` para tokenizar una orden.
2. `/getShippingMethods/:order_id` para obtener los métodos de envio.
3. `/setShippingMethod/:order_id/:code_method` para actualizar los métodos de envio.
4. `/applyCoupons/:order_id` para aplicar un cupon.
5. `/removeCoupons/:order_id/code/:coupon_code` para remover un cupon.
6. `/notify` para notificar la orden.

## Contenido
Este repositorio incluye ejemplos de implmentar el merchant API en:

 1. [Node.js](./node/) 

## Estructura del Repositorio

```
Merchant-API
│___README.md
│
└───Node
    └───api
    └───network
    └───store
    └───.env.sample
    └───README.md

```

## Requisitos previos
Para usar la API Merchant debemos tener antes la API KEY privada. [Puedes obtenerlas aquí](https://docs.deuna.com/v2.0/docs/api-key)
