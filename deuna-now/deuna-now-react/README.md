# Implementación de DEUNA-NOW con react.js

## Descripción:
la App de react se encargada de tokenizar la orden, configurar el payment-widget, renderizar el payment widget y procesar el pago.


Los siguientes procesos se realizan en el frontend:
| Procesos| Frontend |  |
| --- | --- | --- |
| Tokenizar la orden |  ✅  |  |
| Inicializar widget-payment |  ✅  |  |
| Procesar el pago |  ✅  |  |

# Diagrama de Flujo 
<br />
<p align="center">
    <img src="https://user-images.githubusercontent.com/6935006/208737761-8b525835-5e8f-4e3e-aa96-45419c1ab75d.png" align="" alt="" caption="" height="auto" title="" width="auto" loading="lazy">
</p>
<br />
## Requerimientos

- React
- Configurar el archivo .env 
- API KEY pública. [Puedes obtenerlas aquí ](https://docs.deuna.com/v2.0/docs/api-key)

## Proceso de Instalación:

1. Establecer las variables de entorno en el archivo `.env`, en el repositorio encontrarás el archivo `.env.sample` como ejemplo. El `.env` debe contener la siguiente información:

```yaml
# DEUNA API keys - see https://docs.deuna.com/docs/api-key
REACT_APP_PUBLIC_API_KEY_DEUNA= <Reemplazar con tu llave pública>
REACT_APP_ENVIRONMENT= <staging o production>
```

2. Instalar Dependencias y correr el servidor.

```
npm install
npm start
```

3. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador de internet:

<br />
<p align="center">
    <img src="https://user-images.githubusercontent.com/6935006/208737618-70681638-7d96-4361-ad1c-4d332fd1be29.png"  alt="Vista previa" />
</p>
<br />

4. Al hacer click en "Deuna-now" se deben renderizar los métodos de pago de tu comercio:

<br />
<p align="center">
    <img src="https://user-images.githubusercontent.com/6935006/208737657-40ba6592-3481-454b-8082-93e10962b741.png"  alt="Vista previa" />
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
│   │   └───payload.json
│   └───App.jsx 
└───README.md
```
