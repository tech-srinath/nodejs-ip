var http = require('http');
var path = require('path');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var userName = process.env['USERPROFILE'].split(path.sep)[2];
    var computerName = process.env['COMPUTERNAME'];
    var loginId1 = path.join("domainName", userName);
    var loginId2 = path.join("computerName", computerName);

    res.write(loginId1 + '<br>');
    res.write(loginId2 + '<br>');

    res.end();

}).listen(3000, '192.168.0.106');
console.log("Listening to Port 3000");