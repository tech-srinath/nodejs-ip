var express = require('express');

var app = express(),

    useragent = require('express-useragent');

app.get('/', function (req, res) {

    var source = req.headers['user-agent'];

    var info = useragent.parse(source);
    console.log(info)
    var device = "";

    if (info['isDesktop'] == true) { device = "desktop" }

    else if (info['isTablet'] == true) { device = "tablet" }

    else if (info['isiPad'] == true) { device = "iPad" }

    else if (info['isiPod'] == true) { device = "iPod" }

    else if (info['isiPhone'] == true) { device = "iPhone" }

    else if (info['isAndroid'] == true) { device = "iAndroid" }

    else if (info['isBlackberry'] == true) { device = "Blackberry" }

    else { device = "something else" }

    res.send(device)
})

app.listen(3000, '192.168.0.106');
console.log("Listening to Port 3000");