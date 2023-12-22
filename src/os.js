const os = require('node:os');
console.log(os.arch());
console.log(os.availableParallelism());
console.log(os.machine());
console.log(os.networkInterfaces());
console.log(os.networkInterfaces()['Wi-Fi'][0].address);
console.log(os.platform());