# Implementación del Merchant API con node.js

## Descripción:
El servidor provee 6 endpoints:

1. `/tokenizeOrder` para tokenizar una orden.
2. `/getShippingMethods/:order_id` para obtener los métodos de envio.
3. `/setShippingMethod/:order_id/:code_method` para actualizar los métodos de envio.
4. `/applyCoupons/:order_id` para aplicar un cupon.
5. `/removeCoupons/:order_id/code/:coupon_code` para remover un cupon.
6. `/notify` para notificar la orden.

## Requerimientos

- Node v10+
- Configurar el archivo .env 
- API KEY pública y privada. [Puedes obtenerlas aquí ](https://docs.deuna.com/v2.0/docs/api-key)

## Proceso de Instalación:

1. Establecer las variables de entorno en el archivo `.env`, en el repositorio encontraras el archivo `.env.sample` como ejemplo. El `.env` debe contener la siguiente información:

```yaml
# DEUNA API keys - see https://docs.deuna.com/docs/api-key
DEUNA_PRIVATE_API_KEY=<Reemplazar con llave privada>
API_PORT = <Reemplazar con el puerto que uses>
URL_BASE=<Reemplazar con los Dirección del Merchant API>

```

2. Instalar Dependencias.

```
npm install

```
3. Desplegar el servicio en la nube.
Puedes desplegar la aplicación en un servicio de la nube, por ejemplo [render](https://render.com), en este caso necesitas vincular tu repositorio de github con render.

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
└───mock
│   └───coupons.js (lista de cupones validos)
│   └───shippingMethods.js (lista de métodos de envío)
└───README.md
```
