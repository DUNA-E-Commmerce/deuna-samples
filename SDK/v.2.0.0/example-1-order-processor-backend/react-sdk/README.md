# Implementación del sdk con react.js

## Descripción:
El frontend esta encargado de inicializar el checkout, obtener las credenciales correspondientes y enviar esta información al backend asi como los payload para tokenizar la orden y procesar el pago.

Los siguientes procesos se realizan en el frontend:
| Procesos| Frontend | Backend |
| --- | --- | --- |
| Inicializar checkout |  ✅  |  |
| Obtener credenciales |  ✅  |  |
| Generar payload para tokenizar la orden |  ✅  |  |
| Generar payload para procesar el pago |  ✅  |  |

## Requerimientos

- React
- Configurar el archivo .env 
- API KEY pública y privada. [Puedes obtenerlas aquí ](https://docs.deuna.com/v2.0/docs/api-key)

## Proceso de Instalación:

1. Establecer las variables de entorno en el archivo `.env`, en el repositorio encontraras el archivo `.env.sample` como ejemplo. El `.env` debe contener la siguiente información:

```yaml
# DEUNA API keys - see https://docs.deuna.com/docs/api-key
DEUNA_PUBLIC_API_KEY= <Reemplazar con tu llave pública>
URL_SERVICES= <Reemplazar con la Dirección donde este corriendo tu servico de backend ejemplo https://localhost:3001>
```

2. Instalar Dependencias y correr el servidor.

```
npm install
npm start
```

3. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador de internet:

<br />
<p align="center">
    <img src="https://user-images.githubusercontent.com/6935006/203172738-ef8e8a60-73a7-4cb6-bf45-2bffd3310cc2.png"  alt="Vista previa" />
</p>
<br />

## Estructura de Carpetas:
```
react-sdk
│___public
│
└───src
│   └───assets 
│   └───mock
│   │   └───orderPayload.json
│   │   └───paymentPayload.json 
│   └───services
│   │    └───merchant.js (servicio para comunicarse con el bacend) 
│   └───App.jsx 
└───README.md
```
