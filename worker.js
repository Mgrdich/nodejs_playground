const crypto = require('crypto');
const express = require('express');
const {Worker} = require('worker_threads');

const app = express();

app.get('/', function (req, res) {
   const worker = new Worker(function (){
      // context closure is not available

       this.onmessage = function (param) {
           // Computationally expensive
           let counter = 0;
           while (counter <1e9) {
               counter++
           }
           postMessage(counter);
       };

   });

   worker.onmessage = function (myCounter) {
       console.log(myCounter);
   };

    worker.postMessage('');
});

app.get('/fast', function (req, res) {
    res.send('Fast route');
});

app.listen(8080);

