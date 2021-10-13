
const crypto = require('crypto');


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




