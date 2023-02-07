<br />
<p align="center">
  <a href="https://deuna.com/">
    <img src="https://files.readme.io/e32846c-small-logodeve.png" width="318px" alt="deuna logo" />
  </a>
</p>

<h2 align="center">Widget checkout</h2>
<p align="center">Es una interfaz gráfica ya programada con todo lo necesario para ser usada de manera inmediata.</p>
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
* Medidas antifraude.
* Tokenización de orden.
* Notificación de estados mediante Webhook.
* Comunicación directa con tu servidor mediante el Merchant API.
# Requisitos para documentación
Si estás revisando documentación y plantillas de prueba para la integración con el widget, lo siguiente es requerido:
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

- API key

## Proceso de Instalación:

1. Obtén tu llave privada [Documentación](https://docs.deuna.com/docs/api-key)
2. Establecer las variables de entorno en el archivo `.env`, en el repositorio encontraras el archivo `.env.sample` como ejemplo. El `.env` debe contener la siguiente información:

```yaml
# DEUNA API keys - see https://docs.deuna.com/docs/api-key
REACT_APP_PUBLIC_API_KEY_DEUNA=""00cdd7f62063c..."
REACT_APP_BASE_URL= "staging..."
REACT_APP_BASE_URL= "servicio de backend para tokenizar la orden"
```

3. Ejecutar `npm install` 
4. Ejecutar `npm start`, ejecutará la aplicación en modo desarrollador.
Abrir http://localhost:3000 en el navegador.
5. Modificar el `order_id`  con un valor aleatorio, ya sea en el archivo `jEditor.js` o antes de tokenizar la orden en la interfaz. 
