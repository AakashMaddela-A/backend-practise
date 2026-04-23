let os = require("os");
console.log(os.platform()); //win32
console.log(os.arch()); //x64
console.log(os.cpus().length + "core"); //4 core
console.log(os.freemem()); //1420595200 bytes
