const address = require('address')

address.ip();   // '192.168.0.2'
address.ipv6(); // 'fe80::7aca:39ff:feb0:e67d'
address.mac(function (err, addr) {
    console.log(addr); // '78:ca:39:b0:e6:7d'
});
// address.dns(function (err, addrs) {
//     console.log(addrs);
//     // ['10.13.2.1', '10.13.2.6']
// });
address(function (err, addrs) {
    console.log(`${addrs.ip}\n${addrs.ipv6}\n${addrs.mac}`);
    // '192.168.0.2', 'fe80::7aca:39ff:feb0:e67d', '78:ca:39:b0:e6:7d'
});
// var path = require('path');
// var userName = process.env['USERPROFILE'].split(path.sep)[2];
// var computerName = process.env['COMPUTERNAME'];
// var loginId1 = path.join("domainName",userName);
// var loginId2 = path.join("computerName",computerName);

// console.log(loginId1);
// console.log(loginId2);