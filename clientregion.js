const request = require('request')
const express = require('express')
const app = express();
const http = require('http')
app.listen(3000, '192.168.0.106', () => {
    console.log('listening!')
})

app.get('/', (req, res, next) => {
    console.log(req.ip)
    console.log(req.method)
    console.log(req.protocol)
    console.log(req.hostname)
    console.log(req.path)
    console.log(req.url)
    console.log(req.socket)
    // request('http://ipinfo.io', function (error, res, body) {
    //     var ipuser = JSON.parse(body)
    //     console.log(ipuser)
    //     console.log(http.METHODS); console.log(req.ip)
    // })
})


