<br />
<p align="center">
  <a href="https://deuna.com/">
    <img src="https://files.readme.io/e32846c-small-logodeve.png" width="318px" alt="deuna logo" />
  </a>
</p>

<h2 align="center">Widget checkout</h2>
<p align="center">Es una interfaz gr谩fica ya programada con todo lo necesario para ser usada de manera inmediata.</p>
<br />

<p align="center" style="background: white;">
  <a href="https://docs.deuna.com/docs/primeros-pasos-widget">
    <img src="https://files.readme.io/6d58d77-Group_10.svg" alt="DEUNA Checkout" class="img-fluid mb-3">
  </a>
</p>

<p align="center">
Este repositorio es solamente para nuestra  <a href="https://docs.deuna.com/" style="color: #f50;">documentaci贸n</a>.馃憣
</p>
<br />

# 驴Qu茅 controla el widget?
* Toda la experiencia de compra final del cliente.
* Integra nuestros servicios de procesamiento de pago.
* Medidas antifraude.
* Tokenizaci贸n de orden.
* Notificaci贸n de estados mediante Webhook.
* Comunicaci贸n directa con tu servidor mediante el Merchant API.
# Requisitos para documentaci贸n
Si est谩s revisando documentaci贸n y plantillas de prueba para la integraci贸n con el widget, lo siguiente es requerido:
* [NodeJS](https://nodejs.org/en/) >=14.19.1 <=18.x.x
* [ReactJS](https://reactjs.org/) =18.x
* [NPM](https://nodejs.org/en/) >=6.x
* [Yarn](https://yarnpkg.com/) >= 1.22.x

# Estructura del proyecto


```
project
鈹俖__README.md
鈹?
鈹斺攢鈹?鈹?widget-checkout
    鈹斺攢鈹?鈹?checkout-widget-react
        鈹斺攢鈹?鈹?public           
        鈹斺攢鈹?鈹?src
            鈹斺攢鈹?鈹?assets
            鈹斺攢鈹?鈹?App.js            # interfaz principal
            鈹斺攢鈹?鈹?mockData.json     # payload de ejemplo   
        鈹斺攢鈹?鈹?.env                  # archivo con variables
```

# Implementar widget con reactJS

## Requerimientos

- API key

## Proceso de Instalaci贸n:

1. Obt茅n tu llave privada [Documentaci贸n](https://docs.deuna.com/docs/api-key)
2. Agrega la variable `DEUNA_PRIVATE_API_KEY` en el archivo `.env` 
3. Agrega la variable `ENVIRONMENT` al archivo `.env` 
4. Agrega la variable `BASE_URL` al archivo `.env` 
5. Ejecutar `npm install` o `yarn install` 
6. Ejecutar `npm start`, ejecutar谩 la aplicaci贸n en modo desarrollador.
Abrir http://localhost:3000 en el navegador.

Aseg煤rate de configurar estas variables en `.env` que deber谩 encontrarse en la ra铆z del proyecto. Deber铆a incluir las siguientes variables:

```yaml
# DEUNA API keys - see https://docs.deuna.com/docs/api-key
DEUNA_PRIVATE_API_KEY=""00cdd7f62063c..."
ENVIRONMENT= "Staging..."
BASE_URL= "https://localhost:3000..."
```
