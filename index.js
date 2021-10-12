const cluster = require('cluster');
const crypto = require('crypto');
const totalCPUs = require('os').cpus().length;


if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }
} else {
    // child mode
    console.log(`Child  ${process.pid} is running`);

    const express = require('express');
    const app = express();

    app.get('/', function (req, res) {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hi there');
        });
    });

    app.get('/fast', function (req, res) {
        res.send('Fast route');
    });

    app.listen(8080);
}



