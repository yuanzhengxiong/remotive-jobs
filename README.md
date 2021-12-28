1. clone repository
2. `npm install`
3. `redis-cli`
4. `node worker/tasks/fetch-remotive.js` to fetch once (or, `node worker/index.js` to start a cron job which fetches the data every minute)
5. `node api/index.js` to start api
6. `yarn start` under folder `client` to start server
