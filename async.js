const https = require('https');

const start = Date.now();

https.request('https://www.google.com', function(res) {
    
    res.on('data',function(){

    });

    res.on('end',function(){
        console.log(Date.now() - start);
    });
}).end();
