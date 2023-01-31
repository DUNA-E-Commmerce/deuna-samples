<br />
<p align="center">
  <a href="https://deuna.com/">
    <img src="https://uploads-ssl.webflow.com/62e806ed6cc7b20ca6dc2b93/62fca876ea0f2668b1c21b8b_deuna.png" width="318px" alt="deuna logo" />
  </a>
</p>
<br />

# SDK: Ejemplo procesando la orden en frontend

Para este ejemplo se utilizará react para el frontend.

# Descripción

| Procesos| Frontend | Servicio DEUNA |
| --- | --- | --- |
| Inicializar checkout |  ✅  |  |
| Generar payload para tokenizar la orden |  ✅  |  |
| Generar payload para procesar el pago |  ✅  |  |
| Tokenizar la orden |  |  ✅  |
| Obtener métodos de pago |  ✅  |  |
| Procesar pago |  ✅  |  |

# Diagrama de Flujo 
<br />
<p align="center">
    <img src="https://files.readme.io/d53fc1a-Flujos_MerchantAPI_y_CheckoutAPI_-_Flujos_metodos_SDK__2.png" align="" alt="" caption="" height="auto" title="" width="auto" loading="lazy">
</p>
<br />



# Requisitos previos
- React
- Configurar el archivo .env 
- API KEY pública y privada. [Puedes obtenerlas aquí ](https://docs.deuna.com/v2.0/docs/api-key)


## Proceso de Instalación:

1. Establecer las variables de entorno en el archivo `.env`, en el repositorio encontraras el archivo `.env.sample` como ejemplo. El `.env` debe contener la siguiente información:

```yaml
# DEUNA API keys - see https://docs.deuna.com/docs/api-key
VITE_DEUNA_PUBLIC_API_KEY= <Reemplazar con tu llave pública>
VITE_ENVIRONMENT=<staging|production>
```

2. Modificar el `order_id`  con un valor aleatorio, ya sea en el archivo `mockOrder.json` o antes de tokenizar la orden en la interfaz.

3. Instalar Dependencias y correr el servidor.

```
yarn
yarn dev
```

4. Abrir [http://localhost:5173](http://localhost:5173) en tu navegador de internet:

<br />
<p align="center">
    <img src="https://user-images.githubusercontent.com/112917159/203379196-a942e0e0-36f0-4112-9255-6fcb7ccabad5.png"  alt="Vista previa" />
</p>
<br />

# Estructura del Repositorio

```
Example-2
│
│___public
│
└───src
│   └───assets 
│   └───mock
│   │   └───orderPayload.json
│   │   └───paymentPayload.json  
│   └───App.jsx 
└───README.md
```