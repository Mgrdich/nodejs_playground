const https = require('https');
const crypto = require('crypto');

const start = Date.now();


function doRequest() {
    https.request('https://www.google.com', function(res) {
   
        res.on('data',function(){});

        res.on('end',function(){
            console.log(Date.now() - start);
        });

    }).end();
}


function doHash() {
    crypto.pbkdf2('a','b',100000, 512, 'sha512',() => {
        console.log('1:', Date.now() - start);
    });
}

