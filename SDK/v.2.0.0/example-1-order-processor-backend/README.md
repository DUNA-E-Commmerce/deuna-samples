<br />
<p align="center">
  <a href="https://deuna.com/">
    <img src="https://uploads-ssl.webflow.com/62e806ed6cc7b20ca6dc2b93/62fca876ea0f2668b1c21b8b_deuna.png" width="318px" alt="deuna logo" />
  </a>
</p>
<br />

# SDK: Ejemplo procesando la orden en backend

Para este ejemplo se utilizará react para el frontend y node.js para el backend.

# Descripción

| Procesos| Frontend | Backend |
| --- | --- | --- |
| Inicializar checkout |  ✅  |  |
| Obtener credenciales |  ✅  |  |
| Generar payload para tokenizar la orden |  ✅  |  |
| Generar payload para procesar el pago |  ✅  |  |
| Almacenar las credenciales |  |  ✅  |
| Instanciar el checkout |  |  ✅  |
| Tokenizar la orden |  |  ✅  |
| Obtener métodos de pago |  |  ✅  |
| Procesar pago |  |  ✅  |

# Diagrama de Flujo 
<br />
<p align="center">
    <img src="https://files.readme.io/a908f9a-ejemplo_1_sdk.png" align="" alt="" caption="" height="auto" title="" width="auto" loading="lazy">
</p>
<br />

# Requisitos previos
Para inicializar el SDK debemos tener antes la API KEY pública y privada.[¿Cómo obtener mis API Keys?](https://docs.deuna.com/v2.0/docs/api-key)


# Estructura del Repositorio

```
Example-1
│___README.md
│
└───nodejs-sdk
│   └───api
│   └───network
│   └───store
│   └───.env.sample
│   └───README.md
│
└───react-sdk
    └───public
    └───src
    └───.env.sample
    └───README.md
```