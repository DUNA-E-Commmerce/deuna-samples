# Implementación del sdk con node.js

## Descripción:
El servidor provee 3 endpoints:
1. `/setFraudId/:orderId` para guardar las credenciales de FraudId.
2. `/tokenizeOrder/:orderId` para tokenizar una orden.
3. `/processPayment/:orderId` para procesar un pago.

Los siguientes procesos se realizan en el backend:
| Procesos| Frontend | Backend |
| --- | --- | --- |
| Almacenar las credenciales |  |  ✅  |
| Instanciar checkout |  |  ✅  |
| Tokenizar la orden |  |  ✅  |
| Obtener métodos de pago |  |  ✅  |
| Procesar pago |  |  ✅  |

## Requerimientos

- Node v10+
- Configurar el archivo .env 
- API KEY pública y privada. [Puedes obtenerlas aquí ](https://docs.deuna.com/v2.0/docs/api-key)

## Proceso de Instalación:

1. Establecer las variables de entorno en el archivo `.env`, en el repositorio encontraras el archivo `.env.sample` como ejemplo. El `.env` debe contener la siguiente información:

```yaml
# DEUNA API keys - see https://docs.deuna.com/docs/api-key
DEUNA_PRIVATE_API_KEY=<Reemplazar con llave privada>
DEUNA_PUBLIC_API_KEY=<Reemplazar con tu llave pública>
API_PORT = <Reemplazar con el puerto que uses>
ENVIRONMENT=<staging|production>
```

2. Instalar Dependencias y correr el servidor.

```
npm install
npm start
```


## Estructura de Carpetas:
```
Node-sdk
│___api
│   └───index.js (Enrutador)
│   └───controller.js (Lógica del negocio)
└───network
│   └───response.js (establece un formato para las respuestas)
│
└───store
│   └───db.js (simula una base de datos)
└───README.md
```

