<br />
<p align="center">
  <a href="https://deuna.com/">
    <img src="https://uploads-ssl.webflow.com/62e806ed6cc7b20ca6dc2b93/62fca876ea0f2668b1c21b8b_deuna.png" width="318px" alt="deuna logo" />
  </a>
</p>
<br />

# SDK
Es una herramienta que te permite adaptar los métodos del checkout a tu comercio y tener un flujo de compra personalizado. 
# Contenido
Este repositorio incluye ejemplos de 2 tipos de integración del SDK:

 1. [Cuando se procesa la orden en backend](./v.2.0.0/example-1-order-processor-backend) (node.js y react).
 2. [Cuando se procesa la orden en frontend](./v.2.0.0/example-2-order-processor-frontend/) (react).

En el ejemplo 1 se realizan los siguientes procesos:

| Procesos| Frontend | Backend |
| --- | --- | --- |
| Inicializar checkout |  ✅  |  |
| Obtener credenciales |  ✅  |  |
| Generar payload para tokenizar orden |  ✅  |  |
| Generar payload para procesar pago |  ✅  |  |
| Almacenar las credenciales |  |  ✅  |
| Instanciar checkout |  |  ✅  |
| Tokenizar orden |  |  ✅  |
| Obtener métodos de pago |  |  ✅  |
| Procesar pago |  |  ✅  |

En el ejemplo 2 se realizan los siguientes procesos:

| Procesos| Frontend | Servicio externo |
| --- | --- | --- |
| Inicializar checkout |  ✅  |  |
| Generar payload para tokenizar orden |  ✅  |  |
| Generar payload para procesar pago |  ✅  |  |
| Tokenizar orden |  |  ✅  |
| Obtener métodos de pago |  ✅  |  |
| Procesar pago |  ✅  |  |

# Estructura del Repositorio

```
SDK
│___README.md
│
└───v.2.0.0
    └───example-1-order-processor-backend
    │   └───node.js
    │   └───react  
        └───README.md
    └───example-2-order-processor-frontend
        └───react 
        └───README.md
```

# Requisitos previos
Para inicializar el SDK debemos tener antes la API KEY pública y privada. [Puedes obtenerlas aquí](https://docs.deuna.com/v2.0/docs/api-key)

# Instalación

```sh
npm install --save @deuna/checkout-sdk
```