# Implement merchant api

An [Express server](http://expressjs.com) implementation

## Requirements

- Node v10+
- Configured .env file
- Firebase.

## How to run

1. Confirm `.env` configuration

Ensure the API keys are configured in `.env` in this directory. It should include the following keys:

```yaml
# DEUNA API keys - see https://docs.deuna.com/docs/api-key
DEUNA_PRIVATE_API_KEY=sk_test...
# FIREBASE file credentials - see https://firebase.google.com/docs/admin/setup
GOOGLE_APPLICATION_CREDENTIALS="home/..."
```

2. Install dependencies and start the server

```
npm install
npm start
```
