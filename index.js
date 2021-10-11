const cluster = require('cluster');
const express = require("express");

if (cluster.isMaster) {
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
} else {
    // child mode

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



