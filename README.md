This is a full-stack web application which can shows a list of remotive jobs. The data is collected from https://remotive.io/. To run it on your local machine, please follow the folowing steps:

1. clone repository
2. `cd remotive-jobs`
3. `npm install`
4. `cd client`
5. `npm install`
6. `cd ..`
7. `redis-cli`
8. `node worker/tasks/fetch-remotive.js` to fetch once (or, `node worker/index.js` to start a cron job which fetches the data every minute)
9. `node api/index.js` to start api
10. `cd client`
11. `yarn start` or `npm start`
