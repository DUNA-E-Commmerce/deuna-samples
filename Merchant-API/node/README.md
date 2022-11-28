# Implement merchant api

An [Express server](http://expressjs.com) implementation

## Requirements

- Node v10+
- Configured .env file

## How to run

1. Confirm `.env` configuration

Ensure the API keys are configured in `.env` in this directory. It should include the following keys:

```yaml
# DEUNA API keys - see https://docs.deuna.com/docs/api-key
DEUNA_PRIVATE_API_KEY=sk_test...
```

2. Install dependencies and start the server

```
npm install
npm start
```

3. You should deploy the application in a service cloud to build and run app. (example render, in this case need to link your github repository with render).