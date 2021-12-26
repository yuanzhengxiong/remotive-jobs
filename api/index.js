const express = require('express');
const app = express();
const port = 3001;

var redis = require('redis');
const client = redis.createClient();
client.connect();

app.get('/jobs', async (req, res) => {
    const jrJobs = await client.get('remotive-junior');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.send(jrJobs);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});