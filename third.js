const requestIp = require('request-ip');
const express = require('express')
const app = express();

app.listen(3021, '192.168.0.106', () => {
    console.log('listening...')
})
const ipMiddleware = function (req, res, next) {
    console.log(req)
    next();
};
app.get('/ip', ipMiddleware)
