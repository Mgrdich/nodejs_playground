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


doRequest();

fs.readFile('multitask.js','utf8',function(){
    console.log('FS:',Date.now() - start);
});

doHash()
doHash()
doHash()
doHash()
doHash()
