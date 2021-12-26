var fetch = require('node-fetch');
var redis = require('redis');
var client = redis.createClient();
client.connect();

const baseURL = 'https://remotive.io/api/remote-jobs';

async function fetchRemotive() {
    var allJobs;

    // fetch all jobs
    const response = await fetch(baseURL);
    await response.json()
        .then(data => {
                allJobs = data.jobs;
            })
        .catch(console.error);
    console.log('all jobs count: ', allJobs.length);

    // filter algo 
    const jrJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase();

        if (
            jobTitle.includes('senior') || 
            jobTitle.includes('sr.') || 
            jobTitle.includes('manager') || 
            jobTitle.includes('architect')
        ) {
            return false;
        }
        
        return true;
    })
    console.log('junior jobs count: ', jrJobs.length);

    // set in redis
    var success;
    success = await client.set('remotive-all', 
        JSON.stringify(allJobs));
    console.log('setting allJobs in redis: ', {success});

    success = await client.set('remotive-junior', 
        JSON.stringify(jrJobs));
    console.log('setting jrJobs in redis: ', {success});
}

fetchRemotive();

module.exports = fetchRemotive;