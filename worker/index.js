var CronJob = require('cron').CronJob;

const fetchRemotive = require('./tasks/fetch-remotive');

var job = new CronJob('* * * * *', fetchRemotive, null, true, 'America/Los_Angeles');
 
job.start();