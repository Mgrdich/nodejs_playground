const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();


function doRequest() {
    https.request('https://www.google.com', function(res) {
   
        res.on('data',function(){});

        res.on('end',function(){
            console.log('http',Date.now() - start);
        });

    }).end();
}


function doHash() {
    crypto.pbkdf2('a','b',100000, 512, 'sha512',() => {
        console.log('doHash:', Date.now() - start);
    });
}


// this does not work with the thread pool
doRequest();

// this get assigned to the thread pool but it geyt switched
// because of the thread pool expectation
// so the other hash take its place
fs.readFile('multitask.js','utf8',function(){
    console.log('FS:',Date.now() - start);
});

doHash()
doHash()
doHash()
doHash()
