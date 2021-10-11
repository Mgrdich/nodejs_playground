const cluster = require('cluster');
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

    /***
     * @description overclocking the event loop
     * Thus blocking the server
     * @param duration {Number}
     * */
    function doWorkOnCpu(duration) {
        const start = Date.now()
        while (Date.now() - start < duration) {}
    }

    app.get('/', function (req, res) {
        doWorkOnCpu(5000);
        res.send('Hi there');
    });

    app.get('/fast', function (req, res) {
        res.send('Fast route');
    });

    app.listen(8080);
}



