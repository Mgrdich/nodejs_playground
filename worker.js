const crypto = require('crypto');
const express = require('express');
const {Worker} = require('worker_threads');

const app = express();

app.get('/', function (req, res) {
   const worker = new Worker('./my_worker.js');

   worker.onmessage = function (myCounter) {
       res.send('' + myCounter);
   };

    // worker.postMessage({});
});

app.get('/fast', function (req, res) {
    res.send('Fast route');
});

app.listen(8080);

