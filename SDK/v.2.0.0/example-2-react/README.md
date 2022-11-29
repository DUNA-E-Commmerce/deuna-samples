# Implement checkout widget in react

## Requirements

- Api key
- [nodejs](https://nodejs.org/en/)

## How to run

1. Get secret access token [visit](https://docs.deuna.com/docs/api-key)
2. Create .env file 
3. Set public access token in .env file 
4. Set enviroment in .env file 
5. Set base url in .env file 
6. run `npm install` or `yarn install`
7. run `npm run dev` or `yarn dev`, Runs the app in the development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

Ensure the API key is configured in `.env` in root directory. It should include the following key:

```yaml
# DEUNA API keys - see https://docs.deuna.com/docs/api-key
DEUNA_PUBLIC_API_KEY= "00cdd7f62063c..."
ENVIRONMENT= "Staging..."
BASE_URL= "https://localhost:3000/..."
```